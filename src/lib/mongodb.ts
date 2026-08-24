import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI 환경 변수가 설정되어 있지 않습니다.");
}

const uri: string = process.env.MONGODB_URI;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function connect(): Promise<MongoClient> {
  const promise = new MongoClient(uri).connect();
  // 연결 실패 시 캐시를 비워서 다음 요청이 재시도하도록 한다.
  promise.catch(() => {
    if (global._mongoClientPromise === promise) {
      global._mongoClientPromise = undefined;
    }
  });
  return promise;
}

export function getMongoClient(): Promise<MongoClient> {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = connect();
    }
    return global._mongoClientPromise;
  }
  return connect();
}
