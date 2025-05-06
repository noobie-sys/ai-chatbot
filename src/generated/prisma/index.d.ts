
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Domain
 * 
 */
export type Domain = $Result.DefaultSelection<Prisma.$DomainPayload>
/**
 * Model ChatBot
 * 
 */
export type ChatBot = $Result.DefaultSelection<Prisma.$ChatBotPayload>
/**
 * Model Billings
 * 
 */
export type Billings = $Result.DefaultSelection<Prisma.$BillingsPayload>
/**
 * Model HelpDesk
 * 
 */
export type HelpDesk = $Result.DefaultSelection<Prisma.$HelpDeskPayload>
/**
 * Model FilterQuestions
 * 
 */
export type FilterQuestions = $Result.DefaultSelection<Prisma.$FilterQuestionsPayload>
/**
 * Model CustomerResponses
 * 
 */
export type CustomerResponses = $Result.DefaultSelection<Prisma.$CustomerResponsesPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model ChatRoom
 * 
 */
export type ChatRoom = $Result.DefaultSelection<Prisma.$ChatRoomPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Plans: {
  STANDARD: 'STANDARD',
  PREMIUM: 'PREMIUM',
  ULTIMATE: 'ULTIMATE'
};

export type Plans = (typeof Plans)[keyof typeof Plans]


export const Role: {
  OWNER: 'OWNER',
  CUSTOMER: 'CUSTOMER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Plans = $Enums.Plans

export const Plans: typeof $Enums.Plans

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.domain`: Exposes CRUD operations for the **Domain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Domains
    * const domains = await prisma.domain.findMany()
    * ```
    */
  get domain(): Prisma.DomainDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatBot`: Exposes CRUD operations for the **ChatBot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatBots
    * const chatBots = await prisma.chatBot.findMany()
    * ```
    */
  get chatBot(): Prisma.ChatBotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.billings`: Exposes CRUD operations for the **Billings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Billings
    * const billings = await prisma.billings.findMany()
    * ```
    */
  get billings(): Prisma.BillingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.helpDesk`: Exposes CRUD operations for the **HelpDesk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HelpDesks
    * const helpDesks = await prisma.helpDesk.findMany()
    * ```
    */
  get helpDesk(): Prisma.HelpDeskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filterQuestions`: Exposes CRUD operations for the **FilterQuestions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FilterQuestions
    * const filterQuestions = await prisma.filterQuestions.findMany()
    * ```
    */
  get filterQuestions(): Prisma.FilterQuestionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerResponses`: Exposes CRUD operations for the **CustomerResponses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerResponses
    * const customerResponses = await prisma.customerResponses.findMany()
    * ```
    */
  get customerResponses(): Prisma.CustomerResponsesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatRoom`: Exposes CRUD operations for the **ChatRoom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatRooms
    * const chatRooms = await prisma.chatRoom.findMany()
    * ```
    */
  get chatRoom(): Prisma.ChatRoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Domain: 'Domain',
    ChatBot: 'ChatBot',
    Billings: 'Billings',
    HelpDesk: 'HelpDesk',
    FilterQuestions: 'FilterQuestions',
    CustomerResponses: 'CustomerResponses',
    Customer: 'Customer',
    ChatRoom: 'ChatRoom',
    ChatMessage: 'ChatMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "domain" | "chatBot" | "billings" | "helpDesk" | "filterQuestions" | "customerResponses" | "customer" | "chatRoom" | "chatMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Domain: {
        payload: Prisma.$DomainPayload<ExtArgs>
        fields: Prisma.DomainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DomainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DomainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          findFirst: {
            args: Prisma.DomainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DomainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          findMany: {
            args: Prisma.DomainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>[]
          }
          create: {
            args: Prisma.DomainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          createMany: {
            args: Prisma.DomainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DomainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>[]
          }
          delete: {
            args: Prisma.DomainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          update: {
            args: Prisma.DomainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          deleteMany: {
            args: Prisma.DomainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DomainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DomainUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>[]
          }
          upsert: {
            args: Prisma.DomainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DomainPayload>
          }
          aggregate: {
            args: Prisma.DomainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDomain>
          }
          groupBy: {
            args: Prisma.DomainGroupByArgs<ExtArgs>
            result: $Utils.Optional<DomainGroupByOutputType>[]
          }
          count: {
            args: Prisma.DomainCountArgs<ExtArgs>
            result: $Utils.Optional<DomainCountAggregateOutputType> | number
          }
        }
      }
      ChatBot: {
        payload: Prisma.$ChatBotPayload<ExtArgs>
        fields: Prisma.ChatBotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatBotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatBotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload>
          }
          findFirst: {
            args: Prisma.ChatBotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatBotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload>
          }
          findMany: {
            args: Prisma.ChatBotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload>[]
          }
          create: {
            args: Prisma.ChatBotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload>
          }
          createMany: {
            args: Prisma.ChatBotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatBotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload>[]
          }
          delete: {
            args: Prisma.ChatBotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload>
          }
          update: {
            args: Prisma.ChatBotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload>
          }
          deleteMany: {
            args: Prisma.ChatBotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatBotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatBotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload>[]
          }
          upsert: {
            args: Prisma.ChatBotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatBotPayload>
          }
          aggregate: {
            args: Prisma.ChatBotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatBot>
          }
          groupBy: {
            args: Prisma.ChatBotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatBotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatBotCountArgs<ExtArgs>
            result: $Utils.Optional<ChatBotCountAggregateOutputType> | number
          }
        }
      }
      Billings: {
        payload: Prisma.$BillingsPayload<ExtArgs>
        fields: Prisma.BillingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingsPayload>
          }
          findFirst: {
            args: Prisma.BillingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingsPayload>
          }
          findMany: {
            args: Prisma.BillingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingsPayload>[]
          }
          create: {
            args: Prisma.BillingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingsPayload>
          }
          createMany: {
            args: Prisma.BillingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingsPayload>[]
          }
          delete: {
            args: Prisma.BillingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingsPayload>
          }
          update: {
            args: Prisma.BillingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingsPayload>
          }
          deleteMany: {
            args: Prisma.BillingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BillingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingsPayload>[]
          }
          upsert: {
            args: Prisma.BillingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillingsPayload>
          }
          aggregate: {
            args: Prisma.BillingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBillings>
          }
          groupBy: {
            args: Prisma.BillingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillingsCountArgs<ExtArgs>
            result: $Utils.Optional<BillingsCountAggregateOutputType> | number
          }
        }
      }
      HelpDesk: {
        payload: Prisma.$HelpDeskPayload<ExtArgs>
        fields: Prisma.HelpDeskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HelpDeskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpDeskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HelpDeskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpDeskPayload>
          }
          findFirst: {
            args: Prisma.HelpDeskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpDeskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HelpDeskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpDeskPayload>
          }
          findMany: {
            args: Prisma.HelpDeskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpDeskPayload>[]
          }
          create: {
            args: Prisma.HelpDeskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpDeskPayload>
          }
          createMany: {
            args: Prisma.HelpDeskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HelpDeskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpDeskPayload>[]
          }
          delete: {
            args: Prisma.HelpDeskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpDeskPayload>
          }
          update: {
            args: Prisma.HelpDeskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpDeskPayload>
          }
          deleteMany: {
            args: Prisma.HelpDeskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HelpDeskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HelpDeskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpDeskPayload>[]
          }
          upsert: {
            args: Prisma.HelpDeskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HelpDeskPayload>
          }
          aggregate: {
            args: Prisma.HelpDeskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHelpDesk>
          }
          groupBy: {
            args: Prisma.HelpDeskGroupByArgs<ExtArgs>
            result: $Utils.Optional<HelpDeskGroupByOutputType>[]
          }
          count: {
            args: Prisma.HelpDeskCountArgs<ExtArgs>
            result: $Utils.Optional<HelpDeskCountAggregateOutputType> | number
          }
        }
      }
      FilterQuestions: {
        payload: Prisma.$FilterQuestionsPayload<ExtArgs>
        fields: Prisma.FilterQuestionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilterQuestionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterQuestionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilterQuestionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterQuestionsPayload>
          }
          findFirst: {
            args: Prisma.FilterQuestionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterQuestionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilterQuestionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterQuestionsPayload>
          }
          findMany: {
            args: Prisma.FilterQuestionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterQuestionsPayload>[]
          }
          create: {
            args: Prisma.FilterQuestionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterQuestionsPayload>
          }
          createMany: {
            args: Prisma.FilterQuestionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilterQuestionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterQuestionsPayload>[]
          }
          delete: {
            args: Prisma.FilterQuestionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterQuestionsPayload>
          }
          update: {
            args: Prisma.FilterQuestionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterQuestionsPayload>
          }
          deleteMany: {
            args: Prisma.FilterQuestionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilterQuestionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilterQuestionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterQuestionsPayload>[]
          }
          upsert: {
            args: Prisma.FilterQuestionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterQuestionsPayload>
          }
          aggregate: {
            args: Prisma.FilterQuestionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilterQuestions>
          }
          groupBy: {
            args: Prisma.FilterQuestionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilterQuestionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilterQuestionsCountArgs<ExtArgs>
            result: $Utils.Optional<FilterQuestionsCountAggregateOutputType> | number
          }
        }
      }
      CustomerResponses: {
        payload: Prisma.$CustomerResponsesPayload<ExtArgs>
        fields: Prisma.CustomerResponsesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerResponsesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerResponsesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerResponsesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerResponsesPayload>
          }
          findFirst: {
            args: Prisma.CustomerResponsesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerResponsesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerResponsesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerResponsesPayload>
          }
          findMany: {
            args: Prisma.CustomerResponsesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerResponsesPayload>[]
          }
          create: {
            args: Prisma.CustomerResponsesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerResponsesPayload>
          }
          createMany: {
            args: Prisma.CustomerResponsesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerResponsesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerResponsesPayload>[]
          }
          delete: {
            args: Prisma.CustomerResponsesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerResponsesPayload>
          }
          update: {
            args: Prisma.CustomerResponsesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerResponsesPayload>
          }
          deleteMany: {
            args: Prisma.CustomerResponsesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerResponsesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerResponsesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerResponsesPayload>[]
          }
          upsert: {
            args: Prisma.CustomerResponsesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerResponsesPayload>
          }
          aggregate: {
            args: Prisma.CustomerResponsesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerResponses>
          }
          groupBy: {
            args: Prisma.CustomerResponsesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerResponsesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerResponsesCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerResponsesCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      ChatRoom: {
        payload: Prisma.$ChatRoomPayload<ExtArgs>
        fields: Prisma.ChatRoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatRoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatRoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findFirst: {
            args: Prisma.ChatRoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatRoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          findMany: {
            args: Prisma.ChatRoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          create: {
            args: Prisma.ChatRoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          createMany: {
            args: Prisma.ChatRoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatRoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          delete: {
            args: Prisma.ChatRoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          update: {
            args: Prisma.ChatRoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          deleteMany: {
            args: Prisma.ChatRoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatRoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatRoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>[]
          }
          upsert: {
            args: Prisma.ChatRoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatRoomPayload>
          }
          aggregate: {
            args: Prisma.ChatRoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatRoom>
          }
          groupBy: {
            args: Prisma.ChatRoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatRoomCountArgs<ExtArgs>
            result: $Utils.Optional<ChatRoomCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    domain?: DomainOmit
    chatBot?: ChatBotOmit
    billings?: BillingsOmit
    helpDesk?: HelpDeskOmit
    filterQuestions?: FilterQuestionsOmit
    customerResponses?: CustomerResponsesOmit
    customer?: CustomerOmit
    chatRoom?: ChatRoomOmit
    chatMessage?: ChatMessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    domains: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domains?: boolean | UserCountOutputTypeCountDomainsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDomainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainWhereInput
  }


  /**
   * Count Type DomainCountOutputType
   */

  export type DomainCountOutputType = {
    helpdesk: number
    filterQuestions: number
    customer: number
  }

  export type DomainCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    helpdesk?: boolean | DomainCountOutputTypeCountHelpdeskArgs
    filterQuestions?: boolean | DomainCountOutputTypeCountFilterQuestionsArgs
    customer?: boolean | DomainCountOutputTypeCountCustomerArgs
  }

  // Custom InputTypes
  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DomainCountOutputType
     */
    select?: DomainCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeCountHelpdeskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HelpDeskWhereInput
  }

  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeCountFilterQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilterQuestionsWhereInput
  }

  /**
   * DomainCountOutputType without action
   */
  export type DomainCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    questions: number
    chatRoom: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | CustomerCountOutputTypeCountQuestionsArgs
    chatRoom?: boolean | CustomerCountOutputTypeCountChatRoomArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerResponsesWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountChatRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
  }


  /**
   * Count Type ChatRoomCountOutputType
   */

  export type ChatRoomCountOutputType = {
    message: number
  }

  export type ChatRoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    message?: boolean | ChatRoomCountOutputTypeCountMessageArgs
  }

  // Custom InputTypes
  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoomCountOutputType
     */
    select?: ChatRoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatRoomCountOutputType without action
   */
  export type ChatRoomCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    fullname: string | null
    clerkId: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullname: string | null
    clerkId: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullname: number
    clerkId: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullname?: true
    clerkId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullname?: true
    clerkId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullname?: true
    clerkId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    fullname: string
    clerkId: string
    type: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    clerkId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domains?: boolean | User$domainsArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    clerkId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    clerkId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullname?: boolean
    clerkId?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "clerkId" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    domains?: boolean | User$domainsArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      domains: Prisma.$DomainPayload<ExtArgs>[]
      subscription: Prisma.$BillingsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullname: string
      clerkId: string
      type: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    domains<T extends User$domainsArgs<ExtArgs> = {}>(args?: Subset<T, User$domainsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma__BillingsClient<$Result.GetResult<Prisma.$BillingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly fullname: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly type: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.domains
   */
  export type User$domainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    where?: DomainWhereInput
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    cursor?: DomainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billings
     */
    select?: BillingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billings
     */
    omit?: BillingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingsInclude<ExtArgs> | null
    where?: BillingsWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Domain
   */

  export type AggregateDomain = {
    _count: DomainCountAggregateOutputType | null
    _min: DomainMinAggregateOutputType | null
    _max: DomainMaxAggregateOutputType | null
  }

  export type DomainMinAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    userId: string | null
  }

  export type DomainMaxAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    userId: string | null
  }

  export type DomainCountAggregateOutputType = {
    id: number
    name: number
    icon: number
    userId: number
    _all: number
  }


  export type DomainMinAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    userId?: true
  }

  export type DomainMaxAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    userId?: true
  }

  export type DomainCountAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    userId?: true
    _all?: true
  }

  export type DomainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Domain to aggregate.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Domains
    **/
    _count?: true | DomainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DomainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DomainMaxAggregateInputType
  }

  export type GetDomainAggregateType<T extends DomainAggregateArgs> = {
        [P in keyof T & keyof AggregateDomain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDomain[P]>
      : GetScalarType<T[P], AggregateDomain[P]>
  }




  export type DomainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DomainWhereInput
    orderBy?: DomainOrderByWithAggregationInput | DomainOrderByWithAggregationInput[]
    by: DomainScalarFieldEnum[] | DomainScalarFieldEnum
    having?: DomainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DomainCountAggregateInputType | true
    _min?: DomainMinAggregateInputType
    _max?: DomainMaxAggregateInputType
  }

  export type DomainGroupByOutputType = {
    id: string
    name: string
    icon: string
    userId: string | null
    _count: DomainCountAggregateOutputType | null
    _min: DomainMinAggregateOutputType | null
    _max: DomainMaxAggregateOutputType | null
  }

  type GetDomainGroupByPayload<T extends DomainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DomainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DomainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DomainGroupByOutputType[P]>
            : GetScalarType<T[P], DomainGroupByOutputType[P]>
        }
      >
    >


  export type DomainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    userId?: boolean
    chatBot?: boolean | Domain$chatBotArgs<ExtArgs>
    helpdesk?: boolean | Domain$helpdeskArgs<ExtArgs>
    filterQuestions?: boolean | Domain$filterQuestionsArgs<ExtArgs>
    customer?: boolean | Domain$customerArgs<ExtArgs>
    User?: boolean | Domain$UserArgs<ExtArgs>
    _count?: boolean | DomainCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["domain"]>

  export type DomainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    userId?: boolean
    User?: boolean | Domain$UserArgs<ExtArgs>
  }, ExtArgs["result"]["domain"]>

  export type DomainSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    userId?: boolean
    User?: boolean | Domain$UserArgs<ExtArgs>
  }, ExtArgs["result"]["domain"]>

  export type DomainSelectScalar = {
    id?: boolean
    name?: boolean
    icon?: boolean
    userId?: boolean
  }

  export type DomainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "icon" | "userId", ExtArgs["result"]["domain"]>
  export type DomainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chatBot?: boolean | Domain$chatBotArgs<ExtArgs>
    helpdesk?: boolean | Domain$helpdeskArgs<ExtArgs>
    filterQuestions?: boolean | Domain$filterQuestionsArgs<ExtArgs>
    customer?: boolean | Domain$customerArgs<ExtArgs>
    User?: boolean | Domain$UserArgs<ExtArgs>
    _count?: boolean | DomainCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DomainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Domain$UserArgs<ExtArgs>
  }
  export type DomainIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Domain$UserArgs<ExtArgs>
  }

  export type $DomainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Domain"
    objects: {
      chatBot: Prisma.$ChatBotPayload<ExtArgs> | null
      helpdesk: Prisma.$HelpDeskPayload<ExtArgs>[]
      filterQuestions: Prisma.$FilterQuestionsPayload<ExtArgs>[]
      customer: Prisma.$CustomerPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      icon: string
      userId: string | null
    }, ExtArgs["result"]["domain"]>
    composites: {}
  }

  type DomainGetPayload<S extends boolean | null | undefined | DomainDefaultArgs> = $Result.GetResult<Prisma.$DomainPayload, S>

  type DomainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DomainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DomainCountAggregateInputType | true
    }

  export interface DomainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Domain'], meta: { name: 'Domain' } }
    /**
     * Find zero or one Domain that matches the filter.
     * @param {DomainFindUniqueArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DomainFindUniqueArgs>(args: SelectSubset<T, DomainFindUniqueArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Domain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DomainFindUniqueOrThrowArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DomainFindUniqueOrThrowArgs>(args: SelectSubset<T, DomainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Domain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindFirstArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DomainFindFirstArgs>(args?: SelectSubset<T, DomainFindFirstArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Domain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindFirstOrThrowArgs} args - Arguments to find a Domain
     * @example
     * // Get one Domain
     * const domain = await prisma.domain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DomainFindFirstOrThrowArgs>(args?: SelectSubset<T, DomainFindFirstOrThrowArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Domains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Domains
     * const domains = await prisma.domain.findMany()
     * 
     * // Get first 10 Domains
     * const domains = await prisma.domain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const domainWithIdOnly = await prisma.domain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DomainFindManyArgs>(args?: SelectSubset<T, DomainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Domain.
     * @param {DomainCreateArgs} args - Arguments to create a Domain.
     * @example
     * // Create one Domain
     * const Domain = await prisma.domain.create({
     *   data: {
     *     // ... data to create a Domain
     *   }
     * })
     * 
     */
    create<T extends DomainCreateArgs>(args: SelectSubset<T, DomainCreateArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Domains.
     * @param {DomainCreateManyArgs} args - Arguments to create many Domains.
     * @example
     * // Create many Domains
     * const domain = await prisma.domain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DomainCreateManyArgs>(args?: SelectSubset<T, DomainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Domains and returns the data saved in the database.
     * @param {DomainCreateManyAndReturnArgs} args - Arguments to create many Domains.
     * @example
     * // Create many Domains
     * const domain = await prisma.domain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Domains and only return the `id`
     * const domainWithIdOnly = await prisma.domain.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DomainCreateManyAndReturnArgs>(args?: SelectSubset<T, DomainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Domain.
     * @param {DomainDeleteArgs} args - Arguments to delete one Domain.
     * @example
     * // Delete one Domain
     * const Domain = await prisma.domain.delete({
     *   where: {
     *     // ... filter to delete one Domain
     *   }
     * })
     * 
     */
    delete<T extends DomainDeleteArgs>(args: SelectSubset<T, DomainDeleteArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Domain.
     * @param {DomainUpdateArgs} args - Arguments to update one Domain.
     * @example
     * // Update one Domain
     * const domain = await prisma.domain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DomainUpdateArgs>(args: SelectSubset<T, DomainUpdateArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Domains.
     * @param {DomainDeleteManyArgs} args - Arguments to filter Domains to delete.
     * @example
     * // Delete a few Domains
     * const { count } = await prisma.domain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DomainDeleteManyArgs>(args?: SelectSubset<T, DomainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Domains
     * const domain = await prisma.domain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DomainUpdateManyArgs>(args: SelectSubset<T, DomainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Domains and returns the data updated in the database.
     * @param {DomainUpdateManyAndReturnArgs} args - Arguments to update many Domains.
     * @example
     * // Update many Domains
     * const domain = await prisma.domain.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Domains and only return the `id`
     * const domainWithIdOnly = await prisma.domain.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DomainUpdateManyAndReturnArgs>(args: SelectSubset<T, DomainUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Domain.
     * @param {DomainUpsertArgs} args - Arguments to update or create a Domain.
     * @example
     * // Update or create a Domain
     * const domain = await prisma.domain.upsert({
     *   create: {
     *     // ... data to create a Domain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Domain we want to update
     *   }
     * })
     */
    upsert<T extends DomainUpsertArgs>(args: SelectSubset<T, DomainUpsertArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Domains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainCountArgs} args - Arguments to filter Domains to count.
     * @example
     * // Count the number of Domains
     * const count = await prisma.domain.count({
     *   where: {
     *     // ... the filter for the Domains we want to count
     *   }
     * })
    **/
    count<T extends DomainCountArgs>(
      args?: Subset<T, DomainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DomainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DomainAggregateArgs>(args: Subset<T, DomainAggregateArgs>): Prisma.PrismaPromise<GetDomainAggregateType<T>>

    /**
     * Group by Domain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DomainGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DomainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DomainGroupByArgs['orderBy'] }
        : { orderBy?: DomainGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DomainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDomainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Domain model
   */
  readonly fields: DomainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Domain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DomainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chatBot<T extends Domain$chatBotArgs<ExtArgs> = {}>(args?: Subset<T, Domain$chatBotArgs<ExtArgs>>): Prisma__ChatBotClient<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    helpdesk<T extends Domain$helpdeskArgs<ExtArgs> = {}>(args?: Subset<T, Domain$helpdeskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HelpDeskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    filterQuestions<T extends Domain$filterQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, Domain$filterQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterQuestionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customer<T extends Domain$customerArgs<ExtArgs> = {}>(args?: Subset<T, Domain$customerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Domain$UserArgs<ExtArgs> = {}>(args?: Subset<T, Domain$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Domain model
   */
  interface DomainFieldRefs {
    readonly id: FieldRef<"Domain", 'String'>
    readonly name: FieldRef<"Domain", 'String'>
    readonly icon: FieldRef<"Domain", 'String'>
    readonly userId: FieldRef<"Domain", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Domain findUnique
   */
  export type DomainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain findUniqueOrThrow
   */
  export type DomainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain findFirst
   */
  export type DomainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     */
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Domain findFirstOrThrow
   */
  export type DomainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domain to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Domains.
     */
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Domain findMany
   */
  export type DomainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter, which Domains to fetch.
     */
    where?: DomainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Domains to fetch.
     */
    orderBy?: DomainOrderByWithRelationInput | DomainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Domains.
     */
    cursor?: DomainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Domains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Domains.
     */
    skip?: number
    distinct?: DomainScalarFieldEnum | DomainScalarFieldEnum[]
  }

  /**
   * Domain create
   */
  export type DomainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The data needed to create a Domain.
     */
    data: XOR<DomainCreateInput, DomainUncheckedCreateInput>
  }

  /**
   * Domain createMany
   */
  export type DomainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Domains.
     */
    data: DomainCreateManyInput | DomainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Domain createManyAndReturn
   */
  export type DomainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * The data used to create many Domains.
     */
    data: DomainCreateManyInput | DomainCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Domain update
   */
  export type DomainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The data needed to update a Domain.
     */
    data: XOR<DomainUpdateInput, DomainUncheckedUpdateInput>
    /**
     * Choose, which Domain to update.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain updateMany
   */
  export type DomainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Domains.
     */
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyInput>
    /**
     * Filter which Domains to update
     */
    where?: DomainWhereInput
    /**
     * Limit how many Domains to update.
     */
    limit?: number
  }

  /**
   * Domain updateManyAndReturn
   */
  export type DomainUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * The data used to update Domains.
     */
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyInput>
    /**
     * Filter which Domains to update
     */
    where?: DomainWhereInput
    /**
     * Limit how many Domains to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Domain upsert
   */
  export type DomainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * The filter to search for the Domain to update in case it exists.
     */
    where: DomainWhereUniqueInput
    /**
     * In case the Domain found by the `where` argument doesn't exist, create a new Domain with this data.
     */
    create: XOR<DomainCreateInput, DomainUncheckedCreateInput>
    /**
     * In case the Domain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DomainUpdateInput, DomainUncheckedUpdateInput>
  }

  /**
   * Domain delete
   */
  export type DomainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    /**
     * Filter which Domain to delete.
     */
    where: DomainWhereUniqueInput
  }

  /**
   * Domain deleteMany
   */
  export type DomainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Domains to delete
     */
    where?: DomainWhereInput
    /**
     * Limit how many Domains to delete.
     */
    limit?: number
  }

  /**
   * Domain.chatBot
   */
  export type Domain$chatBotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatBot
     */
    omit?: ChatBotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatBotInclude<ExtArgs> | null
    where?: ChatBotWhereInput
  }

  /**
   * Domain.helpdesk
   */
  export type Domain$helpdeskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpDesk
     */
    select?: HelpDeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpDesk
     */
    omit?: HelpDeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpDeskInclude<ExtArgs> | null
    where?: HelpDeskWhereInput
    orderBy?: HelpDeskOrderByWithRelationInput | HelpDeskOrderByWithRelationInput[]
    cursor?: HelpDeskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HelpDeskScalarFieldEnum | HelpDeskScalarFieldEnum[]
  }

  /**
   * Domain.filterQuestions
   */
  export type Domain$filterQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterQuestions
     */
    select?: FilterQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterQuestions
     */
    omit?: FilterQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterQuestionsInclude<ExtArgs> | null
    where?: FilterQuestionsWhereInput
    orderBy?: FilterQuestionsOrderByWithRelationInput | FilterQuestionsOrderByWithRelationInput[]
    cursor?: FilterQuestionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilterQuestionsScalarFieldEnum | FilterQuestionsScalarFieldEnum[]
  }

  /**
   * Domain.customer
   */
  export type Domain$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Domain.User
   */
  export type Domain$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Domain without action
   */
  export type DomainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
  }


  /**
   * Model ChatBot
   */

  export type AggregateChatBot = {
    _count: ChatBotCountAggregateOutputType | null
    _min: ChatBotMinAggregateOutputType | null
    _max: ChatBotMaxAggregateOutputType | null
  }

  export type ChatBotMinAggregateOutputType = {
    id: string | null
    welcomeMessage: string | null
    icon: string | null
    domainId: string | null
  }

  export type ChatBotMaxAggregateOutputType = {
    id: string | null
    welcomeMessage: string | null
    icon: string | null
    domainId: string | null
  }

  export type ChatBotCountAggregateOutputType = {
    id: number
    welcomeMessage: number
    icon: number
    domainId: number
    _all: number
  }


  export type ChatBotMinAggregateInputType = {
    id?: true
    welcomeMessage?: true
    icon?: true
    domainId?: true
  }

  export type ChatBotMaxAggregateInputType = {
    id?: true
    welcomeMessage?: true
    icon?: true
    domainId?: true
  }

  export type ChatBotCountAggregateInputType = {
    id?: true
    welcomeMessage?: true
    icon?: true
    domainId?: true
    _all?: true
  }

  export type ChatBotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatBot to aggregate.
     */
    where?: ChatBotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatBots to fetch.
     */
    orderBy?: ChatBotOrderByWithRelationInput | ChatBotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatBotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatBots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatBots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatBots
    **/
    _count?: true | ChatBotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatBotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatBotMaxAggregateInputType
  }

  export type GetChatBotAggregateType<T extends ChatBotAggregateArgs> = {
        [P in keyof T & keyof AggregateChatBot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatBot[P]>
      : GetScalarType<T[P], AggregateChatBot[P]>
  }




  export type ChatBotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatBotWhereInput
    orderBy?: ChatBotOrderByWithAggregationInput | ChatBotOrderByWithAggregationInput[]
    by: ChatBotScalarFieldEnum[] | ChatBotScalarFieldEnum
    having?: ChatBotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatBotCountAggregateInputType | true
    _min?: ChatBotMinAggregateInputType
    _max?: ChatBotMaxAggregateInputType
  }

  export type ChatBotGroupByOutputType = {
    id: string
    welcomeMessage: string | null
    icon: string | null
    domainId: string | null
    _count: ChatBotCountAggregateOutputType | null
    _min: ChatBotMinAggregateOutputType | null
    _max: ChatBotMaxAggregateOutputType | null
  }

  type GetChatBotGroupByPayload<T extends ChatBotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatBotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatBotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatBotGroupByOutputType[P]>
            : GetScalarType<T[P], ChatBotGroupByOutputType[P]>
        }
      >
    >


  export type ChatBotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    welcomeMessage?: boolean
    icon?: boolean
    domainId?: boolean
    Domain?: boolean | ChatBot$DomainArgs<ExtArgs>
  }, ExtArgs["result"]["chatBot"]>

  export type ChatBotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    welcomeMessage?: boolean
    icon?: boolean
    domainId?: boolean
    Domain?: boolean | ChatBot$DomainArgs<ExtArgs>
  }, ExtArgs["result"]["chatBot"]>

  export type ChatBotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    welcomeMessage?: boolean
    icon?: boolean
    domainId?: boolean
    Domain?: boolean | ChatBot$DomainArgs<ExtArgs>
  }, ExtArgs["result"]["chatBot"]>

  export type ChatBotSelectScalar = {
    id?: boolean
    welcomeMessage?: boolean
    icon?: boolean
    domainId?: boolean
  }

  export type ChatBotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "welcomeMessage" | "icon" | "domainId", ExtArgs["result"]["chatBot"]>
  export type ChatBotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Domain?: boolean | ChatBot$DomainArgs<ExtArgs>
  }
  export type ChatBotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Domain?: boolean | ChatBot$DomainArgs<ExtArgs>
  }
  export type ChatBotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Domain?: boolean | ChatBot$DomainArgs<ExtArgs>
  }

  export type $ChatBotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatBot"
    objects: {
      Domain: Prisma.$DomainPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      welcomeMessage: string | null
      icon: string | null
      domainId: string | null
    }, ExtArgs["result"]["chatBot"]>
    composites: {}
  }

  type ChatBotGetPayload<S extends boolean | null | undefined | ChatBotDefaultArgs> = $Result.GetResult<Prisma.$ChatBotPayload, S>

  type ChatBotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatBotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatBotCountAggregateInputType | true
    }

  export interface ChatBotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatBot'], meta: { name: 'ChatBot' } }
    /**
     * Find zero or one ChatBot that matches the filter.
     * @param {ChatBotFindUniqueArgs} args - Arguments to find a ChatBot
     * @example
     * // Get one ChatBot
     * const chatBot = await prisma.chatBot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatBotFindUniqueArgs>(args: SelectSubset<T, ChatBotFindUniqueArgs<ExtArgs>>): Prisma__ChatBotClient<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatBot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatBotFindUniqueOrThrowArgs} args - Arguments to find a ChatBot
     * @example
     * // Get one ChatBot
     * const chatBot = await prisma.chatBot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatBotFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatBotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatBotClient<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatBot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatBotFindFirstArgs} args - Arguments to find a ChatBot
     * @example
     * // Get one ChatBot
     * const chatBot = await prisma.chatBot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatBotFindFirstArgs>(args?: SelectSubset<T, ChatBotFindFirstArgs<ExtArgs>>): Prisma__ChatBotClient<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatBot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatBotFindFirstOrThrowArgs} args - Arguments to find a ChatBot
     * @example
     * // Get one ChatBot
     * const chatBot = await prisma.chatBot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatBotFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatBotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatBotClient<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatBots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatBotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatBots
     * const chatBots = await prisma.chatBot.findMany()
     * 
     * // Get first 10 ChatBots
     * const chatBots = await prisma.chatBot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatBotWithIdOnly = await prisma.chatBot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatBotFindManyArgs>(args?: SelectSubset<T, ChatBotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatBot.
     * @param {ChatBotCreateArgs} args - Arguments to create a ChatBot.
     * @example
     * // Create one ChatBot
     * const ChatBot = await prisma.chatBot.create({
     *   data: {
     *     // ... data to create a ChatBot
     *   }
     * })
     * 
     */
    create<T extends ChatBotCreateArgs>(args: SelectSubset<T, ChatBotCreateArgs<ExtArgs>>): Prisma__ChatBotClient<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatBots.
     * @param {ChatBotCreateManyArgs} args - Arguments to create many ChatBots.
     * @example
     * // Create many ChatBots
     * const chatBot = await prisma.chatBot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatBotCreateManyArgs>(args?: SelectSubset<T, ChatBotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatBots and returns the data saved in the database.
     * @param {ChatBotCreateManyAndReturnArgs} args - Arguments to create many ChatBots.
     * @example
     * // Create many ChatBots
     * const chatBot = await prisma.chatBot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatBots and only return the `id`
     * const chatBotWithIdOnly = await prisma.chatBot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatBotCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatBotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatBot.
     * @param {ChatBotDeleteArgs} args - Arguments to delete one ChatBot.
     * @example
     * // Delete one ChatBot
     * const ChatBot = await prisma.chatBot.delete({
     *   where: {
     *     // ... filter to delete one ChatBot
     *   }
     * })
     * 
     */
    delete<T extends ChatBotDeleteArgs>(args: SelectSubset<T, ChatBotDeleteArgs<ExtArgs>>): Prisma__ChatBotClient<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatBot.
     * @param {ChatBotUpdateArgs} args - Arguments to update one ChatBot.
     * @example
     * // Update one ChatBot
     * const chatBot = await prisma.chatBot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatBotUpdateArgs>(args: SelectSubset<T, ChatBotUpdateArgs<ExtArgs>>): Prisma__ChatBotClient<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatBots.
     * @param {ChatBotDeleteManyArgs} args - Arguments to filter ChatBots to delete.
     * @example
     * // Delete a few ChatBots
     * const { count } = await prisma.chatBot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatBotDeleteManyArgs>(args?: SelectSubset<T, ChatBotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatBots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatBotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatBots
     * const chatBot = await prisma.chatBot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatBotUpdateManyArgs>(args: SelectSubset<T, ChatBotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatBots and returns the data updated in the database.
     * @param {ChatBotUpdateManyAndReturnArgs} args - Arguments to update many ChatBots.
     * @example
     * // Update many ChatBots
     * const chatBot = await prisma.chatBot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatBots and only return the `id`
     * const chatBotWithIdOnly = await prisma.chatBot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatBotUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatBotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatBot.
     * @param {ChatBotUpsertArgs} args - Arguments to update or create a ChatBot.
     * @example
     * // Update or create a ChatBot
     * const chatBot = await prisma.chatBot.upsert({
     *   create: {
     *     // ... data to create a ChatBot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatBot we want to update
     *   }
     * })
     */
    upsert<T extends ChatBotUpsertArgs>(args: SelectSubset<T, ChatBotUpsertArgs<ExtArgs>>): Prisma__ChatBotClient<$Result.GetResult<Prisma.$ChatBotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatBots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatBotCountArgs} args - Arguments to filter ChatBots to count.
     * @example
     * // Count the number of ChatBots
     * const count = await prisma.chatBot.count({
     *   where: {
     *     // ... the filter for the ChatBots we want to count
     *   }
     * })
    **/
    count<T extends ChatBotCountArgs>(
      args?: Subset<T, ChatBotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatBotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatBot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatBotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatBotAggregateArgs>(args: Subset<T, ChatBotAggregateArgs>): Prisma.PrismaPromise<GetChatBotAggregateType<T>>

    /**
     * Group by ChatBot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatBotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatBotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatBotGroupByArgs['orderBy'] }
        : { orderBy?: ChatBotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatBotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatBotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatBot model
   */
  readonly fields: ChatBotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatBot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatBotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Domain<T extends ChatBot$DomainArgs<ExtArgs> = {}>(args?: Subset<T, ChatBot$DomainArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatBot model
   */
  interface ChatBotFieldRefs {
    readonly id: FieldRef<"ChatBot", 'String'>
    readonly welcomeMessage: FieldRef<"ChatBot", 'String'>
    readonly icon: FieldRef<"ChatBot", 'String'>
    readonly domainId: FieldRef<"ChatBot", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatBot findUnique
   */
  export type ChatBotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatBot
     */
    omit?: ChatBotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatBotInclude<ExtArgs> | null
    /**
     * Filter, which ChatBot to fetch.
     */
    where: ChatBotWhereUniqueInput
  }

  /**
   * ChatBot findUniqueOrThrow
   */
  export type ChatBotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatBot
     */
    omit?: ChatBotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatBotInclude<ExtArgs> | null
    /**
     * Filter, which ChatBot to fetch.
     */
    where: ChatBotWhereUniqueInput
  }

  /**
   * ChatBot findFirst
   */
  export type ChatBotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatBot
     */
    omit?: ChatBotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatBotInclude<ExtArgs> | null
    /**
     * Filter, which ChatBot to fetch.
     */
    where?: ChatBotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatBots to fetch.
     */
    orderBy?: ChatBotOrderByWithRelationInput | ChatBotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatBots.
     */
    cursor?: ChatBotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatBots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatBots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatBots.
     */
    distinct?: ChatBotScalarFieldEnum | ChatBotScalarFieldEnum[]
  }

  /**
   * ChatBot findFirstOrThrow
   */
  export type ChatBotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatBot
     */
    omit?: ChatBotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatBotInclude<ExtArgs> | null
    /**
     * Filter, which ChatBot to fetch.
     */
    where?: ChatBotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatBots to fetch.
     */
    orderBy?: ChatBotOrderByWithRelationInput | ChatBotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatBots.
     */
    cursor?: ChatBotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatBots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatBots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatBots.
     */
    distinct?: ChatBotScalarFieldEnum | ChatBotScalarFieldEnum[]
  }

  /**
   * ChatBot findMany
   */
  export type ChatBotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatBot
     */
    omit?: ChatBotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatBotInclude<ExtArgs> | null
    /**
     * Filter, which ChatBots to fetch.
     */
    where?: ChatBotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatBots to fetch.
     */
    orderBy?: ChatBotOrderByWithRelationInput | ChatBotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatBots.
     */
    cursor?: ChatBotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatBots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatBots.
     */
    skip?: number
    distinct?: ChatBotScalarFieldEnum | ChatBotScalarFieldEnum[]
  }

  /**
   * ChatBot create
   */
  export type ChatBotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatBot
     */
    omit?: ChatBotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatBotInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatBot.
     */
    data?: XOR<ChatBotCreateInput, ChatBotUncheckedCreateInput>
  }

  /**
   * ChatBot createMany
   */
  export type ChatBotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatBots.
     */
    data: ChatBotCreateManyInput | ChatBotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatBot createManyAndReturn
   */
  export type ChatBotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatBot
     */
    omit?: ChatBotOmit<ExtArgs> | null
    /**
     * The data used to create many ChatBots.
     */
    data: ChatBotCreateManyInput | ChatBotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatBotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatBot update
   */
  export type ChatBotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatBot
     */
    omit?: ChatBotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatBotInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatBot.
     */
    data: XOR<ChatBotUpdateInput, ChatBotUncheckedUpdateInput>
    /**
     * Choose, which ChatBot to update.
     */
    where: ChatBotWhereUniqueInput
  }

  /**
   * ChatBot updateMany
   */
  export type ChatBotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatBots.
     */
    data: XOR<ChatBotUpdateManyMutationInput, ChatBotUncheckedUpdateManyInput>
    /**
     * Filter which ChatBots to update
     */
    where?: ChatBotWhereInput
    /**
     * Limit how many ChatBots to update.
     */
    limit?: number
  }

  /**
   * ChatBot updateManyAndReturn
   */
  export type ChatBotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatBot
     */
    omit?: ChatBotOmit<ExtArgs> | null
    /**
     * The data used to update ChatBots.
     */
    data: XOR<ChatBotUpdateManyMutationInput, ChatBotUncheckedUpdateManyInput>
    /**
     * Filter which ChatBots to update
     */
    where?: ChatBotWhereInput
    /**
     * Limit how many ChatBots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatBotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatBot upsert
   */
  export type ChatBotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatBot
     */
    omit?: ChatBotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatBotInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatBot to update in case it exists.
     */
    where: ChatBotWhereUniqueInput
    /**
     * In case the ChatBot found by the `where` argument doesn't exist, create a new ChatBot with this data.
     */
    create: XOR<ChatBotCreateInput, ChatBotUncheckedCreateInput>
    /**
     * In case the ChatBot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatBotUpdateInput, ChatBotUncheckedUpdateInput>
  }

  /**
   * ChatBot delete
   */
  export type ChatBotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatBot
     */
    omit?: ChatBotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatBotInclude<ExtArgs> | null
    /**
     * Filter which ChatBot to delete.
     */
    where: ChatBotWhereUniqueInput
  }

  /**
   * ChatBot deleteMany
   */
  export type ChatBotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatBots to delete
     */
    where?: ChatBotWhereInput
    /**
     * Limit how many ChatBots to delete.
     */
    limit?: number
  }

  /**
   * ChatBot.Domain
   */
  export type ChatBot$DomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    where?: DomainWhereInput
  }

  /**
   * ChatBot without action
   */
  export type ChatBotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatBot
     */
    select?: ChatBotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatBot
     */
    omit?: ChatBotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatBotInclude<ExtArgs> | null
  }


  /**
   * Model Billings
   */

  export type AggregateBillings = {
    _count: BillingsCountAggregateOutputType | null
    _avg: BillingsAvgAggregateOutputType | null
    _sum: BillingsSumAggregateOutputType | null
    _min: BillingsMinAggregateOutputType | null
    _max: BillingsMaxAggregateOutputType | null
  }

  export type BillingsAvgAggregateOutputType = {
    credits: number | null
  }

  export type BillingsSumAggregateOutputType = {
    credits: number | null
  }

  export type BillingsMinAggregateOutputType = {
    id: string | null
    plan: $Enums.Plans | null
    credits: number | null
    userId: string | null
  }

  export type BillingsMaxAggregateOutputType = {
    id: string | null
    plan: $Enums.Plans | null
    credits: number | null
    userId: string | null
  }

  export type BillingsCountAggregateOutputType = {
    id: number
    plan: number
    credits: number
    userId: number
    _all: number
  }


  export type BillingsAvgAggregateInputType = {
    credits?: true
  }

  export type BillingsSumAggregateInputType = {
    credits?: true
  }

  export type BillingsMinAggregateInputType = {
    id?: true
    plan?: true
    credits?: true
    userId?: true
  }

  export type BillingsMaxAggregateInputType = {
    id?: true
    plan?: true
    credits?: true
    userId?: true
  }

  export type BillingsCountAggregateInputType = {
    id?: true
    plan?: true
    credits?: true
    userId?: true
    _all?: true
  }

  export type BillingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Billings to aggregate.
     */
    where?: BillingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billings to fetch.
     */
    orderBy?: BillingsOrderByWithRelationInput | BillingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Billings
    **/
    _count?: true | BillingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BillingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BillingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillingsMaxAggregateInputType
  }

  export type GetBillingsAggregateType<T extends BillingsAggregateArgs> = {
        [P in keyof T & keyof AggregateBillings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBillings[P]>
      : GetScalarType<T[P], AggregateBillings[P]>
  }




  export type BillingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillingsWhereInput
    orderBy?: BillingsOrderByWithAggregationInput | BillingsOrderByWithAggregationInput[]
    by: BillingsScalarFieldEnum[] | BillingsScalarFieldEnum
    having?: BillingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillingsCountAggregateInputType | true
    _avg?: BillingsAvgAggregateInputType
    _sum?: BillingsSumAggregateInputType
    _min?: BillingsMinAggregateInputType
    _max?: BillingsMaxAggregateInputType
  }

  export type BillingsGroupByOutputType = {
    id: string
    plan: $Enums.Plans
    credits: number
    userId: string | null
    _count: BillingsCountAggregateOutputType | null
    _avg: BillingsAvgAggregateOutputType | null
    _sum: BillingsSumAggregateOutputType | null
    _min: BillingsMinAggregateOutputType | null
    _max: BillingsMaxAggregateOutputType | null
  }

  type GetBillingsGroupByPayload<T extends BillingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillingsGroupByOutputType[P]>
            : GetScalarType<T[P], BillingsGroupByOutputType[P]>
        }
      >
    >


  export type BillingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    credits?: boolean
    userId?: boolean
    User?: boolean | Billings$UserArgs<ExtArgs>
  }, ExtArgs["result"]["billings"]>

  export type BillingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    credits?: boolean
    userId?: boolean
    User?: boolean | Billings$UserArgs<ExtArgs>
  }, ExtArgs["result"]["billings"]>

  export type BillingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plan?: boolean
    credits?: boolean
    userId?: boolean
    User?: boolean | Billings$UserArgs<ExtArgs>
  }, ExtArgs["result"]["billings"]>

  export type BillingsSelectScalar = {
    id?: boolean
    plan?: boolean
    credits?: boolean
    userId?: boolean
  }

  export type BillingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "plan" | "credits" | "userId", ExtArgs["result"]["billings"]>
  export type BillingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Billings$UserArgs<ExtArgs>
  }
  export type BillingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Billings$UserArgs<ExtArgs>
  }
  export type BillingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Billings$UserArgs<ExtArgs>
  }

  export type $BillingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Billings"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plan: $Enums.Plans
      credits: number
      userId: string | null
    }, ExtArgs["result"]["billings"]>
    composites: {}
  }

  type BillingsGetPayload<S extends boolean | null | undefined | BillingsDefaultArgs> = $Result.GetResult<Prisma.$BillingsPayload, S>

  type BillingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BillingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BillingsCountAggregateInputType | true
    }

  export interface BillingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Billings'], meta: { name: 'Billings' } }
    /**
     * Find zero or one Billings that matches the filter.
     * @param {BillingsFindUniqueArgs} args - Arguments to find a Billings
     * @example
     * // Get one Billings
     * const billings = await prisma.billings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillingsFindUniqueArgs>(args: SelectSubset<T, BillingsFindUniqueArgs<ExtArgs>>): Prisma__BillingsClient<$Result.GetResult<Prisma.$BillingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Billings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BillingsFindUniqueOrThrowArgs} args - Arguments to find a Billings
     * @example
     * // Get one Billings
     * const billings = await prisma.billings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillingsFindUniqueOrThrowArgs>(args: SelectSubset<T, BillingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillingsClient<$Result.GetResult<Prisma.$BillingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Billings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingsFindFirstArgs} args - Arguments to find a Billings
     * @example
     * // Get one Billings
     * const billings = await prisma.billings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillingsFindFirstArgs>(args?: SelectSubset<T, BillingsFindFirstArgs<ExtArgs>>): Prisma__BillingsClient<$Result.GetResult<Prisma.$BillingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Billings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingsFindFirstOrThrowArgs} args - Arguments to find a Billings
     * @example
     * // Get one Billings
     * const billings = await prisma.billings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillingsFindFirstOrThrowArgs>(args?: SelectSubset<T, BillingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillingsClient<$Result.GetResult<Prisma.$BillingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Billings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Billings
     * const billings = await prisma.billings.findMany()
     * 
     * // Get first 10 Billings
     * const billings = await prisma.billings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billingsWithIdOnly = await prisma.billings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillingsFindManyArgs>(args?: SelectSubset<T, BillingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Billings.
     * @param {BillingsCreateArgs} args - Arguments to create a Billings.
     * @example
     * // Create one Billings
     * const Billings = await prisma.billings.create({
     *   data: {
     *     // ... data to create a Billings
     *   }
     * })
     * 
     */
    create<T extends BillingsCreateArgs>(args: SelectSubset<T, BillingsCreateArgs<ExtArgs>>): Prisma__BillingsClient<$Result.GetResult<Prisma.$BillingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Billings.
     * @param {BillingsCreateManyArgs} args - Arguments to create many Billings.
     * @example
     * // Create many Billings
     * const billings = await prisma.billings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillingsCreateManyArgs>(args?: SelectSubset<T, BillingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Billings and returns the data saved in the database.
     * @param {BillingsCreateManyAndReturnArgs} args - Arguments to create many Billings.
     * @example
     * // Create many Billings
     * const billings = await prisma.billings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Billings and only return the `id`
     * const billingsWithIdOnly = await prisma.billings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillingsCreateManyAndReturnArgs>(args?: SelectSubset<T, BillingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Billings.
     * @param {BillingsDeleteArgs} args - Arguments to delete one Billings.
     * @example
     * // Delete one Billings
     * const Billings = await prisma.billings.delete({
     *   where: {
     *     // ... filter to delete one Billings
     *   }
     * })
     * 
     */
    delete<T extends BillingsDeleteArgs>(args: SelectSubset<T, BillingsDeleteArgs<ExtArgs>>): Prisma__BillingsClient<$Result.GetResult<Prisma.$BillingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Billings.
     * @param {BillingsUpdateArgs} args - Arguments to update one Billings.
     * @example
     * // Update one Billings
     * const billings = await prisma.billings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillingsUpdateArgs>(args: SelectSubset<T, BillingsUpdateArgs<ExtArgs>>): Prisma__BillingsClient<$Result.GetResult<Prisma.$BillingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Billings.
     * @param {BillingsDeleteManyArgs} args - Arguments to filter Billings to delete.
     * @example
     * // Delete a few Billings
     * const { count } = await prisma.billings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillingsDeleteManyArgs>(args?: SelectSubset<T, BillingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Billings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Billings
     * const billings = await prisma.billings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillingsUpdateManyArgs>(args: SelectSubset<T, BillingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Billings and returns the data updated in the database.
     * @param {BillingsUpdateManyAndReturnArgs} args - Arguments to update many Billings.
     * @example
     * // Update many Billings
     * const billings = await prisma.billings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Billings and only return the `id`
     * const billingsWithIdOnly = await prisma.billings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BillingsUpdateManyAndReturnArgs>(args: SelectSubset<T, BillingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Billings.
     * @param {BillingsUpsertArgs} args - Arguments to update or create a Billings.
     * @example
     * // Update or create a Billings
     * const billings = await prisma.billings.upsert({
     *   create: {
     *     // ... data to create a Billings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Billings we want to update
     *   }
     * })
     */
    upsert<T extends BillingsUpsertArgs>(args: SelectSubset<T, BillingsUpsertArgs<ExtArgs>>): Prisma__BillingsClient<$Result.GetResult<Prisma.$BillingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Billings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingsCountArgs} args - Arguments to filter Billings to count.
     * @example
     * // Count the number of Billings
     * const count = await prisma.billings.count({
     *   where: {
     *     // ... the filter for the Billings we want to count
     *   }
     * })
    **/
    count<T extends BillingsCountArgs>(
      args?: Subset<T, BillingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Billings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BillingsAggregateArgs>(args: Subset<T, BillingsAggregateArgs>): Prisma.PrismaPromise<GetBillingsAggregateType<T>>

    /**
     * Group by Billings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BillingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillingsGroupByArgs['orderBy'] }
        : { orderBy?: BillingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BillingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Billings model
   */
  readonly fields: BillingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Billings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Billings$UserArgs<ExtArgs> = {}>(args?: Subset<T, Billings$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Billings model
   */
  interface BillingsFieldRefs {
    readonly id: FieldRef<"Billings", 'String'>
    readonly plan: FieldRef<"Billings", 'Plans'>
    readonly credits: FieldRef<"Billings", 'Int'>
    readonly userId: FieldRef<"Billings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Billings findUnique
   */
  export type BillingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billings
     */
    select?: BillingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billings
     */
    omit?: BillingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingsInclude<ExtArgs> | null
    /**
     * Filter, which Billings to fetch.
     */
    where: BillingsWhereUniqueInput
  }

  /**
   * Billings findUniqueOrThrow
   */
  export type BillingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billings
     */
    select?: BillingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billings
     */
    omit?: BillingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingsInclude<ExtArgs> | null
    /**
     * Filter, which Billings to fetch.
     */
    where: BillingsWhereUniqueInput
  }

  /**
   * Billings findFirst
   */
  export type BillingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billings
     */
    select?: BillingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billings
     */
    omit?: BillingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingsInclude<ExtArgs> | null
    /**
     * Filter, which Billings to fetch.
     */
    where?: BillingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billings to fetch.
     */
    orderBy?: BillingsOrderByWithRelationInput | BillingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Billings.
     */
    cursor?: BillingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Billings.
     */
    distinct?: BillingsScalarFieldEnum | BillingsScalarFieldEnum[]
  }

  /**
   * Billings findFirstOrThrow
   */
  export type BillingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billings
     */
    select?: BillingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billings
     */
    omit?: BillingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingsInclude<ExtArgs> | null
    /**
     * Filter, which Billings to fetch.
     */
    where?: BillingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billings to fetch.
     */
    orderBy?: BillingsOrderByWithRelationInput | BillingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Billings.
     */
    cursor?: BillingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Billings.
     */
    distinct?: BillingsScalarFieldEnum | BillingsScalarFieldEnum[]
  }

  /**
   * Billings findMany
   */
  export type BillingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billings
     */
    select?: BillingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billings
     */
    omit?: BillingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingsInclude<ExtArgs> | null
    /**
     * Filter, which Billings to fetch.
     */
    where?: BillingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Billings to fetch.
     */
    orderBy?: BillingsOrderByWithRelationInput | BillingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Billings.
     */
    cursor?: BillingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Billings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Billings.
     */
    skip?: number
    distinct?: BillingsScalarFieldEnum | BillingsScalarFieldEnum[]
  }

  /**
   * Billings create
   */
  export type BillingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billings
     */
    select?: BillingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billings
     */
    omit?: BillingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Billings.
     */
    data?: XOR<BillingsCreateInput, BillingsUncheckedCreateInput>
  }

  /**
   * Billings createMany
   */
  export type BillingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Billings.
     */
    data: BillingsCreateManyInput | BillingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Billings createManyAndReturn
   */
  export type BillingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billings
     */
    select?: BillingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Billings
     */
    omit?: BillingsOmit<ExtArgs> | null
    /**
     * The data used to create many Billings.
     */
    data: BillingsCreateManyInput | BillingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Billings update
   */
  export type BillingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billings
     */
    select?: BillingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billings
     */
    omit?: BillingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Billings.
     */
    data: XOR<BillingsUpdateInput, BillingsUncheckedUpdateInput>
    /**
     * Choose, which Billings to update.
     */
    where: BillingsWhereUniqueInput
  }

  /**
   * Billings updateMany
   */
  export type BillingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Billings.
     */
    data: XOR<BillingsUpdateManyMutationInput, BillingsUncheckedUpdateManyInput>
    /**
     * Filter which Billings to update
     */
    where?: BillingsWhereInput
    /**
     * Limit how many Billings to update.
     */
    limit?: number
  }

  /**
   * Billings updateManyAndReturn
   */
  export type BillingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billings
     */
    select?: BillingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Billings
     */
    omit?: BillingsOmit<ExtArgs> | null
    /**
     * The data used to update Billings.
     */
    data: XOR<BillingsUpdateManyMutationInput, BillingsUncheckedUpdateManyInput>
    /**
     * Filter which Billings to update
     */
    where?: BillingsWhereInput
    /**
     * Limit how many Billings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Billings upsert
   */
  export type BillingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billings
     */
    select?: BillingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billings
     */
    omit?: BillingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Billings to update in case it exists.
     */
    where: BillingsWhereUniqueInput
    /**
     * In case the Billings found by the `where` argument doesn't exist, create a new Billings with this data.
     */
    create: XOR<BillingsCreateInput, BillingsUncheckedCreateInput>
    /**
     * In case the Billings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillingsUpdateInput, BillingsUncheckedUpdateInput>
  }

  /**
   * Billings delete
   */
  export type BillingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billings
     */
    select?: BillingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billings
     */
    omit?: BillingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingsInclude<ExtArgs> | null
    /**
     * Filter which Billings to delete.
     */
    where: BillingsWhereUniqueInput
  }

  /**
   * Billings deleteMany
   */
  export type BillingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Billings to delete
     */
    where?: BillingsWhereInput
    /**
     * Limit how many Billings to delete.
     */
    limit?: number
  }

  /**
   * Billings.User
   */
  export type Billings$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Billings without action
   */
  export type BillingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Billings
     */
    select?: BillingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Billings
     */
    omit?: BillingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillingsInclude<ExtArgs> | null
  }


  /**
   * Model HelpDesk
   */

  export type AggregateHelpDesk = {
    _count: HelpDeskCountAggregateOutputType | null
    _min: HelpDeskMinAggregateOutputType | null
    _max: HelpDeskMaxAggregateOutputType | null
  }

  export type HelpDeskMinAggregateOutputType = {
    id: string | null
    question: string | null
    answer: string | null
    domainId: string | null
  }

  export type HelpDeskMaxAggregateOutputType = {
    id: string | null
    question: string | null
    answer: string | null
    domainId: string | null
  }

  export type HelpDeskCountAggregateOutputType = {
    id: number
    question: number
    answer: number
    domainId: number
    _all: number
  }


  export type HelpDeskMinAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    domainId?: true
  }

  export type HelpDeskMaxAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    domainId?: true
  }

  export type HelpDeskCountAggregateInputType = {
    id?: true
    question?: true
    answer?: true
    domainId?: true
    _all?: true
  }

  export type HelpDeskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HelpDesk to aggregate.
     */
    where?: HelpDeskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HelpDesks to fetch.
     */
    orderBy?: HelpDeskOrderByWithRelationInput | HelpDeskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HelpDeskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HelpDesks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HelpDesks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HelpDesks
    **/
    _count?: true | HelpDeskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HelpDeskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HelpDeskMaxAggregateInputType
  }

  export type GetHelpDeskAggregateType<T extends HelpDeskAggregateArgs> = {
        [P in keyof T & keyof AggregateHelpDesk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHelpDesk[P]>
      : GetScalarType<T[P], AggregateHelpDesk[P]>
  }




  export type HelpDeskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HelpDeskWhereInput
    orderBy?: HelpDeskOrderByWithAggregationInput | HelpDeskOrderByWithAggregationInput[]
    by: HelpDeskScalarFieldEnum[] | HelpDeskScalarFieldEnum
    having?: HelpDeskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HelpDeskCountAggregateInputType | true
    _min?: HelpDeskMinAggregateInputType
    _max?: HelpDeskMaxAggregateInputType
  }

  export type HelpDeskGroupByOutputType = {
    id: string
    question: string
    answer: string
    domainId: string | null
    _count: HelpDeskCountAggregateOutputType | null
    _min: HelpDeskMinAggregateOutputType | null
    _max: HelpDeskMaxAggregateOutputType | null
  }

  type GetHelpDeskGroupByPayload<T extends HelpDeskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HelpDeskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HelpDeskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HelpDeskGroupByOutputType[P]>
            : GetScalarType<T[P], HelpDeskGroupByOutputType[P]>
        }
      >
    >


  export type HelpDeskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    domainId?: boolean
    Domain?: boolean | HelpDesk$DomainArgs<ExtArgs>
  }, ExtArgs["result"]["helpDesk"]>

  export type HelpDeskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    domainId?: boolean
    Domain?: boolean | HelpDesk$DomainArgs<ExtArgs>
  }, ExtArgs["result"]["helpDesk"]>

  export type HelpDeskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answer?: boolean
    domainId?: boolean
    Domain?: boolean | HelpDesk$DomainArgs<ExtArgs>
  }, ExtArgs["result"]["helpDesk"]>

  export type HelpDeskSelectScalar = {
    id?: boolean
    question?: boolean
    answer?: boolean
    domainId?: boolean
  }

  export type HelpDeskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "answer" | "domainId", ExtArgs["result"]["helpDesk"]>
  export type HelpDeskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Domain?: boolean | HelpDesk$DomainArgs<ExtArgs>
  }
  export type HelpDeskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Domain?: boolean | HelpDesk$DomainArgs<ExtArgs>
  }
  export type HelpDeskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Domain?: boolean | HelpDesk$DomainArgs<ExtArgs>
  }

  export type $HelpDeskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HelpDesk"
    objects: {
      Domain: Prisma.$DomainPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question: string
      answer: string
      domainId: string | null
    }, ExtArgs["result"]["helpDesk"]>
    composites: {}
  }

  type HelpDeskGetPayload<S extends boolean | null | undefined | HelpDeskDefaultArgs> = $Result.GetResult<Prisma.$HelpDeskPayload, S>

  type HelpDeskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HelpDeskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HelpDeskCountAggregateInputType | true
    }

  export interface HelpDeskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HelpDesk'], meta: { name: 'HelpDesk' } }
    /**
     * Find zero or one HelpDesk that matches the filter.
     * @param {HelpDeskFindUniqueArgs} args - Arguments to find a HelpDesk
     * @example
     * // Get one HelpDesk
     * const helpDesk = await prisma.helpDesk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HelpDeskFindUniqueArgs>(args: SelectSubset<T, HelpDeskFindUniqueArgs<ExtArgs>>): Prisma__HelpDeskClient<$Result.GetResult<Prisma.$HelpDeskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HelpDesk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HelpDeskFindUniqueOrThrowArgs} args - Arguments to find a HelpDesk
     * @example
     * // Get one HelpDesk
     * const helpDesk = await prisma.helpDesk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HelpDeskFindUniqueOrThrowArgs>(args: SelectSubset<T, HelpDeskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HelpDeskClient<$Result.GetResult<Prisma.$HelpDeskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HelpDesk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpDeskFindFirstArgs} args - Arguments to find a HelpDesk
     * @example
     * // Get one HelpDesk
     * const helpDesk = await prisma.helpDesk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HelpDeskFindFirstArgs>(args?: SelectSubset<T, HelpDeskFindFirstArgs<ExtArgs>>): Prisma__HelpDeskClient<$Result.GetResult<Prisma.$HelpDeskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HelpDesk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpDeskFindFirstOrThrowArgs} args - Arguments to find a HelpDesk
     * @example
     * // Get one HelpDesk
     * const helpDesk = await prisma.helpDesk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HelpDeskFindFirstOrThrowArgs>(args?: SelectSubset<T, HelpDeskFindFirstOrThrowArgs<ExtArgs>>): Prisma__HelpDeskClient<$Result.GetResult<Prisma.$HelpDeskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HelpDesks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpDeskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HelpDesks
     * const helpDesks = await prisma.helpDesk.findMany()
     * 
     * // Get first 10 HelpDesks
     * const helpDesks = await prisma.helpDesk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const helpDeskWithIdOnly = await prisma.helpDesk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HelpDeskFindManyArgs>(args?: SelectSubset<T, HelpDeskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HelpDeskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HelpDesk.
     * @param {HelpDeskCreateArgs} args - Arguments to create a HelpDesk.
     * @example
     * // Create one HelpDesk
     * const HelpDesk = await prisma.helpDesk.create({
     *   data: {
     *     // ... data to create a HelpDesk
     *   }
     * })
     * 
     */
    create<T extends HelpDeskCreateArgs>(args: SelectSubset<T, HelpDeskCreateArgs<ExtArgs>>): Prisma__HelpDeskClient<$Result.GetResult<Prisma.$HelpDeskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HelpDesks.
     * @param {HelpDeskCreateManyArgs} args - Arguments to create many HelpDesks.
     * @example
     * // Create many HelpDesks
     * const helpDesk = await prisma.helpDesk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HelpDeskCreateManyArgs>(args?: SelectSubset<T, HelpDeskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HelpDesks and returns the data saved in the database.
     * @param {HelpDeskCreateManyAndReturnArgs} args - Arguments to create many HelpDesks.
     * @example
     * // Create many HelpDesks
     * const helpDesk = await prisma.helpDesk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HelpDesks and only return the `id`
     * const helpDeskWithIdOnly = await prisma.helpDesk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HelpDeskCreateManyAndReturnArgs>(args?: SelectSubset<T, HelpDeskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HelpDeskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HelpDesk.
     * @param {HelpDeskDeleteArgs} args - Arguments to delete one HelpDesk.
     * @example
     * // Delete one HelpDesk
     * const HelpDesk = await prisma.helpDesk.delete({
     *   where: {
     *     // ... filter to delete one HelpDesk
     *   }
     * })
     * 
     */
    delete<T extends HelpDeskDeleteArgs>(args: SelectSubset<T, HelpDeskDeleteArgs<ExtArgs>>): Prisma__HelpDeskClient<$Result.GetResult<Prisma.$HelpDeskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HelpDesk.
     * @param {HelpDeskUpdateArgs} args - Arguments to update one HelpDesk.
     * @example
     * // Update one HelpDesk
     * const helpDesk = await prisma.helpDesk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HelpDeskUpdateArgs>(args: SelectSubset<T, HelpDeskUpdateArgs<ExtArgs>>): Prisma__HelpDeskClient<$Result.GetResult<Prisma.$HelpDeskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HelpDesks.
     * @param {HelpDeskDeleteManyArgs} args - Arguments to filter HelpDesks to delete.
     * @example
     * // Delete a few HelpDesks
     * const { count } = await prisma.helpDesk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HelpDeskDeleteManyArgs>(args?: SelectSubset<T, HelpDeskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HelpDesks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpDeskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HelpDesks
     * const helpDesk = await prisma.helpDesk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HelpDeskUpdateManyArgs>(args: SelectSubset<T, HelpDeskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HelpDesks and returns the data updated in the database.
     * @param {HelpDeskUpdateManyAndReturnArgs} args - Arguments to update many HelpDesks.
     * @example
     * // Update many HelpDesks
     * const helpDesk = await prisma.helpDesk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HelpDesks and only return the `id`
     * const helpDeskWithIdOnly = await prisma.helpDesk.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HelpDeskUpdateManyAndReturnArgs>(args: SelectSubset<T, HelpDeskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HelpDeskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HelpDesk.
     * @param {HelpDeskUpsertArgs} args - Arguments to update or create a HelpDesk.
     * @example
     * // Update or create a HelpDesk
     * const helpDesk = await prisma.helpDesk.upsert({
     *   create: {
     *     // ... data to create a HelpDesk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HelpDesk we want to update
     *   }
     * })
     */
    upsert<T extends HelpDeskUpsertArgs>(args: SelectSubset<T, HelpDeskUpsertArgs<ExtArgs>>): Prisma__HelpDeskClient<$Result.GetResult<Prisma.$HelpDeskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HelpDesks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpDeskCountArgs} args - Arguments to filter HelpDesks to count.
     * @example
     * // Count the number of HelpDesks
     * const count = await prisma.helpDesk.count({
     *   where: {
     *     // ... the filter for the HelpDesks we want to count
     *   }
     * })
    **/
    count<T extends HelpDeskCountArgs>(
      args?: Subset<T, HelpDeskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HelpDeskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HelpDesk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpDeskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HelpDeskAggregateArgs>(args: Subset<T, HelpDeskAggregateArgs>): Prisma.PrismaPromise<GetHelpDeskAggregateType<T>>

    /**
     * Group by HelpDesk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HelpDeskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HelpDeskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HelpDeskGroupByArgs['orderBy'] }
        : { orderBy?: HelpDeskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HelpDeskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHelpDeskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HelpDesk model
   */
  readonly fields: HelpDeskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HelpDesk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HelpDeskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Domain<T extends HelpDesk$DomainArgs<ExtArgs> = {}>(args?: Subset<T, HelpDesk$DomainArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HelpDesk model
   */
  interface HelpDeskFieldRefs {
    readonly id: FieldRef<"HelpDesk", 'String'>
    readonly question: FieldRef<"HelpDesk", 'String'>
    readonly answer: FieldRef<"HelpDesk", 'String'>
    readonly domainId: FieldRef<"HelpDesk", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HelpDesk findUnique
   */
  export type HelpDeskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpDesk
     */
    select?: HelpDeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpDesk
     */
    omit?: HelpDeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpDeskInclude<ExtArgs> | null
    /**
     * Filter, which HelpDesk to fetch.
     */
    where: HelpDeskWhereUniqueInput
  }

  /**
   * HelpDesk findUniqueOrThrow
   */
  export type HelpDeskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpDesk
     */
    select?: HelpDeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpDesk
     */
    omit?: HelpDeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpDeskInclude<ExtArgs> | null
    /**
     * Filter, which HelpDesk to fetch.
     */
    where: HelpDeskWhereUniqueInput
  }

  /**
   * HelpDesk findFirst
   */
  export type HelpDeskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpDesk
     */
    select?: HelpDeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpDesk
     */
    omit?: HelpDeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpDeskInclude<ExtArgs> | null
    /**
     * Filter, which HelpDesk to fetch.
     */
    where?: HelpDeskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HelpDesks to fetch.
     */
    orderBy?: HelpDeskOrderByWithRelationInput | HelpDeskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HelpDesks.
     */
    cursor?: HelpDeskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HelpDesks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HelpDesks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HelpDesks.
     */
    distinct?: HelpDeskScalarFieldEnum | HelpDeskScalarFieldEnum[]
  }

  /**
   * HelpDesk findFirstOrThrow
   */
  export type HelpDeskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpDesk
     */
    select?: HelpDeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpDesk
     */
    omit?: HelpDeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpDeskInclude<ExtArgs> | null
    /**
     * Filter, which HelpDesk to fetch.
     */
    where?: HelpDeskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HelpDesks to fetch.
     */
    orderBy?: HelpDeskOrderByWithRelationInput | HelpDeskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HelpDesks.
     */
    cursor?: HelpDeskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HelpDesks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HelpDesks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HelpDesks.
     */
    distinct?: HelpDeskScalarFieldEnum | HelpDeskScalarFieldEnum[]
  }

  /**
   * HelpDesk findMany
   */
  export type HelpDeskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpDesk
     */
    select?: HelpDeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpDesk
     */
    omit?: HelpDeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpDeskInclude<ExtArgs> | null
    /**
     * Filter, which HelpDesks to fetch.
     */
    where?: HelpDeskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HelpDesks to fetch.
     */
    orderBy?: HelpDeskOrderByWithRelationInput | HelpDeskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HelpDesks.
     */
    cursor?: HelpDeskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HelpDesks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HelpDesks.
     */
    skip?: number
    distinct?: HelpDeskScalarFieldEnum | HelpDeskScalarFieldEnum[]
  }

  /**
   * HelpDesk create
   */
  export type HelpDeskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpDesk
     */
    select?: HelpDeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpDesk
     */
    omit?: HelpDeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpDeskInclude<ExtArgs> | null
    /**
     * The data needed to create a HelpDesk.
     */
    data: XOR<HelpDeskCreateInput, HelpDeskUncheckedCreateInput>
  }

  /**
   * HelpDesk createMany
   */
  export type HelpDeskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HelpDesks.
     */
    data: HelpDeskCreateManyInput | HelpDeskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HelpDesk createManyAndReturn
   */
  export type HelpDeskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpDesk
     */
    select?: HelpDeskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HelpDesk
     */
    omit?: HelpDeskOmit<ExtArgs> | null
    /**
     * The data used to create many HelpDesks.
     */
    data: HelpDeskCreateManyInput | HelpDeskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpDeskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HelpDesk update
   */
  export type HelpDeskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpDesk
     */
    select?: HelpDeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpDesk
     */
    omit?: HelpDeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpDeskInclude<ExtArgs> | null
    /**
     * The data needed to update a HelpDesk.
     */
    data: XOR<HelpDeskUpdateInput, HelpDeskUncheckedUpdateInput>
    /**
     * Choose, which HelpDesk to update.
     */
    where: HelpDeskWhereUniqueInput
  }

  /**
   * HelpDesk updateMany
   */
  export type HelpDeskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HelpDesks.
     */
    data: XOR<HelpDeskUpdateManyMutationInput, HelpDeskUncheckedUpdateManyInput>
    /**
     * Filter which HelpDesks to update
     */
    where?: HelpDeskWhereInput
    /**
     * Limit how many HelpDesks to update.
     */
    limit?: number
  }

  /**
   * HelpDesk updateManyAndReturn
   */
  export type HelpDeskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpDesk
     */
    select?: HelpDeskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HelpDesk
     */
    omit?: HelpDeskOmit<ExtArgs> | null
    /**
     * The data used to update HelpDesks.
     */
    data: XOR<HelpDeskUpdateManyMutationInput, HelpDeskUncheckedUpdateManyInput>
    /**
     * Filter which HelpDesks to update
     */
    where?: HelpDeskWhereInput
    /**
     * Limit how many HelpDesks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpDeskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HelpDesk upsert
   */
  export type HelpDeskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpDesk
     */
    select?: HelpDeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpDesk
     */
    omit?: HelpDeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpDeskInclude<ExtArgs> | null
    /**
     * The filter to search for the HelpDesk to update in case it exists.
     */
    where: HelpDeskWhereUniqueInput
    /**
     * In case the HelpDesk found by the `where` argument doesn't exist, create a new HelpDesk with this data.
     */
    create: XOR<HelpDeskCreateInput, HelpDeskUncheckedCreateInput>
    /**
     * In case the HelpDesk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HelpDeskUpdateInput, HelpDeskUncheckedUpdateInput>
  }

  /**
   * HelpDesk delete
   */
  export type HelpDeskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpDesk
     */
    select?: HelpDeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpDesk
     */
    omit?: HelpDeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpDeskInclude<ExtArgs> | null
    /**
     * Filter which HelpDesk to delete.
     */
    where: HelpDeskWhereUniqueInput
  }

  /**
   * HelpDesk deleteMany
   */
  export type HelpDeskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HelpDesks to delete
     */
    where?: HelpDeskWhereInput
    /**
     * Limit how many HelpDesks to delete.
     */
    limit?: number
  }

  /**
   * HelpDesk.Domain
   */
  export type HelpDesk$DomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    where?: DomainWhereInput
  }

  /**
   * HelpDesk without action
   */
  export type HelpDeskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HelpDesk
     */
    select?: HelpDeskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HelpDesk
     */
    omit?: HelpDeskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HelpDeskInclude<ExtArgs> | null
  }


  /**
   * Model FilterQuestions
   */

  export type AggregateFilterQuestions = {
    _count: FilterQuestionsCountAggregateOutputType | null
    _min: FilterQuestionsMinAggregateOutputType | null
    _max: FilterQuestionsMaxAggregateOutputType | null
  }

  export type FilterQuestionsMinAggregateOutputType = {
    id: string | null
    question: string | null
    answered: string | null
    domainId: string | null
  }

  export type FilterQuestionsMaxAggregateOutputType = {
    id: string | null
    question: string | null
    answered: string | null
    domainId: string | null
  }

  export type FilterQuestionsCountAggregateOutputType = {
    id: number
    question: number
    answered: number
    domainId: number
    _all: number
  }


  export type FilterQuestionsMinAggregateInputType = {
    id?: true
    question?: true
    answered?: true
    domainId?: true
  }

  export type FilterQuestionsMaxAggregateInputType = {
    id?: true
    question?: true
    answered?: true
    domainId?: true
  }

  export type FilterQuestionsCountAggregateInputType = {
    id?: true
    question?: true
    answered?: true
    domainId?: true
    _all?: true
  }

  export type FilterQuestionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilterQuestions to aggregate.
     */
    where?: FilterQuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterQuestions to fetch.
     */
    orderBy?: FilterQuestionsOrderByWithRelationInput | FilterQuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilterQuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FilterQuestions
    **/
    _count?: true | FilterQuestionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilterQuestionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilterQuestionsMaxAggregateInputType
  }

  export type GetFilterQuestionsAggregateType<T extends FilterQuestionsAggregateArgs> = {
        [P in keyof T & keyof AggregateFilterQuestions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilterQuestions[P]>
      : GetScalarType<T[P], AggregateFilterQuestions[P]>
  }




  export type FilterQuestionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilterQuestionsWhereInput
    orderBy?: FilterQuestionsOrderByWithAggregationInput | FilterQuestionsOrderByWithAggregationInput[]
    by: FilterQuestionsScalarFieldEnum[] | FilterQuestionsScalarFieldEnum
    having?: FilterQuestionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilterQuestionsCountAggregateInputType | true
    _min?: FilterQuestionsMinAggregateInputType
    _max?: FilterQuestionsMaxAggregateInputType
  }

  export type FilterQuestionsGroupByOutputType = {
    id: string
    question: string
    answered: string
    domainId: string | null
    _count: FilterQuestionsCountAggregateOutputType | null
    _min: FilterQuestionsMinAggregateOutputType | null
    _max: FilterQuestionsMaxAggregateOutputType | null
  }

  type GetFilterQuestionsGroupByPayload<T extends FilterQuestionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilterQuestionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilterQuestionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilterQuestionsGroupByOutputType[P]>
            : GetScalarType<T[P], FilterQuestionsGroupByOutputType[P]>
        }
      >
    >


  export type FilterQuestionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answered?: boolean
    domainId?: boolean
    Domain?: boolean | FilterQuestions$DomainArgs<ExtArgs>
  }, ExtArgs["result"]["filterQuestions"]>

  export type FilterQuestionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answered?: boolean
    domainId?: boolean
    Domain?: boolean | FilterQuestions$DomainArgs<ExtArgs>
  }, ExtArgs["result"]["filterQuestions"]>

  export type FilterQuestionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answered?: boolean
    domainId?: boolean
    Domain?: boolean | FilterQuestions$DomainArgs<ExtArgs>
  }, ExtArgs["result"]["filterQuestions"]>

  export type FilterQuestionsSelectScalar = {
    id?: boolean
    question?: boolean
    answered?: boolean
    domainId?: boolean
  }

  export type FilterQuestionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "answered" | "domainId", ExtArgs["result"]["filterQuestions"]>
  export type FilterQuestionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Domain?: boolean | FilterQuestions$DomainArgs<ExtArgs>
  }
  export type FilterQuestionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Domain?: boolean | FilterQuestions$DomainArgs<ExtArgs>
  }
  export type FilterQuestionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Domain?: boolean | FilterQuestions$DomainArgs<ExtArgs>
  }

  export type $FilterQuestionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FilterQuestions"
    objects: {
      Domain: Prisma.$DomainPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question: string
      answered: string
      domainId: string | null
    }, ExtArgs["result"]["filterQuestions"]>
    composites: {}
  }

  type FilterQuestionsGetPayload<S extends boolean | null | undefined | FilterQuestionsDefaultArgs> = $Result.GetResult<Prisma.$FilterQuestionsPayload, S>

  type FilterQuestionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilterQuestionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilterQuestionsCountAggregateInputType | true
    }

  export interface FilterQuestionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FilterQuestions'], meta: { name: 'FilterQuestions' } }
    /**
     * Find zero or one FilterQuestions that matches the filter.
     * @param {FilterQuestionsFindUniqueArgs} args - Arguments to find a FilterQuestions
     * @example
     * // Get one FilterQuestions
     * const filterQuestions = await prisma.filterQuestions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilterQuestionsFindUniqueArgs>(args: SelectSubset<T, FilterQuestionsFindUniqueArgs<ExtArgs>>): Prisma__FilterQuestionsClient<$Result.GetResult<Prisma.$FilterQuestionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FilterQuestions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilterQuestionsFindUniqueOrThrowArgs} args - Arguments to find a FilterQuestions
     * @example
     * // Get one FilterQuestions
     * const filterQuestions = await prisma.filterQuestions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilterQuestionsFindUniqueOrThrowArgs>(args: SelectSubset<T, FilterQuestionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilterQuestionsClient<$Result.GetResult<Prisma.$FilterQuestionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilterQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterQuestionsFindFirstArgs} args - Arguments to find a FilterQuestions
     * @example
     * // Get one FilterQuestions
     * const filterQuestions = await prisma.filterQuestions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilterQuestionsFindFirstArgs>(args?: SelectSubset<T, FilterQuestionsFindFirstArgs<ExtArgs>>): Prisma__FilterQuestionsClient<$Result.GetResult<Prisma.$FilterQuestionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FilterQuestions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterQuestionsFindFirstOrThrowArgs} args - Arguments to find a FilterQuestions
     * @example
     * // Get one FilterQuestions
     * const filterQuestions = await prisma.filterQuestions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilterQuestionsFindFirstOrThrowArgs>(args?: SelectSubset<T, FilterQuestionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilterQuestionsClient<$Result.GetResult<Prisma.$FilterQuestionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FilterQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterQuestionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FilterQuestions
     * const filterQuestions = await prisma.filterQuestions.findMany()
     * 
     * // Get first 10 FilterQuestions
     * const filterQuestions = await prisma.filterQuestions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filterQuestionsWithIdOnly = await prisma.filterQuestions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilterQuestionsFindManyArgs>(args?: SelectSubset<T, FilterQuestionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterQuestionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FilterQuestions.
     * @param {FilterQuestionsCreateArgs} args - Arguments to create a FilterQuestions.
     * @example
     * // Create one FilterQuestions
     * const FilterQuestions = await prisma.filterQuestions.create({
     *   data: {
     *     // ... data to create a FilterQuestions
     *   }
     * })
     * 
     */
    create<T extends FilterQuestionsCreateArgs>(args: SelectSubset<T, FilterQuestionsCreateArgs<ExtArgs>>): Prisma__FilterQuestionsClient<$Result.GetResult<Prisma.$FilterQuestionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FilterQuestions.
     * @param {FilterQuestionsCreateManyArgs} args - Arguments to create many FilterQuestions.
     * @example
     * // Create many FilterQuestions
     * const filterQuestions = await prisma.filterQuestions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilterQuestionsCreateManyArgs>(args?: SelectSubset<T, FilterQuestionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FilterQuestions and returns the data saved in the database.
     * @param {FilterQuestionsCreateManyAndReturnArgs} args - Arguments to create many FilterQuestions.
     * @example
     * // Create many FilterQuestions
     * const filterQuestions = await prisma.filterQuestions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FilterQuestions and only return the `id`
     * const filterQuestionsWithIdOnly = await prisma.filterQuestions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilterQuestionsCreateManyAndReturnArgs>(args?: SelectSubset<T, FilterQuestionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterQuestionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FilterQuestions.
     * @param {FilterQuestionsDeleteArgs} args - Arguments to delete one FilterQuestions.
     * @example
     * // Delete one FilterQuestions
     * const FilterQuestions = await prisma.filterQuestions.delete({
     *   where: {
     *     // ... filter to delete one FilterQuestions
     *   }
     * })
     * 
     */
    delete<T extends FilterQuestionsDeleteArgs>(args: SelectSubset<T, FilterQuestionsDeleteArgs<ExtArgs>>): Prisma__FilterQuestionsClient<$Result.GetResult<Prisma.$FilterQuestionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FilterQuestions.
     * @param {FilterQuestionsUpdateArgs} args - Arguments to update one FilterQuestions.
     * @example
     * // Update one FilterQuestions
     * const filterQuestions = await prisma.filterQuestions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilterQuestionsUpdateArgs>(args: SelectSubset<T, FilterQuestionsUpdateArgs<ExtArgs>>): Prisma__FilterQuestionsClient<$Result.GetResult<Prisma.$FilterQuestionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FilterQuestions.
     * @param {FilterQuestionsDeleteManyArgs} args - Arguments to filter FilterQuestions to delete.
     * @example
     * // Delete a few FilterQuestions
     * const { count } = await prisma.filterQuestions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilterQuestionsDeleteManyArgs>(args?: SelectSubset<T, FilterQuestionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilterQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterQuestionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FilterQuestions
     * const filterQuestions = await prisma.filterQuestions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilterQuestionsUpdateManyArgs>(args: SelectSubset<T, FilterQuestionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FilterQuestions and returns the data updated in the database.
     * @param {FilterQuestionsUpdateManyAndReturnArgs} args - Arguments to update many FilterQuestions.
     * @example
     * // Update many FilterQuestions
     * const filterQuestions = await prisma.filterQuestions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FilterQuestions and only return the `id`
     * const filterQuestionsWithIdOnly = await prisma.filterQuestions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FilterQuestionsUpdateManyAndReturnArgs>(args: SelectSubset<T, FilterQuestionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterQuestionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FilterQuestions.
     * @param {FilterQuestionsUpsertArgs} args - Arguments to update or create a FilterQuestions.
     * @example
     * // Update or create a FilterQuestions
     * const filterQuestions = await prisma.filterQuestions.upsert({
     *   create: {
     *     // ... data to create a FilterQuestions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FilterQuestions we want to update
     *   }
     * })
     */
    upsert<T extends FilterQuestionsUpsertArgs>(args: SelectSubset<T, FilterQuestionsUpsertArgs<ExtArgs>>): Prisma__FilterQuestionsClient<$Result.GetResult<Prisma.$FilterQuestionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FilterQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterQuestionsCountArgs} args - Arguments to filter FilterQuestions to count.
     * @example
     * // Count the number of FilterQuestions
     * const count = await prisma.filterQuestions.count({
     *   where: {
     *     // ... the filter for the FilterQuestions we want to count
     *   }
     * })
    **/
    count<T extends FilterQuestionsCountArgs>(
      args?: Subset<T, FilterQuestionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilterQuestionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FilterQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterQuestionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FilterQuestionsAggregateArgs>(args: Subset<T, FilterQuestionsAggregateArgs>): Prisma.PrismaPromise<GetFilterQuestionsAggregateType<T>>

    /**
     * Group by FilterQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterQuestionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FilterQuestionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilterQuestionsGroupByArgs['orderBy'] }
        : { orderBy?: FilterQuestionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FilterQuestionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilterQuestionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FilterQuestions model
   */
  readonly fields: FilterQuestionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FilterQuestions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilterQuestionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Domain<T extends FilterQuestions$DomainArgs<ExtArgs> = {}>(args?: Subset<T, FilterQuestions$DomainArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FilterQuestions model
   */
  interface FilterQuestionsFieldRefs {
    readonly id: FieldRef<"FilterQuestions", 'String'>
    readonly question: FieldRef<"FilterQuestions", 'String'>
    readonly answered: FieldRef<"FilterQuestions", 'String'>
    readonly domainId: FieldRef<"FilterQuestions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FilterQuestions findUnique
   */
  export type FilterQuestionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterQuestions
     */
    select?: FilterQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterQuestions
     */
    omit?: FilterQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterQuestionsInclude<ExtArgs> | null
    /**
     * Filter, which FilterQuestions to fetch.
     */
    where: FilterQuestionsWhereUniqueInput
  }

  /**
   * FilterQuestions findUniqueOrThrow
   */
  export type FilterQuestionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterQuestions
     */
    select?: FilterQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterQuestions
     */
    omit?: FilterQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterQuestionsInclude<ExtArgs> | null
    /**
     * Filter, which FilterQuestions to fetch.
     */
    where: FilterQuestionsWhereUniqueInput
  }

  /**
   * FilterQuestions findFirst
   */
  export type FilterQuestionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterQuestions
     */
    select?: FilterQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterQuestions
     */
    omit?: FilterQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterQuestionsInclude<ExtArgs> | null
    /**
     * Filter, which FilterQuestions to fetch.
     */
    where?: FilterQuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterQuestions to fetch.
     */
    orderBy?: FilterQuestionsOrderByWithRelationInput | FilterQuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilterQuestions.
     */
    cursor?: FilterQuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilterQuestions.
     */
    distinct?: FilterQuestionsScalarFieldEnum | FilterQuestionsScalarFieldEnum[]
  }

  /**
   * FilterQuestions findFirstOrThrow
   */
  export type FilterQuestionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterQuestions
     */
    select?: FilterQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterQuestions
     */
    omit?: FilterQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterQuestionsInclude<ExtArgs> | null
    /**
     * Filter, which FilterQuestions to fetch.
     */
    where?: FilterQuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterQuestions to fetch.
     */
    orderBy?: FilterQuestionsOrderByWithRelationInput | FilterQuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FilterQuestions.
     */
    cursor?: FilterQuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FilterQuestions.
     */
    distinct?: FilterQuestionsScalarFieldEnum | FilterQuestionsScalarFieldEnum[]
  }

  /**
   * FilterQuestions findMany
   */
  export type FilterQuestionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterQuestions
     */
    select?: FilterQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterQuestions
     */
    omit?: FilterQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterQuestionsInclude<ExtArgs> | null
    /**
     * Filter, which FilterQuestions to fetch.
     */
    where?: FilterQuestionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FilterQuestions to fetch.
     */
    orderBy?: FilterQuestionsOrderByWithRelationInput | FilterQuestionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FilterQuestions.
     */
    cursor?: FilterQuestionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FilterQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FilterQuestions.
     */
    skip?: number
    distinct?: FilterQuestionsScalarFieldEnum | FilterQuestionsScalarFieldEnum[]
  }

  /**
   * FilterQuestions create
   */
  export type FilterQuestionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterQuestions
     */
    select?: FilterQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterQuestions
     */
    omit?: FilterQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterQuestionsInclude<ExtArgs> | null
    /**
     * The data needed to create a FilterQuestions.
     */
    data: XOR<FilterQuestionsCreateInput, FilterQuestionsUncheckedCreateInput>
  }

  /**
   * FilterQuestions createMany
   */
  export type FilterQuestionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FilterQuestions.
     */
    data: FilterQuestionsCreateManyInput | FilterQuestionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FilterQuestions createManyAndReturn
   */
  export type FilterQuestionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterQuestions
     */
    select?: FilterQuestionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FilterQuestions
     */
    omit?: FilterQuestionsOmit<ExtArgs> | null
    /**
     * The data used to create many FilterQuestions.
     */
    data: FilterQuestionsCreateManyInput | FilterQuestionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterQuestionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FilterQuestions update
   */
  export type FilterQuestionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterQuestions
     */
    select?: FilterQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterQuestions
     */
    omit?: FilterQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterQuestionsInclude<ExtArgs> | null
    /**
     * The data needed to update a FilterQuestions.
     */
    data: XOR<FilterQuestionsUpdateInput, FilterQuestionsUncheckedUpdateInput>
    /**
     * Choose, which FilterQuestions to update.
     */
    where: FilterQuestionsWhereUniqueInput
  }

  /**
   * FilterQuestions updateMany
   */
  export type FilterQuestionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FilterQuestions.
     */
    data: XOR<FilterQuestionsUpdateManyMutationInput, FilterQuestionsUncheckedUpdateManyInput>
    /**
     * Filter which FilterQuestions to update
     */
    where?: FilterQuestionsWhereInput
    /**
     * Limit how many FilterQuestions to update.
     */
    limit?: number
  }

  /**
   * FilterQuestions updateManyAndReturn
   */
  export type FilterQuestionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterQuestions
     */
    select?: FilterQuestionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FilterQuestions
     */
    omit?: FilterQuestionsOmit<ExtArgs> | null
    /**
     * The data used to update FilterQuestions.
     */
    data: XOR<FilterQuestionsUpdateManyMutationInput, FilterQuestionsUncheckedUpdateManyInput>
    /**
     * Filter which FilterQuestions to update
     */
    where?: FilterQuestionsWhereInput
    /**
     * Limit how many FilterQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterQuestionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FilterQuestions upsert
   */
  export type FilterQuestionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterQuestions
     */
    select?: FilterQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterQuestions
     */
    omit?: FilterQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterQuestionsInclude<ExtArgs> | null
    /**
     * The filter to search for the FilterQuestions to update in case it exists.
     */
    where: FilterQuestionsWhereUniqueInput
    /**
     * In case the FilterQuestions found by the `where` argument doesn't exist, create a new FilterQuestions with this data.
     */
    create: XOR<FilterQuestionsCreateInput, FilterQuestionsUncheckedCreateInput>
    /**
     * In case the FilterQuestions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilterQuestionsUpdateInput, FilterQuestionsUncheckedUpdateInput>
  }

  /**
   * FilterQuestions delete
   */
  export type FilterQuestionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterQuestions
     */
    select?: FilterQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterQuestions
     */
    omit?: FilterQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterQuestionsInclude<ExtArgs> | null
    /**
     * Filter which FilterQuestions to delete.
     */
    where: FilterQuestionsWhereUniqueInput
  }

  /**
   * FilterQuestions deleteMany
   */
  export type FilterQuestionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FilterQuestions to delete
     */
    where?: FilterQuestionsWhereInput
    /**
     * Limit how many FilterQuestions to delete.
     */
    limit?: number
  }

  /**
   * FilterQuestions.Domain
   */
  export type FilterQuestions$DomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    where?: DomainWhereInput
  }

  /**
   * FilterQuestions without action
   */
  export type FilterQuestionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterQuestions
     */
    select?: FilterQuestionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FilterQuestions
     */
    omit?: FilterQuestionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterQuestionsInclude<ExtArgs> | null
  }


  /**
   * Model CustomerResponses
   */

  export type AggregateCustomerResponses = {
    _count: CustomerResponsesCountAggregateOutputType | null
    _min: CustomerResponsesMinAggregateOutputType | null
    _max: CustomerResponsesMaxAggregateOutputType | null
  }

  export type CustomerResponsesMinAggregateOutputType = {
    id: string | null
    question: string | null
    answered: string | null
    customerID: string | null
  }

  export type CustomerResponsesMaxAggregateOutputType = {
    id: string | null
    question: string | null
    answered: string | null
    customerID: string | null
  }

  export type CustomerResponsesCountAggregateOutputType = {
    id: number
    question: number
    answered: number
    customerID: number
    _all: number
  }


  export type CustomerResponsesMinAggregateInputType = {
    id?: true
    question?: true
    answered?: true
    customerID?: true
  }

  export type CustomerResponsesMaxAggregateInputType = {
    id?: true
    question?: true
    answered?: true
    customerID?: true
  }

  export type CustomerResponsesCountAggregateInputType = {
    id?: true
    question?: true
    answered?: true
    customerID?: true
    _all?: true
  }

  export type CustomerResponsesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerResponses to aggregate.
     */
    where?: CustomerResponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerResponses to fetch.
     */
    orderBy?: CustomerResponsesOrderByWithRelationInput | CustomerResponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerResponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerResponses
    **/
    _count?: true | CustomerResponsesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerResponsesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerResponsesMaxAggregateInputType
  }

  export type GetCustomerResponsesAggregateType<T extends CustomerResponsesAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerResponses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerResponses[P]>
      : GetScalarType<T[P], AggregateCustomerResponses[P]>
  }




  export type CustomerResponsesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerResponsesWhereInput
    orderBy?: CustomerResponsesOrderByWithAggregationInput | CustomerResponsesOrderByWithAggregationInput[]
    by: CustomerResponsesScalarFieldEnum[] | CustomerResponsesScalarFieldEnum
    having?: CustomerResponsesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerResponsesCountAggregateInputType | true
    _min?: CustomerResponsesMinAggregateInputType
    _max?: CustomerResponsesMaxAggregateInputType
  }

  export type CustomerResponsesGroupByOutputType = {
    id: string
    question: string
    answered: string | null
    customerID: string
    _count: CustomerResponsesCountAggregateOutputType | null
    _min: CustomerResponsesMinAggregateOutputType | null
    _max: CustomerResponsesMaxAggregateOutputType | null
  }

  type GetCustomerResponsesGroupByPayload<T extends CustomerResponsesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerResponsesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerResponsesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerResponsesGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerResponsesGroupByOutputType[P]>
        }
      >
    >


  export type CustomerResponsesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answered?: boolean
    customerID?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerResponses"]>

  export type CustomerResponsesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answered?: boolean
    customerID?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerResponses"]>

  export type CustomerResponsesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    question?: boolean
    answered?: boolean
    customerID?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerResponses"]>

  export type CustomerResponsesSelectScalar = {
    id?: boolean
    question?: boolean
    answered?: boolean
    customerID?: boolean
  }

  export type CustomerResponsesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "question" | "answered" | "customerID", ExtArgs["result"]["customerResponses"]>
  export type CustomerResponsesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type CustomerResponsesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type CustomerResponsesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $CustomerResponsesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerResponses"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      question: string
      answered: string | null
      customerID: string
    }, ExtArgs["result"]["customerResponses"]>
    composites: {}
  }

  type CustomerResponsesGetPayload<S extends boolean | null | undefined | CustomerResponsesDefaultArgs> = $Result.GetResult<Prisma.$CustomerResponsesPayload, S>

  type CustomerResponsesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerResponsesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerResponsesCountAggregateInputType | true
    }

  export interface CustomerResponsesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerResponses'], meta: { name: 'CustomerResponses' } }
    /**
     * Find zero or one CustomerResponses that matches the filter.
     * @param {CustomerResponsesFindUniqueArgs} args - Arguments to find a CustomerResponses
     * @example
     * // Get one CustomerResponses
     * const customerResponses = await prisma.customerResponses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerResponsesFindUniqueArgs>(args: SelectSubset<T, CustomerResponsesFindUniqueArgs<ExtArgs>>): Prisma__CustomerResponsesClient<$Result.GetResult<Prisma.$CustomerResponsesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerResponses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerResponsesFindUniqueOrThrowArgs} args - Arguments to find a CustomerResponses
     * @example
     * // Get one CustomerResponses
     * const customerResponses = await prisma.customerResponses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerResponsesFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerResponsesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerResponsesClient<$Result.GetResult<Prisma.$CustomerResponsesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerResponsesFindFirstArgs} args - Arguments to find a CustomerResponses
     * @example
     * // Get one CustomerResponses
     * const customerResponses = await prisma.customerResponses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerResponsesFindFirstArgs>(args?: SelectSubset<T, CustomerResponsesFindFirstArgs<ExtArgs>>): Prisma__CustomerResponsesClient<$Result.GetResult<Prisma.$CustomerResponsesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerResponses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerResponsesFindFirstOrThrowArgs} args - Arguments to find a CustomerResponses
     * @example
     * // Get one CustomerResponses
     * const customerResponses = await prisma.customerResponses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerResponsesFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerResponsesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerResponsesClient<$Result.GetResult<Prisma.$CustomerResponsesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerResponsesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerResponses
     * const customerResponses = await prisma.customerResponses.findMany()
     * 
     * // Get first 10 CustomerResponses
     * const customerResponses = await prisma.customerResponses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerResponsesWithIdOnly = await prisma.customerResponses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerResponsesFindManyArgs>(args?: SelectSubset<T, CustomerResponsesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerResponsesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerResponses.
     * @param {CustomerResponsesCreateArgs} args - Arguments to create a CustomerResponses.
     * @example
     * // Create one CustomerResponses
     * const CustomerResponses = await prisma.customerResponses.create({
     *   data: {
     *     // ... data to create a CustomerResponses
     *   }
     * })
     * 
     */
    create<T extends CustomerResponsesCreateArgs>(args: SelectSubset<T, CustomerResponsesCreateArgs<ExtArgs>>): Prisma__CustomerResponsesClient<$Result.GetResult<Prisma.$CustomerResponsesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerResponses.
     * @param {CustomerResponsesCreateManyArgs} args - Arguments to create many CustomerResponses.
     * @example
     * // Create many CustomerResponses
     * const customerResponses = await prisma.customerResponses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerResponsesCreateManyArgs>(args?: SelectSubset<T, CustomerResponsesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerResponses and returns the data saved in the database.
     * @param {CustomerResponsesCreateManyAndReturnArgs} args - Arguments to create many CustomerResponses.
     * @example
     * // Create many CustomerResponses
     * const customerResponses = await prisma.customerResponses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerResponses and only return the `id`
     * const customerResponsesWithIdOnly = await prisma.customerResponses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerResponsesCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerResponsesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerResponsesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomerResponses.
     * @param {CustomerResponsesDeleteArgs} args - Arguments to delete one CustomerResponses.
     * @example
     * // Delete one CustomerResponses
     * const CustomerResponses = await prisma.customerResponses.delete({
     *   where: {
     *     // ... filter to delete one CustomerResponses
     *   }
     * })
     * 
     */
    delete<T extends CustomerResponsesDeleteArgs>(args: SelectSubset<T, CustomerResponsesDeleteArgs<ExtArgs>>): Prisma__CustomerResponsesClient<$Result.GetResult<Prisma.$CustomerResponsesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerResponses.
     * @param {CustomerResponsesUpdateArgs} args - Arguments to update one CustomerResponses.
     * @example
     * // Update one CustomerResponses
     * const customerResponses = await prisma.customerResponses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerResponsesUpdateArgs>(args: SelectSubset<T, CustomerResponsesUpdateArgs<ExtArgs>>): Prisma__CustomerResponsesClient<$Result.GetResult<Prisma.$CustomerResponsesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerResponses.
     * @param {CustomerResponsesDeleteManyArgs} args - Arguments to filter CustomerResponses to delete.
     * @example
     * // Delete a few CustomerResponses
     * const { count } = await prisma.customerResponses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerResponsesDeleteManyArgs>(args?: SelectSubset<T, CustomerResponsesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerResponsesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerResponses
     * const customerResponses = await prisma.customerResponses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerResponsesUpdateManyArgs>(args: SelectSubset<T, CustomerResponsesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerResponses and returns the data updated in the database.
     * @param {CustomerResponsesUpdateManyAndReturnArgs} args - Arguments to update many CustomerResponses.
     * @example
     * // Update many CustomerResponses
     * const customerResponses = await prisma.customerResponses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomerResponses and only return the `id`
     * const customerResponsesWithIdOnly = await prisma.customerResponses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerResponsesUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerResponsesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerResponsesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomerResponses.
     * @param {CustomerResponsesUpsertArgs} args - Arguments to update or create a CustomerResponses.
     * @example
     * // Update or create a CustomerResponses
     * const customerResponses = await prisma.customerResponses.upsert({
     *   create: {
     *     // ... data to create a CustomerResponses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerResponses we want to update
     *   }
     * })
     */
    upsert<T extends CustomerResponsesUpsertArgs>(args: SelectSubset<T, CustomerResponsesUpsertArgs<ExtArgs>>): Prisma__CustomerResponsesClient<$Result.GetResult<Prisma.$CustomerResponsesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerResponsesCountArgs} args - Arguments to filter CustomerResponses to count.
     * @example
     * // Count the number of CustomerResponses
     * const count = await prisma.customerResponses.count({
     *   where: {
     *     // ... the filter for the CustomerResponses we want to count
     *   }
     * })
    **/
    count<T extends CustomerResponsesCountArgs>(
      args?: Subset<T, CustomerResponsesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerResponsesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerResponsesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerResponsesAggregateArgs>(args: Subset<T, CustomerResponsesAggregateArgs>): Prisma.PrismaPromise<GetCustomerResponsesAggregateType<T>>

    /**
     * Group by CustomerResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerResponsesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerResponsesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerResponsesGroupByArgs['orderBy'] }
        : { orderBy?: CustomerResponsesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerResponsesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerResponsesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerResponses model
   */
  readonly fields: CustomerResponsesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerResponses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerResponsesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerResponses model
   */
  interface CustomerResponsesFieldRefs {
    readonly id: FieldRef<"CustomerResponses", 'String'>
    readonly question: FieldRef<"CustomerResponses", 'String'>
    readonly answered: FieldRef<"CustomerResponses", 'String'>
    readonly customerID: FieldRef<"CustomerResponses", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CustomerResponses findUnique
   */
  export type CustomerResponsesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerResponses
     */
    select?: CustomerResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerResponses
     */
    omit?: CustomerResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerResponsesInclude<ExtArgs> | null
    /**
     * Filter, which CustomerResponses to fetch.
     */
    where: CustomerResponsesWhereUniqueInput
  }

  /**
   * CustomerResponses findUniqueOrThrow
   */
  export type CustomerResponsesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerResponses
     */
    select?: CustomerResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerResponses
     */
    omit?: CustomerResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerResponsesInclude<ExtArgs> | null
    /**
     * Filter, which CustomerResponses to fetch.
     */
    where: CustomerResponsesWhereUniqueInput
  }

  /**
   * CustomerResponses findFirst
   */
  export type CustomerResponsesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerResponses
     */
    select?: CustomerResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerResponses
     */
    omit?: CustomerResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerResponsesInclude<ExtArgs> | null
    /**
     * Filter, which CustomerResponses to fetch.
     */
    where?: CustomerResponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerResponses to fetch.
     */
    orderBy?: CustomerResponsesOrderByWithRelationInput | CustomerResponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerResponses.
     */
    cursor?: CustomerResponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerResponses.
     */
    distinct?: CustomerResponsesScalarFieldEnum | CustomerResponsesScalarFieldEnum[]
  }

  /**
   * CustomerResponses findFirstOrThrow
   */
  export type CustomerResponsesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerResponses
     */
    select?: CustomerResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerResponses
     */
    omit?: CustomerResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerResponsesInclude<ExtArgs> | null
    /**
     * Filter, which CustomerResponses to fetch.
     */
    where?: CustomerResponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerResponses to fetch.
     */
    orderBy?: CustomerResponsesOrderByWithRelationInput | CustomerResponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerResponses.
     */
    cursor?: CustomerResponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerResponses.
     */
    distinct?: CustomerResponsesScalarFieldEnum | CustomerResponsesScalarFieldEnum[]
  }

  /**
   * CustomerResponses findMany
   */
  export type CustomerResponsesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerResponses
     */
    select?: CustomerResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerResponses
     */
    omit?: CustomerResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerResponsesInclude<ExtArgs> | null
    /**
     * Filter, which CustomerResponses to fetch.
     */
    where?: CustomerResponsesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerResponses to fetch.
     */
    orderBy?: CustomerResponsesOrderByWithRelationInput | CustomerResponsesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerResponses.
     */
    cursor?: CustomerResponsesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerResponses.
     */
    skip?: number
    distinct?: CustomerResponsesScalarFieldEnum | CustomerResponsesScalarFieldEnum[]
  }

  /**
   * CustomerResponses create
   */
  export type CustomerResponsesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerResponses
     */
    select?: CustomerResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerResponses
     */
    omit?: CustomerResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerResponsesInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerResponses.
     */
    data: XOR<CustomerResponsesCreateInput, CustomerResponsesUncheckedCreateInput>
  }

  /**
   * CustomerResponses createMany
   */
  export type CustomerResponsesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerResponses.
     */
    data: CustomerResponsesCreateManyInput | CustomerResponsesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerResponses createManyAndReturn
   */
  export type CustomerResponsesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerResponses
     */
    select?: CustomerResponsesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerResponses
     */
    omit?: CustomerResponsesOmit<ExtArgs> | null
    /**
     * The data used to create many CustomerResponses.
     */
    data: CustomerResponsesCreateManyInput | CustomerResponsesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerResponsesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerResponses update
   */
  export type CustomerResponsesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerResponses
     */
    select?: CustomerResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerResponses
     */
    omit?: CustomerResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerResponsesInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerResponses.
     */
    data: XOR<CustomerResponsesUpdateInput, CustomerResponsesUncheckedUpdateInput>
    /**
     * Choose, which CustomerResponses to update.
     */
    where: CustomerResponsesWhereUniqueInput
  }

  /**
   * CustomerResponses updateMany
   */
  export type CustomerResponsesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerResponses.
     */
    data: XOR<CustomerResponsesUpdateManyMutationInput, CustomerResponsesUncheckedUpdateManyInput>
    /**
     * Filter which CustomerResponses to update
     */
    where?: CustomerResponsesWhereInput
    /**
     * Limit how many CustomerResponses to update.
     */
    limit?: number
  }

  /**
   * CustomerResponses updateManyAndReturn
   */
  export type CustomerResponsesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerResponses
     */
    select?: CustomerResponsesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerResponses
     */
    omit?: CustomerResponsesOmit<ExtArgs> | null
    /**
     * The data used to update CustomerResponses.
     */
    data: XOR<CustomerResponsesUpdateManyMutationInput, CustomerResponsesUncheckedUpdateManyInput>
    /**
     * Filter which CustomerResponses to update
     */
    where?: CustomerResponsesWhereInput
    /**
     * Limit how many CustomerResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerResponsesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerResponses upsert
   */
  export type CustomerResponsesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerResponses
     */
    select?: CustomerResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerResponses
     */
    omit?: CustomerResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerResponsesInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerResponses to update in case it exists.
     */
    where: CustomerResponsesWhereUniqueInput
    /**
     * In case the CustomerResponses found by the `where` argument doesn't exist, create a new CustomerResponses with this data.
     */
    create: XOR<CustomerResponsesCreateInput, CustomerResponsesUncheckedCreateInput>
    /**
     * In case the CustomerResponses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerResponsesUpdateInput, CustomerResponsesUncheckedUpdateInput>
  }

  /**
   * CustomerResponses delete
   */
  export type CustomerResponsesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerResponses
     */
    select?: CustomerResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerResponses
     */
    omit?: CustomerResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerResponsesInclude<ExtArgs> | null
    /**
     * Filter which CustomerResponses to delete.
     */
    where: CustomerResponsesWhereUniqueInput
  }

  /**
   * CustomerResponses deleteMany
   */
  export type CustomerResponsesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerResponses to delete
     */
    where?: CustomerResponsesWhereInput
    /**
     * Limit how many CustomerResponses to delete.
     */
    limit?: number
  }

  /**
   * CustomerResponses without action
   */
  export type CustomerResponsesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerResponses
     */
    select?: CustomerResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerResponses
     */
    omit?: CustomerResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerResponsesInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    email: string | null
    domainId: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    email: string | null
    domainId: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    email: number
    domainId: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    email?: true
    domainId?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    email?: true
    domainId?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    email?: true
    domainId?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    email: string | null
    domainId: string | null
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    domainId?: boolean
    questions?: boolean | Customer$questionsArgs<ExtArgs>
    chatRoom?: boolean | Customer$chatRoomArgs<ExtArgs>
    Domain?: boolean | Customer$DomainArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    domainId?: boolean
    Domain?: boolean | Customer$DomainArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    domainId?: boolean
    Domain?: boolean | Customer$DomainArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    email?: boolean
    domainId?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "domainId", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Customer$questionsArgs<ExtArgs>
    chatRoom?: boolean | Customer$chatRoomArgs<ExtArgs>
    Domain?: boolean | Customer$DomainArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Domain?: boolean | Customer$DomainArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Domain?: boolean | Customer$DomainArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      questions: Prisma.$CustomerResponsesPayload<ExtArgs>[]
      chatRoom: Prisma.$ChatRoomPayload<ExtArgs>[]
      Domain: Prisma.$DomainPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      domainId: string | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Customer$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerResponsesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chatRoom<T extends Customer$chatRoomArgs<ExtArgs> = {}>(args?: Subset<T, Customer$chatRoomArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Domain<T extends Customer$DomainArgs<ExtArgs> = {}>(args?: Subset<T, Customer$DomainArgs<ExtArgs>>): Prisma__DomainClient<$Result.GetResult<Prisma.$DomainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly domainId: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data?: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.questions
   */
  export type Customer$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerResponses
     */
    select?: CustomerResponsesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerResponses
     */
    omit?: CustomerResponsesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerResponsesInclude<ExtArgs> | null
    where?: CustomerResponsesWhereInput
    orderBy?: CustomerResponsesOrderByWithRelationInput | CustomerResponsesOrderByWithRelationInput[]
    cursor?: CustomerResponsesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerResponsesScalarFieldEnum | CustomerResponsesScalarFieldEnum[]
  }

  /**
   * Customer.chatRoom
   */
  export type Customer$chatRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    cursor?: ChatRoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * Customer.Domain
   */
  export type Customer$DomainArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Domain
     */
    select?: DomainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Domain
     */
    omit?: DomainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DomainInclude<ExtArgs> | null
    where?: DomainWhereInput
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model ChatRoom
   */

  export type AggregateChatRoom = {
    _count: ChatRoomCountAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  export type ChatRoomMinAggregateOutputType = {
    id: string | null
    live: boolean | null
    mailed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    customerId: string | null
  }

  export type ChatRoomMaxAggregateOutputType = {
    id: string | null
    live: boolean | null
    mailed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    customerId: string | null
  }

  export type ChatRoomCountAggregateOutputType = {
    id: number
    live: number
    mailed: number
    createdAt: number
    updatedAt: number
    customerId: number
    _all: number
  }


  export type ChatRoomMinAggregateInputType = {
    id?: true
    live?: true
    mailed?: true
    createdAt?: true
    updatedAt?: true
    customerId?: true
  }

  export type ChatRoomMaxAggregateInputType = {
    id?: true
    live?: true
    mailed?: true
    createdAt?: true
    updatedAt?: true
    customerId?: true
  }

  export type ChatRoomCountAggregateInputType = {
    id?: true
    live?: true
    mailed?: true
    createdAt?: true
    updatedAt?: true
    customerId?: true
    _all?: true
  }

  export type ChatRoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRoom to aggregate.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatRooms
    **/
    _count?: true | ChatRoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatRoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatRoomMaxAggregateInputType
  }

  export type GetChatRoomAggregateType<T extends ChatRoomAggregateArgs> = {
        [P in keyof T & keyof AggregateChatRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatRoom[P]>
      : GetScalarType<T[P], AggregateChatRoom[P]>
  }




  export type ChatRoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatRoomWhereInput
    orderBy?: ChatRoomOrderByWithAggregationInput | ChatRoomOrderByWithAggregationInput[]
    by: ChatRoomScalarFieldEnum[] | ChatRoomScalarFieldEnum
    having?: ChatRoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatRoomCountAggregateInputType | true
    _min?: ChatRoomMinAggregateInputType
    _max?: ChatRoomMaxAggregateInputType
  }

  export type ChatRoomGroupByOutputType = {
    id: string
    live: boolean
    mailed: boolean
    createdAt: Date
    updatedAt: Date
    customerId: string | null
    _count: ChatRoomCountAggregateOutputType | null
    _min: ChatRoomMinAggregateOutputType | null
    _max: ChatRoomMaxAggregateOutputType | null
  }

  type GetChatRoomGroupByPayload<T extends ChatRoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatRoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatRoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
            : GetScalarType<T[P], ChatRoomGroupByOutputType[P]>
        }
      >
    >


  export type ChatRoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    live?: boolean
    mailed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerId?: boolean
    Customer?: boolean | ChatRoom$CustomerArgs<ExtArgs>
    message?: boolean | ChatRoom$messageArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    live?: boolean
    mailed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerId?: boolean
    Customer?: boolean | ChatRoom$CustomerArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    live?: boolean
    mailed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerId?: boolean
    Customer?: boolean | ChatRoom$CustomerArgs<ExtArgs>
  }, ExtArgs["result"]["chatRoom"]>

  export type ChatRoomSelectScalar = {
    id?: boolean
    live?: boolean
    mailed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerId?: boolean
  }

  export type ChatRoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "live" | "mailed" | "createdAt" | "updatedAt" | "customerId", ExtArgs["result"]["chatRoom"]>
  export type ChatRoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | ChatRoom$CustomerArgs<ExtArgs>
    message?: boolean | ChatRoom$messageArgs<ExtArgs>
    _count?: boolean | ChatRoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatRoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | ChatRoom$CustomerArgs<ExtArgs>
  }
  export type ChatRoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Customer?: boolean | ChatRoom$CustomerArgs<ExtArgs>
  }

  export type $ChatRoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatRoom"
    objects: {
      Customer: Prisma.$CustomerPayload<ExtArgs> | null
      message: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      live: boolean
      mailed: boolean
      createdAt: Date
      updatedAt: Date
      customerId: string | null
    }, ExtArgs["result"]["chatRoom"]>
    composites: {}
  }

  type ChatRoomGetPayload<S extends boolean | null | undefined | ChatRoomDefaultArgs> = $Result.GetResult<Prisma.$ChatRoomPayload, S>

  type ChatRoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatRoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatRoomCountAggregateInputType | true
    }

  export interface ChatRoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatRoom'], meta: { name: 'ChatRoom' } }
    /**
     * Find zero or one ChatRoom that matches the filter.
     * @param {ChatRoomFindUniqueArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatRoomFindUniqueArgs>(args: SelectSubset<T, ChatRoomFindUniqueArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatRoom that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatRoomFindUniqueOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatRoomFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatRoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatRoomFindFirstArgs>(args?: SelectSubset<T, ChatRoomFindFirstArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatRoom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindFirstOrThrowArgs} args - Arguments to find a ChatRoom
     * @example
     * // Get one ChatRoom
     * const chatRoom = await prisma.chatRoom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatRoomFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatRoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatRooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany()
     * 
     * // Get first 10 ChatRooms
     * const chatRooms = await prisma.chatRoom.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatRoomFindManyArgs>(args?: SelectSubset<T, ChatRoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatRoom.
     * @param {ChatRoomCreateArgs} args - Arguments to create a ChatRoom.
     * @example
     * // Create one ChatRoom
     * const ChatRoom = await prisma.chatRoom.create({
     *   data: {
     *     // ... data to create a ChatRoom
     *   }
     * })
     * 
     */
    create<T extends ChatRoomCreateArgs>(args: SelectSubset<T, ChatRoomCreateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatRooms.
     * @param {ChatRoomCreateManyArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatRoomCreateManyArgs>(args?: SelectSubset<T, ChatRoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatRooms and returns the data saved in the database.
     * @param {ChatRoomCreateManyAndReturnArgs} args - Arguments to create many ChatRooms.
     * @example
     * // Create many ChatRooms
     * const chatRoom = await prisma.chatRoom.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatRooms and only return the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatRoomCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatRoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatRoom.
     * @param {ChatRoomDeleteArgs} args - Arguments to delete one ChatRoom.
     * @example
     * // Delete one ChatRoom
     * const ChatRoom = await prisma.chatRoom.delete({
     *   where: {
     *     // ... filter to delete one ChatRoom
     *   }
     * })
     * 
     */
    delete<T extends ChatRoomDeleteArgs>(args: SelectSubset<T, ChatRoomDeleteArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatRoom.
     * @param {ChatRoomUpdateArgs} args - Arguments to update one ChatRoom.
     * @example
     * // Update one ChatRoom
     * const chatRoom = await prisma.chatRoom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatRoomUpdateArgs>(args: SelectSubset<T, ChatRoomUpdateArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatRooms.
     * @param {ChatRoomDeleteManyArgs} args - Arguments to filter ChatRooms to delete.
     * @example
     * // Delete a few ChatRooms
     * const { count } = await prisma.chatRoom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatRoomDeleteManyArgs>(args?: SelectSubset<T, ChatRoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatRoomUpdateManyArgs>(args: SelectSubset<T, ChatRoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatRooms and returns the data updated in the database.
     * @param {ChatRoomUpdateManyAndReturnArgs} args - Arguments to update many ChatRooms.
     * @example
     * // Update many ChatRooms
     * const chatRoom = await prisma.chatRoom.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatRooms and only return the `id`
     * const chatRoomWithIdOnly = await prisma.chatRoom.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatRoomUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatRoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatRoom.
     * @param {ChatRoomUpsertArgs} args - Arguments to update or create a ChatRoom.
     * @example
     * // Update or create a ChatRoom
     * const chatRoom = await prisma.chatRoom.upsert({
     *   create: {
     *     // ... data to create a ChatRoom
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatRoom we want to update
     *   }
     * })
     */
    upsert<T extends ChatRoomUpsertArgs>(args: SelectSubset<T, ChatRoomUpsertArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatRooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomCountArgs} args - Arguments to filter ChatRooms to count.
     * @example
     * // Count the number of ChatRooms
     * const count = await prisma.chatRoom.count({
     *   where: {
     *     // ... the filter for the ChatRooms we want to count
     *   }
     * })
    **/
    count<T extends ChatRoomCountArgs>(
      args?: Subset<T, ChatRoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatRoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatRoomAggregateArgs>(args: Subset<T, ChatRoomAggregateArgs>): Prisma.PrismaPromise<GetChatRoomAggregateType<T>>

    /**
     * Group by ChatRoom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatRoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatRoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatRoomGroupByArgs['orderBy'] }
        : { orderBy?: ChatRoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatRoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatRoom model
   */
  readonly fields: ChatRoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatRoom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatRoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Customer<T extends ChatRoom$CustomerArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$CustomerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    message<T extends ChatRoom$messageArgs<ExtArgs> = {}>(args?: Subset<T, ChatRoom$messageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatRoom model
   */
  interface ChatRoomFieldRefs {
    readonly id: FieldRef<"ChatRoom", 'String'>
    readonly live: FieldRef<"ChatRoom", 'Boolean'>
    readonly mailed: FieldRef<"ChatRoom", 'Boolean'>
    readonly createdAt: FieldRef<"ChatRoom", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatRoom", 'DateTime'>
    readonly customerId: FieldRef<"ChatRoom", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatRoom findUnique
   */
  export type ChatRoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findUniqueOrThrow
   */
  export type ChatRoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom findFirst
   */
  export type ChatRoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findFirstOrThrow
   */
  export type ChatRoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRoom to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatRooms.
     */
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom findMany
   */
  export type ChatRoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter, which ChatRooms to fetch.
     */
    where?: ChatRoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatRooms to fetch.
     */
    orderBy?: ChatRoomOrderByWithRelationInput | ChatRoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatRooms.
     */
    cursor?: ChatRoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatRooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatRooms.
     */
    skip?: number
    distinct?: ChatRoomScalarFieldEnum | ChatRoomScalarFieldEnum[]
  }

  /**
   * ChatRoom create
   */
  export type ChatRoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatRoom.
     */
    data: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
  }

  /**
   * ChatRoom createMany
   */
  export type ChatRoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatRoom createManyAndReturn
   */
  export type ChatRoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data used to create many ChatRooms.
     */
    data: ChatRoomCreateManyInput | ChatRoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRoom update
   */
  export type ChatRoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatRoom.
     */
    data: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
    /**
     * Choose, which ChatRoom to update.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom updateMany
   */
  export type ChatRoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
  }

  /**
   * ChatRoom updateManyAndReturn
   */
  export type ChatRoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * The data used to update ChatRooms.
     */
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyInput>
    /**
     * Filter which ChatRooms to update
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatRoom upsert
   */
  export type ChatRoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatRoom to update in case it exists.
     */
    where: ChatRoomWhereUniqueInput
    /**
     * In case the ChatRoom found by the `where` argument doesn't exist, create a new ChatRoom with this data.
     */
    create: XOR<ChatRoomCreateInput, ChatRoomUncheckedCreateInput>
    /**
     * In case the ChatRoom was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatRoomUpdateInput, ChatRoomUncheckedUpdateInput>
  }

  /**
   * ChatRoom delete
   */
  export type ChatRoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    /**
     * Filter which ChatRoom to delete.
     */
    where: ChatRoomWhereUniqueInput
  }

  /**
   * ChatRoom deleteMany
   */
  export type ChatRoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatRooms to delete
     */
    where?: ChatRoomWhereInput
    /**
     * Limit how many ChatRooms to delete.
     */
    limit?: number
  }

  /**
   * ChatRoom.Customer
   */
  export type ChatRoom$CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * ChatRoom.message
   */
  export type ChatRoom$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatRoom without action
   */
  export type ChatRoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    message: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    chatRoomId: string | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    message: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
    chatRoomId: string | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    message: number
    role: number
    createdAt: number
    updatedAt: number
    chatRoomId: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    message?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    chatRoomId?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    message?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    chatRoomId?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    message?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    chatRoomId?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    message: string
    role: $Enums.Role | null
    createdAt: Date
    updatedAt: Date
    chatRoomId: string | null
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatRoomId?: boolean
    ChatRoom?: boolean | ChatMessage$ChatRoomArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatRoomId?: boolean
    ChatRoom?: boolean | ChatMessage$ChatRoomArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatRoomId?: boolean
    ChatRoom?: boolean | ChatMessage$ChatRoomArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    message?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    chatRoomId?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "role" | "createdAt" | "updatedAt" | "chatRoomId", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatRoom?: boolean | ChatMessage$ChatRoomArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatRoom?: boolean | ChatMessage$ChatRoomArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ChatRoom?: boolean | ChatMessage$ChatRoomArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      ChatRoom: Prisma.$ChatRoomPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      role: $Enums.Role | null
      createdAt: Date
      updatedAt: Date
      chatRoomId: string | null
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ChatRoom<T extends ChatMessage$ChatRoomArgs<ExtArgs> = {}>(args?: Subset<T, ChatMessage$ChatRoomArgs<ExtArgs>>): Prisma__ChatRoomClient<$Result.GetResult<Prisma.$ChatRoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly message: FieldRef<"ChatMessage", 'String'>
    readonly role: FieldRef<"ChatMessage", 'Role'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly chatRoomId: FieldRef<"ChatMessage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage.ChatRoom
   */
  export type ChatMessage$ChatRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatRoom
     */
    select?: ChatRoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatRoom
     */
    omit?: ChatRoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatRoomInclude<ExtArgs> | null
    where?: ChatRoomWhereInput
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    clerkId: 'clerkId',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DomainScalarFieldEnum: {
    id: 'id',
    name: 'name',
    icon: 'icon',
    userId: 'userId'
  };

  export type DomainScalarFieldEnum = (typeof DomainScalarFieldEnum)[keyof typeof DomainScalarFieldEnum]


  export const ChatBotScalarFieldEnum: {
    id: 'id',
    welcomeMessage: 'welcomeMessage',
    icon: 'icon',
    domainId: 'domainId'
  };

  export type ChatBotScalarFieldEnum = (typeof ChatBotScalarFieldEnum)[keyof typeof ChatBotScalarFieldEnum]


  export const BillingsScalarFieldEnum: {
    id: 'id',
    plan: 'plan',
    credits: 'credits',
    userId: 'userId'
  };

  export type BillingsScalarFieldEnum = (typeof BillingsScalarFieldEnum)[keyof typeof BillingsScalarFieldEnum]


  export const HelpDeskScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answer: 'answer',
    domainId: 'domainId'
  };

  export type HelpDeskScalarFieldEnum = (typeof HelpDeskScalarFieldEnum)[keyof typeof HelpDeskScalarFieldEnum]


  export const FilterQuestionsScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answered: 'answered',
    domainId: 'domainId'
  };

  export type FilterQuestionsScalarFieldEnum = (typeof FilterQuestionsScalarFieldEnum)[keyof typeof FilterQuestionsScalarFieldEnum]


  export const CustomerResponsesScalarFieldEnum: {
    id: 'id',
    question: 'question',
    answered: 'answered',
    customerID: 'customerID'
  };

  export type CustomerResponsesScalarFieldEnum = (typeof CustomerResponsesScalarFieldEnum)[keyof typeof CustomerResponsesScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    email: 'email',
    domainId: 'domainId'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ChatRoomScalarFieldEnum: {
    id: 'id',
    live: 'live',
    mailed: 'mailed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    customerId: 'customerId'
  };

  export type ChatRoomScalarFieldEnum = (typeof ChatRoomScalarFieldEnum)[keyof typeof ChatRoomScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    message: 'message',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    chatRoomId: 'chatRoomId'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Plans'
   */
  export type EnumPlansFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plans'>
    


  /**
   * Reference to a field of type 'Plans[]'
   */
  export type ListEnumPlansFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plans[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    fullname?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    type?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    domains?: DomainListRelationFilter
    subscription?: XOR<BillingsNullableScalarRelationFilter, BillingsWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    clerkId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domains?: DomainOrderByRelationAggregateInput
    subscription?: BillingsOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullname?: StringFilter<"User"> | string
    type?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    domains?: DomainListRelationFilter
    subscription?: XOR<BillingsNullableScalarRelationFilter, BillingsWhereInput> | null
  }, "id" | "clerkId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    clerkId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    fullname?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    type?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DomainWhereInput = {
    AND?: DomainWhereInput | DomainWhereInput[]
    OR?: DomainWhereInput[]
    NOT?: DomainWhereInput | DomainWhereInput[]
    id?: UuidFilter<"Domain"> | string
    name?: StringFilter<"Domain"> | string
    icon?: StringFilter<"Domain"> | string
    userId?: UuidNullableFilter<"Domain"> | string | null
    chatBot?: XOR<ChatBotNullableScalarRelationFilter, ChatBotWhereInput> | null
    helpdesk?: HelpDeskListRelationFilter
    filterQuestions?: FilterQuestionsListRelationFilter
    customer?: CustomerListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type DomainOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    userId?: SortOrderInput | SortOrder
    chatBot?: ChatBotOrderByWithRelationInput
    helpdesk?: HelpDeskOrderByRelationAggregateInput
    filterQuestions?: FilterQuestionsOrderByRelationAggregateInput
    customer?: CustomerOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type DomainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DomainWhereInput | DomainWhereInput[]
    OR?: DomainWhereInput[]
    NOT?: DomainWhereInput | DomainWhereInput[]
    name?: StringFilter<"Domain"> | string
    icon?: StringFilter<"Domain"> | string
    userId?: UuidNullableFilter<"Domain"> | string | null
    chatBot?: XOR<ChatBotNullableScalarRelationFilter, ChatBotWhereInput> | null
    helpdesk?: HelpDeskListRelationFilter
    filterQuestions?: FilterQuestionsListRelationFilter
    customer?: CustomerListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type DomainOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: DomainCountOrderByAggregateInput
    _max?: DomainMaxOrderByAggregateInput
    _min?: DomainMinOrderByAggregateInput
  }

  export type DomainScalarWhereWithAggregatesInput = {
    AND?: DomainScalarWhereWithAggregatesInput | DomainScalarWhereWithAggregatesInput[]
    OR?: DomainScalarWhereWithAggregatesInput[]
    NOT?: DomainScalarWhereWithAggregatesInput | DomainScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Domain"> | string
    name?: StringWithAggregatesFilter<"Domain"> | string
    icon?: StringWithAggregatesFilter<"Domain"> | string
    userId?: UuidNullableWithAggregatesFilter<"Domain"> | string | null
  }

  export type ChatBotWhereInput = {
    AND?: ChatBotWhereInput | ChatBotWhereInput[]
    OR?: ChatBotWhereInput[]
    NOT?: ChatBotWhereInput | ChatBotWhereInput[]
    id?: UuidFilter<"ChatBot"> | string
    welcomeMessage?: StringNullableFilter<"ChatBot"> | string | null
    icon?: StringNullableFilter<"ChatBot"> | string | null
    domainId?: UuidNullableFilter<"ChatBot"> | string | null
    Domain?: XOR<DomainNullableScalarRelationFilter, DomainWhereInput> | null
  }

  export type ChatBotOrderByWithRelationInput = {
    id?: SortOrder
    welcomeMessage?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    domainId?: SortOrderInput | SortOrder
    Domain?: DomainOrderByWithRelationInput
  }

  export type ChatBotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    domainId?: string
    AND?: ChatBotWhereInput | ChatBotWhereInput[]
    OR?: ChatBotWhereInput[]
    NOT?: ChatBotWhereInput | ChatBotWhereInput[]
    welcomeMessage?: StringNullableFilter<"ChatBot"> | string | null
    icon?: StringNullableFilter<"ChatBot"> | string | null
    Domain?: XOR<DomainNullableScalarRelationFilter, DomainWhereInput> | null
  }, "id" | "domainId">

  export type ChatBotOrderByWithAggregationInput = {
    id?: SortOrder
    welcomeMessage?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    domainId?: SortOrderInput | SortOrder
    _count?: ChatBotCountOrderByAggregateInput
    _max?: ChatBotMaxOrderByAggregateInput
    _min?: ChatBotMinOrderByAggregateInput
  }

  export type ChatBotScalarWhereWithAggregatesInput = {
    AND?: ChatBotScalarWhereWithAggregatesInput | ChatBotScalarWhereWithAggregatesInput[]
    OR?: ChatBotScalarWhereWithAggregatesInput[]
    NOT?: ChatBotScalarWhereWithAggregatesInput | ChatBotScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ChatBot"> | string
    welcomeMessage?: StringNullableWithAggregatesFilter<"ChatBot"> | string | null
    icon?: StringNullableWithAggregatesFilter<"ChatBot"> | string | null
    domainId?: UuidNullableWithAggregatesFilter<"ChatBot"> | string | null
  }

  export type BillingsWhereInput = {
    AND?: BillingsWhereInput | BillingsWhereInput[]
    OR?: BillingsWhereInput[]
    NOT?: BillingsWhereInput | BillingsWhereInput[]
    id?: UuidFilter<"Billings"> | string
    plan?: EnumPlansFilter<"Billings"> | $Enums.Plans
    credits?: IntFilter<"Billings"> | number
    userId?: UuidNullableFilter<"Billings"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type BillingsOrderByWithRelationInput = {
    id?: SortOrder
    plan?: SortOrder
    credits?: SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type BillingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: BillingsWhereInput | BillingsWhereInput[]
    OR?: BillingsWhereInput[]
    NOT?: BillingsWhereInput | BillingsWhereInput[]
    plan?: EnumPlansFilter<"Billings"> | $Enums.Plans
    credits?: IntFilter<"Billings"> | number
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "userId">

  export type BillingsOrderByWithAggregationInput = {
    id?: SortOrder
    plan?: SortOrder
    credits?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: BillingsCountOrderByAggregateInput
    _avg?: BillingsAvgOrderByAggregateInput
    _max?: BillingsMaxOrderByAggregateInput
    _min?: BillingsMinOrderByAggregateInput
    _sum?: BillingsSumOrderByAggregateInput
  }

  export type BillingsScalarWhereWithAggregatesInput = {
    AND?: BillingsScalarWhereWithAggregatesInput | BillingsScalarWhereWithAggregatesInput[]
    OR?: BillingsScalarWhereWithAggregatesInput[]
    NOT?: BillingsScalarWhereWithAggregatesInput | BillingsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Billings"> | string
    plan?: EnumPlansWithAggregatesFilter<"Billings"> | $Enums.Plans
    credits?: IntWithAggregatesFilter<"Billings"> | number
    userId?: UuidNullableWithAggregatesFilter<"Billings"> | string | null
  }

  export type HelpDeskWhereInput = {
    AND?: HelpDeskWhereInput | HelpDeskWhereInput[]
    OR?: HelpDeskWhereInput[]
    NOT?: HelpDeskWhereInput | HelpDeskWhereInput[]
    id?: UuidFilter<"HelpDesk"> | string
    question?: StringFilter<"HelpDesk"> | string
    answer?: StringFilter<"HelpDesk"> | string
    domainId?: UuidNullableFilter<"HelpDesk"> | string | null
    Domain?: XOR<DomainNullableScalarRelationFilter, DomainWhereInput> | null
  }

  export type HelpDeskOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    domainId?: SortOrderInput | SortOrder
    Domain?: DomainOrderByWithRelationInput
  }

  export type HelpDeskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HelpDeskWhereInput | HelpDeskWhereInput[]
    OR?: HelpDeskWhereInput[]
    NOT?: HelpDeskWhereInput | HelpDeskWhereInput[]
    question?: StringFilter<"HelpDesk"> | string
    answer?: StringFilter<"HelpDesk"> | string
    domainId?: UuidNullableFilter<"HelpDesk"> | string | null
    Domain?: XOR<DomainNullableScalarRelationFilter, DomainWhereInput> | null
  }, "id">

  export type HelpDeskOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    domainId?: SortOrderInput | SortOrder
    _count?: HelpDeskCountOrderByAggregateInput
    _max?: HelpDeskMaxOrderByAggregateInput
    _min?: HelpDeskMinOrderByAggregateInput
  }

  export type HelpDeskScalarWhereWithAggregatesInput = {
    AND?: HelpDeskScalarWhereWithAggregatesInput | HelpDeskScalarWhereWithAggregatesInput[]
    OR?: HelpDeskScalarWhereWithAggregatesInput[]
    NOT?: HelpDeskScalarWhereWithAggregatesInput | HelpDeskScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"HelpDesk"> | string
    question?: StringWithAggregatesFilter<"HelpDesk"> | string
    answer?: StringWithAggregatesFilter<"HelpDesk"> | string
    domainId?: UuidNullableWithAggregatesFilter<"HelpDesk"> | string | null
  }

  export type FilterQuestionsWhereInput = {
    AND?: FilterQuestionsWhereInput | FilterQuestionsWhereInput[]
    OR?: FilterQuestionsWhereInput[]
    NOT?: FilterQuestionsWhereInput | FilterQuestionsWhereInput[]
    id?: UuidFilter<"FilterQuestions"> | string
    question?: StringFilter<"FilterQuestions"> | string
    answered?: StringFilter<"FilterQuestions"> | string
    domainId?: UuidNullableFilter<"FilterQuestions"> | string | null
    Domain?: XOR<DomainNullableScalarRelationFilter, DomainWhereInput> | null
  }

  export type FilterQuestionsOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answered?: SortOrder
    domainId?: SortOrderInput | SortOrder
    Domain?: DomainOrderByWithRelationInput
  }

  export type FilterQuestionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FilterQuestionsWhereInput | FilterQuestionsWhereInput[]
    OR?: FilterQuestionsWhereInput[]
    NOT?: FilterQuestionsWhereInput | FilterQuestionsWhereInput[]
    question?: StringFilter<"FilterQuestions"> | string
    answered?: StringFilter<"FilterQuestions"> | string
    domainId?: UuidNullableFilter<"FilterQuestions"> | string | null
    Domain?: XOR<DomainNullableScalarRelationFilter, DomainWhereInput> | null
  }, "id">

  export type FilterQuestionsOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answered?: SortOrder
    domainId?: SortOrderInput | SortOrder
    _count?: FilterQuestionsCountOrderByAggregateInput
    _max?: FilterQuestionsMaxOrderByAggregateInput
    _min?: FilterQuestionsMinOrderByAggregateInput
  }

  export type FilterQuestionsScalarWhereWithAggregatesInput = {
    AND?: FilterQuestionsScalarWhereWithAggregatesInput | FilterQuestionsScalarWhereWithAggregatesInput[]
    OR?: FilterQuestionsScalarWhereWithAggregatesInput[]
    NOT?: FilterQuestionsScalarWhereWithAggregatesInput | FilterQuestionsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FilterQuestions"> | string
    question?: StringWithAggregatesFilter<"FilterQuestions"> | string
    answered?: StringWithAggregatesFilter<"FilterQuestions"> | string
    domainId?: UuidNullableWithAggregatesFilter<"FilterQuestions"> | string | null
  }

  export type CustomerResponsesWhereInput = {
    AND?: CustomerResponsesWhereInput | CustomerResponsesWhereInput[]
    OR?: CustomerResponsesWhereInput[]
    NOT?: CustomerResponsesWhereInput | CustomerResponsesWhereInput[]
    id?: UuidFilter<"CustomerResponses"> | string
    question?: StringFilter<"CustomerResponses"> | string
    answered?: StringNullableFilter<"CustomerResponses"> | string | null
    customerID?: UuidFilter<"CustomerResponses"> | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type CustomerResponsesOrderByWithRelationInput = {
    id?: SortOrder
    question?: SortOrder
    answered?: SortOrderInput | SortOrder
    customerID?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type CustomerResponsesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerResponsesWhereInput | CustomerResponsesWhereInput[]
    OR?: CustomerResponsesWhereInput[]
    NOT?: CustomerResponsesWhereInput | CustomerResponsesWhereInput[]
    question?: StringFilter<"CustomerResponses"> | string
    answered?: StringNullableFilter<"CustomerResponses"> | string | null
    customerID?: UuidFilter<"CustomerResponses"> | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type CustomerResponsesOrderByWithAggregationInput = {
    id?: SortOrder
    question?: SortOrder
    answered?: SortOrderInput | SortOrder
    customerID?: SortOrder
    _count?: CustomerResponsesCountOrderByAggregateInput
    _max?: CustomerResponsesMaxOrderByAggregateInput
    _min?: CustomerResponsesMinOrderByAggregateInput
  }

  export type CustomerResponsesScalarWhereWithAggregatesInput = {
    AND?: CustomerResponsesScalarWhereWithAggregatesInput | CustomerResponsesScalarWhereWithAggregatesInput[]
    OR?: CustomerResponsesScalarWhereWithAggregatesInput[]
    NOT?: CustomerResponsesScalarWhereWithAggregatesInput | CustomerResponsesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"CustomerResponses"> | string
    question?: StringWithAggregatesFilter<"CustomerResponses"> | string
    answered?: StringNullableWithAggregatesFilter<"CustomerResponses"> | string | null
    customerID?: UuidWithAggregatesFilter<"CustomerResponses"> | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: UuidFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    domainId?: UuidNullableFilter<"Customer"> | string | null
    questions?: CustomerResponsesListRelationFilter
    chatRoom?: ChatRoomListRelationFilter
    Domain?: XOR<DomainNullableScalarRelationFilter, DomainWhereInput> | null
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    domainId?: SortOrderInput | SortOrder
    questions?: CustomerResponsesOrderByRelationAggregateInput
    chatRoom?: ChatRoomOrderByRelationAggregateInput
    Domain?: DomainOrderByWithRelationInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    email?: StringNullableFilter<"Customer"> | string | null
    domainId?: UuidNullableFilter<"Customer"> | string | null
    questions?: CustomerResponsesListRelationFilter
    chatRoom?: ChatRoomListRelationFilter
    Domain?: XOR<DomainNullableScalarRelationFilter, DomainWhereInput> | null
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    domainId?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    domainId?: UuidNullableWithAggregatesFilter<"Customer"> | string | null
  }

  export type ChatRoomWhereInput = {
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    id?: UuidFilter<"ChatRoom"> | string
    live?: BoolFilter<"ChatRoom"> | boolean
    mailed?: BoolFilter<"ChatRoom"> | boolean
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeFilter<"ChatRoom"> | Date | string
    customerId?: UuidNullableFilter<"ChatRoom"> | string | null
    Customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    message?: ChatMessageListRelationFilter
  }

  export type ChatRoomOrderByWithRelationInput = {
    id?: SortOrder
    live?: SortOrder
    mailed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrderInput | SortOrder
    Customer?: CustomerOrderByWithRelationInput
    message?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatRoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatRoomWhereInput | ChatRoomWhereInput[]
    OR?: ChatRoomWhereInput[]
    NOT?: ChatRoomWhereInput | ChatRoomWhereInput[]
    live?: BoolFilter<"ChatRoom"> | boolean
    mailed?: BoolFilter<"ChatRoom"> | boolean
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeFilter<"ChatRoom"> | Date | string
    customerId?: UuidNullableFilter<"ChatRoom"> | string | null
    Customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    message?: ChatMessageListRelationFilter
  }, "id">

  export type ChatRoomOrderByWithAggregationInput = {
    id?: SortOrder
    live?: SortOrder
    mailed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrderInput | SortOrder
    _count?: ChatRoomCountOrderByAggregateInput
    _max?: ChatRoomMaxOrderByAggregateInput
    _min?: ChatRoomMinOrderByAggregateInput
  }

  export type ChatRoomScalarWhereWithAggregatesInput = {
    AND?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    OR?: ChatRoomScalarWhereWithAggregatesInput[]
    NOT?: ChatRoomScalarWhereWithAggregatesInput | ChatRoomScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ChatRoom"> | string
    live?: BoolWithAggregatesFilter<"ChatRoom"> | boolean
    mailed?: BoolWithAggregatesFilter<"ChatRoom"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatRoom"> | Date | string
    customerId?: UuidNullableWithAggregatesFilter<"ChatRoom"> | string | null
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: UuidFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    role?: EnumRoleNullableFilter<"ChatMessage"> | $Enums.Role | null
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    chatRoomId?: UuidNullableFilter<"ChatMessage"> | string | null
    ChatRoom?: XOR<ChatRoomNullableScalarRelationFilter, ChatRoomWhereInput> | null
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatRoomId?: SortOrderInput | SortOrder
    ChatRoom?: ChatRoomOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    message?: StringFilter<"ChatMessage"> | string
    role?: EnumRoleNullableFilter<"ChatMessage"> | $Enums.Role | null
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    chatRoomId?: UuidNullableFilter<"ChatMessage"> | string | null
    ChatRoom?: XOR<ChatRoomNullableScalarRelationFilter, ChatRoomWhereInput> | null
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatRoomId?: SortOrderInput | SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"ChatMessage"> | string
    message?: StringWithAggregatesFilter<"ChatMessage"> | string
    role?: EnumRoleNullableWithAggregatesFilter<"ChatMessage"> | $Enums.Role | null
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    chatRoomId?: UuidNullableWithAggregatesFilter<"ChatMessage"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    fullname: string
    clerkId: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domains?: DomainCreateNestedManyWithoutUserInput
    subscription?: BillingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullname: string
    clerkId: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domains?: DomainUncheckedCreateNestedManyWithoutUserInput
    subscription?: BillingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domains?: DomainUpdateManyWithoutUserNestedInput
    subscription?: BillingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domains?: DomainUncheckedUpdateManyWithoutUserNestedInput
    subscription?: BillingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullname: string
    clerkId: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DomainCreateInput = {
    id?: string
    name: string
    icon: string
    chatBot?: ChatBotCreateNestedOneWithoutDomainInput
    helpdesk?: HelpDeskCreateNestedManyWithoutDomainInput
    filterQuestions?: FilterQuestionsCreateNestedManyWithoutDomainInput
    customer?: CustomerCreateNestedManyWithoutDomainInput
    User?: UserCreateNestedOneWithoutDomainsInput
  }

  export type DomainUncheckedCreateInput = {
    id?: string
    name: string
    icon: string
    userId?: string | null
    chatBot?: ChatBotUncheckedCreateNestedOneWithoutDomainInput
    helpdesk?: HelpDeskUncheckedCreateNestedManyWithoutDomainInput
    filterQuestions?: FilterQuestionsUncheckedCreateNestedManyWithoutDomainInput
    customer?: CustomerUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    chatBot?: ChatBotUpdateOneWithoutDomainNestedInput
    helpdesk?: HelpDeskUpdateManyWithoutDomainNestedInput
    filterQuestions?: FilterQuestionsUpdateManyWithoutDomainNestedInput
    customer?: CustomerUpdateManyWithoutDomainNestedInput
    User?: UserUpdateOneWithoutDomainsNestedInput
  }

  export type DomainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    chatBot?: ChatBotUncheckedUpdateOneWithoutDomainNestedInput
    helpdesk?: HelpDeskUncheckedUpdateManyWithoutDomainNestedInput
    filterQuestions?: FilterQuestionsUncheckedUpdateManyWithoutDomainNestedInput
    customer?: CustomerUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type DomainCreateManyInput = {
    id?: string
    name: string
    icon: string
    userId?: string | null
  }

  export type DomainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type DomainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatBotCreateInput = {
    id?: string
    welcomeMessage?: string | null
    icon?: string | null
    Domain?: DomainCreateNestedOneWithoutChatBotInput
  }

  export type ChatBotUncheckedCreateInput = {
    id?: string
    welcomeMessage?: string | null
    icon?: string | null
    domainId?: string | null
  }

  export type ChatBotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    Domain?: DomainUpdateOneWithoutChatBotNestedInput
  }

  export type ChatBotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatBotCreateManyInput = {
    id?: string
    welcomeMessage?: string | null
    icon?: string | null
    domainId?: string | null
  }

  export type ChatBotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatBotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BillingsCreateInput = {
    id?: string
    plan?: $Enums.Plans
    credits?: number
    User?: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type BillingsUncheckedCreateInput = {
    id?: string
    plan?: $Enums.Plans
    credits?: number
    userId?: string | null
  }

  export type BillingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    credits?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneWithoutSubscriptionNestedInput
  }

  export type BillingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    credits?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BillingsCreateManyInput = {
    id?: string
    plan?: $Enums.Plans
    credits?: number
    userId?: string | null
  }

  export type BillingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type BillingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    credits?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HelpDeskCreateInput = {
    id?: string
    question: string
    answer: string
    Domain?: DomainCreateNestedOneWithoutHelpdeskInput
  }

  export type HelpDeskUncheckedCreateInput = {
    id?: string
    question: string
    answer: string
    domainId?: string | null
  }

  export type HelpDeskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    Domain?: DomainUpdateOneWithoutHelpdeskNestedInput
  }

  export type HelpDeskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HelpDeskCreateManyInput = {
    id?: string
    question: string
    answer: string
    domainId?: string | null
  }

  export type HelpDeskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type HelpDeskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FilterQuestionsCreateInput = {
    id?: string
    question: string
    answered: string
    Domain?: DomainCreateNestedOneWithoutFilterQuestionsInput
  }

  export type FilterQuestionsUncheckedCreateInput = {
    id?: string
    question: string
    answered: string
    domainId?: string | null
  }

  export type FilterQuestionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: StringFieldUpdateOperationsInput | string
    Domain?: DomainUpdateOneWithoutFilterQuestionsNestedInput
  }

  export type FilterQuestionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: StringFieldUpdateOperationsInput | string
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FilterQuestionsCreateManyInput = {
    id?: string
    question: string
    answered: string
    domainId?: string | null
  }

  export type FilterQuestionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: StringFieldUpdateOperationsInput | string
  }

  export type FilterQuestionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: StringFieldUpdateOperationsInput | string
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerResponsesCreateInput = {
    id?: string
    question: string
    answered?: string | null
    customer: CustomerCreateNestedOneWithoutQuestionsInput
  }

  export type CustomerResponsesUncheckedCreateInput = {
    id?: string
    question: string
    answered?: string | null
    customerID: string
  }

  export type CustomerResponsesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type CustomerResponsesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: NullableStringFieldUpdateOperationsInput | string | null
    customerID?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerResponsesCreateManyInput = {
    id?: string
    question: string
    answered?: string | null
    customerID: string
  }

  export type CustomerResponsesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerResponsesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: NullableStringFieldUpdateOperationsInput | string | null
    customerID?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateInput = {
    id?: string
    email?: string | null
    questions?: CustomerResponsesCreateNestedManyWithoutCustomerInput
    chatRoom?: ChatRoomCreateNestedManyWithoutCustomerInput
    Domain?: DomainCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    email?: string | null
    domainId?: string | null
    questions?: CustomerResponsesUncheckedCreateNestedManyWithoutCustomerInput
    chatRoom?: ChatRoomUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: CustomerResponsesUpdateManyWithoutCustomerNestedInput
    chatRoom?: ChatRoomUpdateManyWithoutCustomerNestedInput
    Domain?: DomainUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: CustomerResponsesUncheckedUpdateManyWithoutCustomerNestedInput
    chatRoom?: ChatRoomUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    email?: string | null
    domainId?: string | null
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatRoomCreateInput = {
    id?: string
    live?: boolean
    mailed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Customer?: CustomerCreateNestedOneWithoutChatRoomInput
    message?: ChatMessageCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUncheckedCreateInput = {
    id?: string
    live?: boolean
    mailed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customerId?: string | null
    message?: ChatMessageUncheckedCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    live?: BoolFieldUpdateOperationsInput | boolean
    mailed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Customer?: CustomerUpdateOneWithoutChatRoomNestedInput
    message?: ChatMessageUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    live?: BoolFieldUpdateOperationsInput | boolean
    mailed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: ChatMessageUncheckedUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomCreateManyInput = {
    id?: string
    live?: boolean
    mailed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customerId?: string | null
  }

  export type ChatRoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    live?: BoolFieldUpdateOperationsInput | boolean
    mailed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatRoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    live?: BoolFieldUpdateOperationsInput | boolean
    mailed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageCreateInput = {
    id?: string
    message: string
    role?: $Enums.Role | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ChatRoom?: ChatRoomCreateNestedOneWithoutMessageInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    message: string
    role?: $Enums.Role | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatRoomId?: string | null
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ChatRoom?: ChatRoomUpdateOneWithoutMessageNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatRoomId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    message: string
    role?: $Enums.Role | null
    createdAt?: Date | string
    updatedAt?: Date | string
    chatRoomId?: string | null
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatRoomId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DomainListRelationFilter = {
    every?: DomainWhereInput
    some?: DomainWhereInput
    none?: DomainWhereInput
  }

  export type BillingsNullableScalarRelationFilter = {
    is?: BillingsWhereInput | null
    isNot?: BillingsWhereInput | null
  }

  export type DomainOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    clerkId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    clerkId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    clerkId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type ChatBotNullableScalarRelationFilter = {
    is?: ChatBotWhereInput | null
    isNot?: ChatBotWhereInput | null
  }

  export type HelpDeskListRelationFilter = {
    every?: HelpDeskWhereInput
    some?: HelpDeskWhereInput
    none?: HelpDeskWhereInput
  }

  export type FilterQuestionsListRelationFilter = {
    every?: FilterQuestionsWhereInput
    some?: FilterQuestionsWhereInput
    none?: FilterQuestionsWhereInput
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HelpDeskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FilterQuestionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DomainCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
  }

  export type DomainMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
  }

  export type DomainMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    userId?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DomainNullableScalarRelationFilter = {
    is?: DomainWhereInput | null
    isNot?: DomainWhereInput | null
  }

  export type ChatBotCountOrderByAggregateInput = {
    id?: SortOrder
    welcomeMessage?: SortOrder
    icon?: SortOrder
    domainId?: SortOrder
  }

  export type ChatBotMaxOrderByAggregateInput = {
    id?: SortOrder
    welcomeMessage?: SortOrder
    icon?: SortOrder
    domainId?: SortOrder
  }

  export type ChatBotMinOrderByAggregateInput = {
    id?: SortOrder
    welcomeMessage?: SortOrder
    icon?: SortOrder
    domainId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumPlansFilter<$PrismaModel = never> = {
    equals?: $Enums.Plans | EnumPlansFieldRefInput<$PrismaModel>
    in?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    not?: NestedEnumPlansFilter<$PrismaModel> | $Enums.Plans
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BillingsCountOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    credits?: SortOrder
    userId?: SortOrder
  }

  export type BillingsAvgOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type BillingsMaxOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    credits?: SortOrder
    userId?: SortOrder
  }

  export type BillingsMinOrderByAggregateInput = {
    id?: SortOrder
    plan?: SortOrder
    credits?: SortOrder
    userId?: SortOrder
  }

  export type BillingsSumOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type EnumPlansWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plans | EnumPlansFieldRefInput<$PrismaModel>
    in?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    not?: NestedEnumPlansWithAggregatesFilter<$PrismaModel> | $Enums.Plans
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlansFilter<$PrismaModel>
    _max?: NestedEnumPlansFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type HelpDeskCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    domainId?: SortOrder
  }

  export type HelpDeskMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    domainId?: SortOrder
  }

  export type HelpDeskMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    domainId?: SortOrder
  }

  export type FilterQuestionsCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answered?: SortOrder
    domainId?: SortOrder
  }

  export type FilterQuestionsMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answered?: SortOrder
    domainId?: SortOrder
  }

  export type FilterQuestionsMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answered?: SortOrder
    domainId?: SortOrder
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type CustomerResponsesCountOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answered?: SortOrder
    customerID?: SortOrder
  }

  export type CustomerResponsesMaxOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answered?: SortOrder
    customerID?: SortOrder
  }

  export type CustomerResponsesMinOrderByAggregateInput = {
    id?: SortOrder
    question?: SortOrder
    answered?: SortOrder
    customerID?: SortOrder
  }

  export type CustomerResponsesListRelationFilter = {
    every?: CustomerResponsesWhereInput
    some?: CustomerResponsesWhereInput
    none?: CustomerResponsesWhereInput
  }

  export type ChatRoomListRelationFilter = {
    every?: ChatRoomWhereInput
    some?: ChatRoomWhereInput
    none?: ChatRoomWhereInput
  }

  export type CustomerResponsesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatRoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    domainId?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    domainId?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    domainId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatRoomCountOrderByAggregateInput = {
    id?: SortOrder
    live?: SortOrder
    mailed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrder
  }

  export type ChatRoomMaxOrderByAggregateInput = {
    id?: SortOrder
    live?: SortOrder
    mailed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrder
  }

  export type ChatRoomMinOrderByAggregateInput = {
    id?: SortOrder
    live?: SortOrder
    mailed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type ChatRoomNullableScalarRelationFilter = {
    is?: ChatRoomWhereInput | null
    isNot?: ChatRoomWhereInput | null
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatRoomId?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatRoomId?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    chatRoomId?: SortOrder
  }

  export type EnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type DomainCreateNestedManyWithoutUserInput = {
    create?: XOR<DomainCreateWithoutUserInput, DomainUncheckedCreateWithoutUserInput> | DomainCreateWithoutUserInput[] | DomainUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutUserInput | DomainCreateOrConnectWithoutUserInput[]
    createMany?: DomainCreateManyUserInputEnvelope
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
  }

  export type BillingsCreateNestedOneWithoutUserInput = {
    create?: XOR<BillingsCreateWithoutUserInput, BillingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: BillingsCreateOrConnectWithoutUserInput
    connect?: BillingsWhereUniqueInput
  }

  export type DomainUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DomainCreateWithoutUserInput, DomainUncheckedCreateWithoutUserInput> | DomainCreateWithoutUserInput[] | DomainUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutUserInput | DomainCreateOrConnectWithoutUserInput[]
    createMany?: DomainCreateManyUserInputEnvelope
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
  }

  export type BillingsUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BillingsCreateWithoutUserInput, BillingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: BillingsCreateOrConnectWithoutUserInput
    connect?: BillingsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DomainUpdateManyWithoutUserNestedInput = {
    create?: XOR<DomainCreateWithoutUserInput, DomainUncheckedCreateWithoutUserInput> | DomainCreateWithoutUserInput[] | DomainUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutUserInput | DomainCreateOrConnectWithoutUserInput[]
    upsert?: DomainUpsertWithWhereUniqueWithoutUserInput | DomainUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DomainCreateManyUserInputEnvelope
    set?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    disconnect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    delete?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    update?: DomainUpdateWithWhereUniqueWithoutUserInput | DomainUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DomainUpdateManyWithWhereWithoutUserInput | DomainUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DomainScalarWhereInput | DomainScalarWhereInput[]
  }

  export type BillingsUpdateOneWithoutUserNestedInput = {
    create?: XOR<BillingsCreateWithoutUserInput, BillingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: BillingsCreateOrConnectWithoutUserInput
    upsert?: BillingsUpsertWithoutUserInput
    disconnect?: BillingsWhereInput | boolean
    delete?: BillingsWhereInput | boolean
    connect?: BillingsWhereUniqueInput
    update?: XOR<XOR<BillingsUpdateToOneWithWhereWithoutUserInput, BillingsUpdateWithoutUserInput>, BillingsUncheckedUpdateWithoutUserInput>
  }

  export type DomainUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DomainCreateWithoutUserInput, DomainUncheckedCreateWithoutUserInput> | DomainCreateWithoutUserInput[] | DomainUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DomainCreateOrConnectWithoutUserInput | DomainCreateOrConnectWithoutUserInput[]
    upsert?: DomainUpsertWithWhereUniqueWithoutUserInput | DomainUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DomainCreateManyUserInputEnvelope
    set?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    disconnect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    delete?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    connect?: DomainWhereUniqueInput | DomainWhereUniqueInput[]
    update?: DomainUpdateWithWhereUniqueWithoutUserInput | DomainUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DomainUpdateManyWithWhereWithoutUserInput | DomainUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DomainScalarWhereInput | DomainScalarWhereInput[]
  }

  export type BillingsUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BillingsCreateWithoutUserInput, BillingsUncheckedCreateWithoutUserInput>
    connectOrCreate?: BillingsCreateOrConnectWithoutUserInput
    upsert?: BillingsUpsertWithoutUserInput
    disconnect?: BillingsWhereInput | boolean
    delete?: BillingsWhereInput | boolean
    connect?: BillingsWhereUniqueInput
    update?: XOR<XOR<BillingsUpdateToOneWithWhereWithoutUserInput, BillingsUpdateWithoutUserInput>, BillingsUncheckedUpdateWithoutUserInput>
  }

  export type ChatBotCreateNestedOneWithoutDomainInput = {
    create?: XOR<ChatBotCreateWithoutDomainInput, ChatBotUncheckedCreateWithoutDomainInput>
    connectOrCreate?: ChatBotCreateOrConnectWithoutDomainInput
    connect?: ChatBotWhereUniqueInput
  }

  export type HelpDeskCreateNestedManyWithoutDomainInput = {
    create?: XOR<HelpDeskCreateWithoutDomainInput, HelpDeskUncheckedCreateWithoutDomainInput> | HelpDeskCreateWithoutDomainInput[] | HelpDeskUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: HelpDeskCreateOrConnectWithoutDomainInput | HelpDeskCreateOrConnectWithoutDomainInput[]
    createMany?: HelpDeskCreateManyDomainInputEnvelope
    connect?: HelpDeskWhereUniqueInput | HelpDeskWhereUniqueInput[]
  }

  export type FilterQuestionsCreateNestedManyWithoutDomainInput = {
    create?: XOR<FilterQuestionsCreateWithoutDomainInput, FilterQuestionsUncheckedCreateWithoutDomainInput> | FilterQuestionsCreateWithoutDomainInput[] | FilterQuestionsUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: FilterQuestionsCreateOrConnectWithoutDomainInput | FilterQuestionsCreateOrConnectWithoutDomainInput[]
    createMany?: FilterQuestionsCreateManyDomainInputEnvelope
    connect?: FilterQuestionsWhereUniqueInput | FilterQuestionsWhereUniqueInput[]
  }

  export type CustomerCreateNestedManyWithoutDomainInput = {
    create?: XOR<CustomerCreateWithoutDomainInput, CustomerUncheckedCreateWithoutDomainInput> | CustomerCreateWithoutDomainInput[] | CustomerUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutDomainInput | CustomerCreateOrConnectWithoutDomainInput[]
    createMany?: CustomerCreateManyDomainInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutDomainsInput = {
    create?: XOR<UserCreateWithoutDomainsInput, UserUncheckedCreateWithoutDomainsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDomainsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatBotUncheckedCreateNestedOneWithoutDomainInput = {
    create?: XOR<ChatBotCreateWithoutDomainInput, ChatBotUncheckedCreateWithoutDomainInput>
    connectOrCreate?: ChatBotCreateOrConnectWithoutDomainInput
    connect?: ChatBotWhereUniqueInput
  }

  export type HelpDeskUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<HelpDeskCreateWithoutDomainInput, HelpDeskUncheckedCreateWithoutDomainInput> | HelpDeskCreateWithoutDomainInput[] | HelpDeskUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: HelpDeskCreateOrConnectWithoutDomainInput | HelpDeskCreateOrConnectWithoutDomainInput[]
    createMany?: HelpDeskCreateManyDomainInputEnvelope
    connect?: HelpDeskWhereUniqueInput | HelpDeskWhereUniqueInput[]
  }

  export type FilterQuestionsUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<FilterQuestionsCreateWithoutDomainInput, FilterQuestionsUncheckedCreateWithoutDomainInput> | FilterQuestionsCreateWithoutDomainInput[] | FilterQuestionsUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: FilterQuestionsCreateOrConnectWithoutDomainInput | FilterQuestionsCreateOrConnectWithoutDomainInput[]
    createMany?: FilterQuestionsCreateManyDomainInputEnvelope
    connect?: FilterQuestionsWhereUniqueInput | FilterQuestionsWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutDomainInput = {
    create?: XOR<CustomerCreateWithoutDomainInput, CustomerUncheckedCreateWithoutDomainInput> | CustomerCreateWithoutDomainInput[] | CustomerUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutDomainInput | CustomerCreateOrConnectWithoutDomainInput[]
    createMany?: CustomerCreateManyDomainInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type ChatBotUpdateOneWithoutDomainNestedInput = {
    create?: XOR<ChatBotCreateWithoutDomainInput, ChatBotUncheckedCreateWithoutDomainInput>
    connectOrCreate?: ChatBotCreateOrConnectWithoutDomainInput
    upsert?: ChatBotUpsertWithoutDomainInput
    disconnect?: ChatBotWhereInput | boolean
    delete?: ChatBotWhereInput | boolean
    connect?: ChatBotWhereUniqueInput
    update?: XOR<XOR<ChatBotUpdateToOneWithWhereWithoutDomainInput, ChatBotUpdateWithoutDomainInput>, ChatBotUncheckedUpdateWithoutDomainInput>
  }

  export type HelpDeskUpdateManyWithoutDomainNestedInput = {
    create?: XOR<HelpDeskCreateWithoutDomainInput, HelpDeskUncheckedCreateWithoutDomainInput> | HelpDeskCreateWithoutDomainInput[] | HelpDeskUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: HelpDeskCreateOrConnectWithoutDomainInput | HelpDeskCreateOrConnectWithoutDomainInput[]
    upsert?: HelpDeskUpsertWithWhereUniqueWithoutDomainInput | HelpDeskUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: HelpDeskCreateManyDomainInputEnvelope
    set?: HelpDeskWhereUniqueInput | HelpDeskWhereUniqueInput[]
    disconnect?: HelpDeskWhereUniqueInput | HelpDeskWhereUniqueInput[]
    delete?: HelpDeskWhereUniqueInput | HelpDeskWhereUniqueInput[]
    connect?: HelpDeskWhereUniqueInput | HelpDeskWhereUniqueInput[]
    update?: HelpDeskUpdateWithWhereUniqueWithoutDomainInput | HelpDeskUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: HelpDeskUpdateManyWithWhereWithoutDomainInput | HelpDeskUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: HelpDeskScalarWhereInput | HelpDeskScalarWhereInput[]
  }

  export type FilterQuestionsUpdateManyWithoutDomainNestedInput = {
    create?: XOR<FilterQuestionsCreateWithoutDomainInput, FilterQuestionsUncheckedCreateWithoutDomainInput> | FilterQuestionsCreateWithoutDomainInput[] | FilterQuestionsUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: FilterQuestionsCreateOrConnectWithoutDomainInput | FilterQuestionsCreateOrConnectWithoutDomainInput[]
    upsert?: FilterQuestionsUpsertWithWhereUniqueWithoutDomainInput | FilterQuestionsUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: FilterQuestionsCreateManyDomainInputEnvelope
    set?: FilterQuestionsWhereUniqueInput | FilterQuestionsWhereUniqueInput[]
    disconnect?: FilterQuestionsWhereUniqueInput | FilterQuestionsWhereUniqueInput[]
    delete?: FilterQuestionsWhereUniqueInput | FilterQuestionsWhereUniqueInput[]
    connect?: FilterQuestionsWhereUniqueInput | FilterQuestionsWhereUniqueInput[]
    update?: FilterQuestionsUpdateWithWhereUniqueWithoutDomainInput | FilterQuestionsUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: FilterQuestionsUpdateManyWithWhereWithoutDomainInput | FilterQuestionsUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: FilterQuestionsScalarWhereInput | FilterQuestionsScalarWhereInput[]
  }

  export type CustomerUpdateManyWithoutDomainNestedInput = {
    create?: XOR<CustomerCreateWithoutDomainInput, CustomerUncheckedCreateWithoutDomainInput> | CustomerCreateWithoutDomainInput[] | CustomerUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutDomainInput | CustomerCreateOrConnectWithoutDomainInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutDomainInput | CustomerUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: CustomerCreateManyDomainInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutDomainInput | CustomerUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutDomainInput | CustomerUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type UserUpdateOneWithoutDomainsNestedInput = {
    create?: XOR<UserCreateWithoutDomainsInput, UserUncheckedCreateWithoutDomainsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDomainsInput
    upsert?: UserUpsertWithoutDomainsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDomainsInput, UserUpdateWithoutDomainsInput>, UserUncheckedUpdateWithoutDomainsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ChatBotUncheckedUpdateOneWithoutDomainNestedInput = {
    create?: XOR<ChatBotCreateWithoutDomainInput, ChatBotUncheckedCreateWithoutDomainInput>
    connectOrCreate?: ChatBotCreateOrConnectWithoutDomainInput
    upsert?: ChatBotUpsertWithoutDomainInput
    disconnect?: ChatBotWhereInput | boolean
    delete?: ChatBotWhereInput | boolean
    connect?: ChatBotWhereUniqueInput
    update?: XOR<XOR<ChatBotUpdateToOneWithWhereWithoutDomainInput, ChatBotUpdateWithoutDomainInput>, ChatBotUncheckedUpdateWithoutDomainInput>
  }

  export type HelpDeskUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<HelpDeskCreateWithoutDomainInput, HelpDeskUncheckedCreateWithoutDomainInput> | HelpDeskCreateWithoutDomainInput[] | HelpDeskUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: HelpDeskCreateOrConnectWithoutDomainInput | HelpDeskCreateOrConnectWithoutDomainInput[]
    upsert?: HelpDeskUpsertWithWhereUniqueWithoutDomainInput | HelpDeskUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: HelpDeskCreateManyDomainInputEnvelope
    set?: HelpDeskWhereUniqueInput | HelpDeskWhereUniqueInput[]
    disconnect?: HelpDeskWhereUniqueInput | HelpDeskWhereUniqueInput[]
    delete?: HelpDeskWhereUniqueInput | HelpDeskWhereUniqueInput[]
    connect?: HelpDeskWhereUniqueInput | HelpDeskWhereUniqueInput[]
    update?: HelpDeskUpdateWithWhereUniqueWithoutDomainInput | HelpDeskUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: HelpDeskUpdateManyWithWhereWithoutDomainInput | HelpDeskUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: HelpDeskScalarWhereInput | HelpDeskScalarWhereInput[]
  }

  export type FilterQuestionsUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<FilterQuestionsCreateWithoutDomainInput, FilterQuestionsUncheckedCreateWithoutDomainInput> | FilterQuestionsCreateWithoutDomainInput[] | FilterQuestionsUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: FilterQuestionsCreateOrConnectWithoutDomainInput | FilterQuestionsCreateOrConnectWithoutDomainInput[]
    upsert?: FilterQuestionsUpsertWithWhereUniqueWithoutDomainInput | FilterQuestionsUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: FilterQuestionsCreateManyDomainInputEnvelope
    set?: FilterQuestionsWhereUniqueInput | FilterQuestionsWhereUniqueInput[]
    disconnect?: FilterQuestionsWhereUniqueInput | FilterQuestionsWhereUniqueInput[]
    delete?: FilterQuestionsWhereUniqueInput | FilterQuestionsWhereUniqueInput[]
    connect?: FilterQuestionsWhereUniqueInput | FilterQuestionsWhereUniqueInput[]
    update?: FilterQuestionsUpdateWithWhereUniqueWithoutDomainInput | FilterQuestionsUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: FilterQuestionsUpdateManyWithWhereWithoutDomainInput | FilterQuestionsUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: FilterQuestionsScalarWhereInput | FilterQuestionsScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutDomainNestedInput = {
    create?: XOR<CustomerCreateWithoutDomainInput, CustomerUncheckedCreateWithoutDomainInput> | CustomerCreateWithoutDomainInput[] | CustomerUncheckedCreateWithoutDomainInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutDomainInput | CustomerCreateOrConnectWithoutDomainInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutDomainInput | CustomerUpsertWithWhereUniqueWithoutDomainInput[]
    createMany?: CustomerCreateManyDomainInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutDomainInput | CustomerUpdateWithWhereUniqueWithoutDomainInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutDomainInput | CustomerUpdateManyWithWhereWithoutDomainInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type DomainCreateNestedOneWithoutChatBotInput = {
    create?: XOR<DomainCreateWithoutChatBotInput, DomainUncheckedCreateWithoutChatBotInput>
    connectOrCreate?: DomainCreateOrConnectWithoutChatBotInput
    connect?: DomainWhereUniqueInput
  }

  export type DomainUpdateOneWithoutChatBotNestedInput = {
    create?: XOR<DomainCreateWithoutChatBotInput, DomainUncheckedCreateWithoutChatBotInput>
    connectOrCreate?: DomainCreateOrConnectWithoutChatBotInput
    upsert?: DomainUpsertWithoutChatBotInput
    disconnect?: DomainWhereInput | boolean
    delete?: DomainWhereInput | boolean
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutChatBotInput, DomainUpdateWithoutChatBotInput>, DomainUncheckedUpdateWithoutChatBotInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPlansFieldUpdateOperationsInput = {
    set?: $Enums.Plans
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type DomainCreateNestedOneWithoutHelpdeskInput = {
    create?: XOR<DomainCreateWithoutHelpdeskInput, DomainUncheckedCreateWithoutHelpdeskInput>
    connectOrCreate?: DomainCreateOrConnectWithoutHelpdeskInput
    connect?: DomainWhereUniqueInput
  }

  export type DomainUpdateOneWithoutHelpdeskNestedInput = {
    create?: XOR<DomainCreateWithoutHelpdeskInput, DomainUncheckedCreateWithoutHelpdeskInput>
    connectOrCreate?: DomainCreateOrConnectWithoutHelpdeskInput
    upsert?: DomainUpsertWithoutHelpdeskInput
    disconnect?: DomainWhereInput | boolean
    delete?: DomainWhereInput | boolean
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutHelpdeskInput, DomainUpdateWithoutHelpdeskInput>, DomainUncheckedUpdateWithoutHelpdeskInput>
  }

  export type DomainCreateNestedOneWithoutFilterQuestionsInput = {
    create?: XOR<DomainCreateWithoutFilterQuestionsInput, DomainUncheckedCreateWithoutFilterQuestionsInput>
    connectOrCreate?: DomainCreateOrConnectWithoutFilterQuestionsInput
    connect?: DomainWhereUniqueInput
  }

  export type DomainUpdateOneWithoutFilterQuestionsNestedInput = {
    create?: XOR<DomainCreateWithoutFilterQuestionsInput, DomainUncheckedCreateWithoutFilterQuestionsInput>
    connectOrCreate?: DomainCreateOrConnectWithoutFilterQuestionsInput
    upsert?: DomainUpsertWithoutFilterQuestionsInput
    disconnect?: DomainWhereInput | boolean
    delete?: DomainWhereInput | boolean
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutFilterQuestionsInput, DomainUpdateWithoutFilterQuestionsInput>, DomainUncheckedUpdateWithoutFilterQuestionsInput>
  }

  export type CustomerCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<CustomerCreateWithoutQuestionsInput, CustomerUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutQuestionsInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<CustomerCreateWithoutQuestionsInput, CustomerUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutQuestionsInput
    upsert?: CustomerUpsertWithoutQuestionsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutQuestionsInput, CustomerUpdateWithoutQuestionsInput>, CustomerUncheckedUpdateWithoutQuestionsInput>
  }

  export type CustomerResponsesCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerResponsesCreateWithoutCustomerInput, CustomerResponsesUncheckedCreateWithoutCustomerInput> | CustomerResponsesCreateWithoutCustomerInput[] | CustomerResponsesUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerResponsesCreateOrConnectWithoutCustomerInput | CustomerResponsesCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerResponsesCreateManyCustomerInputEnvelope
    connect?: CustomerResponsesWhereUniqueInput | CustomerResponsesWhereUniqueInput[]
  }

  export type ChatRoomCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ChatRoomCreateWithoutCustomerInput, ChatRoomUncheckedCreateWithoutCustomerInput> | ChatRoomCreateWithoutCustomerInput[] | ChatRoomUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCustomerInput | ChatRoomCreateOrConnectWithoutCustomerInput[]
    createMany?: ChatRoomCreateManyCustomerInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type DomainCreateNestedOneWithoutCustomerInput = {
    create?: XOR<DomainCreateWithoutCustomerInput, DomainUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: DomainCreateOrConnectWithoutCustomerInput
    connect?: DomainWhereUniqueInput
  }

  export type CustomerResponsesUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerResponsesCreateWithoutCustomerInput, CustomerResponsesUncheckedCreateWithoutCustomerInput> | CustomerResponsesCreateWithoutCustomerInput[] | CustomerResponsesUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerResponsesCreateOrConnectWithoutCustomerInput | CustomerResponsesCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerResponsesCreateManyCustomerInputEnvelope
    connect?: CustomerResponsesWhereUniqueInput | CustomerResponsesWhereUniqueInput[]
  }

  export type ChatRoomUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ChatRoomCreateWithoutCustomerInput, ChatRoomUncheckedCreateWithoutCustomerInput> | ChatRoomCreateWithoutCustomerInput[] | ChatRoomUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCustomerInput | ChatRoomCreateOrConnectWithoutCustomerInput[]
    createMany?: ChatRoomCreateManyCustomerInputEnvelope
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
  }

  export type CustomerResponsesUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerResponsesCreateWithoutCustomerInput, CustomerResponsesUncheckedCreateWithoutCustomerInput> | CustomerResponsesCreateWithoutCustomerInput[] | CustomerResponsesUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerResponsesCreateOrConnectWithoutCustomerInput | CustomerResponsesCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerResponsesUpsertWithWhereUniqueWithoutCustomerInput | CustomerResponsesUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerResponsesCreateManyCustomerInputEnvelope
    set?: CustomerResponsesWhereUniqueInput | CustomerResponsesWhereUniqueInput[]
    disconnect?: CustomerResponsesWhereUniqueInput | CustomerResponsesWhereUniqueInput[]
    delete?: CustomerResponsesWhereUniqueInput | CustomerResponsesWhereUniqueInput[]
    connect?: CustomerResponsesWhereUniqueInput | CustomerResponsesWhereUniqueInput[]
    update?: CustomerResponsesUpdateWithWhereUniqueWithoutCustomerInput | CustomerResponsesUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerResponsesUpdateManyWithWhereWithoutCustomerInput | CustomerResponsesUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerResponsesScalarWhereInput | CustomerResponsesScalarWhereInput[]
  }

  export type ChatRoomUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ChatRoomCreateWithoutCustomerInput, ChatRoomUncheckedCreateWithoutCustomerInput> | ChatRoomCreateWithoutCustomerInput[] | ChatRoomUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCustomerInput | ChatRoomCreateOrConnectWithoutCustomerInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutCustomerInput | ChatRoomUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ChatRoomCreateManyCustomerInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutCustomerInput | ChatRoomUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutCustomerInput | ChatRoomUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type DomainUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<DomainCreateWithoutCustomerInput, DomainUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: DomainCreateOrConnectWithoutCustomerInput
    upsert?: DomainUpsertWithoutCustomerInput
    disconnect?: DomainWhereInput | boolean
    delete?: DomainWhereInput | boolean
    connect?: DomainWhereUniqueInput
    update?: XOR<XOR<DomainUpdateToOneWithWhereWithoutCustomerInput, DomainUpdateWithoutCustomerInput>, DomainUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerResponsesUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerResponsesCreateWithoutCustomerInput, CustomerResponsesUncheckedCreateWithoutCustomerInput> | CustomerResponsesCreateWithoutCustomerInput[] | CustomerResponsesUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerResponsesCreateOrConnectWithoutCustomerInput | CustomerResponsesCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerResponsesUpsertWithWhereUniqueWithoutCustomerInput | CustomerResponsesUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerResponsesCreateManyCustomerInputEnvelope
    set?: CustomerResponsesWhereUniqueInput | CustomerResponsesWhereUniqueInput[]
    disconnect?: CustomerResponsesWhereUniqueInput | CustomerResponsesWhereUniqueInput[]
    delete?: CustomerResponsesWhereUniqueInput | CustomerResponsesWhereUniqueInput[]
    connect?: CustomerResponsesWhereUniqueInput | CustomerResponsesWhereUniqueInput[]
    update?: CustomerResponsesUpdateWithWhereUniqueWithoutCustomerInput | CustomerResponsesUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerResponsesUpdateManyWithWhereWithoutCustomerInput | CustomerResponsesUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerResponsesScalarWhereInput | CustomerResponsesScalarWhereInput[]
  }

  export type ChatRoomUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ChatRoomCreateWithoutCustomerInput, ChatRoomUncheckedCreateWithoutCustomerInput> | ChatRoomCreateWithoutCustomerInput[] | ChatRoomUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ChatRoomCreateOrConnectWithoutCustomerInput | ChatRoomCreateOrConnectWithoutCustomerInput[]
    upsert?: ChatRoomUpsertWithWhereUniqueWithoutCustomerInput | ChatRoomUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ChatRoomCreateManyCustomerInputEnvelope
    set?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    disconnect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    delete?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    connect?: ChatRoomWhereUniqueInput | ChatRoomWhereUniqueInput[]
    update?: ChatRoomUpdateWithWhereUniqueWithoutCustomerInput | ChatRoomUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ChatRoomUpdateManyWithWhereWithoutCustomerInput | ChatRoomUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutChatRoomInput = {
    create?: XOR<CustomerCreateWithoutChatRoomInput, CustomerUncheckedCreateWithoutChatRoomInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutChatRoomInput
    connect?: CustomerWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutChatRoomInput = {
    create?: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput> | ChatMessageCreateWithoutChatRoomInput[] | ChatMessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatRoomInput | ChatMessageCreateOrConnectWithoutChatRoomInput[]
    createMany?: ChatMessageCreateManyChatRoomInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutChatRoomInput = {
    create?: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput> | ChatMessageCreateWithoutChatRoomInput[] | ChatMessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatRoomInput | ChatMessageCreateOrConnectWithoutChatRoomInput[]
    createMany?: ChatMessageCreateManyChatRoomInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CustomerUpdateOneWithoutChatRoomNestedInput = {
    create?: XOR<CustomerCreateWithoutChatRoomInput, CustomerUncheckedCreateWithoutChatRoomInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutChatRoomInput
    upsert?: CustomerUpsertWithoutChatRoomInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutChatRoomInput, CustomerUpdateWithoutChatRoomInput>, CustomerUncheckedUpdateWithoutChatRoomInput>
  }

  export type ChatMessageUpdateManyWithoutChatRoomNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput> | ChatMessageCreateWithoutChatRoomInput[] | ChatMessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatRoomInput | ChatMessageCreateOrConnectWithoutChatRoomInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput | ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput[]
    createMany?: ChatMessageCreateManyChatRoomInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput | ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatRoomInput | ChatMessageUpdateManyWithWhereWithoutChatRoomInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatRoomNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput> | ChatMessageCreateWithoutChatRoomInput[] | ChatMessageUncheckedCreateWithoutChatRoomInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatRoomInput | ChatMessageCreateOrConnectWithoutChatRoomInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput | ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput[]
    createMany?: ChatMessageCreateManyChatRoomInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput | ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatRoomInput | ChatMessageUpdateManyWithWhereWithoutChatRoomInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatRoomCreateNestedOneWithoutMessageInput = {
    create?: XOR<ChatRoomCreateWithoutMessageInput, ChatRoomUncheckedCreateWithoutMessageInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessageInput
    connect?: ChatRoomWhereUniqueInput
  }

  export type NullableEnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role | null
  }

  export type ChatRoomUpdateOneWithoutMessageNestedInput = {
    create?: XOR<ChatRoomCreateWithoutMessageInput, ChatRoomUncheckedCreateWithoutMessageInput>
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessageInput
    upsert?: ChatRoomUpsertWithoutMessageInput
    disconnect?: ChatRoomWhereInput | boolean
    delete?: ChatRoomWhereInput | boolean
    connect?: ChatRoomWhereUniqueInput
    update?: XOR<XOR<ChatRoomUpdateToOneWithWhereWithoutMessageInput, ChatRoomUpdateWithoutMessageInput>, ChatRoomUncheckedUpdateWithoutMessageInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumPlansFilter<$PrismaModel = never> = {
    equals?: $Enums.Plans | EnumPlansFieldRefInput<$PrismaModel>
    in?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    not?: NestedEnumPlansFilter<$PrismaModel> | $Enums.Plans
  }

  export type NestedEnumPlansWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plans | EnumPlansFieldRefInput<$PrismaModel>
    in?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plans[] | ListEnumPlansFieldRefInput<$PrismaModel>
    not?: NestedEnumPlansWithAggregatesFilter<$PrismaModel> | $Enums.Plans
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlansFilter<$PrismaModel>
    _max?: NestedEnumPlansFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
  }

  export type NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
  }

  export type DomainCreateWithoutUserInput = {
    id?: string
    name: string
    icon: string
    chatBot?: ChatBotCreateNestedOneWithoutDomainInput
    helpdesk?: HelpDeskCreateNestedManyWithoutDomainInput
    filterQuestions?: FilterQuestionsCreateNestedManyWithoutDomainInput
    customer?: CustomerCreateNestedManyWithoutDomainInput
  }

  export type DomainUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    icon: string
    chatBot?: ChatBotUncheckedCreateNestedOneWithoutDomainInput
    helpdesk?: HelpDeskUncheckedCreateNestedManyWithoutDomainInput
    filterQuestions?: FilterQuestionsUncheckedCreateNestedManyWithoutDomainInput
    customer?: CustomerUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutUserInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutUserInput, DomainUncheckedCreateWithoutUserInput>
  }

  export type DomainCreateManyUserInputEnvelope = {
    data: DomainCreateManyUserInput | DomainCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BillingsCreateWithoutUserInput = {
    id?: string
    plan?: $Enums.Plans
    credits?: number
  }

  export type BillingsUncheckedCreateWithoutUserInput = {
    id?: string
    plan?: $Enums.Plans
    credits?: number
  }

  export type BillingsCreateOrConnectWithoutUserInput = {
    where: BillingsWhereUniqueInput
    create: XOR<BillingsCreateWithoutUserInput, BillingsUncheckedCreateWithoutUserInput>
  }

  export type DomainUpsertWithWhereUniqueWithoutUserInput = {
    where: DomainWhereUniqueInput
    update: XOR<DomainUpdateWithoutUserInput, DomainUncheckedUpdateWithoutUserInput>
    create: XOR<DomainCreateWithoutUserInput, DomainUncheckedCreateWithoutUserInput>
  }

  export type DomainUpdateWithWhereUniqueWithoutUserInput = {
    where: DomainWhereUniqueInput
    data: XOR<DomainUpdateWithoutUserInput, DomainUncheckedUpdateWithoutUserInput>
  }

  export type DomainUpdateManyWithWhereWithoutUserInput = {
    where: DomainScalarWhereInput
    data: XOR<DomainUpdateManyMutationInput, DomainUncheckedUpdateManyWithoutUserInput>
  }

  export type DomainScalarWhereInput = {
    AND?: DomainScalarWhereInput | DomainScalarWhereInput[]
    OR?: DomainScalarWhereInput[]
    NOT?: DomainScalarWhereInput | DomainScalarWhereInput[]
    id?: UuidFilter<"Domain"> | string
    name?: StringFilter<"Domain"> | string
    icon?: StringFilter<"Domain"> | string
    userId?: UuidNullableFilter<"Domain"> | string | null
  }

  export type BillingsUpsertWithoutUserInput = {
    update: XOR<BillingsUpdateWithoutUserInput, BillingsUncheckedUpdateWithoutUserInput>
    create: XOR<BillingsCreateWithoutUserInput, BillingsUncheckedCreateWithoutUserInput>
    where?: BillingsWhereInput
  }

  export type BillingsUpdateToOneWithWhereWithoutUserInput = {
    where?: BillingsWhereInput
    data: XOR<BillingsUpdateWithoutUserInput, BillingsUncheckedUpdateWithoutUserInput>
  }

  export type BillingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type BillingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlansFieldUpdateOperationsInput | $Enums.Plans
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type ChatBotCreateWithoutDomainInput = {
    id?: string
    welcomeMessage?: string | null
    icon?: string | null
  }

  export type ChatBotUncheckedCreateWithoutDomainInput = {
    id?: string
    welcomeMessage?: string | null
    icon?: string | null
  }

  export type ChatBotCreateOrConnectWithoutDomainInput = {
    where: ChatBotWhereUniqueInput
    create: XOR<ChatBotCreateWithoutDomainInput, ChatBotUncheckedCreateWithoutDomainInput>
  }

  export type HelpDeskCreateWithoutDomainInput = {
    id?: string
    question: string
    answer: string
  }

  export type HelpDeskUncheckedCreateWithoutDomainInput = {
    id?: string
    question: string
    answer: string
  }

  export type HelpDeskCreateOrConnectWithoutDomainInput = {
    where: HelpDeskWhereUniqueInput
    create: XOR<HelpDeskCreateWithoutDomainInput, HelpDeskUncheckedCreateWithoutDomainInput>
  }

  export type HelpDeskCreateManyDomainInputEnvelope = {
    data: HelpDeskCreateManyDomainInput | HelpDeskCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type FilterQuestionsCreateWithoutDomainInput = {
    id?: string
    question: string
    answered: string
  }

  export type FilterQuestionsUncheckedCreateWithoutDomainInput = {
    id?: string
    question: string
    answered: string
  }

  export type FilterQuestionsCreateOrConnectWithoutDomainInput = {
    where: FilterQuestionsWhereUniqueInput
    create: XOR<FilterQuestionsCreateWithoutDomainInput, FilterQuestionsUncheckedCreateWithoutDomainInput>
  }

  export type FilterQuestionsCreateManyDomainInputEnvelope = {
    data: FilterQuestionsCreateManyDomainInput | FilterQuestionsCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutDomainInput = {
    id?: string
    email?: string | null
    questions?: CustomerResponsesCreateNestedManyWithoutCustomerInput
    chatRoom?: ChatRoomCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutDomainInput = {
    id?: string
    email?: string | null
    questions?: CustomerResponsesUncheckedCreateNestedManyWithoutCustomerInput
    chatRoom?: ChatRoomUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutDomainInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutDomainInput, CustomerUncheckedCreateWithoutDomainInput>
  }

  export type CustomerCreateManyDomainInputEnvelope = {
    data: CustomerCreateManyDomainInput | CustomerCreateManyDomainInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDomainsInput = {
    id?: string
    fullname: string
    clerkId: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: BillingsCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDomainsInput = {
    id?: string
    fullname: string
    clerkId: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription?: BillingsUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDomainsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDomainsInput, UserUncheckedCreateWithoutDomainsInput>
  }

  export type ChatBotUpsertWithoutDomainInput = {
    update: XOR<ChatBotUpdateWithoutDomainInput, ChatBotUncheckedUpdateWithoutDomainInput>
    create: XOR<ChatBotCreateWithoutDomainInput, ChatBotUncheckedCreateWithoutDomainInput>
    where?: ChatBotWhereInput
  }

  export type ChatBotUpdateToOneWithWhereWithoutDomainInput = {
    where?: ChatBotWhereInput
    data: XOR<ChatBotUpdateWithoutDomainInput, ChatBotUncheckedUpdateWithoutDomainInput>
  }

  export type ChatBotUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatBotUncheckedUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    welcomeMessage?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HelpDeskUpsertWithWhereUniqueWithoutDomainInput = {
    where: HelpDeskWhereUniqueInput
    update: XOR<HelpDeskUpdateWithoutDomainInput, HelpDeskUncheckedUpdateWithoutDomainInput>
    create: XOR<HelpDeskCreateWithoutDomainInput, HelpDeskUncheckedCreateWithoutDomainInput>
  }

  export type HelpDeskUpdateWithWhereUniqueWithoutDomainInput = {
    where: HelpDeskWhereUniqueInput
    data: XOR<HelpDeskUpdateWithoutDomainInput, HelpDeskUncheckedUpdateWithoutDomainInput>
  }

  export type HelpDeskUpdateManyWithWhereWithoutDomainInput = {
    where: HelpDeskScalarWhereInput
    data: XOR<HelpDeskUpdateManyMutationInput, HelpDeskUncheckedUpdateManyWithoutDomainInput>
  }

  export type HelpDeskScalarWhereInput = {
    AND?: HelpDeskScalarWhereInput | HelpDeskScalarWhereInput[]
    OR?: HelpDeskScalarWhereInput[]
    NOT?: HelpDeskScalarWhereInput | HelpDeskScalarWhereInput[]
    id?: UuidFilter<"HelpDesk"> | string
    question?: StringFilter<"HelpDesk"> | string
    answer?: StringFilter<"HelpDesk"> | string
    domainId?: UuidNullableFilter<"HelpDesk"> | string | null
  }

  export type FilterQuestionsUpsertWithWhereUniqueWithoutDomainInput = {
    where: FilterQuestionsWhereUniqueInput
    update: XOR<FilterQuestionsUpdateWithoutDomainInput, FilterQuestionsUncheckedUpdateWithoutDomainInput>
    create: XOR<FilterQuestionsCreateWithoutDomainInput, FilterQuestionsUncheckedCreateWithoutDomainInput>
  }

  export type FilterQuestionsUpdateWithWhereUniqueWithoutDomainInput = {
    where: FilterQuestionsWhereUniqueInput
    data: XOR<FilterQuestionsUpdateWithoutDomainInput, FilterQuestionsUncheckedUpdateWithoutDomainInput>
  }

  export type FilterQuestionsUpdateManyWithWhereWithoutDomainInput = {
    where: FilterQuestionsScalarWhereInput
    data: XOR<FilterQuestionsUpdateManyMutationInput, FilterQuestionsUncheckedUpdateManyWithoutDomainInput>
  }

  export type FilterQuestionsScalarWhereInput = {
    AND?: FilterQuestionsScalarWhereInput | FilterQuestionsScalarWhereInput[]
    OR?: FilterQuestionsScalarWhereInput[]
    NOT?: FilterQuestionsScalarWhereInput | FilterQuestionsScalarWhereInput[]
    id?: UuidFilter<"FilterQuestions"> | string
    question?: StringFilter<"FilterQuestions"> | string
    answered?: StringFilter<"FilterQuestions"> | string
    domainId?: UuidNullableFilter<"FilterQuestions"> | string | null
  }

  export type CustomerUpsertWithWhereUniqueWithoutDomainInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutDomainInput, CustomerUncheckedUpdateWithoutDomainInput>
    create: XOR<CustomerCreateWithoutDomainInput, CustomerUncheckedCreateWithoutDomainInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutDomainInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutDomainInput, CustomerUncheckedUpdateWithoutDomainInput>
  }

  export type CustomerUpdateManyWithWhereWithoutDomainInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutDomainInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: UuidFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    domainId?: UuidNullableFilter<"Customer"> | string | null
  }

  export type UserUpsertWithoutDomainsInput = {
    update: XOR<UserUpdateWithoutDomainsInput, UserUncheckedUpdateWithoutDomainsInput>
    create: XOR<UserCreateWithoutDomainsInput, UserUncheckedCreateWithoutDomainsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDomainsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDomainsInput, UserUncheckedUpdateWithoutDomainsInput>
  }

  export type UserUpdateWithoutDomainsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: BillingsUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDomainsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: BillingsUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DomainCreateWithoutChatBotInput = {
    id?: string
    name: string
    icon: string
    helpdesk?: HelpDeskCreateNestedManyWithoutDomainInput
    filterQuestions?: FilterQuestionsCreateNestedManyWithoutDomainInput
    customer?: CustomerCreateNestedManyWithoutDomainInput
    User?: UserCreateNestedOneWithoutDomainsInput
  }

  export type DomainUncheckedCreateWithoutChatBotInput = {
    id?: string
    name: string
    icon: string
    userId?: string | null
    helpdesk?: HelpDeskUncheckedCreateNestedManyWithoutDomainInput
    filterQuestions?: FilterQuestionsUncheckedCreateNestedManyWithoutDomainInput
    customer?: CustomerUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutChatBotInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutChatBotInput, DomainUncheckedCreateWithoutChatBotInput>
  }

  export type DomainUpsertWithoutChatBotInput = {
    update: XOR<DomainUpdateWithoutChatBotInput, DomainUncheckedUpdateWithoutChatBotInput>
    create: XOR<DomainCreateWithoutChatBotInput, DomainUncheckedCreateWithoutChatBotInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutChatBotInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutChatBotInput, DomainUncheckedUpdateWithoutChatBotInput>
  }

  export type DomainUpdateWithoutChatBotInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    helpdesk?: HelpDeskUpdateManyWithoutDomainNestedInput
    filterQuestions?: FilterQuestionsUpdateManyWithoutDomainNestedInput
    customer?: CustomerUpdateManyWithoutDomainNestedInput
    User?: UserUpdateOneWithoutDomainsNestedInput
  }

  export type DomainUncheckedUpdateWithoutChatBotInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    helpdesk?: HelpDeskUncheckedUpdateManyWithoutDomainNestedInput
    filterQuestions?: FilterQuestionsUncheckedUpdateManyWithoutDomainNestedInput
    customer?: CustomerUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    fullname: string
    clerkId: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domains?: DomainCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    fullname: string
    clerkId: string
    type: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domains?: DomainUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domains?: DomainUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domains?: DomainUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DomainCreateWithoutHelpdeskInput = {
    id?: string
    name: string
    icon: string
    chatBot?: ChatBotCreateNestedOneWithoutDomainInput
    filterQuestions?: FilterQuestionsCreateNestedManyWithoutDomainInput
    customer?: CustomerCreateNestedManyWithoutDomainInput
    User?: UserCreateNestedOneWithoutDomainsInput
  }

  export type DomainUncheckedCreateWithoutHelpdeskInput = {
    id?: string
    name: string
    icon: string
    userId?: string | null
    chatBot?: ChatBotUncheckedCreateNestedOneWithoutDomainInput
    filterQuestions?: FilterQuestionsUncheckedCreateNestedManyWithoutDomainInput
    customer?: CustomerUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutHelpdeskInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutHelpdeskInput, DomainUncheckedCreateWithoutHelpdeskInput>
  }

  export type DomainUpsertWithoutHelpdeskInput = {
    update: XOR<DomainUpdateWithoutHelpdeskInput, DomainUncheckedUpdateWithoutHelpdeskInput>
    create: XOR<DomainCreateWithoutHelpdeskInput, DomainUncheckedCreateWithoutHelpdeskInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutHelpdeskInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutHelpdeskInput, DomainUncheckedUpdateWithoutHelpdeskInput>
  }

  export type DomainUpdateWithoutHelpdeskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    chatBot?: ChatBotUpdateOneWithoutDomainNestedInput
    filterQuestions?: FilterQuestionsUpdateManyWithoutDomainNestedInput
    customer?: CustomerUpdateManyWithoutDomainNestedInput
    User?: UserUpdateOneWithoutDomainsNestedInput
  }

  export type DomainUncheckedUpdateWithoutHelpdeskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    chatBot?: ChatBotUncheckedUpdateOneWithoutDomainNestedInput
    filterQuestions?: FilterQuestionsUncheckedUpdateManyWithoutDomainNestedInput
    customer?: CustomerUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type DomainCreateWithoutFilterQuestionsInput = {
    id?: string
    name: string
    icon: string
    chatBot?: ChatBotCreateNestedOneWithoutDomainInput
    helpdesk?: HelpDeskCreateNestedManyWithoutDomainInput
    customer?: CustomerCreateNestedManyWithoutDomainInput
    User?: UserCreateNestedOneWithoutDomainsInput
  }

  export type DomainUncheckedCreateWithoutFilterQuestionsInput = {
    id?: string
    name: string
    icon: string
    userId?: string | null
    chatBot?: ChatBotUncheckedCreateNestedOneWithoutDomainInput
    helpdesk?: HelpDeskUncheckedCreateNestedManyWithoutDomainInput
    customer?: CustomerUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutFilterQuestionsInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutFilterQuestionsInput, DomainUncheckedCreateWithoutFilterQuestionsInput>
  }

  export type DomainUpsertWithoutFilterQuestionsInput = {
    update: XOR<DomainUpdateWithoutFilterQuestionsInput, DomainUncheckedUpdateWithoutFilterQuestionsInput>
    create: XOR<DomainCreateWithoutFilterQuestionsInput, DomainUncheckedCreateWithoutFilterQuestionsInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutFilterQuestionsInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutFilterQuestionsInput, DomainUncheckedUpdateWithoutFilterQuestionsInput>
  }

  export type DomainUpdateWithoutFilterQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    chatBot?: ChatBotUpdateOneWithoutDomainNestedInput
    helpdesk?: HelpDeskUpdateManyWithoutDomainNestedInput
    customer?: CustomerUpdateManyWithoutDomainNestedInput
    User?: UserUpdateOneWithoutDomainsNestedInput
  }

  export type DomainUncheckedUpdateWithoutFilterQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    chatBot?: ChatBotUncheckedUpdateOneWithoutDomainNestedInput
    helpdesk?: HelpDeskUncheckedUpdateManyWithoutDomainNestedInput
    customer?: CustomerUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type CustomerCreateWithoutQuestionsInput = {
    id?: string
    email?: string | null
    chatRoom?: ChatRoomCreateNestedManyWithoutCustomerInput
    Domain?: DomainCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutQuestionsInput = {
    id?: string
    email?: string | null
    domainId?: string | null
    chatRoom?: ChatRoomUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutQuestionsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutQuestionsInput, CustomerUncheckedCreateWithoutQuestionsInput>
  }

  export type CustomerUpsertWithoutQuestionsInput = {
    update: XOR<CustomerUpdateWithoutQuestionsInput, CustomerUncheckedUpdateWithoutQuestionsInput>
    create: XOR<CustomerCreateWithoutQuestionsInput, CustomerUncheckedCreateWithoutQuestionsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutQuestionsInput, CustomerUncheckedUpdateWithoutQuestionsInput>
  }

  export type CustomerUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    chatRoom?: ChatRoomUpdateManyWithoutCustomerNestedInput
    Domain?: DomainUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
    chatRoom?: ChatRoomUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerResponsesCreateWithoutCustomerInput = {
    id?: string
    question: string
    answered?: string | null
  }

  export type CustomerResponsesUncheckedCreateWithoutCustomerInput = {
    id?: string
    question: string
    answered?: string | null
  }

  export type CustomerResponsesCreateOrConnectWithoutCustomerInput = {
    where: CustomerResponsesWhereUniqueInput
    create: XOR<CustomerResponsesCreateWithoutCustomerInput, CustomerResponsesUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerResponsesCreateManyCustomerInputEnvelope = {
    data: CustomerResponsesCreateManyCustomerInput | CustomerResponsesCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ChatRoomCreateWithoutCustomerInput = {
    id?: string
    live?: boolean
    mailed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    message?: ChatMessageCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutCustomerInput = {
    id?: string
    live?: boolean
    mailed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    message?: ChatMessageUncheckedCreateNestedManyWithoutChatRoomInput
  }

  export type ChatRoomCreateOrConnectWithoutCustomerInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutCustomerInput, ChatRoomUncheckedCreateWithoutCustomerInput>
  }

  export type ChatRoomCreateManyCustomerInputEnvelope = {
    data: ChatRoomCreateManyCustomerInput | ChatRoomCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type DomainCreateWithoutCustomerInput = {
    id?: string
    name: string
    icon: string
    chatBot?: ChatBotCreateNestedOneWithoutDomainInput
    helpdesk?: HelpDeskCreateNestedManyWithoutDomainInput
    filterQuestions?: FilterQuestionsCreateNestedManyWithoutDomainInput
    User?: UserCreateNestedOneWithoutDomainsInput
  }

  export type DomainUncheckedCreateWithoutCustomerInput = {
    id?: string
    name: string
    icon: string
    userId?: string | null
    chatBot?: ChatBotUncheckedCreateNestedOneWithoutDomainInput
    helpdesk?: HelpDeskUncheckedCreateNestedManyWithoutDomainInput
    filterQuestions?: FilterQuestionsUncheckedCreateNestedManyWithoutDomainInput
  }

  export type DomainCreateOrConnectWithoutCustomerInput = {
    where: DomainWhereUniqueInput
    create: XOR<DomainCreateWithoutCustomerInput, DomainUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerResponsesUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerResponsesWhereUniqueInput
    update: XOR<CustomerResponsesUpdateWithoutCustomerInput, CustomerResponsesUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerResponsesCreateWithoutCustomerInput, CustomerResponsesUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerResponsesUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerResponsesWhereUniqueInput
    data: XOR<CustomerResponsesUpdateWithoutCustomerInput, CustomerResponsesUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerResponsesUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerResponsesScalarWhereInput
    data: XOR<CustomerResponsesUpdateManyMutationInput, CustomerResponsesUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerResponsesScalarWhereInput = {
    AND?: CustomerResponsesScalarWhereInput | CustomerResponsesScalarWhereInput[]
    OR?: CustomerResponsesScalarWhereInput[]
    NOT?: CustomerResponsesScalarWhereInput | CustomerResponsesScalarWhereInput[]
    id?: UuidFilter<"CustomerResponses"> | string
    question?: StringFilter<"CustomerResponses"> | string
    answered?: StringNullableFilter<"CustomerResponses"> | string | null
    customerID?: UuidFilter<"CustomerResponses"> | string
  }

  export type ChatRoomUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ChatRoomWhereUniqueInput
    update: XOR<ChatRoomUpdateWithoutCustomerInput, ChatRoomUncheckedUpdateWithoutCustomerInput>
    create: XOR<ChatRoomCreateWithoutCustomerInput, ChatRoomUncheckedCreateWithoutCustomerInput>
  }

  export type ChatRoomUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ChatRoomWhereUniqueInput
    data: XOR<ChatRoomUpdateWithoutCustomerInput, ChatRoomUncheckedUpdateWithoutCustomerInput>
  }

  export type ChatRoomUpdateManyWithWhereWithoutCustomerInput = {
    where: ChatRoomScalarWhereInput
    data: XOR<ChatRoomUpdateManyMutationInput, ChatRoomUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ChatRoomScalarWhereInput = {
    AND?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    OR?: ChatRoomScalarWhereInput[]
    NOT?: ChatRoomScalarWhereInput | ChatRoomScalarWhereInput[]
    id?: UuidFilter<"ChatRoom"> | string
    live?: BoolFilter<"ChatRoom"> | boolean
    mailed?: BoolFilter<"ChatRoom"> | boolean
    createdAt?: DateTimeFilter<"ChatRoom"> | Date | string
    updatedAt?: DateTimeFilter<"ChatRoom"> | Date | string
    customerId?: UuidNullableFilter<"ChatRoom"> | string | null
  }

  export type DomainUpsertWithoutCustomerInput = {
    update: XOR<DomainUpdateWithoutCustomerInput, DomainUncheckedUpdateWithoutCustomerInput>
    create: XOR<DomainCreateWithoutCustomerInput, DomainUncheckedCreateWithoutCustomerInput>
    where?: DomainWhereInput
  }

  export type DomainUpdateToOneWithWhereWithoutCustomerInput = {
    where?: DomainWhereInput
    data: XOR<DomainUpdateWithoutCustomerInput, DomainUncheckedUpdateWithoutCustomerInput>
  }

  export type DomainUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    chatBot?: ChatBotUpdateOneWithoutDomainNestedInput
    helpdesk?: HelpDeskUpdateManyWithoutDomainNestedInput
    filterQuestions?: FilterQuestionsUpdateManyWithoutDomainNestedInput
    User?: UserUpdateOneWithoutDomainsNestedInput
  }

  export type DomainUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    chatBot?: ChatBotUncheckedUpdateOneWithoutDomainNestedInput
    helpdesk?: HelpDeskUncheckedUpdateManyWithoutDomainNestedInput
    filterQuestions?: FilterQuestionsUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type CustomerCreateWithoutChatRoomInput = {
    id?: string
    email?: string | null
    questions?: CustomerResponsesCreateNestedManyWithoutCustomerInput
    Domain?: DomainCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutChatRoomInput = {
    id?: string
    email?: string | null
    domainId?: string | null
    questions?: CustomerResponsesUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutChatRoomInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutChatRoomInput, CustomerUncheckedCreateWithoutChatRoomInput>
  }

  export type ChatMessageCreateWithoutChatRoomInput = {
    id?: string
    message: string
    role?: $Enums.Role | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageUncheckedCreateWithoutChatRoomInput = {
    id?: string
    message: string
    role?: $Enums.Role | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutChatRoomInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput>
  }

  export type ChatMessageCreateManyChatRoomInputEnvelope = {
    data: ChatMessageCreateManyChatRoomInput | ChatMessageCreateManyChatRoomInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutChatRoomInput = {
    update: XOR<CustomerUpdateWithoutChatRoomInput, CustomerUncheckedUpdateWithoutChatRoomInput>
    create: XOR<CustomerCreateWithoutChatRoomInput, CustomerUncheckedCreateWithoutChatRoomInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutChatRoomInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutChatRoomInput, CustomerUncheckedUpdateWithoutChatRoomInput>
  }

  export type CustomerUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: CustomerResponsesUpdateManyWithoutCustomerNestedInput
    Domain?: DomainUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    domainId?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: CustomerResponsesUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutChatRoomInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutChatRoomInput, ChatMessageUncheckedUpdateWithoutChatRoomInput>
    create: XOR<ChatMessageCreateWithoutChatRoomInput, ChatMessageUncheckedCreateWithoutChatRoomInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutChatRoomInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutChatRoomInput, ChatMessageUncheckedUpdateWithoutChatRoomInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutChatRoomInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutChatRoomInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: UuidFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    role?: EnumRoleNullableFilter<"ChatMessage"> | $Enums.Role | null
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    chatRoomId?: UuidNullableFilter<"ChatMessage"> | string | null
  }

  export type ChatRoomCreateWithoutMessageInput = {
    id?: string
    live?: boolean
    mailed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Customer?: CustomerCreateNestedOneWithoutChatRoomInput
  }

  export type ChatRoomUncheckedCreateWithoutMessageInput = {
    id?: string
    live?: boolean
    mailed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customerId?: string | null
  }

  export type ChatRoomCreateOrConnectWithoutMessageInput = {
    where: ChatRoomWhereUniqueInput
    create: XOR<ChatRoomCreateWithoutMessageInput, ChatRoomUncheckedCreateWithoutMessageInput>
  }

  export type ChatRoomUpsertWithoutMessageInput = {
    update: XOR<ChatRoomUpdateWithoutMessageInput, ChatRoomUncheckedUpdateWithoutMessageInput>
    create: XOR<ChatRoomCreateWithoutMessageInput, ChatRoomUncheckedCreateWithoutMessageInput>
    where?: ChatRoomWhereInput
  }

  export type ChatRoomUpdateToOneWithWhereWithoutMessageInput = {
    where?: ChatRoomWhereInput
    data: XOR<ChatRoomUpdateWithoutMessageInput, ChatRoomUncheckedUpdateWithoutMessageInput>
  }

  export type ChatRoomUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    live?: BoolFieldUpdateOperationsInput | boolean
    mailed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Customer?: CustomerUpdateOneWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    live?: BoolFieldUpdateOperationsInput | boolean
    mailed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DomainCreateManyUserInput = {
    id?: string
    name: string
    icon: string
  }

  export type DomainUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    chatBot?: ChatBotUpdateOneWithoutDomainNestedInput
    helpdesk?: HelpDeskUpdateManyWithoutDomainNestedInput
    filterQuestions?: FilterQuestionsUpdateManyWithoutDomainNestedInput
    customer?: CustomerUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    chatBot?: ChatBotUncheckedUpdateOneWithoutDomainNestedInput
    helpdesk?: HelpDeskUncheckedUpdateManyWithoutDomainNestedInput
    filterQuestions?: FilterQuestionsUncheckedUpdateManyWithoutDomainNestedInput
    customer?: CustomerUncheckedUpdateManyWithoutDomainNestedInput
  }

  export type DomainUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type HelpDeskCreateManyDomainInput = {
    id?: string
    question: string
    answer: string
  }

  export type FilterQuestionsCreateManyDomainInput = {
    id?: string
    question: string
    answered: string
  }

  export type CustomerCreateManyDomainInput = {
    id?: string
    email?: string | null
  }

  export type HelpDeskUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type HelpDeskUncheckedUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type HelpDeskUncheckedUpdateManyWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type FilterQuestionsUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: StringFieldUpdateOperationsInput | string
  }

  export type FilterQuestionsUncheckedUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: StringFieldUpdateOperationsInput | string
  }

  export type FilterQuestionsUncheckedUpdateManyWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: CustomerResponsesUpdateManyWithoutCustomerNestedInput
    chatRoom?: ChatRoomUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    questions?: CustomerResponsesUncheckedUpdateManyWithoutCustomerNestedInput
    chatRoom?: ChatRoomUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutDomainInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerResponsesCreateManyCustomerInput = {
    id?: string
    question: string
    answered?: string | null
  }

  export type ChatRoomCreateManyCustomerInput = {
    id?: string
    live?: boolean
    mailed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerResponsesUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerResponsesUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerResponsesUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answered?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatRoomUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    live?: BoolFieldUpdateOperationsInput | boolean
    mailed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: ChatMessageUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    live?: BoolFieldUpdateOperationsInput | boolean
    mailed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: ChatMessageUncheckedUpdateManyWithoutChatRoomNestedInput
  }

  export type ChatRoomUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    live?: BoolFieldUpdateOperationsInput | boolean
    mailed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyChatRoomInput = {
    id?: string
    message: string
    role?: $Enums.Role | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}