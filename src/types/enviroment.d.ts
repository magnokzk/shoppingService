export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CRYPTO_SALT   : string
      JWT_SECRET    : string
      HOST          : string
      PORT          : number
      DB_USERNAME   : string
      DB_PASSWORD   : string
      DB_NAME       : string
    }
  }
}