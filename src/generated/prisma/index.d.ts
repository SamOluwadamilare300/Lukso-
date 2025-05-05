
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
 * Model AIModel
 * 
 */
export type AIModel = $Result.DefaultSelection<Prisma.$AIModelPayload>
/**
 * Model AIPrediction
 * 
 */
export type AIPrediction = $Result.DefaultSelection<Prisma.$AIPredictionPayload>
/**
 * Model UserModelPreference
 * 
 */
export type UserModelPreference = $Result.DefaultSelection<Prisma.$UserModelPreferencePayload>
/**
 * Model Signal
 * 
 */
export type Signal = $Result.DefaultSelection<Prisma.$SignalPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AIModels
 * const aIModels = await prisma.aIModel.findMany()
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
   * // Fetch zero or more AIModels
   * const aIModels = await prisma.aIModel.findMany()
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
   * `prisma.aIModel`: Exposes CRUD operations for the **AIModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIModels
    * const aIModels = await prisma.aIModel.findMany()
    * ```
    */
  get aIModel(): Prisma.AIModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIPrediction`: Exposes CRUD operations for the **AIPrediction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIPredictions
    * const aIPredictions = await prisma.aIPrediction.findMany()
    * ```
    */
  get aIPrediction(): Prisma.AIPredictionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userModelPreference`: Exposes CRUD operations for the **UserModelPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserModelPreferences
    * const userModelPreferences = await prisma.userModelPreference.findMany()
    * ```
    */
  get userModelPreference(): Prisma.UserModelPreferenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.signal`: Exposes CRUD operations for the **Signal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Signals
    * const signals = await prisma.signal.findMany()
    * ```
    */
  get signal(): Prisma.SignalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs, ClientOptions>;
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
    AIModel: 'AIModel',
    AIPrediction: 'AIPrediction',
    UserModelPreference: 'UserModelPreference',
    Signal: 'Signal',
    Comment: 'Comment',
    Like: 'Like'
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
      modelProps: "aIModel" | "aIPrediction" | "userModelPreference" | "signal" | "comment" | "like"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AIModel: {
        payload: Prisma.$AIModelPayload<ExtArgs>
        fields: Prisma.AIModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload>
          }
          findFirst: {
            args: Prisma.AIModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload>
          }
          findMany: {
            args: Prisma.AIModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload>[]
          }
          create: {
            args: Prisma.AIModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload>
          }
          createMany: {
            args: Prisma.AIModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload>[]
          }
          delete: {
            args: Prisma.AIModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload>
          }
          update: {
            args: Prisma.AIModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload>
          }
          deleteMany: {
            args: Prisma.AIModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload>[]
          }
          upsert: {
            args: Prisma.AIModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIModelPayload>
          }
          aggregate: {
            args: Prisma.AIModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIModel>
          }
          groupBy: {
            args: Prisma.AIModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIModelCountArgs<ExtArgs>
            result: $Utils.Optional<AIModelCountAggregateOutputType> | number
          }
        }
      }
      AIPrediction: {
        payload: Prisma.$AIPredictionPayload<ExtArgs>
        fields: Prisma.AIPredictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIPredictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPredictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIPredictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPredictionPayload>
          }
          findFirst: {
            args: Prisma.AIPredictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPredictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIPredictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPredictionPayload>
          }
          findMany: {
            args: Prisma.AIPredictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPredictionPayload>[]
          }
          create: {
            args: Prisma.AIPredictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPredictionPayload>
          }
          createMany: {
            args: Prisma.AIPredictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIPredictionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPredictionPayload>[]
          }
          delete: {
            args: Prisma.AIPredictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPredictionPayload>
          }
          update: {
            args: Prisma.AIPredictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPredictionPayload>
          }
          deleteMany: {
            args: Prisma.AIPredictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIPredictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIPredictionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPredictionPayload>[]
          }
          upsert: {
            args: Prisma.AIPredictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIPredictionPayload>
          }
          aggregate: {
            args: Prisma.AIPredictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIPrediction>
          }
          groupBy: {
            args: Prisma.AIPredictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIPredictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIPredictionCountArgs<ExtArgs>
            result: $Utils.Optional<AIPredictionCountAggregateOutputType> | number
          }
        }
      }
      UserModelPreference: {
        payload: Prisma.$UserModelPreferencePayload<ExtArgs>
        fields: Prisma.UserModelPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserModelPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserModelPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPreferencePayload>
          }
          findFirst: {
            args: Prisma.UserModelPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserModelPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPreferencePayload>
          }
          findMany: {
            args: Prisma.UserModelPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPreferencePayload>[]
          }
          create: {
            args: Prisma.UserModelPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPreferencePayload>
          }
          createMany: {
            args: Prisma.UserModelPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserModelPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPreferencePayload>[]
          }
          delete: {
            args: Prisma.UserModelPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPreferencePayload>
          }
          update: {
            args: Prisma.UserModelPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPreferencePayload>
          }
          deleteMany: {
            args: Prisma.UserModelPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserModelPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserModelPreferenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPreferencePayload>[]
          }
          upsert: {
            args: Prisma.UserModelPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserModelPreferencePayload>
          }
          aggregate: {
            args: Prisma.UserModelPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserModelPreference>
          }
          groupBy: {
            args: Prisma.UserModelPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserModelPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserModelPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<UserModelPreferenceCountAggregateOutputType> | number
          }
        }
      }
      Signal: {
        payload: Prisma.$SignalPayload<ExtArgs>
        fields: Prisma.SignalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SignalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SignalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>
          }
          findFirst: {
            args: Prisma.SignalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SignalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>
          }
          findMany: {
            args: Prisma.SignalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>[]
          }
          create: {
            args: Prisma.SignalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>
          }
          createMany: {
            args: Prisma.SignalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SignalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>[]
          }
          delete: {
            args: Prisma.SignalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>
          }
          update: {
            args: Prisma.SignalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>
          }
          deleteMany: {
            args: Prisma.SignalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SignalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SignalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>[]
          }
          upsert: {
            args: Prisma.SignalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignalPayload>
          }
          aggregate: {
            args: Prisma.SignalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSignal>
          }
          groupBy: {
            args: Prisma.SignalGroupByArgs<ExtArgs>
            result: $Utils.Optional<SignalGroupByOutputType>[]
          }
          count: {
            args: Prisma.SignalCountArgs<ExtArgs>
            result: $Utils.Optional<SignalCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
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
    aIModel?: AIModelOmit
    aIPrediction?: AIPredictionOmit
    userModelPreference?: UserModelPreferenceOmit
    signal?: SignalOmit
    comment?: CommentOmit
    like?: LikeOmit
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
   * Count Type AIModelCountOutputType
   */

  export type AIModelCountOutputType = {
    predictions: number
    userPreferences: number
  }

  export type AIModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    predictions?: boolean | AIModelCountOutputTypeCountPredictionsArgs
    userPreferences?: boolean | AIModelCountOutputTypeCountUserPreferencesArgs
  }

  // Custom InputTypes
  /**
   * AIModelCountOutputType without action
   */
  export type AIModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModelCountOutputType
     */
    select?: AIModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AIModelCountOutputType without action
   */
  export type AIModelCountOutputTypeCountPredictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIPredictionWhereInput
  }

  /**
   * AIModelCountOutputType without action
   */
  export type AIModelCountOutputTypeCountUserPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserModelPreferenceWhereInput
  }


  /**
   * Count Type SignalCountOutputType
   */

  export type SignalCountOutputType = {
    comments: number
    likes: number
  }

  export type SignalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | SignalCountOutputTypeCountCommentsArgs
    likes?: boolean | SignalCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * SignalCountOutputType without action
   */
  export type SignalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignalCountOutputType
     */
    select?: SignalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SignalCountOutputType without action
   */
  export type SignalCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * SignalCountOutputType without action
   */
  export type SignalCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AIModel
   */

  export type AggregateAIModel = {
    _count: AIModelCountAggregateOutputType | null
    _avg: AIModelAvgAggregateOutputType | null
    _sum: AIModelSumAggregateOutputType | null
    _min: AIModelMinAggregateOutputType | null
    _max: AIModelMaxAggregateOutputType | null
  }

  export type AIModelAvgAggregateOutputType = {
    id: number | null
  }

  export type AIModelSumAggregateOutputType = {
    id: number | null
  }

  export type AIModelMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    model_type: string | null
    model_name: string | null
    is_active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIModelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    model_type: string | null
    model_name: string | null
    is_active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AIModelCountAggregateOutputType = {
    id: number
    name: number
    description: number
    model_type: number
    model_name: number
    is_active: number
    parameters: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AIModelAvgAggregateInputType = {
    id?: true
  }

  export type AIModelSumAggregateInputType = {
    id?: true
  }

  export type AIModelMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    model_type?: true
    model_name?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIModelMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    model_type?: true
    model_name?: true
    is_active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AIModelCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    model_type?: true
    model_name?: true
    is_active?: true
    parameters?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AIModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIModel to aggregate.
     */
    where?: AIModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIModels to fetch.
     */
    orderBy?: AIModelOrderByWithRelationInput | AIModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIModels
    **/
    _count?: true | AIModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AIModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AIModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIModelMaxAggregateInputType
  }

  export type GetAIModelAggregateType<T extends AIModelAggregateArgs> = {
        [P in keyof T & keyof AggregateAIModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIModel[P]>
      : GetScalarType<T[P], AggregateAIModel[P]>
  }




  export type AIModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIModelWhereInput
    orderBy?: AIModelOrderByWithAggregationInput | AIModelOrderByWithAggregationInput[]
    by: AIModelScalarFieldEnum[] | AIModelScalarFieldEnum
    having?: AIModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIModelCountAggregateInputType | true
    _avg?: AIModelAvgAggregateInputType
    _sum?: AIModelSumAggregateInputType
    _min?: AIModelMinAggregateInputType
    _max?: AIModelMaxAggregateInputType
  }

  export type AIModelGroupByOutputType = {
    id: number
    name: string
    description: string | null
    model_type: string
    model_name: string
    is_active: boolean
    parameters: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: AIModelCountAggregateOutputType | null
    _avg: AIModelAvgAggregateOutputType | null
    _sum: AIModelSumAggregateOutputType | null
    _min: AIModelMinAggregateOutputType | null
    _max: AIModelMaxAggregateOutputType | null
  }

  type GetAIModelGroupByPayload<T extends AIModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIModelGroupByOutputType[P]>
            : GetScalarType<T[P], AIModelGroupByOutputType[P]>
        }
      >
    >


  export type AIModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    model_type?: boolean
    model_name?: boolean
    is_active?: boolean
    parameters?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    predictions?: boolean | AIModel$predictionsArgs<ExtArgs>
    userPreferences?: boolean | AIModel$userPreferencesArgs<ExtArgs>
    _count?: boolean | AIModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIModel"]>

  export type AIModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    model_type?: boolean
    model_name?: boolean
    is_active?: boolean
    parameters?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aIModel"]>

  export type AIModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    model_type?: boolean
    model_name?: boolean
    is_active?: boolean
    parameters?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["aIModel"]>

  export type AIModelSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    model_type?: boolean
    model_name?: boolean
    is_active?: boolean
    parameters?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AIModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "model_type" | "model_name" | "is_active" | "parameters" | "createdAt" | "updatedAt", ExtArgs["result"]["aIModel"]>
  export type AIModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    predictions?: boolean | AIModel$predictionsArgs<ExtArgs>
    userPreferences?: boolean | AIModel$userPreferencesArgs<ExtArgs>
    _count?: boolean | AIModelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AIModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AIModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AIModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIModel"
    objects: {
      predictions: Prisma.$AIPredictionPayload<ExtArgs>[]
      userPreferences: Prisma.$UserModelPreferencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      model_type: string
      model_name: string
      is_active: boolean
      parameters: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["aIModel"]>
    composites: {}
  }

  type AIModelGetPayload<S extends boolean | null | undefined | AIModelDefaultArgs> = $Result.GetResult<Prisma.$AIModelPayload, S>

  type AIModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIModelCountAggregateInputType | true
    }

  export interface AIModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIModel'], meta: { name: 'AIModel' } }
    /**
     * Find zero or one AIModel that matches the filter.
     * @param {AIModelFindUniqueArgs} args - Arguments to find a AIModel
     * @example
     * // Get one AIModel
     * const aIModel = await prisma.aIModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIModelFindUniqueArgs>(args: SelectSubset<T, AIModelFindUniqueArgs<ExtArgs>>): Prisma__AIModelClient<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIModelFindUniqueOrThrowArgs} args - Arguments to find a AIModel
     * @example
     * // Get one AIModel
     * const aIModel = await prisma.aIModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIModelFindUniqueOrThrowArgs>(args: SelectSubset<T, AIModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIModelClient<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIModelFindFirstArgs} args - Arguments to find a AIModel
     * @example
     * // Get one AIModel
     * const aIModel = await prisma.aIModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIModelFindFirstArgs>(args?: SelectSubset<T, AIModelFindFirstArgs<ExtArgs>>): Prisma__AIModelClient<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIModelFindFirstOrThrowArgs} args - Arguments to find a AIModel
     * @example
     * // Get one AIModel
     * const aIModel = await prisma.aIModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIModelFindFirstOrThrowArgs>(args?: SelectSubset<T, AIModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIModelClient<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIModels
     * const aIModels = await prisma.aIModel.findMany()
     * 
     * // Get first 10 AIModels
     * const aIModels = await prisma.aIModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIModelWithIdOnly = await prisma.aIModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIModelFindManyArgs>(args?: SelectSubset<T, AIModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIModel.
     * @param {AIModelCreateArgs} args - Arguments to create a AIModel.
     * @example
     * // Create one AIModel
     * const AIModel = await prisma.aIModel.create({
     *   data: {
     *     // ... data to create a AIModel
     *   }
     * })
     * 
     */
    create<T extends AIModelCreateArgs>(args: SelectSubset<T, AIModelCreateArgs<ExtArgs>>): Prisma__AIModelClient<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIModels.
     * @param {AIModelCreateManyArgs} args - Arguments to create many AIModels.
     * @example
     * // Create many AIModels
     * const aIModel = await prisma.aIModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIModelCreateManyArgs>(args?: SelectSubset<T, AIModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIModels and returns the data saved in the database.
     * @param {AIModelCreateManyAndReturnArgs} args - Arguments to create many AIModels.
     * @example
     * // Create many AIModels
     * const aIModel = await prisma.aIModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIModels and only return the `id`
     * const aIModelWithIdOnly = await prisma.aIModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIModelCreateManyAndReturnArgs>(args?: SelectSubset<T, AIModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIModel.
     * @param {AIModelDeleteArgs} args - Arguments to delete one AIModel.
     * @example
     * // Delete one AIModel
     * const AIModel = await prisma.aIModel.delete({
     *   where: {
     *     // ... filter to delete one AIModel
     *   }
     * })
     * 
     */
    delete<T extends AIModelDeleteArgs>(args: SelectSubset<T, AIModelDeleteArgs<ExtArgs>>): Prisma__AIModelClient<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIModel.
     * @param {AIModelUpdateArgs} args - Arguments to update one AIModel.
     * @example
     * // Update one AIModel
     * const aIModel = await prisma.aIModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIModelUpdateArgs>(args: SelectSubset<T, AIModelUpdateArgs<ExtArgs>>): Prisma__AIModelClient<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIModels.
     * @param {AIModelDeleteManyArgs} args - Arguments to filter AIModels to delete.
     * @example
     * // Delete a few AIModels
     * const { count } = await prisma.aIModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIModelDeleteManyArgs>(args?: SelectSubset<T, AIModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIModels
     * const aIModel = await prisma.aIModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIModelUpdateManyArgs>(args: SelectSubset<T, AIModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIModels and returns the data updated in the database.
     * @param {AIModelUpdateManyAndReturnArgs} args - Arguments to update many AIModels.
     * @example
     * // Update many AIModels
     * const aIModel = await prisma.aIModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIModels and only return the `id`
     * const aIModelWithIdOnly = await prisma.aIModel.updateManyAndReturn({
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
    updateManyAndReturn<T extends AIModelUpdateManyAndReturnArgs>(args: SelectSubset<T, AIModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIModel.
     * @param {AIModelUpsertArgs} args - Arguments to update or create a AIModel.
     * @example
     * // Update or create a AIModel
     * const aIModel = await prisma.aIModel.upsert({
     *   create: {
     *     // ... data to create a AIModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIModel we want to update
     *   }
     * })
     */
    upsert<T extends AIModelUpsertArgs>(args: SelectSubset<T, AIModelUpsertArgs<ExtArgs>>): Prisma__AIModelClient<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIModelCountArgs} args - Arguments to filter AIModels to count.
     * @example
     * // Count the number of AIModels
     * const count = await prisma.aIModel.count({
     *   where: {
     *     // ... the filter for the AIModels we want to count
     *   }
     * })
    **/
    count<T extends AIModelCountArgs>(
      args?: Subset<T, AIModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AIModelAggregateArgs>(args: Subset<T, AIModelAggregateArgs>): Prisma.PrismaPromise<GetAIModelAggregateType<T>>

    /**
     * Group by AIModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIModelGroupByArgs} args - Group by arguments.
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
      T extends AIModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIModelGroupByArgs['orderBy'] }
        : { orderBy?: AIModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AIModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIModel model
   */
  readonly fields: AIModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    predictions<T extends AIModel$predictionsArgs<ExtArgs> = {}>(args?: Subset<T, AIModel$predictionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIPredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userPreferences<T extends AIModel$userPreferencesArgs<ExtArgs> = {}>(args?: Subset<T, AIModel$userPreferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModelPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AIModel model
   */
  interface AIModelFieldRefs {
    readonly id: FieldRef<"AIModel", 'Int'>
    readonly name: FieldRef<"AIModel", 'String'>
    readonly description: FieldRef<"AIModel", 'String'>
    readonly model_type: FieldRef<"AIModel", 'String'>
    readonly model_name: FieldRef<"AIModel", 'String'>
    readonly is_active: FieldRef<"AIModel", 'Boolean'>
    readonly parameters: FieldRef<"AIModel", 'Json'>
    readonly createdAt: FieldRef<"AIModel", 'DateTime'>
    readonly updatedAt: FieldRef<"AIModel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIModel findUnique
   */
  export type AIModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIModelInclude<ExtArgs> | null
    /**
     * Filter, which AIModel to fetch.
     */
    where: AIModelWhereUniqueInput
  }

  /**
   * AIModel findUniqueOrThrow
   */
  export type AIModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIModelInclude<ExtArgs> | null
    /**
     * Filter, which AIModel to fetch.
     */
    where: AIModelWhereUniqueInput
  }

  /**
   * AIModel findFirst
   */
  export type AIModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIModelInclude<ExtArgs> | null
    /**
     * Filter, which AIModel to fetch.
     */
    where?: AIModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIModels to fetch.
     */
    orderBy?: AIModelOrderByWithRelationInput | AIModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIModels.
     */
    cursor?: AIModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIModels.
     */
    distinct?: AIModelScalarFieldEnum | AIModelScalarFieldEnum[]
  }

  /**
   * AIModel findFirstOrThrow
   */
  export type AIModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIModelInclude<ExtArgs> | null
    /**
     * Filter, which AIModel to fetch.
     */
    where?: AIModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIModels to fetch.
     */
    orderBy?: AIModelOrderByWithRelationInput | AIModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIModels.
     */
    cursor?: AIModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIModels.
     */
    distinct?: AIModelScalarFieldEnum | AIModelScalarFieldEnum[]
  }

  /**
   * AIModel findMany
   */
  export type AIModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIModelInclude<ExtArgs> | null
    /**
     * Filter, which AIModels to fetch.
     */
    where?: AIModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIModels to fetch.
     */
    orderBy?: AIModelOrderByWithRelationInput | AIModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIModels.
     */
    cursor?: AIModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIModels.
     */
    skip?: number
    distinct?: AIModelScalarFieldEnum | AIModelScalarFieldEnum[]
  }

  /**
   * AIModel create
   */
  export type AIModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIModelInclude<ExtArgs> | null
    /**
     * The data needed to create a AIModel.
     */
    data: XOR<AIModelCreateInput, AIModelUncheckedCreateInput>
  }

  /**
   * AIModel createMany
   */
  export type AIModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIModels.
     */
    data: AIModelCreateManyInput | AIModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIModel createManyAndReturn
   */
  export type AIModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * The data used to create many AIModels.
     */
    data: AIModelCreateManyInput | AIModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIModel update
   */
  export type AIModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIModelInclude<ExtArgs> | null
    /**
     * The data needed to update a AIModel.
     */
    data: XOR<AIModelUpdateInput, AIModelUncheckedUpdateInput>
    /**
     * Choose, which AIModel to update.
     */
    where: AIModelWhereUniqueInput
  }

  /**
   * AIModel updateMany
   */
  export type AIModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIModels.
     */
    data: XOR<AIModelUpdateManyMutationInput, AIModelUncheckedUpdateManyInput>
    /**
     * Filter which AIModels to update
     */
    where?: AIModelWhereInput
    /**
     * Limit how many AIModels to update.
     */
    limit?: number
  }

  /**
   * AIModel updateManyAndReturn
   */
  export type AIModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * The data used to update AIModels.
     */
    data: XOR<AIModelUpdateManyMutationInput, AIModelUncheckedUpdateManyInput>
    /**
     * Filter which AIModels to update
     */
    where?: AIModelWhereInput
    /**
     * Limit how many AIModels to update.
     */
    limit?: number
  }

  /**
   * AIModel upsert
   */
  export type AIModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIModelInclude<ExtArgs> | null
    /**
     * The filter to search for the AIModel to update in case it exists.
     */
    where: AIModelWhereUniqueInput
    /**
     * In case the AIModel found by the `where` argument doesn't exist, create a new AIModel with this data.
     */
    create: XOR<AIModelCreateInput, AIModelUncheckedCreateInput>
    /**
     * In case the AIModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIModelUpdateInput, AIModelUncheckedUpdateInput>
  }

  /**
   * AIModel delete
   */
  export type AIModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIModelInclude<ExtArgs> | null
    /**
     * Filter which AIModel to delete.
     */
    where: AIModelWhereUniqueInput
  }

  /**
   * AIModel deleteMany
   */
  export type AIModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIModels to delete
     */
    where?: AIModelWhereInput
    /**
     * Limit how many AIModels to delete.
     */
    limit?: number
  }

  /**
   * AIModel.predictions
   */
  export type AIModel$predictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPrediction
     */
    select?: AIPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPrediction
     */
    omit?: AIPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIPredictionInclude<ExtArgs> | null
    where?: AIPredictionWhereInput
    orderBy?: AIPredictionOrderByWithRelationInput | AIPredictionOrderByWithRelationInput[]
    cursor?: AIPredictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIPredictionScalarFieldEnum | AIPredictionScalarFieldEnum[]
  }

  /**
   * AIModel.userPreferences
   */
  export type AIModel$userPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModelPreference
     */
    select?: UserModelPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModelPreference
     */
    omit?: UserModelPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelPreferenceInclude<ExtArgs> | null
    where?: UserModelPreferenceWhereInput
    orderBy?: UserModelPreferenceOrderByWithRelationInput | UserModelPreferenceOrderByWithRelationInput[]
    cursor?: UserModelPreferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserModelPreferenceScalarFieldEnum | UserModelPreferenceScalarFieldEnum[]
  }

  /**
   * AIModel without action
   */
  export type AIModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIModel
     */
    select?: AIModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIModel
     */
    omit?: AIModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIModelInclude<ExtArgs> | null
  }


  /**
   * Model AIPrediction
   */

  export type AggregateAIPrediction = {
    _count: AIPredictionCountAggregateOutputType | null
    _avg: AIPredictionAvgAggregateOutputType | null
    _sum: AIPredictionSumAggregateOutputType | null
    _min: AIPredictionMinAggregateOutputType | null
    _max: AIPredictionMaxAggregateOutputType | null
  }

  export type AIPredictionAvgAggregateOutputType = {
    id: number | null
    modelId: number | null
    p0: number | null
    confidence: number | null
    priceTarget: number | null
    performance: number | null
  }

  export type AIPredictionSumAggregateOutputType = {
    id: number | null
    modelId: number | null
    p0: number | null
    confidence: number | null
    priceTarget: number | null
    performance: number | null
  }

  export type AIPredictionMinAggregateOutputType = {
    id: number | null
    modelId: number | null
    modelType: string | null
    p0: number | null
    asset: string | null
    action: string | null
    confidence: number | null
    timeframe: string | null
    reasoning: string | null
    priceTarget: number | null
    performance: number | null
    verified: boolean | null
    modelSource: string | null
    createdAt: Date | null
  }

  export type AIPredictionMaxAggregateOutputType = {
    id: number | null
    modelId: number | null
    modelType: string | null
    p0: number | null
    asset: string | null
    action: string | null
    confidence: number | null
    timeframe: string | null
    reasoning: string | null
    priceTarget: number | null
    performance: number | null
    verified: boolean | null
    modelSource: string | null
    createdAt: Date | null
  }

  export type AIPredictionCountAggregateOutputType = {
    id: number
    modelId: number
    modelType: number
    p0: number
    asset: number
    action: number
    confidence: number
    timeframe: number
    reasoning: number
    priceTarget: number
    performance: number
    verified: number
    modelSource: number
    createdAt: number
    _all: number
  }


  export type AIPredictionAvgAggregateInputType = {
    id?: true
    modelId?: true
    p0?: true
    confidence?: true
    priceTarget?: true
    performance?: true
  }

  export type AIPredictionSumAggregateInputType = {
    id?: true
    modelId?: true
    p0?: true
    confidence?: true
    priceTarget?: true
    performance?: true
  }

  export type AIPredictionMinAggregateInputType = {
    id?: true
    modelId?: true
    modelType?: true
    p0?: true
    asset?: true
    action?: true
    confidence?: true
    timeframe?: true
    reasoning?: true
    priceTarget?: true
    performance?: true
    verified?: true
    modelSource?: true
    createdAt?: true
  }

  export type AIPredictionMaxAggregateInputType = {
    id?: true
    modelId?: true
    modelType?: true
    p0?: true
    asset?: true
    action?: true
    confidence?: true
    timeframe?: true
    reasoning?: true
    priceTarget?: true
    performance?: true
    verified?: true
    modelSource?: true
    createdAt?: true
  }

  export type AIPredictionCountAggregateInputType = {
    id?: true
    modelId?: true
    modelType?: true
    p0?: true
    asset?: true
    action?: true
    confidence?: true
    timeframe?: true
    reasoning?: true
    priceTarget?: true
    performance?: true
    verified?: true
    modelSource?: true
    createdAt?: true
    _all?: true
  }

  export type AIPredictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIPrediction to aggregate.
     */
    where?: AIPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIPredictions to fetch.
     */
    orderBy?: AIPredictionOrderByWithRelationInput | AIPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIPredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIPredictions
    **/
    _count?: true | AIPredictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AIPredictionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AIPredictionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIPredictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIPredictionMaxAggregateInputType
  }

  export type GetAIPredictionAggregateType<T extends AIPredictionAggregateArgs> = {
        [P in keyof T & keyof AggregateAIPrediction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIPrediction[P]>
      : GetScalarType<T[P], AggregateAIPrediction[P]>
  }




  export type AIPredictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIPredictionWhereInput
    orderBy?: AIPredictionOrderByWithAggregationInput | AIPredictionOrderByWithAggregationInput[]
    by: AIPredictionScalarFieldEnum[] | AIPredictionScalarFieldEnum
    having?: AIPredictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIPredictionCountAggregateInputType | true
    _avg?: AIPredictionAvgAggregateInputType
    _sum?: AIPredictionSumAggregateInputType
    _min?: AIPredictionMinAggregateInputType
    _max?: AIPredictionMaxAggregateInputType
  }

  export type AIPredictionGroupByOutputType = {
    id: number
    modelId: number
    modelType: string
    p0: number | null
    asset: string
    action: string
    confidence: number
    timeframe: string
    reasoning: string
    priceTarget: number | null
    performance: number | null
    verified: boolean
    modelSource: string
    createdAt: Date
    _count: AIPredictionCountAggregateOutputType | null
    _avg: AIPredictionAvgAggregateOutputType | null
    _sum: AIPredictionSumAggregateOutputType | null
    _min: AIPredictionMinAggregateOutputType | null
    _max: AIPredictionMaxAggregateOutputType | null
  }

  type GetAIPredictionGroupByPayload<T extends AIPredictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIPredictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIPredictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIPredictionGroupByOutputType[P]>
            : GetScalarType<T[P], AIPredictionGroupByOutputType[P]>
        }
      >
    >


  export type AIPredictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    modelType?: boolean
    p0?: boolean
    asset?: boolean
    action?: boolean
    confidence?: boolean
    timeframe?: boolean
    reasoning?: boolean
    priceTarget?: boolean
    performance?: boolean
    verified?: boolean
    modelSource?: boolean
    createdAt?: boolean
    model?: boolean | AIModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIPrediction"]>

  export type AIPredictionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    modelType?: boolean
    p0?: boolean
    asset?: boolean
    action?: boolean
    confidence?: boolean
    timeframe?: boolean
    reasoning?: boolean
    priceTarget?: boolean
    performance?: boolean
    verified?: boolean
    modelSource?: boolean
    createdAt?: boolean
    model?: boolean | AIModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIPrediction"]>

  export type AIPredictionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    modelType?: boolean
    p0?: boolean
    asset?: boolean
    action?: boolean
    confidence?: boolean
    timeframe?: boolean
    reasoning?: boolean
    priceTarget?: boolean
    performance?: boolean
    verified?: boolean
    modelSource?: boolean
    createdAt?: boolean
    model?: boolean | AIModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIPrediction"]>

  export type AIPredictionSelectScalar = {
    id?: boolean
    modelId?: boolean
    modelType?: boolean
    p0?: boolean
    asset?: boolean
    action?: boolean
    confidence?: boolean
    timeframe?: boolean
    reasoning?: boolean
    priceTarget?: boolean
    performance?: boolean
    verified?: boolean
    modelSource?: boolean
    createdAt?: boolean
  }

  export type AIPredictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modelId" | "modelType" | "p0" | "asset" | "action" | "confidence" | "timeframe" | "reasoning" | "priceTarget" | "performance" | "verified" | "modelSource" | "createdAt", ExtArgs["result"]["aIPrediction"]>
  export type AIPredictionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | AIModelDefaultArgs<ExtArgs>
  }
  export type AIPredictionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | AIModelDefaultArgs<ExtArgs>
  }
  export type AIPredictionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | AIModelDefaultArgs<ExtArgs>
  }

  export type $AIPredictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIPrediction"
    objects: {
      model: Prisma.$AIModelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modelId: number
      modelType: string
      p0: number | null
      asset: string
      action: string
      confidence: number
      timeframe: string
      reasoning: string
      priceTarget: number | null
      performance: number | null
      verified: boolean
      modelSource: string
      createdAt: Date
    }, ExtArgs["result"]["aIPrediction"]>
    composites: {}
  }

  type AIPredictionGetPayload<S extends boolean | null | undefined | AIPredictionDefaultArgs> = $Result.GetResult<Prisma.$AIPredictionPayload, S>

  type AIPredictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIPredictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIPredictionCountAggregateInputType | true
    }

  export interface AIPredictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIPrediction'], meta: { name: 'AIPrediction' } }
    /**
     * Find zero or one AIPrediction that matches the filter.
     * @param {AIPredictionFindUniqueArgs} args - Arguments to find a AIPrediction
     * @example
     * // Get one AIPrediction
     * const aIPrediction = await prisma.aIPrediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIPredictionFindUniqueArgs>(args: SelectSubset<T, AIPredictionFindUniqueArgs<ExtArgs>>): Prisma__AIPredictionClient<$Result.GetResult<Prisma.$AIPredictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIPrediction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIPredictionFindUniqueOrThrowArgs} args - Arguments to find a AIPrediction
     * @example
     * // Get one AIPrediction
     * const aIPrediction = await prisma.aIPrediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIPredictionFindUniqueOrThrowArgs>(args: SelectSubset<T, AIPredictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIPredictionClient<$Result.GetResult<Prisma.$AIPredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIPrediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPredictionFindFirstArgs} args - Arguments to find a AIPrediction
     * @example
     * // Get one AIPrediction
     * const aIPrediction = await prisma.aIPrediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIPredictionFindFirstArgs>(args?: SelectSubset<T, AIPredictionFindFirstArgs<ExtArgs>>): Prisma__AIPredictionClient<$Result.GetResult<Prisma.$AIPredictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIPrediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPredictionFindFirstOrThrowArgs} args - Arguments to find a AIPrediction
     * @example
     * // Get one AIPrediction
     * const aIPrediction = await prisma.aIPrediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIPredictionFindFirstOrThrowArgs>(args?: SelectSubset<T, AIPredictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIPredictionClient<$Result.GetResult<Prisma.$AIPredictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIPredictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPredictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIPredictions
     * const aIPredictions = await prisma.aIPrediction.findMany()
     * 
     * // Get first 10 AIPredictions
     * const aIPredictions = await prisma.aIPrediction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIPredictionWithIdOnly = await prisma.aIPrediction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIPredictionFindManyArgs>(args?: SelectSubset<T, AIPredictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIPredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIPrediction.
     * @param {AIPredictionCreateArgs} args - Arguments to create a AIPrediction.
     * @example
     * // Create one AIPrediction
     * const AIPrediction = await prisma.aIPrediction.create({
     *   data: {
     *     // ... data to create a AIPrediction
     *   }
     * })
     * 
     */
    create<T extends AIPredictionCreateArgs>(args: SelectSubset<T, AIPredictionCreateArgs<ExtArgs>>): Prisma__AIPredictionClient<$Result.GetResult<Prisma.$AIPredictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIPredictions.
     * @param {AIPredictionCreateManyArgs} args - Arguments to create many AIPredictions.
     * @example
     * // Create many AIPredictions
     * const aIPrediction = await prisma.aIPrediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIPredictionCreateManyArgs>(args?: SelectSubset<T, AIPredictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIPredictions and returns the data saved in the database.
     * @param {AIPredictionCreateManyAndReturnArgs} args - Arguments to create many AIPredictions.
     * @example
     * // Create many AIPredictions
     * const aIPrediction = await prisma.aIPrediction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIPredictions and only return the `id`
     * const aIPredictionWithIdOnly = await prisma.aIPrediction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIPredictionCreateManyAndReturnArgs>(args?: SelectSubset<T, AIPredictionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIPredictionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIPrediction.
     * @param {AIPredictionDeleteArgs} args - Arguments to delete one AIPrediction.
     * @example
     * // Delete one AIPrediction
     * const AIPrediction = await prisma.aIPrediction.delete({
     *   where: {
     *     // ... filter to delete one AIPrediction
     *   }
     * })
     * 
     */
    delete<T extends AIPredictionDeleteArgs>(args: SelectSubset<T, AIPredictionDeleteArgs<ExtArgs>>): Prisma__AIPredictionClient<$Result.GetResult<Prisma.$AIPredictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIPrediction.
     * @param {AIPredictionUpdateArgs} args - Arguments to update one AIPrediction.
     * @example
     * // Update one AIPrediction
     * const aIPrediction = await prisma.aIPrediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIPredictionUpdateArgs>(args: SelectSubset<T, AIPredictionUpdateArgs<ExtArgs>>): Prisma__AIPredictionClient<$Result.GetResult<Prisma.$AIPredictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIPredictions.
     * @param {AIPredictionDeleteManyArgs} args - Arguments to filter AIPredictions to delete.
     * @example
     * // Delete a few AIPredictions
     * const { count } = await prisma.aIPrediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIPredictionDeleteManyArgs>(args?: SelectSubset<T, AIPredictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIPredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPredictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIPredictions
     * const aIPrediction = await prisma.aIPrediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIPredictionUpdateManyArgs>(args: SelectSubset<T, AIPredictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIPredictions and returns the data updated in the database.
     * @param {AIPredictionUpdateManyAndReturnArgs} args - Arguments to update many AIPredictions.
     * @example
     * // Update many AIPredictions
     * const aIPrediction = await prisma.aIPrediction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIPredictions and only return the `id`
     * const aIPredictionWithIdOnly = await prisma.aIPrediction.updateManyAndReturn({
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
    updateManyAndReturn<T extends AIPredictionUpdateManyAndReturnArgs>(args: SelectSubset<T, AIPredictionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIPredictionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIPrediction.
     * @param {AIPredictionUpsertArgs} args - Arguments to update or create a AIPrediction.
     * @example
     * // Update or create a AIPrediction
     * const aIPrediction = await prisma.aIPrediction.upsert({
     *   create: {
     *     // ... data to create a AIPrediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIPrediction we want to update
     *   }
     * })
     */
    upsert<T extends AIPredictionUpsertArgs>(args: SelectSubset<T, AIPredictionUpsertArgs<ExtArgs>>): Prisma__AIPredictionClient<$Result.GetResult<Prisma.$AIPredictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIPredictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPredictionCountArgs} args - Arguments to filter AIPredictions to count.
     * @example
     * // Count the number of AIPredictions
     * const count = await prisma.aIPrediction.count({
     *   where: {
     *     // ... the filter for the AIPredictions we want to count
     *   }
     * })
    **/
    count<T extends AIPredictionCountArgs>(
      args?: Subset<T, AIPredictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIPredictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIPrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPredictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AIPredictionAggregateArgs>(args: Subset<T, AIPredictionAggregateArgs>): Prisma.PrismaPromise<GetAIPredictionAggregateType<T>>

    /**
     * Group by AIPrediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIPredictionGroupByArgs} args - Group by arguments.
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
      T extends AIPredictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIPredictionGroupByArgs['orderBy'] }
        : { orderBy?: AIPredictionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AIPredictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIPredictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIPrediction model
   */
  readonly fields: AIPredictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIPrediction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIPredictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends AIModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AIModelDefaultArgs<ExtArgs>>): Prisma__AIModelClient<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AIPrediction model
   */
  interface AIPredictionFieldRefs {
    readonly id: FieldRef<"AIPrediction", 'Int'>
    readonly modelId: FieldRef<"AIPrediction", 'Int'>
    readonly modelType: FieldRef<"AIPrediction", 'String'>
    readonly p0: FieldRef<"AIPrediction", 'Float'>
    readonly asset: FieldRef<"AIPrediction", 'String'>
    readonly action: FieldRef<"AIPrediction", 'String'>
    readonly confidence: FieldRef<"AIPrediction", 'Float'>
    readonly timeframe: FieldRef<"AIPrediction", 'String'>
    readonly reasoning: FieldRef<"AIPrediction", 'String'>
    readonly priceTarget: FieldRef<"AIPrediction", 'Float'>
    readonly performance: FieldRef<"AIPrediction", 'Float'>
    readonly verified: FieldRef<"AIPrediction", 'Boolean'>
    readonly modelSource: FieldRef<"AIPrediction", 'String'>
    readonly createdAt: FieldRef<"AIPrediction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIPrediction findUnique
   */
  export type AIPredictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPrediction
     */
    select?: AIPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPrediction
     */
    omit?: AIPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIPredictionInclude<ExtArgs> | null
    /**
     * Filter, which AIPrediction to fetch.
     */
    where: AIPredictionWhereUniqueInput
  }

  /**
   * AIPrediction findUniqueOrThrow
   */
  export type AIPredictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPrediction
     */
    select?: AIPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPrediction
     */
    omit?: AIPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIPredictionInclude<ExtArgs> | null
    /**
     * Filter, which AIPrediction to fetch.
     */
    where: AIPredictionWhereUniqueInput
  }

  /**
   * AIPrediction findFirst
   */
  export type AIPredictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPrediction
     */
    select?: AIPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPrediction
     */
    omit?: AIPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIPredictionInclude<ExtArgs> | null
    /**
     * Filter, which AIPrediction to fetch.
     */
    where?: AIPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIPredictions to fetch.
     */
    orderBy?: AIPredictionOrderByWithRelationInput | AIPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIPredictions.
     */
    cursor?: AIPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIPredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIPredictions.
     */
    distinct?: AIPredictionScalarFieldEnum | AIPredictionScalarFieldEnum[]
  }

  /**
   * AIPrediction findFirstOrThrow
   */
  export type AIPredictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPrediction
     */
    select?: AIPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPrediction
     */
    omit?: AIPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIPredictionInclude<ExtArgs> | null
    /**
     * Filter, which AIPrediction to fetch.
     */
    where?: AIPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIPredictions to fetch.
     */
    orderBy?: AIPredictionOrderByWithRelationInput | AIPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIPredictions.
     */
    cursor?: AIPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIPredictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIPredictions.
     */
    distinct?: AIPredictionScalarFieldEnum | AIPredictionScalarFieldEnum[]
  }

  /**
   * AIPrediction findMany
   */
  export type AIPredictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPrediction
     */
    select?: AIPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPrediction
     */
    omit?: AIPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIPredictionInclude<ExtArgs> | null
    /**
     * Filter, which AIPredictions to fetch.
     */
    where?: AIPredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIPredictions to fetch.
     */
    orderBy?: AIPredictionOrderByWithRelationInput | AIPredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIPredictions.
     */
    cursor?: AIPredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIPredictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIPredictions.
     */
    skip?: number
    distinct?: AIPredictionScalarFieldEnum | AIPredictionScalarFieldEnum[]
  }

  /**
   * AIPrediction create
   */
  export type AIPredictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPrediction
     */
    select?: AIPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPrediction
     */
    omit?: AIPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIPredictionInclude<ExtArgs> | null
    /**
     * The data needed to create a AIPrediction.
     */
    data: XOR<AIPredictionCreateInput, AIPredictionUncheckedCreateInput>
  }

  /**
   * AIPrediction createMany
   */
  export type AIPredictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIPredictions.
     */
    data: AIPredictionCreateManyInput | AIPredictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIPrediction createManyAndReturn
   */
  export type AIPredictionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPrediction
     */
    select?: AIPredictionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIPrediction
     */
    omit?: AIPredictionOmit<ExtArgs> | null
    /**
     * The data used to create many AIPredictions.
     */
    data: AIPredictionCreateManyInput | AIPredictionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIPredictionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIPrediction update
   */
  export type AIPredictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPrediction
     */
    select?: AIPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPrediction
     */
    omit?: AIPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIPredictionInclude<ExtArgs> | null
    /**
     * The data needed to update a AIPrediction.
     */
    data: XOR<AIPredictionUpdateInput, AIPredictionUncheckedUpdateInput>
    /**
     * Choose, which AIPrediction to update.
     */
    where: AIPredictionWhereUniqueInput
  }

  /**
   * AIPrediction updateMany
   */
  export type AIPredictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIPredictions.
     */
    data: XOR<AIPredictionUpdateManyMutationInput, AIPredictionUncheckedUpdateManyInput>
    /**
     * Filter which AIPredictions to update
     */
    where?: AIPredictionWhereInput
    /**
     * Limit how many AIPredictions to update.
     */
    limit?: number
  }

  /**
   * AIPrediction updateManyAndReturn
   */
  export type AIPredictionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPrediction
     */
    select?: AIPredictionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIPrediction
     */
    omit?: AIPredictionOmit<ExtArgs> | null
    /**
     * The data used to update AIPredictions.
     */
    data: XOR<AIPredictionUpdateManyMutationInput, AIPredictionUncheckedUpdateManyInput>
    /**
     * Filter which AIPredictions to update
     */
    where?: AIPredictionWhereInput
    /**
     * Limit how many AIPredictions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIPredictionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIPrediction upsert
   */
  export type AIPredictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPrediction
     */
    select?: AIPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPrediction
     */
    omit?: AIPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIPredictionInclude<ExtArgs> | null
    /**
     * The filter to search for the AIPrediction to update in case it exists.
     */
    where: AIPredictionWhereUniqueInput
    /**
     * In case the AIPrediction found by the `where` argument doesn't exist, create a new AIPrediction with this data.
     */
    create: XOR<AIPredictionCreateInput, AIPredictionUncheckedCreateInput>
    /**
     * In case the AIPrediction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIPredictionUpdateInput, AIPredictionUncheckedUpdateInput>
  }

  /**
   * AIPrediction delete
   */
  export type AIPredictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPrediction
     */
    select?: AIPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPrediction
     */
    omit?: AIPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIPredictionInclude<ExtArgs> | null
    /**
     * Filter which AIPrediction to delete.
     */
    where: AIPredictionWhereUniqueInput
  }

  /**
   * AIPrediction deleteMany
   */
  export type AIPredictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIPredictions to delete
     */
    where?: AIPredictionWhereInput
    /**
     * Limit how many AIPredictions to delete.
     */
    limit?: number
  }

  /**
   * AIPrediction without action
   */
  export type AIPredictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIPrediction
     */
    select?: AIPredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIPrediction
     */
    omit?: AIPredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIPredictionInclude<ExtArgs> | null
  }


  /**
   * Model UserModelPreference
   */

  export type AggregateUserModelPreference = {
    _count: UserModelPreferenceCountAggregateOutputType | null
    _avg: UserModelPreferenceAvgAggregateOutputType | null
    _sum: UserModelPreferenceSumAggregateOutputType | null
    _min: UserModelPreferenceMinAggregateOutputType | null
    _max: UserModelPreferenceMaxAggregateOutputType | null
  }

  export type UserModelPreferenceAvgAggregateOutputType = {
    id: number | null
    modelId: number | null
  }

  export type UserModelPreferenceSumAggregateOutputType = {
    id: number | null
    modelId: number | null
  }

  export type UserModelPreferenceMinAggregateOutputType = {
    id: number | null
    userAddress: string | null
    modelId: number | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserModelPreferenceMaxAggregateOutputType = {
    id: number | null
    userAddress: string | null
    modelId: number | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserModelPreferenceCountAggregateOutputType = {
    id: number
    userAddress: number
    modelId: number
    isDefault: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserModelPreferenceAvgAggregateInputType = {
    id?: true
    modelId?: true
  }

  export type UserModelPreferenceSumAggregateInputType = {
    id?: true
    modelId?: true
  }

  export type UserModelPreferenceMinAggregateInputType = {
    id?: true
    userAddress?: true
    modelId?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserModelPreferenceMaxAggregateInputType = {
    id?: true
    userAddress?: true
    modelId?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserModelPreferenceCountAggregateInputType = {
    id?: true
    userAddress?: true
    modelId?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserModelPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserModelPreference to aggregate.
     */
    where?: UserModelPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModelPreferences to fetch.
     */
    orderBy?: UserModelPreferenceOrderByWithRelationInput | UserModelPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserModelPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModelPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModelPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserModelPreferences
    **/
    _count?: true | UserModelPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserModelPreferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserModelPreferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserModelPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserModelPreferenceMaxAggregateInputType
  }

  export type GetUserModelPreferenceAggregateType<T extends UserModelPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserModelPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserModelPreference[P]>
      : GetScalarType<T[P], AggregateUserModelPreference[P]>
  }




  export type UserModelPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserModelPreferenceWhereInput
    orderBy?: UserModelPreferenceOrderByWithAggregationInput | UserModelPreferenceOrderByWithAggregationInput[]
    by: UserModelPreferenceScalarFieldEnum[] | UserModelPreferenceScalarFieldEnum
    having?: UserModelPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserModelPreferenceCountAggregateInputType | true
    _avg?: UserModelPreferenceAvgAggregateInputType
    _sum?: UserModelPreferenceSumAggregateInputType
    _min?: UserModelPreferenceMinAggregateInputType
    _max?: UserModelPreferenceMaxAggregateInputType
  }

  export type UserModelPreferenceGroupByOutputType = {
    id: number
    userAddress: string
    modelId: number
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserModelPreferenceCountAggregateOutputType | null
    _avg: UserModelPreferenceAvgAggregateOutputType | null
    _sum: UserModelPreferenceSumAggregateOutputType | null
    _min: UserModelPreferenceMinAggregateOutputType | null
    _max: UserModelPreferenceMaxAggregateOutputType | null
  }

  type GetUserModelPreferenceGroupByPayload<T extends UserModelPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserModelPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserModelPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserModelPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], UserModelPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type UserModelPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAddress?: boolean
    modelId?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    model?: boolean | AIModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userModelPreference"]>

  export type UserModelPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAddress?: boolean
    modelId?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    model?: boolean | AIModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userModelPreference"]>

  export type UserModelPreferenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAddress?: boolean
    modelId?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    model?: boolean | AIModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userModelPreference"]>

  export type UserModelPreferenceSelectScalar = {
    id?: boolean
    userAddress?: boolean
    modelId?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserModelPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userAddress" | "modelId" | "isDefault" | "createdAt" | "updatedAt", ExtArgs["result"]["userModelPreference"]>
  export type UserModelPreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | AIModelDefaultArgs<ExtArgs>
  }
  export type UserModelPreferenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | AIModelDefaultArgs<ExtArgs>
  }
  export type UserModelPreferenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | AIModelDefaultArgs<ExtArgs>
  }

  export type $UserModelPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserModelPreference"
    objects: {
      model: Prisma.$AIModelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userAddress: string
      modelId: number
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userModelPreference"]>
    composites: {}
  }

  type UserModelPreferenceGetPayload<S extends boolean | null | undefined | UserModelPreferenceDefaultArgs> = $Result.GetResult<Prisma.$UserModelPreferencePayload, S>

  type UserModelPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserModelPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserModelPreferenceCountAggregateInputType | true
    }

  export interface UserModelPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserModelPreference'], meta: { name: 'UserModelPreference' } }
    /**
     * Find zero or one UserModelPreference that matches the filter.
     * @param {UserModelPreferenceFindUniqueArgs} args - Arguments to find a UserModelPreference
     * @example
     * // Get one UserModelPreference
     * const userModelPreference = await prisma.userModelPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserModelPreferenceFindUniqueArgs>(args: SelectSubset<T, UserModelPreferenceFindUniqueArgs<ExtArgs>>): Prisma__UserModelPreferenceClient<$Result.GetResult<Prisma.$UserModelPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserModelPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserModelPreferenceFindUniqueOrThrowArgs} args - Arguments to find a UserModelPreference
     * @example
     * // Get one UserModelPreference
     * const userModelPreference = await prisma.userModelPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserModelPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserModelPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserModelPreferenceClient<$Result.GetResult<Prisma.$UserModelPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserModelPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelPreferenceFindFirstArgs} args - Arguments to find a UserModelPreference
     * @example
     * // Get one UserModelPreference
     * const userModelPreference = await prisma.userModelPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserModelPreferenceFindFirstArgs>(args?: SelectSubset<T, UserModelPreferenceFindFirstArgs<ExtArgs>>): Prisma__UserModelPreferenceClient<$Result.GetResult<Prisma.$UserModelPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserModelPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelPreferenceFindFirstOrThrowArgs} args - Arguments to find a UserModelPreference
     * @example
     * // Get one UserModelPreference
     * const userModelPreference = await prisma.userModelPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserModelPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserModelPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserModelPreferenceClient<$Result.GetResult<Prisma.$UserModelPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserModelPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserModelPreferences
     * const userModelPreferences = await prisma.userModelPreference.findMany()
     * 
     * // Get first 10 UserModelPreferences
     * const userModelPreferences = await prisma.userModelPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userModelPreferenceWithIdOnly = await prisma.userModelPreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserModelPreferenceFindManyArgs>(args?: SelectSubset<T, UserModelPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModelPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserModelPreference.
     * @param {UserModelPreferenceCreateArgs} args - Arguments to create a UserModelPreference.
     * @example
     * // Create one UserModelPreference
     * const UserModelPreference = await prisma.userModelPreference.create({
     *   data: {
     *     // ... data to create a UserModelPreference
     *   }
     * })
     * 
     */
    create<T extends UserModelPreferenceCreateArgs>(args: SelectSubset<T, UserModelPreferenceCreateArgs<ExtArgs>>): Prisma__UserModelPreferenceClient<$Result.GetResult<Prisma.$UserModelPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserModelPreferences.
     * @param {UserModelPreferenceCreateManyArgs} args - Arguments to create many UserModelPreferences.
     * @example
     * // Create many UserModelPreferences
     * const userModelPreference = await prisma.userModelPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserModelPreferenceCreateManyArgs>(args?: SelectSubset<T, UserModelPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserModelPreferences and returns the data saved in the database.
     * @param {UserModelPreferenceCreateManyAndReturnArgs} args - Arguments to create many UserModelPreferences.
     * @example
     * // Create many UserModelPreferences
     * const userModelPreference = await prisma.userModelPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserModelPreferences and only return the `id`
     * const userModelPreferenceWithIdOnly = await prisma.userModelPreference.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserModelPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserModelPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModelPreferencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserModelPreference.
     * @param {UserModelPreferenceDeleteArgs} args - Arguments to delete one UserModelPreference.
     * @example
     * // Delete one UserModelPreference
     * const UserModelPreference = await prisma.userModelPreference.delete({
     *   where: {
     *     // ... filter to delete one UserModelPreference
     *   }
     * })
     * 
     */
    delete<T extends UserModelPreferenceDeleteArgs>(args: SelectSubset<T, UserModelPreferenceDeleteArgs<ExtArgs>>): Prisma__UserModelPreferenceClient<$Result.GetResult<Prisma.$UserModelPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserModelPreference.
     * @param {UserModelPreferenceUpdateArgs} args - Arguments to update one UserModelPreference.
     * @example
     * // Update one UserModelPreference
     * const userModelPreference = await prisma.userModelPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserModelPreferenceUpdateArgs>(args: SelectSubset<T, UserModelPreferenceUpdateArgs<ExtArgs>>): Prisma__UserModelPreferenceClient<$Result.GetResult<Prisma.$UserModelPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserModelPreferences.
     * @param {UserModelPreferenceDeleteManyArgs} args - Arguments to filter UserModelPreferences to delete.
     * @example
     * // Delete a few UserModelPreferences
     * const { count } = await prisma.userModelPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserModelPreferenceDeleteManyArgs>(args?: SelectSubset<T, UserModelPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserModelPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserModelPreferences
     * const userModelPreference = await prisma.userModelPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserModelPreferenceUpdateManyArgs>(args: SelectSubset<T, UserModelPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserModelPreferences and returns the data updated in the database.
     * @param {UserModelPreferenceUpdateManyAndReturnArgs} args - Arguments to update many UserModelPreferences.
     * @example
     * // Update many UserModelPreferences
     * const userModelPreference = await prisma.userModelPreference.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserModelPreferences and only return the `id`
     * const userModelPreferenceWithIdOnly = await prisma.userModelPreference.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserModelPreferenceUpdateManyAndReturnArgs>(args: SelectSubset<T, UserModelPreferenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserModelPreferencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserModelPreference.
     * @param {UserModelPreferenceUpsertArgs} args - Arguments to update or create a UserModelPreference.
     * @example
     * // Update or create a UserModelPreference
     * const userModelPreference = await prisma.userModelPreference.upsert({
     *   create: {
     *     // ... data to create a UserModelPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserModelPreference we want to update
     *   }
     * })
     */
    upsert<T extends UserModelPreferenceUpsertArgs>(args: SelectSubset<T, UserModelPreferenceUpsertArgs<ExtArgs>>): Prisma__UserModelPreferenceClient<$Result.GetResult<Prisma.$UserModelPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserModelPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelPreferenceCountArgs} args - Arguments to filter UserModelPreferences to count.
     * @example
     * // Count the number of UserModelPreferences
     * const count = await prisma.userModelPreference.count({
     *   where: {
     *     // ... the filter for the UserModelPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserModelPreferenceCountArgs>(
      args?: Subset<T, UserModelPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserModelPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserModelPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserModelPreferenceAggregateArgs>(args: Subset<T, UserModelPreferenceAggregateArgs>): Prisma.PrismaPromise<GetUserModelPreferenceAggregateType<T>>

    /**
     * Group by UserModelPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserModelPreferenceGroupByArgs} args - Group by arguments.
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
      T extends UserModelPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserModelPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: UserModelPreferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserModelPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserModelPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserModelPreference model
   */
  readonly fields: UserModelPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserModelPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserModelPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends AIModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AIModelDefaultArgs<ExtArgs>>): Prisma__AIModelClient<$Result.GetResult<Prisma.$AIModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserModelPreference model
   */
  interface UserModelPreferenceFieldRefs {
    readonly id: FieldRef<"UserModelPreference", 'Int'>
    readonly userAddress: FieldRef<"UserModelPreference", 'String'>
    readonly modelId: FieldRef<"UserModelPreference", 'Int'>
    readonly isDefault: FieldRef<"UserModelPreference", 'Boolean'>
    readonly createdAt: FieldRef<"UserModelPreference", 'DateTime'>
    readonly updatedAt: FieldRef<"UserModelPreference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserModelPreference findUnique
   */
  export type UserModelPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModelPreference
     */
    select?: UserModelPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModelPreference
     */
    omit?: UserModelPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserModelPreference to fetch.
     */
    where: UserModelPreferenceWhereUniqueInput
  }

  /**
   * UserModelPreference findUniqueOrThrow
   */
  export type UserModelPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModelPreference
     */
    select?: UserModelPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModelPreference
     */
    omit?: UserModelPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserModelPreference to fetch.
     */
    where: UserModelPreferenceWhereUniqueInput
  }

  /**
   * UserModelPreference findFirst
   */
  export type UserModelPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModelPreference
     */
    select?: UserModelPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModelPreference
     */
    omit?: UserModelPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserModelPreference to fetch.
     */
    where?: UserModelPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModelPreferences to fetch.
     */
    orderBy?: UserModelPreferenceOrderByWithRelationInput | UserModelPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModelPreferences.
     */
    cursor?: UserModelPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModelPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModelPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModelPreferences.
     */
    distinct?: UserModelPreferenceScalarFieldEnum | UserModelPreferenceScalarFieldEnum[]
  }

  /**
   * UserModelPreference findFirstOrThrow
   */
  export type UserModelPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModelPreference
     */
    select?: UserModelPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModelPreference
     */
    omit?: UserModelPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserModelPreference to fetch.
     */
    where?: UserModelPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModelPreferences to fetch.
     */
    orderBy?: UserModelPreferenceOrderByWithRelationInput | UserModelPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserModelPreferences.
     */
    cursor?: UserModelPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModelPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModelPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserModelPreferences.
     */
    distinct?: UserModelPreferenceScalarFieldEnum | UserModelPreferenceScalarFieldEnum[]
  }

  /**
   * UserModelPreference findMany
   */
  export type UserModelPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModelPreference
     */
    select?: UserModelPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModelPreference
     */
    omit?: UserModelPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which UserModelPreferences to fetch.
     */
    where?: UserModelPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserModelPreferences to fetch.
     */
    orderBy?: UserModelPreferenceOrderByWithRelationInput | UserModelPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserModelPreferences.
     */
    cursor?: UserModelPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserModelPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserModelPreferences.
     */
    skip?: number
    distinct?: UserModelPreferenceScalarFieldEnum | UserModelPreferenceScalarFieldEnum[]
  }

  /**
   * UserModelPreference create
   */
  export type UserModelPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModelPreference
     */
    select?: UserModelPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModelPreference
     */
    omit?: UserModelPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserModelPreference.
     */
    data: XOR<UserModelPreferenceCreateInput, UserModelPreferenceUncheckedCreateInput>
  }

  /**
   * UserModelPreference createMany
   */
  export type UserModelPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserModelPreferences.
     */
    data: UserModelPreferenceCreateManyInput | UserModelPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserModelPreference createManyAndReturn
   */
  export type UserModelPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModelPreference
     */
    select?: UserModelPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserModelPreference
     */
    omit?: UserModelPreferenceOmit<ExtArgs> | null
    /**
     * The data used to create many UserModelPreferences.
     */
    data: UserModelPreferenceCreateManyInput | UserModelPreferenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelPreferenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserModelPreference update
   */
  export type UserModelPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModelPreference
     */
    select?: UserModelPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModelPreference
     */
    omit?: UserModelPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserModelPreference.
     */
    data: XOR<UserModelPreferenceUpdateInput, UserModelPreferenceUncheckedUpdateInput>
    /**
     * Choose, which UserModelPreference to update.
     */
    where: UserModelPreferenceWhereUniqueInput
  }

  /**
   * UserModelPreference updateMany
   */
  export type UserModelPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserModelPreferences.
     */
    data: XOR<UserModelPreferenceUpdateManyMutationInput, UserModelPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserModelPreferences to update
     */
    where?: UserModelPreferenceWhereInput
    /**
     * Limit how many UserModelPreferences to update.
     */
    limit?: number
  }

  /**
   * UserModelPreference updateManyAndReturn
   */
  export type UserModelPreferenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModelPreference
     */
    select?: UserModelPreferenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserModelPreference
     */
    omit?: UserModelPreferenceOmit<ExtArgs> | null
    /**
     * The data used to update UserModelPreferences.
     */
    data: XOR<UserModelPreferenceUpdateManyMutationInput, UserModelPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserModelPreferences to update
     */
    where?: UserModelPreferenceWhereInput
    /**
     * Limit how many UserModelPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelPreferenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserModelPreference upsert
   */
  export type UserModelPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModelPreference
     */
    select?: UserModelPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModelPreference
     */
    omit?: UserModelPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelPreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserModelPreference to update in case it exists.
     */
    where: UserModelPreferenceWhereUniqueInput
    /**
     * In case the UserModelPreference found by the `where` argument doesn't exist, create a new UserModelPreference with this data.
     */
    create: XOR<UserModelPreferenceCreateInput, UserModelPreferenceUncheckedCreateInput>
    /**
     * In case the UserModelPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserModelPreferenceUpdateInput, UserModelPreferenceUncheckedUpdateInput>
  }

  /**
   * UserModelPreference delete
   */
  export type UserModelPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModelPreference
     */
    select?: UserModelPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModelPreference
     */
    omit?: UserModelPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelPreferenceInclude<ExtArgs> | null
    /**
     * Filter which UserModelPreference to delete.
     */
    where: UserModelPreferenceWhereUniqueInput
  }

  /**
   * UserModelPreference deleteMany
   */
  export type UserModelPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserModelPreferences to delete
     */
    where?: UserModelPreferenceWhereInput
    /**
     * Limit how many UserModelPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserModelPreference without action
   */
  export type UserModelPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserModelPreference
     */
    select?: UserModelPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserModelPreference
     */
    omit?: UserModelPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserModelPreferenceInclude<ExtArgs> | null
  }


  /**
   * Model Signal
   */

  export type AggregateSignal = {
    _count: SignalCountAggregateOutputType | null
    _avg: SignalAvgAggregateOutputType | null
    _sum: SignalSumAggregateOutputType | null
    _min: SignalMinAggregateOutputType | null
    _max: SignalMaxAggregateOutputType | null
  }

  export type SignalAvgAggregateOutputType = {
    id: number | null
    confidenceLevel: number | null
  }

  export type SignalSumAggregateOutputType = {
    id: number | null
    confidenceLevel: number | null
  }

  export type SignalMinAggregateOutputType = {
    id: number | null
    asset: string | null
    action: string | null
    timeframe: string | null
    priceTarget: string | null
    confidenceLevel: number | null
    analysis: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SignalMaxAggregateOutputType = {
    id: number | null
    asset: string | null
    action: string | null
    timeframe: string | null
    priceTarget: string | null
    confidenceLevel: number | null
    analysis: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SignalCountAggregateOutputType = {
    id: number
    asset: number
    action: number
    timeframe: number
    priceTarget: number
    confidenceLevel: number
    analysis: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SignalAvgAggregateInputType = {
    id?: true
    confidenceLevel?: true
  }

  export type SignalSumAggregateInputType = {
    id?: true
    confidenceLevel?: true
  }

  export type SignalMinAggregateInputType = {
    id?: true
    asset?: true
    action?: true
    timeframe?: true
    priceTarget?: true
    confidenceLevel?: true
    analysis?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SignalMaxAggregateInputType = {
    id?: true
    asset?: true
    action?: true
    timeframe?: true
    priceTarget?: true
    confidenceLevel?: true
    analysis?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SignalCountAggregateInputType = {
    id?: true
    asset?: true
    action?: true
    timeframe?: true
    priceTarget?: true
    confidenceLevel?: true
    analysis?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SignalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signal to aggregate.
     */
    where?: SignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signals to fetch.
     */
    orderBy?: SignalOrderByWithRelationInput | SignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Signals
    **/
    _count?: true | SignalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SignalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SignalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SignalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SignalMaxAggregateInputType
  }

  export type GetSignalAggregateType<T extends SignalAggregateArgs> = {
        [P in keyof T & keyof AggregateSignal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSignal[P]>
      : GetScalarType<T[P], AggregateSignal[P]>
  }




  export type SignalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignalWhereInput
    orderBy?: SignalOrderByWithAggregationInput | SignalOrderByWithAggregationInput[]
    by: SignalScalarFieldEnum[] | SignalScalarFieldEnum
    having?: SignalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SignalCountAggregateInputType | true
    _avg?: SignalAvgAggregateInputType
    _sum?: SignalSumAggregateInputType
    _min?: SignalMinAggregateInputType
    _max?: SignalMaxAggregateInputType
  }

  export type SignalGroupByOutputType = {
    id: number
    asset: string
    action: string
    timeframe: string
    priceTarget: string | null
    confidenceLevel: number
    analysis: string
    createdAt: Date
    updatedAt: Date
    _count: SignalCountAggregateOutputType | null
    _avg: SignalAvgAggregateOutputType | null
    _sum: SignalSumAggregateOutputType | null
    _min: SignalMinAggregateOutputType | null
    _max: SignalMaxAggregateOutputType | null
  }

  type GetSignalGroupByPayload<T extends SignalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SignalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SignalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SignalGroupByOutputType[P]>
            : GetScalarType<T[P], SignalGroupByOutputType[P]>
        }
      >
    >


  export type SignalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset?: boolean
    action?: boolean
    timeframe?: boolean
    priceTarget?: boolean
    confidenceLevel?: boolean
    analysis?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    comments?: boolean | Signal$commentsArgs<ExtArgs>
    likes?: boolean | Signal$likesArgs<ExtArgs>
    _count?: boolean | SignalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signal"]>

  export type SignalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset?: boolean
    action?: boolean
    timeframe?: boolean
    priceTarget?: boolean
    confidenceLevel?: boolean
    analysis?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["signal"]>

  export type SignalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset?: boolean
    action?: boolean
    timeframe?: boolean
    priceTarget?: boolean
    confidenceLevel?: boolean
    analysis?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["signal"]>

  export type SignalSelectScalar = {
    id?: boolean
    asset?: boolean
    action?: boolean
    timeframe?: boolean
    priceTarget?: boolean
    confidenceLevel?: boolean
    analysis?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SignalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "asset" | "action" | "timeframe" | "priceTarget" | "confidenceLevel" | "analysis" | "createdAt" | "updatedAt", ExtArgs["result"]["signal"]>
  export type SignalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | Signal$commentsArgs<ExtArgs>
    likes?: boolean | Signal$likesArgs<ExtArgs>
    _count?: boolean | SignalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SignalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SignalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SignalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Signal"
    objects: {
      comments: Prisma.$CommentPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      asset: string
      action: string
      timeframe: string
      priceTarget: string | null
      confidenceLevel: number
      analysis: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["signal"]>
    composites: {}
  }

  type SignalGetPayload<S extends boolean | null | undefined | SignalDefaultArgs> = $Result.GetResult<Prisma.$SignalPayload, S>

  type SignalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SignalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SignalCountAggregateInputType | true
    }

  export interface SignalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Signal'], meta: { name: 'Signal' } }
    /**
     * Find zero or one Signal that matches the filter.
     * @param {SignalFindUniqueArgs} args - Arguments to find a Signal
     * @example
     * // Get one Signal
     * const signal = await prisma.signal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SignalFindUniqueArgs>(args: SelectSubset<T, SignalFindUniqueArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Signal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SignalFindUniqueOrThrowArgs} args - Arguments to find a Signal
     * @example
     * // Get one Signal
     * const signal = await prisma.signal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SignalFindUniqueOrThrowArgs>(args: SelectSubset<T, SignalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalFindFirstArgs} args - Arguments to find a Signal
     * @example
     * // Get one Signal
     * const signal = await prisma.signal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SignalFindFirstArgs>(args?: SelectSubset<T, SignalFindFirstArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalFindFirstOrThrowArgs} args - Arguments to find a Signal
     * @example
     * // Get one Signal
     * const signal = await prisma.signal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SignalFindFirstOrThrowArgs>(args?: SelectSubset<T, SignalFindFirstOrThrowArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Signals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Signals
     * const signals = await prisma.signal.findMany()
     * 
     * // Get first 10 Signals
     * const signals = await prisma.signal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const signalWithIdOnly = await prisma.signal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SignalFindManyArgs>(args?: SelectSubset<T, SignalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Signal.
     * @param {SignalCreateArgs} args - Arguments to create a Signal.
     * @example
     * // Create one Signal
     * const Signal = await prisma.signal.create({
     *   data: {
     *     // ... data to create a Signal
     *   }
     * })
     * 
     */
    create<T extends SignalCreateArgs>(args: SelectSubset<T, SignalCreateArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Signals.
     * @param {SignalCreateManyArgs} args - Arguments to create many Signals.
     * @example
     * // Create many Signals
     * const signal = await prisma.signal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SignalCreateManyArgs>(args?: SelectSubset<T, SignalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Signals and returns the data saved in the database.
     * @param {SignalCreateManyAndReturnArgs} args - Arguments to create many Signals.
     * @example
     * // Create many Signals
     * const signal = await prisma.signal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Signals and only return the `id`
     * const signalWithIdOnly = await prisma.signal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SignalCreateManyAndReturnArgs>(args?: SelectSubset<T, SignalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Signal.
     * @param {SignalDeleteArgs} args - Arguments to delete one Signal.
     * @example
     * // Delete one Signal
     * const Signal = await prisma.signal.delete({
     *   where: {
     *     // ... filter to delete one Signal
     *   }
     * })
     * 
     */
    delete<T extends SignalDeleteArgs>(args: SelectSubset<T, SignalDeleteArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Signal.
     * @param {SignalUpdateArgs} args - Arguments to update one Signal.
     * @example
     * // Update one Signal
     * const signal = await prisma.signal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SignalUpdateArgs>(args: SelectSubset<T, SignalUpdateArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Signals.
     * @param {SignalDeleteManyArgs} args - Arguments to filter Signals to delete.
     * @example
     * // Delete a few Signals
     * const { count } = await prisma.signal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SignalDeleteManyArgs>(args?: SelectSubset<T, SignalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Signals
     * const signal = await prisma.signal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SignalUpdateManyArgs>(args: SelectSubset<T, SignalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signals and returns the data updated in the database.
     * @param {SignalUpdateManyAndReturnArgs} args - Arguments to update many Signals.
     * @example
     * // Update many Signals
     * const signal = await prisma.signal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Signals and only return the `id`
     * const signalWithIdOnly = await prisma.signal.updateManyAndReturn({
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
    updateManyAndReturn<T extends SignalUpdateManyAndReturnArgs>(args: SelectSubset<T, SignalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Signal.
     * @param {SignalUpsertArgs} args - Arguments to update or create a Signal.
     * @example
     * // Update or create a Signal
     * const signal = await prisma.signal.upsert({
     *   create: {
     *     // ... data to create a Signal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Signal we want to update
     *   }
     * })
     */
    upsert<T extends SignalUpsertArgs>(args: SelectSubset<T, SignalUpsertArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Signals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalCountArgs} args - Arguments to filter Signals to count.
     * @example
     * // Count the number of Signals
     * const count = await prisma.signal.count({
     *   where: {
     *     // ... the filter for the Signals we want to count
     *   }
     * })
    **/
    count<T extends SignalCountArgs>(
      args?: Subset<T, SignalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SignalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Signal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SignalAggregateArgs>(args: Subset<T, SignalAggregateArgs>): Prisma.PrismaPromise<GetSignalAggregateType<T>>

    /**
     * Group by Signal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignalGroupByArgs} args - Group by arguments.
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
      T extends SignalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SignalGroupByArgs['orderBy'] }
        : { orderBy?: SignalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SignalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSignalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Signal model
   */
  readonly fields: SignalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Signal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SignalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comments<T extends Signal$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Signal$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends Signal$likesArgs<ExtArgs> = {}>(args?: Subset<T, Signal$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Signal model
   */
  interface SignalFieldRefs {
    readonly id: FieldRef<"Signal", 'Int'>
    readonly asset: FieldRef<"Signal", 'String'>
    readonly action: FieldRef<"Signal", 'String'>
    readonly timeframe: FieldRef<"Signal", 'String'>
    readonly priceTarget: FieldRef<"Signal", 'String'>
    readonly confidenceLevel: FieldRef<"Signal", 'Int'>
    readonly analysis: FieldRef<"Signal", 'String'>
    readonly createdAt: FieldRef<"Signal", 'DateTime'>
    readonly updatedAt: FieldRef<"Signal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Signal findUnique
   */
  export type SignalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * Filter, which Signal to fetch.
     */
    where: SignalWhereUniqueInput
  }

  /**
   * Signal findUniqueOrThrow
   */
  export type SignalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * Filter, which Signal to fetch.
     */
    where: SignalWhereUniqueInput
  }

  /**
   * Signal findFirst
   */
  export type SignalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * Filter, which Signal to fetch.
     */
    where?: SignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signals to fetch.
     */
    orderBy?: SignalOrderByWithRelationInput | SignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signals.
     */
    cursor?: SignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signals.
     */
    distinct?: SignalScalarFieldEnum | SignalScalarFieldEnum[]
  }

  /**
   * Signal findFirstOrThrow
   */
  export type SignalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * Filter, which Signal to fetch.
     */
    where?: SignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signals to fetch.
     */
    orderBy?: SignalOrderByWithRelationInput | SignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signals.
     */
    cursor?: SignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signals.
     */
    distinct?: SignalScalarFieldEnum | SignalScalarFieldEnum[]
  }

  /**
   * Signal findMany
   */
  export type SignalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * Filter, which Signals to fetch.
     */
    where?: SignalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signals to fetch.
     */
    orderBy?: SignalOrderByWithRelationInput | SignalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Signals.
     */
    cursor?: SignalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signals.
     */
    skip?: number
    distinct?: SignalScalarFieldEnum | SignalScalarFieldEnum[]
  }

  /**
   * Signal create
   */
  export type SignalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * The data needed to create a Signal.
     */
    data: XOR<SignalCreateInput, SignalUncheckedCreateInput>
  }

  /**
   * Signal createMany
   */
  export type SignalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Signals.
     */
    data: SignalCreateManyInput | SignalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Signal createManyAndReturn
   */
  export type SignalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * The data used to create many Signals.
     */
    data: SignalCreateManyInput | SignalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Signal update
   */
  export type SignalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * The data needed to update a Signal.
     */
    data: XOR<SignalUpdateInput, SignalUncheckedUpdateInput>
    /**
     * Choose, which Signal to update.
     */
    where: SignalWhereUniqueInput
  }

  /**
   * Signal updateMany
   */
  export type SignalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Signals.
     */
    data: XOR<SignalUpdateManyMutationInput, SignalUncheckedUpdateManyInput>
    /**
     * Filter which Signals to update
     */
    where?: SignalWhereInput
    /**
     * Limit how many Signals to update.
     */
    limit?: number
  }

  /**
   * Signal updateManyAndReturn
   */
  export type SignalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * The data used to update Signals.
     */
    data: XOR<SignalUpdateManyMutationInput, SignalUncheckedUpdateManyInput>
    /**
     * Filter which Signals to update
     */
    where?: SignalWhereInput
    /**
     * Limit how many Signals to update.
     */
    limit?: number
  }

  /**
   * Signal upsert
   */
  export type SignalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * The filter to search for the Signal to update in case it exists.
     */
    where: SignalWhereUniqueInput
    /**
     * In case the Signal found by the `where` argument doesn't exist, create a new Signal with this data.
     */
    create: XOR<SignalCreateInput, SignalUncheckedCreateInput>
    /**
     * In case the Signal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SignalUpdateInput, SignalUncheckedUpdateInput>
  }

  /**
   * Signal delete
   */
  export type SignalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
    /**
     * Filter which Signal to delete.
     */
    where: SignalWhereUniqueInput
  }

  /**
   * Signal deleteMany
   */
  export type SignalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signals to delete
     */
    where?: SignalWhereInput
    /**
     * Limit how many Signals to delete.
     */
    limit?: number
  }

  /**
   * Signal.comments
   */
  export type Signal$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Signal.likes
   */
  export type Signal$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Signal without action
   */
  export type SignalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signal
     */
    select?: SignalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signal
     */
    omit?: SignalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignalInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    signalId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    signalId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    content: string | null
    authorName: string | null
    authorAddress: string | null
    createdAt: Date | null
    signalId: number | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    content: string | null
    authorName: string | null
    authorAddress: string | null
    createdAt: Date | null
    signalId: number | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    authorName: number
    authorAddress: number
    createdAt: number
    signalId: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    signalId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    signalId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    authorName?: true
    authorAddress?: true
    createdAt?: true
    signalId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    authorName?: true
    authorAddress?: true
    createdAt?: true
    signalId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    authorName?: true
    authorAddress?: true
    createdAt?: true
    signalId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    content: string
    authorName: string
    authorAddress: string
    createdAt: Date
    signalId: number
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    authorName?: boolean
    authorAddress?: boolean
    createdAt?: boolean
    signalId?: boolean
    signal?: boolean | SignalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    authorName?: boolean
    authorAddress?: boolean
    createdAt?: boolean
    signalId?: boolean
    signal?: boolean | SignalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    authorName?: boolean
    authorAddress?: boolean
    createdAt?: boolean
    signalId?: boolean
    signal?: boolean | SignalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    authorName?: boolean
    authorAddress?: boolean
    createdAt?: boolean
    signalId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "authorName" | "authorAddress" | "createdAt" | "signalId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signal?: boolean | SignalDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signal?: boolean | SignalDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signal?: boolean | SignalDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      signal: Prisma.$SignalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      authorName: string
      authorAddress: string
      createdAt: Date
      signalId: number
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    signal<T extends SignalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SignalDefaultArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly authorName: FieldRef<"Comment", 'String'>
    readonly authorAddress: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly signalId: FieldRef<"Comment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeAvgAggregateOutputType = {
    id: number | null
    signalId: number | null
  }

  export type LikeSumAggregateOutputType = {
    id: number | null
    signalId: number | null
  }

  export type LikeMinAggregateOutputType = {
    id: number | null
    userAddress: string | null
    userName: string | null
    createdAt: Date | null
    signalId: number | null
  }

  export type LikeMaxAggregateOutputType = {
    id: number | null
    userAddress: string | null
    userName: string | null
    createdAt: Date | null
    signalId: number | null
  }

  export type LikeCountAggregateOutputType = {
    id: number
    userAddress: number
    userName: number
    createdAt: number
    signalId: number
    _all: number
  }


  export type LikeAvgAggregateInputType = {
    id?: true
    signalId?: true
  }

  export type LikeSumAggregateInputType = {
    id?: true
    signalId?: true
  }

  export type LikeMinAggregateInputType = {
    id?: true
    userAddress?: true
    userName?: true
    createdAt?: true
    signalId?: true
  }

  export type LikeMaxAggregateInputType = {
    id?: true
    userAddress?: true
    userName?: true
    createdAt?: true
    signalId?: true
  }

  export type LikeCountAggregateInputType = {
    id?: true
    userAddress?: true
    userName?: true
    createdAt?: true
    signalId?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _avg?: LikeAvgAggregateInputType
    _sum?: LikeSumAggregateInputType
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id: number
    userAddress: string
    userName: string
    createdAt: Date
    signalId: number
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAddress?: boolean
    userName?: boolean
    createdAt?: boolean
    signalId?: boolean
    signal?: boolean | SignalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAddress?: boolean
    userName?: boolean
    createdAt?: boolean
    signalId?: boolean
    signal?: boolean | SignalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAddress?: boolean
    userName?: boolean
    createdAt?: boolean
    signalId?: boolean
    signal?: boolean | SignalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectScalar = {
    id?: boolean
    userAddress?: boolean
    userName?: boolean
    createdAt?: boolean
    signalId?: boolean
  }

  export type LikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userAddress" | "userName" | "createdAt" | "signalId", ExtArgs["result"]["like"]>
  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signal?: boolean | SignalDefaultArgs<ExtArgs>
  }
  export type LikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signal?: boolean | SignalDefaultArgs<ExtArgs>
  }
  export type LikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    signal?: boolean | SignalDefaultArgs<ExtArgs>
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      signal: Prisma.$SignalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userAddress: string
      userName: string
      createdAt: Date
      signalId: number
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeWithIdOnly = await prisma.like.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(args?: SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikeUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likeWithIdOnly = await prisma.like.updateManyAndReturn({
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
    updateManyAndReturn<T extends LikeUpdateManyAndReturnArgs>(args: SelectSubset<T, LikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
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
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    signal<T extends SignalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SignalDefaultArgs<ExtArgs>>): Prisma__SignalClient<$Result.GetResult<Prisma.$SignalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Like model
   */
  interface LikeFieldRefs {
    readonly id: FieldRef<"Like", 'Int'>
    readonly userAddress: FieldRef<"Like", 'String'>
    readonly userName: FieldRef<"Like", 'String'>
    readonly createdAt: FieldRef<"Like", 'DateTime'>
    readonly signalId: FieldRef<"Like", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Like createManyAndReturn
   */
  export type LikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Like updateManyAndReturn
   */
  export type LikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
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


  export const AIModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    model_type: 'model_type',
    model_name: 'model_name',
    is_active: 'is_active',
    parameters: 'parameters',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AIModelScalarFieldEnum = (typeof AIModelScalarFieldEnum)[keyof typeof AIModelScalarFieldEnum]


  export const AIPredictionScalarFieldEnum: {
    id: 'id',
    modelId: 'modelId',
    modelType: 'modelType',
    p0: 'p0',
    asset: 'asset',
    action: 'action',
    confidence: 'confidence',
    timeframe: 'timeframe',
    reasoning: 'reasoning',
    priceTarget: 'priceTarget',
    performance: 'performance',
    verified: 'verified',
    modelSource: 'modelSource',
    createdAt: 'createdAt'
  };

  export type AIPredictionScalarFieldEnum = (typeof AIPredictionScalarFieldEnum)[keyof typeof AIPredictionScalarFieldEnum]


  export const UserModelPreferenceScalarFieldEnum: {
    id: 'id',
    userAddress: 'userAddress',
    modelId: 'modelId',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserModelPreferenceScalarFieldEnum = (typeof UserModelPreferenceScalarFieldEnum)[keyof typeof UserModelPreferenceScalarFieldEnum]


  export const SignalScalarFieldEnum: {
    id: 'id',
    asset: 'asset',
    action: 'action',
    timeframe: 'timeframe',
    priceTarget: 'priceTarget',
    confidenceLevel: 'confidenceLevel',
    analysis: 'analysis',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SignalScalarFieldEnum = (typeof SignalScalarFieldEnum)[keyof typeof SignalScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    authorName: 'authorName',
    authorAddress: 'authorAddress',
    createdAt: 'createdAt',
    signalId: 'signalId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id: 'id',
    userAddress: 'userAddress',
    userName: 'userName',
    createdAt: 'createdAt',
    signalId: 'signalId'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type AIModelWhereInput = {
    AND?: AIModelWhereInput | AIModelWhereInput[]
    OR?: AIModelWhereInput[]
    NOT?: AIModelWhereInput | AIModelWhereInput[]
    id?: IntFilter<"AIModel"> | number
    name?: StringFilter<"AIModel"> | string
    description?: StringNullableFilter<"AIModel"> | string | null
    model_type?: StringFilter<"AIModel"> | string
    model_name?: StringFilter<"AIModel"> | string
    is_active?: BoolFilter<"AIModel"> | boolean
    parameters?: JsonNullableFilter<"AIModel">
    createdAt?: DateTimeFilter<"AIModel"> | Date | string
    updatedAt?: DateTimeFilter<"AIModel"> | Date | string
    predictions?: AIPredictionListRelationFilter
    userPreferences?: UserModelPreferenceListRelationFilter
  }

  export type AIModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    model_type?: SortOrder
    model_name?: SortOrder
    is_active?: SortOrder
    parameters?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    predictions?: AIPredictionOrderByRelationAggregateInput
    userPreferences?: UserModelPreferenceOrderByRelationAggregateInput
  }

  export type AIModelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AIModelWhereInput | AIModelWhereInput[]
    OR?: AIModelWhereInput[]
    NOT?: AIModelWhereInput | AIModelWhereInput[]
    name?: StringFilter<"AIModel"> | string
    description?: StringNullableFilter<"AIModel"> | string | null
    model_type?: StringFilter<"AIModel"> | string
    model_name?: StringFilter<"AIModel"> | string
    is_active?: BoolFilter<"AIModel"> | boolean
    parameters?: JsonNullableFilter<"AIModel">
    createdAt?: DateTimeFilter<"AIModel"> | Date | string
    updatedAt?: DateTimeFilter<"AIModel"> | Date | string
    predictions?: AIPredictionListRelationFilter
    userPreferences?: UserModelPreferenceListRelationFilter
  }, "id">

  export type AIModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    model_type?: SortOrder
    model_name?: SortOrder
    is_active?: SortOrder
    parameters?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AIModelCountOrderByAggregateInput
    _avg?: AIModelAvgOrderByAggregateInput
    _max?: AIModelMaxOrderByAggregateInput
    _min?: AIModelMinOrderByAggregateInput
    _sum?: AIModelSumOrderByAggregateInput
  }

  export type AIModelScalarWhereWithAggregatesInput = {
    AND?: AIModelScalarWhereWithAggregatesInput | AIModelScalarWhereWithAggregatesInput[]
    OR?: AIModelScalarWhereWithAggregatesInput[]
    NOT?: AIModelScalarWhereWithAggregatesInput | AIModelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AIModel"> | number
    name?: StringWithAggregatesFilter<"AIModel"> | string
    description?: StringNullableWithAggregatesFilter<"AIModel"> | string | null
    model_type?: StringWithAggregatesFilter<"AIModel"> | string
    model_name?: StringWithAggregatesFilter<"AIModel"> | string
    is_active?: BoolWithAggregatesFilter<"AIModel"> | boolean
    parameters?: JsonNullableWithAggregatesFilter<"AIModel">
    createdAt?: DateTimeWithAggregatesFilter<"AIModel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AIModel"> | Date | string
  }

  export type AIPredictionWhereInput = {
    AND?: AIPredictionWhereInput | AIPredictionWhereInput[]
    OR?: AIPredictionWhereInput[]
    NOT?: AIPredictionWhereInput | AIPredictionWhereInput[]
    id?: IntFilter<"AIPrediction"> | number
    modelId?: IntFilter<"AIPrediction"> | number
    modelType?: StringFilter<"AIPrediction"> | string
    p0?: FloatNullableFilter<"AIPrediction"> | number | null
    asset?: StringFilter<"AIPrediction"> | string
    action?: StringFilter<"AIPrediction"> | string
    confidence?: FloatFilter<"AIPrediction"> | number
    timeframe?: StringFilter<"AIPrediction"> | string
    reasoning?: StringFilter<"AIPrediction"> | string
    priceTarget?: FloatNullableFilter<"AIPrediction"> | number | null
    performance?: FloatNullableFilter<"AIPrediction"> | number | null
    verified?: BoolFilter<"AIPrediction"> | boolean
    modelSource?: StringFilter<"AIPrediction"> | string
    createdAt?: DateTimeFilter<"AIPrediction"> | Date | string
    model?: XOR<AIModelScalarRelationFilter, AIModelWhereInput>
  }

  export type AIPredictionOrderByWithRelationInput = {
    id?: SortOrder
    modelId?: SortOrder
    modelType?: SortOrder
    p0?: SortOrderInput | SortOrder
    asset?: SortOrder
    action?: SortOrder
    confidence?: SortOrder
    timeframe?: SortOrder
    reasoning?: SortOrder
    priceTarget?: SortOrderInput | SortOrder
    performance?: SortOrderInput | SortOrder
    verified?: SortOrder
    modelSource?: SortOrder
    createdAt?: SortOrder
    model?: AIModelOrderByWithRelationInput
  }

  export type AIPredictionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AIPredictionWhereInput | AIPredictionWhereInput[]
    OR?: AIPredictionWhereInput[]
    NOT?: AIPredictionWhereInput | AIPredictionWhereInput[]
    modelId?: IntFilter<"AIPrediction"> | number
    modelType?: StringFilter<"AIPrediction"> | string
    p0?: FloatNullableFilter<"AIPrediction"> | number | null
    asset?: StringFilter<"AIPrediction"> | string
    action?: StringFilter<"AIPrediction"> | string
    confidence?: FloatFilter<"AIPrediction"> | number
    timeframe?: StringFilter<"AIPrediction"> | string
    reasoning?: StringFilter<"AIPrediction"> | string
    priceTarget?: FloatNullableFilter<"AIPrediction"> | number | null
    performance?: FloatNullableFilter<"AIPrediction"> | number | null
    verified?: BoolFilter<"AIPrediction"> | boolean
    modelSource?: StringFilter<"AIPrediction"> | string
    createdAt?: DateTimeFilter<"AIPrediction"> | Date | string
    model?: XOR<AIModelScalarRelationFilter, AIModelWhereInput>
  }, "id">

  export type AIPredictionOrderByWithAggregationInput = {
    id?: SortOrder
    modelId?: SortOrder
    modelType?: SortOrder
    p0?: SortOrderInput | SortOrder
    asset?: SortOrder
    action?: SortOrder
    confidence?: SortOrder
    timeframe?: SortOrder
    reasoning?: SortOrder
    priceTarget?: SortOrderInput | SortOrder
    performance?: SortOrderInput | SortOrder
    verified?: SortOrder
    modelSource?: SortOrder
    createdAt?: SortOrder
    _count?: AIPredictionCountOrderByAggregateInput
    _avg?: AIPredictionAvgOrderByAggregateInput
    _max?: AIPredictionMaxOrderByAggregateInput
    _min?: AIPredictionMinOrderByAggregateInput
    _sum?: AIPredictionSumOrderByAggregateInput
  }

  export type AIPredictionScalarWhereWithAggregatesInput = {
    AND?: AIPredictionScalarWhereWithAggregatesInput | AIPredictionScalarWhereWithAggregatesInput[]
    OR?: AIPredictionScalarWhereWithAggregatesInput[]
    NOT?: AIPredictionScalarWhereWithAggregatesInput | AIPredictionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AIPrediction"> | number
    modelId?: IntWithAggregatesFilter<"AIPrediction"> | number
    modelType?: StringWithAggregatesFilter<"AIPrediction"> | string
    p0?: FloatNullableWithAggregatesFilter<"AIPrediction"> | number | null
    asset?: StringWithAggregatesFilter<"AIPrediction"> | string
    action?: StringWithAggregatesFilter<"AIPrediction"> | string
    confidence?: FloatWithAggregatesFilter<"AIPrediction"> | number
    timeframe?: StringWithAggregatesFilter<"AIPrediction"> | string
    reasoning?: StringWithAggregatesFilter<"AIPrediction"> | string
    priceTarget?: FloatNullableWithAggregatesFilter<"AIPrediction"> | number | null
    performance?: FloatNullableWithAggregatesFilter<"AIPrediction"> | number | null
    verified?: BoolWithAggregatesFilter<"AIPrediction"> | boolean
    modelSource?: StringWithAggregatesFilter<"AIPrediction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AIPrediction"> | Date | string
  }

  export type UserModelPreferenceWhereInput = {
    AND?: UserModelPreferenceWhereInput | UserModelPreferenceWhereInput[]
    OR?: UserModelPreferenceWhereInput[]
    NOT?: UserModelPreferenceWhereInput | UserModelPreferenceWhereInput[]
    id?: IntFilter<"UserModelPreference"> | number
    userAddress?: StringFilter<"UserModelPreference"> | string
    modelId?: IntFilter<"UserModelPreference"> | number
    isDefault?: BoolFilter<"UserModelPreference"> | boolean
    createdAt?: DateTimeFilter<"UserModelPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserModelPreference"> | Date | string
    model?: XOR<AIModelScalarRelationFilter, AIModelWhereInput>
  }

  export type UserModelPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    userAddress?: SortOrder
    modelId?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    model?: AIModelOrderByWithRelationInput
  }

  export type UserModelPreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userAddress_modelId?: UserModelPreferenceUserAddress_modelIdCompoundUniqueInput
    AND?: UserModelPreferenceWhereInput | UserModelPreferenceWhereInput[]
    OR?: UserModelPreferenceWhereInput[]
    NOT?: UserModelPreferenceWhereInput | UserModelPreferenceWhereInput[]
    userAddress?: StringFilter<"UserModelPreference"> | string
    modelId?: IntFilter<"UserModelPreference"> | number
    isDefault?: BoolFilter<"UserModelPreference"> | boolean
    createdAt?: DateTimeFilter<"UserModelPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserModelPreference"> | Date | string
    model?: XOR<AIModelScalarRelationFilter, AIModelWhereInput>
  }, "id" | "userAddress_modelId">

  export type UserModelPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    userAddress?: SortOrder
    modelId?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserModelPreferenceCountOrderByAggregateInput
    _avg?: UserModelPreferenceAvgOrderByAggregateInput
    _max?: UserModelPreferenceMaxOrderByAggregateInput
    _min?: UserModelPreferenceMinOrderByAggregateInput
    _sum?: UserModelPreferenceSumOrderByAggregateInput
  }

  export type UserModelPreferenceScalarWhereWithAggregatesInput = {
    AND?: UserModelPreferenceScalarWhereWithAggregatesInput | UserModelPreferenceScalarWhereWithAggregatesInput[]
    OR?: UserModelPreferenceScalarWhereWithAggregatesInput[]
    NOT?: UserModelPreferenceScalarWhereWithAggregatesInput | UserModelPreferenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserModelPreference"> | number
    userAddress?: StringWithAggregatesFilter<"UserModelPreference"> | string
    modelId?: IntWithAggregatesFilter<"UserModelPreference"> | number
    isDefault?: BoolWithAggregatesFilter<"UserModelPreference"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserModelPreference"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserModelPreference"> | Date | string
  }

  export type SignalWhereInput = {
    AND?: SignalWhereInput | SignalWhereInput[]
    OR?: SignalWhereInput[]
    NOT?: SignalWhereInput | SignalWhereInput[]
    id?: IntFilter<"Signal"> | number
    asset?: StringFilter<"Signal"> | string
    action?: StringFilter<"Signal"> | string
    timeframe?: StringFilter<"Signal"> | string
    priceTarget?: StringNullableFilter<"Signal"> | string | null
    confidenceLevel?: IntFilter<"Signal"> | number
    analysis?: StringFilter<"Signal"> | string
    createdAt?: DateTimeFilter<"Signal"> | Date | string
    updatedAt?: DateTimeFilter<"Signal"> | Date | string
    comments?: CommentListRelationFilter
    likes?: LikeListRelationFilter
  }

  export type SignalOrderByWithRelationInput = {
    id?: SortOrder
    asset?: SortOrder
    action?: SortOrder
    timeframe?: SortOrder
    priceTarget?: SortOrderInput | SortOrder
    confidenceLevel?: SortOrder
    analysis?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    comments?: CommentOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
  }

  export type SignalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SignalWhereInput | SignalWhereInput[]
    OR?: SignalWhereInput[]
    NOT?: SignalWhereInput | SignalWhereInput[]
    asset?: StringFilter<"Signal"> | string
    action?: StringFilter<"Signal"> | string
    timeframe?: StringFilter<"Signal"> | string
    priceTarget?: StringNullableFilter<"Signal"> | string | null
    confidenceLevel?: IntFilter<"Signal"> | number
    analysis?: StringFilter<"Signal"> | string
    createdAt?: DateTimeFilter<"Signal"> | Date | string
    updatedAt?: DateTimeFilter<"Signal"> | Date | string
    comments?: CommentListRelationFilter
    likes?: LikeListRelationFilter
  }, "id">

  export type SignalOrderByWithAggregationInput = {
    id?: SortOrder
    asset?: SortOrder
    action?: SortOrder
    timeframe?: SortOrder
    priceTarget?: SortOrderInput | SortOrder
    confidenceLevel?: SortOrder
    analysis?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SignalCountOrderByAggregateInput
    _avg?: SignalAvgOrderByAggregateInput
    _max?: SignalMaxOrderByAggregateInput
    _min?: SignalMinOrderByAggregateInput
    _sum?: SignalSumOrderByAggregateInput
  }

  export type SignalScalarWhereWithAggregatesInput = {
    AND?: SignalScalarWhereWithAggregatesInput | SignalScalarWhereWithAggregatesInput[]
    OR?: SignalScalarWhereWithAggregatesInput[]
    NOT?: SignalScalarWhereWithAggregatesInput | SignalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Signal"> | number
    asset?: StringWithAggregatesFilter<"Signal"> | string
    action?: StringWithAggregatesFilter<"Signal"> | string
    timeframe?: StringWithAggregatesFilter<"Signal"> | string
    priceTarget?: StringNullableWithAggregatesFilter<"Signal"> | string | null
    confidenceLevel?: IntWithAggregatesFilter<"Signal"> | number
    analysis?: StringWithAggregatesFilter<"Signal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Signal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Signal"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    authorName?: StringFilter<"Comment"> | string
    authorAddress?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    signalId?: IntFilter<"Comment"> | number
    signal?: XOR<SignalScalarRelationFilter, SignalWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    authorAddress?: SortOrder
    createdAt?: SortOrder
    signalId?: SortOrder
    signal?: SignalOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    authorName?: StringFilter<"Comment"> | string
    authorAddress?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    signalId?: IntFilter<"Comment"> | number
    signal?: XOR<SignalScalarRelationFilter, SignalWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    authorAddress?: SortOrder
    createdAt?: SortOrder
    signalId?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    content?: StringWithAggregatesFilter<"Comment"> | string
    authorName?: StringWithAggregatesFilter<"Comment"> | string
    authorAddress?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    signalId?: IntWithAggregatesFilter<"Comment"> | number
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    id?: IntFilter<"Like"> | number
    userAddress?: StringFilter<"Like"> | string
    userName?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    signalId?: IntFilter<"Like"> | number
    signal?: XOR<SignalScalarRelationFilter, SignalWhereInput>
  }

  export type LikeOrderByWithRelationInput = {
    id?: SortOrder
    userAddress?: SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    signalId?: SortOrder
    signal?: SignalOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userAddress_signalId?: LikeUserAddressSignalIdCompoundUniqueInput
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    userAddress?: StringFilter<"Like"> | string
    userName?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    signalId?: IntFilter<"Like"> | number
    signal?: XOR<SignalScalarRelationFilter, SignalWhereInput>
  }, "id" | "userAddress_signalId">

  export type LikeOrderByWithAggregationInput = {
    id?: SortOrder
    userAddress?: SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    signalId?: SortOrder
    _count?: LikeCountOrderByAggregateInput
    _avg?: LikeAvgOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
    _sum?: LikeSumOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Like"> | number
    userAddress?: StringWithAggregatesFilter<"Like"> | string
    userName?: StringWithAggregatesFilter<"Like"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Like"> | Date | string
    signalId?: IntWithAggregatesFilter<"Like"> | number
  }

  export type AIModelCreateInput = {
    name: string
    description?: string | null
    model_type?: string
    model_name?: string
    is_active?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    predictions?: AIPredictionCreateNestedManyWithoutModelInput
    userPreferences?: UserModelPreferenceCreateNestedManyWithoutModelInput
  }

  export type AIModelUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    model_type?: string
    model_name?: string
    is_active?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    predictions?: AIPredictionUncheckedCreateNestedManyWithoutModelInput
    userPreferences?: UserModelPreferenceUncheckedCreateNestedManyWithoutModelInput
  }

  export type AIModelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    model_type?: StringFieldUpdateOperationsInput | string
    model_name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: AIPredictionUpdateManyWithoutModelNestedInput
    userPreferences?: UserModelPreferenceUpdateManyWithoutModelNestedInput
  }

  export type AIModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    model_type?: StringFieldUpdateOperationsInput | string
    model_name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: AIPredictionUncheckedUpdateManyWithoutModelNestedInput
    userPreferences?: UserModelPreferenceUncheckedUpdateManyWithoutModelNestedInput
  }

  export type AIModelCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    model_type?: string
    model_name?: string
    is_active?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIModelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    model_type?: StringFieldUpdateOperationsInput | string
    model_name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    model_type?: StringFieldUpdateOperationsInput | string
    model_name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIPredictionCreateInput = {
    modelType: string
    p0?: number | null
    asset: string
    action: string
    confidence: number
    timeframe: string
    reasoning: string
    priceTarget?: number | null
    performance?: number | null
    verified?: boolean
    modelSource?: string
    createdAt?: Date | string
    model: AIModelCreateNestedOneWithoutPredictionsInput
  }

  export type AIPredictionUncheckedCreateInput = {
    id?: number
    modelId: number
    modelType: string
    p0?: number | null
    asset: string
    action: string
    confidence: number
    timeframe: string
    reasoning: string
    priceTarget?: number | null
    performance?: number | null
    verified?: boolean
    modelSource?: string
    createdAt?: Date | string
  }

  export type AIPredictionUpdateInput = {
    modelType?: StringFieldUpdateOperationsInput | string
    p0?: NullableFloatFieldUpdateOperationsInput | number | null
    asset?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    timeframe?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    priceTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    performance?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    modelSource?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: AIModelUpdateOneRequiredWithoutPredictionsNestedInput
  }

  export type AIPredictionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    modelType?: StringFieldUpdateOperationsInput | string
    p0?: NullableFloatFieldUpdateOperationsInput | number | null
    asset?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    timeframe?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    priceTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    performance?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    modelSource?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIPredictionCreateManyInput = {
    id?: number
    modelId: number
    modelType: string
    p0?: number | null
    asset: string
    action: string
    confidence: number
    timeframe: string
    reasoning: string
    priceTarget?: number | null
    performance?: number | null
    verified?: boolean
    modelSource?: string
    createdAt?: Date | string
  }

  export type AIPredictionUpdateManyMutationInput = {
    modelType?: StringFieldUpdateOperationsInput | string
    p0?: NullableFloatFieldUpdateOperationsInput | number | null
    asset?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    timeframe?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    priceTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    performance?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    modelSource?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIPredictionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelId?: IntFieldUpdateOperationsInput | number
    modelType?: StringFieldUpdateOperationsInput | string
    p0?: NullableFloatFieldUpdateOperationsInput | number | null
    asset?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    timeframe?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    priceTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    performance?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    modelSource?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModelPreferenceCreateInput = {
    userAddress: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    model: AIModelCreateNestedOneWithoutUserPreferencesInput
  }

  export type UserModelPreferenceUncheckedCreateInput = {
    id?: number
    userAddress: string
    modelId: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserModelPreferenceUpdateInput = {
    userAddress?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: AIModelUpdateOneRequiredWithoutUserPreferencesNestedInput
  }

  export type UserModelPreferenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userAddress?: StringFieldUpdateOperationsInput | string
    modelId?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModelPreferenceCreateManyInput = {
    id?: number
    userAddress: string
    modelId: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserModelPreferenceUpdateManyMutationInput = {
    userAddress?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModelPreferenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userAddress?: StringFieldUpdateOperationsInput | string
    modelId?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalCreateInput = {
    asset: string
    action: string
    timeframe: string
    priceTarget?: string | null
    confidenceLevel: number
    analysis: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutSignalInput
    likes?: LikeCreateNestedManyWithoutSignalInput
  }

  export type SignalUncheckedCreateInput = {
    id?: number
    asset: string
    action: string
    timeframe: string
    priceTarget?: string | null
    confidenceLevel: number
    analysis: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutSignalInput
    likes?: LikeUncheckedCreateNestedManyWithoutSignalInput
  }

  export type SignalUpdateInput = {
    asset?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    priceTarget?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceLevel?: IntFieldUpdateOperationsInput | number
    analysis?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutSignalNestedInput
    likes?: LikeUpdateManyWithoutSignalNestedInput
  }

  export type SignalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    priceTarget?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceLevel?: IntFieldUpdateOperationsInput | number
    analysis?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutSignalNestedInput
    likes?: LikeUncheckedUpdateManyWithoutSignalNestedInput
  }

  export type SignalCreateManyInput = {
    id?: number
    asset: string
    action: string
    timeframe: string
    priceTarget?: string | null
    confidenceLevel: number
    analysis: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SignalUpdateManyMutationInput = {
    asset?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    priceTarget?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceLevel?: IntFieldUpdateOperationsInput | number
    analysis?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    priceTarget?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceLevel?: IntFieldUpdateOperationsInput | number
    analysis?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    content: string
    authorName: string
    authorAddress: string
    createdAt?: Date | string
    signal: SignalCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    content: string
    authorName: string
    authorAddress: string
    createdAt?: Date | string
    signalId: number
  }

  export type CommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signal?: SignalUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signalId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentCreateManyInput = {
    id?: number
    content: string
    authorName: string
    authorAddress: string
    createdAt?: Date | string
    signalId: number
  }

  export type CommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signalId?: IntFieldUpdateOperationsInput | number
  }

  export type LikeCreateInput = {
    userAddress: string
    userName: string
    createdAt?: Date | string
    signal: SignalCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    id?: number
    userAddress: string
    userName: string
    createdAt?: Date | string
    signalId: number
  }

  export type LikeUpdateInput = {
    userAddress?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signal?: SignalUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userAddress?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signalId?: IntFieldUpdateOperationsInput | number
  }

  export type LikeCreateManyInput = {
    id?: number
    userAddress: string
    userName: string
    createdAt?: Date | string
    signalId: number
  }

  export type LikeUpdateManyMutationInput = {
    userAddress?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userAddress?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signalId?: IntFieldUpdateOperationsInput | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type AIPredictionListRelationFilter = {
    every?: AIPredictionWhereInput
    some?: AIPredictionWhereInput
    none?: AIPredictionWhereInput
  }

  export type UserModelPreferenceListRelationFilter = {
    every?: UserModelPreferenceWhereInput
    some?: UserModelPreferenceWhereInput
    none?: UserModelPreferenceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AIPredictionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserModelPreferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    model_type?: SortOrder
    model_name?: SortOrder
    is_active?: SortOrder
    parameters?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIModelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AIModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    model_type?: SortOrder
    model_name?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    model_type?: SortOrder
    model_name?: SortOrder
    is_active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AIModelSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AIModelScalarRelationFilter = {
    is?: AIModelWhereInput
    isNot?: AIModelWhereInput
  }

  export type AIPredictionCountOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    modelType?: SortOrder
    p0?: SortOrder
    asset?: SortOrder
    action?: SortOrder
    confidence?: SortOrder
    timeframe?: SortOrder
    reasoning?: SortOrder
    priceTarget?: SortOrder
    performance?: SortOrder
    verified?: SortOrder
    modelSource?: SortOrder
    createdAt?: SortOrder
  }

  export type AIPredictionAvgOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    p0?: SortOrder
    confidence?: SortOrder
    priceTarget?: SortOrder
    performance?: SortOrder
  }

  export type AIPredictionMaxOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    modelType?: SortOrder
    p0?: SortOrder
    asset?: SortOrder
    action?: SortOrder
    confidence?: SortOrder
    timeframe?: SortOrder
    reasoning?: SortOrder
    priceTarget?: SortOrder
    performance?: SortOrder
    verified?: SortOrder
    modelSource?: SortOrder
    createdAt?: SortOrder
  }

  export type AIPredictionMinOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    modelType?: SortOrder
    p0?: SortOrder
    asset?: SortOrder
    action?: SortOrder
    confidence?: SortOrder
    timeframe?: SortOrder
    reasoning?: SortOrder
    priceTarget?: SortOrder
    performance?: SortOrder
    verified?: SortOrder
    modelSource?: SortOrder
    createdAt?: SortOrder
  }

  export type AIPredictionSumOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    p0?: SortOrder
    confidence?: SortOrder
    priceTarget?: SortOrder
    performance?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserModelPreferenceUserAddress_modelIdCompoundUniqueInput = {
    userAddress: string
    modelId: number
  }

  export type UserModelPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    userAddress?: SortOrder
    modelId?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserModelPreferenceAvgOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
  }

  export type UserModelPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    userAddress?: SortOrder
    modelId?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserModelPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    userAddress?: SortOrder
    modelId?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserModelPreferenceSumOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SignalCountOrderByAggregateInput = {
    id?: SortOrder
    asset?: SortOrder
    action?: SortOrder
    timeframe?: SortOrder
    priceTarget?: SortOrder
    confidenceLevel?: SortOrder
    analysis?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SignalAvgOrderByAggregateInput = {
    id?: SortOrder
    confidenceLevel?: SortOrder
  }

  export type SignalMaxOrderByAggregateInput = {
    id?: SortOrder
    asset?: SortOrder
    action?: SortOrder
    timeframe?: SortOrder
    priceTarget?: SortOrder
    confidenceLevel?: SortOrder
    analysis?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SignalMinOrderByAggregateInput = {
    id?: SortOrder
    asset?: SortOrder
    action?: SortOrder
    timeframe?: SortOrder
    priceTarget?: SortOrder
    confidenceLevel?: SortOrder
    analysis?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SignalSumOrderByAggregateInput = {
    id?: SortOrder
    confidenceLevel?: SortOrder
  }

  export type SignalScalarRelationFilter = {
    is?: SignalWhereInput
    isNot?: SignalWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    authorAddress?: SortOrder
    createdAt?: SortOrder
    signalId?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    signalId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    authorAddress?: SortOrder
    createdAt?: SortOrder
    signalId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorName?: SortOrder
    authorAddress?: SortOrder
    createdAt?: SortOrder
    signalId?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    signalId?: SortOrder
  }

  export type LikeUserAddressSignalIdCompoundUniqueInput = {
    userAddress: string
    signalId: number
  }

  export type LikeCountOrderByAggregateInput = {
    id?: SortOrder
    userAddress?: SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    signalId?: SortOrder
  }

  export type LikeAvgOrderByAggregateInput = {
    id?: SortOrder
    signalId?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userAddress?: SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    signalId?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    id?: SortOrder
    userAddress?: SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    signalId?: SortOrder
  }

  export type LikeSumOrderByAggregateInput = {
    id?: SortOrder
    signalId?: SortOrder
  }

  export type AIPredictionCreateNestedManyWithoutModelInput = {
    create?: XOR<AIPredictionCreateWithoutModelInput, AIPredictionUncheckedCreateWithoutModelInput> | AIPredictionCreateWithoutModelInput[] | AIPredictionUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AIPredictionCreateOrConnectWithoutModelInput | AIPredictionCreateOrConnectWithoutModelInput[]
    createMany?: AIPredictionCreateManyModelInputEnvelope
    connect?: AIPredictionWhereUniqueInput | AIPredictionWhereUniqueInput[]
  }

  export type UserModelPreferenceCreateNestedManyWithoutModelInput = {
    create?: XOR<UserModelPreferenceCreateWithoutModelInput, UserModelPreferenceUncheckedCreateWithoutModelInput> | UserModelPreferenceCreateWithoutModelInput[] | UserModelPreferenceUncheckedCreateWithoutModelInput[]
    connectOrCreate?: UserModelPreferenceCreateOrConnectWithoutModelInput | UserModelPreferenceCreateOrConnectWithoutModelInput[]
    createMany?: UserModelPreferenceCreateManyModelInputEnvelope
    connect?: UserModelPreferenceWhereUniqueInput | UserModelPreferenceWhereUniqueInput[]
  }

  export type AIPredictionUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<AIPredictionCreateWithoutModelInput, AIPredictionUncheckedCreateWithoutModelInput> | AIPredictionCreateWithoutModelInput[] | AIPredictionUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AIPredictionCreateOrConnectWithoutModelInput | AIPredictionCreateOrConnectWithoutModelInput[]
    createMany?: AIPredictionCreateManyModelInputEnvelope
    connect?: AIPredictionWhereUniqueInput | AIPredictionWhereUniqueInput[]
  }

  export type UserModelPreferenceUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<UserModelPreferenceCreateWithoutModelInput, UserModelPreferenceUncheckedCreateWithoutModelInput> | UserModelPreferenceCreateWithoutModelInput[] | UserModelPreferenceUncheckedCreateWithoutModelInput[]
    connectOrCreate?: UserModelPreferenceCreateOrConnectWithoutModelInput | UserModelPreferenceCreateOrConnectWithoutModelInput[]
    createMany?: UserModelPreferenceCreateManyModelInputEnvelope
    connect?: UserModelPreferenceWhereUniqueInput | UserModelPreferenceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AIPredictionUpdateManyWithoutModelNestedInput = {
    create?: XOR<AIPredictionCreateWithoutModelInput, AIPredictionUncheckedCreateWithoutModelInput> | AIPredictionCreateWithoutModelInput[] | AIPredictionUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AIPredictionCreateOrConnectWithoutModelInput | AIPredictionCreateOrConnectWithoutModelInput[]
    upsert?: AIPredictionUpsertWithWhereUniqueWithoutModelInput | AIPredictionUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: AIPredictionCreateManyModelInputEnvelope
    set?: AIPredictionWhereUniqueInput | AIPredictionWhereUniqueInput[]
    disconnect?: AIPredictionWhereUniqueInput | AIPredictionWhereUniqueInput[]
    delete?: AIPredictionWhereUniqueInput | AIPredictionWhereUniqueInput[]
    connect?: AIPredictionWhereUniqueInput | AIPredictionWhereUniqueInput[]
    update?: AIPredictionUpdateWithWhereUniqueWithoutModelInput | AIPredictionUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: AIPredictionUpdateManyWithWhereWithoutModelInput | AIPredictionUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: AIPredictionScalarWhereInput | AIPredictionScalarWhereInput[]
  }

  export type UserModelPreferenceUpdateManyWithoutModelNestedInput = {
    create?: XOR<UserModelPreferenceCreateWithoutModelInput, UserModelPreferenceUncheckedCreateWithoutModelInput> | UserModelPreferenceCreateWithoutModelInput[] | UserModelPreferenceUncheckedCreateWithoutModelInput[]
    connectOrCreate?: UserModelPreferenceCreateOrConnectWithoutModelInput | UserModelPreferenceCreateOrConnectWithoutModelInput[]
    upsert?: UserModelPreferenceUpsertWithWhereUniqueWithoutModelInput | UserModelPreferenceUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: UserModelPreferenceCreateManyModelInputEnvelope
    set?: UserModelPreferenceWhereUniqueInput | UserModelPreferenceWhereUniqueInput[]
    disconnect?: UserModelPreferenceWhereUniqueInput | UserModelPreferenceWhereUniqueInput[]
    delete?: UserModelPreferenceWhereUniqueInput | UserModelPreferenceWhereUniqueInput[]
    connect?: UserModelPreferenceWhereUniqueInput | UserModelPreferenceWhereUniqueInput[]
    update?: UserModelPreferenceUpdateWithWhereUniqueWithoutModelInput | UserModelPreferenceUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: UserModelPreferenceUpdateManyWithWhereWithoutModelInput | UserModelPreferenceUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: UserModelPreferenceScalarWhereInput | UserModelPreferenceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AIPredictionUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<AIPredictionCreateWithoutModelInput, AIPredictionUncheckedCreateWithoutModelInput> | AIPredictionCreateWithoutModelInput[] | AIPredictionUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AIPredictionCreateOrConnectWithoutModelInput | AIPredictionCreateOrConnectWithoutModelInput[]
    upsert?: AIPredictionUpsertWithWhereUniqueWithoutModelInput | AIPredictionUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: AIPredictionCreateManyModelInputEnvelope
    set?: AIPredictionWhereUniqueInput | AIPredictionWhereUniqueInput[]
    disconnect?: AIPredictionWhereUniqueInput | AIPredictionWhereUniqueInput[]
    delete?: AIPredictionWhereUniqueInput | AIPredictionWhereUniqueInput[]
    connect?: AIPredictionWhereUniqueInput | AIPredictionWhereUniqueInput[]
    update?: AIPredictionUpdateWithWhereUniqueWithoutModelInput | AIPredictionUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: AIPredictionUpdateManyWithWhereWithoutModelInput | AIPredictionUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: AIPredictionScalarWhereInput | AIPredictionScalarWhereInput[]
  }

  export type UserModelPreferenceUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<UserModelPreferenceCreateWithoutModelInput, UserModelPreferenceUncheckedCreateWithoutModelInput> | UserModelPreferenceCreateWithoutModelInput[] | UserModelPreferenceUncheckedCreateWithoutModelInput[]
    connectOrCreate?: UserModelPreferenceCreateOrConnectWithoutModelInput | UserModelPreferenceCreateOrConnectWithoutModelInput[]
    upsert?: UserModelPreferenceUpsertWithWhereUniqueWithoutModelInput | UserModelPreferenceUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: UserModelPreferenceCreateManyModelInputEnvelope
    set?: UserModelPreferenceWhereUniqueInput | UserModelPreferenceWhereUniqueInput[]
    disconnect?: UserModelPreferenceWhereUniqueInput | UserModelPreferenceWhereUniqueInput[]
    delete?: UserModelPreferenceWhereUniqueInput | UserModelPreferenceWhereUniqueInput[]
    connect?: UserModelPreferenceWhereUniqueInput | UserModelPreferenceWhereUniqueInput[]
    update?: UserModelPreferenceUpdateWithWhereUniqueWithoutModelInput | UserModelPreferenceUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: UserModelPreferenceUpdateManyWithWhereWithoutModelInput | UserModelPreferenceUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: UserModelPreferenceScalarWhereInput | UserModelPreferenceScalarWhereInput[]
  }

  export type AIModelCreateNestedOneWithoutPredictionsInput = {
    create?: XOR<AIModelCreateWithoutPredictionsInput, AIModelUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: AIModelCreateOrConnectWithoutPredictionsInput
    connect?: AIModelWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AIModelUpdateOneRequiredWithoutPredictionsNestedInput = {
    create?: XOR<AIModelCreateWithoutPredictionsInput, AIModelUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: AIModelCreateOrConnectWithoutPredictionsInput
    upsert?: AIModelUpsertWithoutPredictionsInput
    connect?: AIModelWhereUniqueInput
    update?: XOR<XOR<AIModelUpdateToOneWithWhereWithoutPredictionsInput, AIModelUpdateWithoutPredictionsInput>, AIModelUncheckedUpdateWithoutPredictionsInput>
  }

  export type AIModelCreateNestedOneWithoutUserPreferencesInput = {
    create?: XOR<AIModelCreateWithoutUserPreferencesInput, AIModelUncheckedCreateWithoutUserPreferencesInput>
    connectOrCreate?: AIModelCreateOrConnectWithoutUserPreferencesInput
    connect?: AIModelWhereUniqueInput
  }

  export type AIModelUpdateOneRequiredWithoutUserPreferencesNestedInput = {
    create?: XOR<AIModelCreateWithoutUserPreferencesInput, AIModelUncheckedCreateWithoutUserPreferencesInput>
    connectOrCreate?: AIModelCreateOrConnectWithoutUserPreferencesInput
    upsert?: AIModelUpsertWithoutUserPreferencesInput
    connect?: AIModelWhereUniqueInput
    update?: XOR<XOR<AIModelUpdateToOneWithWhereWithoutUserPreferencesInput, AIModelUpdateWithoutUserPreferencesInput>, AIModelUncheckedUpdateWithoutUserPreferencesInput>
  }

  export type CommentCreateNestedManyWithoutSignalInput = {
    create?: XOR<CommentCreateWithoutSignalInput, CommentUncheckedCreateWithoutSignalInput> | CommentCreateWithoutSignalInput[] | CommentUncheckedCreateWithoutSignalInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutSignalInput | CommentCreateOrConnectWithoutSignalInput[]
    createMany?: CommentCreateManySignalInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutSignalInput = {
    create?: XOR<LikeCreateWithoutSignalInput, LikeUncheckedCreateWithoutSignalInput> | LikeCreateWithoutSignalInput[] | LikeUncheckedCreateWithoutSignalInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutSignalInput | LikeCreateOrConnectWithoutSignalInput[]
    createMany?: LikeCreateManySignalInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutSignalInput = {
    create?: XOR<CommentCreateWithoutSignalInput, CommentUncheckedCreateWithoutSignalInput> | CommentCreateWithoutSignalInput[] | CommentUncheckedCreateWithoutSignalInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutSignalInput | CommentCreateOrConnectWithoutSignalInput[]
    createMany?: CommentCreateManySignalInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutSignalInput = {
    create?: XOR<LikeCreateWithoutSignalInput, LikeUncheckedCreateWithoutSignalInput> | LikeCreateWithoutSignalInput[] | LikeUncheckedCreateWithoutSignalInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutSignalInput | LikeCreateOrConnectWithoutSignalInput[]
    createMany?: LikeCreateManySignalInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type CommentUpdateManyWithoutSignalNestedInput = {
    create?: XOR<CommentCreateWithoutSignalInput, CommentUncheckedCreateWithoutSignalInput> | CommentCreateWithoutSignalInput[] | CommentUncheckedCreateWithoutSignalInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutSignalInput | CommentCreateOrConnectWithoutSignalInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutSignalInput | CommentUpsertWithWhereUniqueWithoutSignalInput[]
    createMany?: CommentCreateManySignalInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutSignalInput | CommentUpdateWithWhereUniqueWithoutSignalInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutSignalInput | CommentUpdateManyWithWhereWithoutSignalInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutSignalNestedInput = {
    create?: XOR<LikeCreateWithoutSignalInput, LikeUncheckedCreateWithoutSignalInput> | LikeCreateWithoutSignalInput[] | LikeUncheckedCreateWithoutSignalInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutSignalInput | LikeCreateOrConnectWithoutSignalInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutSignalInput | LikeUpsertWithWhereUniqueWithoutSignalInput[]
    createMany?: LikeCreateManySignalInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutSignalInput | LikeUpdateWithWhereUniqueWithoutSignalInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutSignalInput | LikeUpdateManyWithWhereWithoutSignalInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutSignalNestedInput = {
    create?: XOR<CommentCreateWithoutSignalInput, CommentUncheckedCreateWithoutSignalInput> | CommentCreateWithoutSignalInput[] | CommentUncheckedCreateWithoutSignalInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutSignalInput | CommentCreateOrConnectWithoutSignalInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutSignalInput | CommentUpsertWithWhereUniqueWithoutSignalInput[]
    createMany?: CommentCreateManySignalInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutSignalInput | CommentUpdateWithWhereUniqueWithoutSignalInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutSignalInput | CommentUpdateManyWithWhereWithoutSignalInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutSignalNestedInput = {
    create?: XOR<LikeCreateWithoutSignalInput, LikeUncheckedCreateWithoutSignalInput> | LikeCreateWithoutSignalInput[] | LikeUncheckedCreateWithoutSignalInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutSignalInput | LikeCreateOrConnectWithoutSignalInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutSignalInput | LikeUpsertWithWhereUniqueWithoutSignalInput[]
    createMany?: LikeCreateManySignalInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutSignalInput | LikeUpdateWithWhereUniqueWithoutSignalInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutSignalInput | LikeUpdateManyWithWhereWithoutSignalInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type SignalCreateNestedOneWithoutCommentsInput = {
    create?: XOR<SignalCreateWithoutCommentsInput, SignalUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: SignalCreateOrConnectWithoutCommentsInput
    connect?: SignalWhereUniqueInput
  }

  export type SignalUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<SignalCreateWithoutCommentsInput, SignalUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: SignalCreateOrConnectWithoutCommentsInput
    upsert?: SignalUpsertWithoutCommentsInput
    connect?: SignalWhereUniqueInput
    update?: XOR<XOR<SignalUpdateToOneWithWhereWithoutCommentsInput, SignalUpdateWithoutCommentsInput>, SignalUncheckedUpdateWithoutCommentsInput>
  }

  export type SignalCreateNestedOneWithoutLikesInput = {
    create?: XOR<SignalCreateWithoutLikesInput, SignalUncheckedCreateWithoutLikesInput>
    connectOrCreate?: SignalCreateOrConnectWithoutLikesInput
    connect?: SignalWhereUniqueInput
  }

  export type SignalUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<SignalCreateWithoutLikesInput, SignalUncheckedCreateWithoutLikesInput>
    connectOrCreate?: SignalCreateOrConnectWithoutLikesInput
    upsert?: SignalUpsertWithoutLikesInput
    connect?: SignalWhereUniqueInput
    update?: XOR<XOR<SignalUpdateToOneWithWhereWithoutLikesInput, SignalUpdateWithoutLikesInput>, SignalUncheckedUpdateWithoutLikesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AIPredictionCreateWithoutModelInput = {
    modelType: string
    p0?: number | null
    asset: string
    action: string
    confidence: number
    timeframe: string
    reasoning: string
    priceTarget?: number | null
    performance?: number | null
    verified?: boolean
    modelSource?: string
    createdAt?: Date | string
  }

  export type AIPredictionUncheckedCreateWithoutModelInput = {
    id?: number
    modelType: string
    p0?: number | null
    asset: string
    action: string
    confidence: number
    timeframe: string
    reasoning: string
    priceTarget?: number | null
    performance?: number | null
    verified?: boolean
    modelSource?: string
    createdAt?: Date | string
  }

  export type AIPredictionCreateOrConnectWithoutModelInput = {
    where: AIPredictionWhereUniqueInput
    create: XOR<AIPredictionCreateWithoutModelInput, AIPredictionUncheckedCreateWithoutModelInput>
  }

  export type AIPredictionCreateManyModelInputEnvelope = {
    data: AIPredictionCreateManyModelInput | AIPredictionCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type UserModelPreferenceCreateWithoutModelInput = {
    userAddress: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserModelPreferenceUncheckedCreateWithoutModelInput = {
    id?: number
    userAddress: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserModelPreferenceCreateOrConnectWithoutModelInput = {
    where: UserModelPreferenceWhereUniqueInput
    create: XOR<UserModelPreferenceCreateWithoutModelInput, UserModelPreferenceUncheckedCreateWithoutModelInput>
  }

  export type UserModelPreferenceCreateManyModelInputEnvelope = {
    data: UserModelPreferenceCreateManyModelInput | UserModelPreferenceCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type AIPredictionUpsertWithWhereUniqueWithoutModelInput = {
    where: AIPredictionWhereUniqueInput
    update: XOR<AIPredictionUpdateWithoutModelInput, AIPredictionUncheckedUpdateWithoutModelInput>
    create: XOR<AIPredictionCreateWithoutModelInput, AIPredictionUncheckedCreateWithoutModelInput>
  }

  export type AIPredictionUpdateWithWhereUniqueWithoutModelInput = {
    where: AIPredictionWhereUniqueInput
    data: XOR<AIPredictionUpdateWithoutModelInput, AIPredictionUncheckedUpdateWithoutModelInput>
  }

  export type AIPredictionUpdateManyWithWhereWithoutModelInput = {
    where: AIPredictionScalarWhereInput
    data: XOR<AIPredictionUpdateManyMutationInput, AIPredictionUncheckedUpdateManyWithoutModelInput>
  }

  export type AIPredictionScalarWhereInput = {
    AND?: AIPredictionScalarWhereInput | AIPredictionScalarWhereInput[]
    OR?: AIPredictionScalarWhereInput[]
    NOT?: AIPredictionScalarWhereInput | AIPredictionScalarWhereInput[]
    id?: IntFilter<"AIPrediction"> | number
    modelId?: IntFilter<"AIPrediction"> | number
    modelType?: StringFilter<"AIPrediction"> | string
    p0?: FloatNullableFilter<"AIPrediction"> | number | null
    asset?: StringFilter<"AIPrediction"> | string
    action?: StringFilter<"AIPrediction"> | string
    confidence?: FloatFilter<"AIPrediction"> | number
    timeframe?: StringFilter<"AIPrediction"> | string
    reasoning?: StringFilter<"AIPrediction"> | string
    priceTarget?: FloatNullableFilter<"AIPrediction"> | number | null
    performance?: FloatNullableFilter<"AIPrediction"> | number | null
    verified?: BoolFilter<"AIPrediction"> | boolean
    modelSource?: StringFilter<"AIPrediction"> | string
    createdAt?: DateTimeFilter<"AIPrediction"> | Date | string
  }

  export type UserModelPreferenceUpsertWithWhereUniqueWithoutModelInput = {
    where: UserModelPreferenceWhereUniqueInput
    update: XOR<UserModelPreferenceUpdateWithoutModelInput, UserModelPreferenceUncheckedUpdateWithoutModelInput>
    create: XOR<UserModelPreferenceCreateWithoutModelInput, UserModelPreferenceUncheckedCreateWithoutModelInput>
  }

  export type UserModelPreferenceUpdateWithWhereUniqueWithoutModelInput = {
    where: UserModelPreferenceWhereUniqueInput
    data: XOR<UserModelPreferenceUpdateWithoutModelInput, UserModelPreferenceUncheckedUpdateWithoutModelInput>
  }

  export type UserModelPreferenceUpdateManyWithWhereWithoutModelInput = {
    where: UserModelPreferenceScalarWhereInput
    data: XOR<UserModelPreferenceUpdateManyMutationInput, UserModelPreferenceUncheckedUpdateManyWithoutModelInput>
  }

  export type UserModelPreferenceScalarWhereInput = {
    AND?: UserModelPreferenceScalarWhereInput | UserModelPreferenceScalarWhereInput[]
    OR?: UserModelPreferenceScalarWhereInput[]
    NOT?: UserModelPreferenceScalarWhereInput | UserModelPreferenceScalarWhereInput[]
    id?: IntFilter<"UserModelPreference"> | number
    userAddress?: StringFilter<"UserModelPreference"> | string
    modelId?: IntFilter<"UserModelPreference"> | number
    isDefault?: BoolFilter<"UserModelPreference"> | boolean
    createdAt?: DateTimeFilter<"UserModelPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserModelPreference"> | Date | string
  }

  export type AIModelCreateWithoutPredictionsInput = {
    name: string
    description?: string | null
    model_type?: string
    model_name?: string
    is_active?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userPreferences?: UserModelPreferenceCreateNestedManyWithoutModelInput
  }

  export type AIModelUncheckedCreateWithoutPredictionsInput = {
    id?: number
    name: string
    description?: string | null
    model_type?: string
    model_name?: string
    is_active?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userPreferences?: UserModelPreferenceUncheckedCreateNestedManyWithoutModelInput
  }

  export type AIModelCreateOrConnectWithoutPredictionsInput = {
    where: AIModelWhereUniqueInput
    create: XOR<AIModelCreateWithoutPredictionsInput, AIModelUncheckedCreateWithoutPredictionsInput>
  }

  export type AIModelUpsertWithoutPredictionsInput = {
    update: XOR<AIModelUpdateWithoutPredictionsInput, AIModelUncheckedUpdateWithoutPredictionsInput>
    create: XOR<AIModelCreateWithoutPredictionsInput, AIModelUncheckedCreateWithoutPredictionsInput>
    where?: AIModelWhereInput
  }

  export type AIModelUpdateToOneWithWhereWithoutPredictionsInput = {
    where?: AIModelWhereInput
    data: XOR<AIModelUpdateWithoutPredictionsInput, AIModelUncheckedUpdateWithoutPredictionsInput>
  }

  export type AIModelUpdateWithoutPredictionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    model_type?: StringFieldUpdateOperationsInput | string
    model_name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPreferences?: UserModelPreferenceUpdateManyWithoutModelNestedInput
  }

  export type AIModelUncheckedUpdateWithoutPredictionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    model_type?: StringFieldUpdateOperationsInput | string
    model_name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPreferences?: UserModelPreferenceUncheckedUpdateManyWithoutModelNestedInput
  }

  export type AIModelCreateWithoutUserPreferencesInput = {
    name: string
    description?: string | null
    model_type?: string
    model_name?: string
    is_active?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    predictions?: AIPredictionCreateNestedManyWithoutModelInput
  }

  export type AIModelUncheckedCreateWithoutUserPreferencesInput = {
    id?: number
    name: string
    description?: string | null
    model_type?: string
    model_name?: string
    is_active?: boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    predictions?: AIPredictionUncheckedCreateNestedManyWithoutModelInput
  }

  export type AIModelCreateOrConnectWithoutUserPreferencesInput = {
    where: AIModelWhereUniqueInput
    create: XOR<AIModelCreateWithoutUserPreferencesInput, AIModelUncheckedCreateWithoutUserPreferencesInput>
  }

  export type AIModelUpsertWithoutUserPreferencesInput = {
    update: XOR<AIModelUpdateWithoutUserPreferencesInput, AIModelUncheckedUpdateWithoutUserPreferencesInput>
    create: XOR<AIModelCreateWithoutUserPreferencesInput, AIModelUncheckedCreateWithoutUserPreferencesInput>
    where?: AIModelWhereInput
  }

  export type AIModelUpdateToOneWithWhereWithoutUserPreferencesInput = {
    where?: AIModelWhereInput
    data: XOR<AIModelUpdateWithoutUserPreferencesInput, AIModelUncheckedUpdateWithoutUserPreferencesInput>
  }

  export type AIModelUpdateWithoutUserPreferencesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    model_type?: StringFieldUpdateOperationsInput | string
    model_name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: AIPredictionUpdateManyWithoutModelNestedInput
  }

  export type AIModelUncheckedUpdateWithoutUserPreferencesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    model_type?: StringFieldUpdateOperationsInput | string
    model_name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    parameters?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predictions?: AIPredictionUncheckedUpdateManyWithoutModelNestedInput
  }

  export type CommentCreateWithoutSignalInput = {
    content: string
    authorName: string
    authorAddress: string
    createdAt?: Date | string
  }

  export type CommentUncheckedCreateWithoutSignalInput = {
    id?: number
    content: string
    authorName: string
    authorAddress: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutSignalInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutSignalInput, CommentUncheckedCreateWithoutSignalInput>
  }

  export type CommentCreateManySignalInputEnvelope = {
    data: CommentCreateManySignalInput | CommentCreateManySignalInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutSignalInput = {
    userAddress: string
    userName: string
    createdAt?: Date | string
  }

  export type LikeUncheckedCreateWithoutSignalInput = {
    id?: number
    userAddress: string
    userName: string
    createdAt?: Date | string
  }

  export type LikeCreateOrConnectWithoutSignalInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutSignalInput, LikeUncheckedCreateWithoutSignalInput>
  }

  export type LikeCreateManySignalInputEnvelope = {
    data: LikeCreateManySignalInput | LikeCreateManySignalInput[]
    skipDuplicates?: boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutSignalInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutSignalInput, CommentUncheckedUpdateWithoutSignalInput>
    create: XOR<CommentCreateWithoutSignalInput, CommentUncheckedCreateWithoutSignalInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutSignalInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutSignalInput, CommentUncheckedUpdateWithoutSignalInput>
  }

  export type CommentUpdateManyWithWhereWithoutSignalInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutSignalInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    authorName?: StringFilter<"Comment"> | string
    authorAddress?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    signalId?: IntFilter<"Comment"> | number
  }

  export type LikeUpsertWithWhereUniqueWithoutSignalInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutSignalInput, LikeUncheckedUpdateWithoutSignalInput>
    create: XOR<LikeCreateWithoutSignalInput, LikeUncheckedCreateWithoutSignalInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutSignalInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutSignalInput, LikeUncheckedUpdateWithoutSignalInput>
  }

  export type LikeUpdateManyWithWhereWithoutSignalInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutSignalInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
    OR?: LikeScalarWhereInput[]
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
    id?: IntFilter<"Like"> | number
    userAddress?: StringFilter<"Like"> | string
    userName?: StringFilter<"Like"> | string
    createdAt?: DateTimeFilter<"Like"> | Date | string
    signalId?: IntFilter<"Like"> | number
  }

  export type SignalCreateWithoutCommentsInput = {
    asset: string
    action: string
    timeframe: string
    priceTarget?: string | null
    confidenceLevel: number
    analysis: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeCreateNestedManyWithoutSignalInput
  }

  export type SignalUncheckedCreateWithoutCommentsInput = {
    id?: number
    asset: string
    action: string
    timeframe: string
    priceTarget?: string | null
    confidenceLevel: number
    analysis: string
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: LikeUncheckedCreateNestedManyWithoutSignalInput
  }

  export type SignalCreateOrConnectWithoutCommentsInput = {
    where: SignalWhereUniqueInput
    create: XOR<SignalCreateWithoutCommentsInput, SignalUncheckedCreateWithoutCommentsInput>
  }

  export type SignalUpsertWithoutCommentsInput = {
    update: XOR<SignalUpdateWithoutCommentsInput, SignalUncheckedUpdateWithoutCommentsInput>
    create: XOR<SignalCreateWithoutCommentsInput, SignalUncheckedCreateWithoutCommentsInput>
    where?: SignalWhereInput
  }

  export type SignalUpdateToOneWithWhereWithoutCommentsInput = {
    where?: SignalWhereInput
    data: XOR<SignalUpdateWithoutCommentsInput, SignalUncheckedUpdateWithoutCommentsInput>
  }

  export type SignalUpdateWithoutCommentsInput = {
    asset?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    priceTarget?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceLevel?: IntFieldUpdateOperationsInput | number
    analysis?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUpdateManyWithoutSignalNestedInput
  }

  export type SignalUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    priceTarget?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceLevel?: IntFieldUpdateOperationsInput | number
    analysis?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: LikeUncheckedUpdateManyWithoutSignalNestedInput
  }

  export type SignalCreateWithoutLikesInput = {
    asset: string
    action: string
    timeframe: string
    priceTarget?: string | null
    confidenceLevel: number
    analysis: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutSignalInput
  }

  export type SignalUncheckedCreateWithoutLikesInput = {
    id?: number
    asset: string
    action: string
    timeframe: string
    priceTarget?: string | null
    confidenceLevel: number
    analysis: string
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutSignalInput
  }

  export type SignalCreateOrConnectWithoutLikesInput = {
    where: SignalWhereUniqueInput
    create: XOR<SignalCreateWithoutLikesInput, SignalUncheckedCreateWithoutLikesInput>
  }

  export type SignalUpsertWithoutLikesInput = {
    update: XOR<SignalUpdateWithoutLikesInput, SignalUncheckedUpdateWithoutLikesInput>
    create: XOR<SignalCreateWithoutLikesInput, SignalUncheckedCreateWithoutLikesInput>
    where?: SignalWhereInput
  }

  export type SignalUpdateToOneWithWhereWithoutLikesInput = {
    where?: SignalWhereInput
    data: XOR<SignalUpdateWithoutLikesInput, SignalUncheckedUpdateWithoutLikesInput>
  }

  export type SignalUpdateWithoutLikesInput = {
    asset?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    priceTarget?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceLevel?: IntFieldUpdateOperationsInput | number
    analysis?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutSignalNestedInput
  }

  export type SignalUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    asset?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeframe?: StringFieldUpdateOperationsInput | string
    priceTarget?: NullableStringFieldUpdateOperationsInput | string | null
    confidenceLevel?: IntFieldUpdateOperationsInput | number
    analysis?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutSignalNestedInput
  }

  export type AIPredictionCreateManyModelInput = {
    id?: number
    modelType: string
    p0?: number | null
    asset: string
    action: string
    confidence: number
    timeframe: string
    reasoning: string
    priceTarget?: number | null
    performance?: number | null
    verified?: boolean
    modelSource?: string
    createdAt?: Date | string
  }

  export type UserModelPreferenceCreateManyModelInput = {
    id?: number
    userAddress: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AIPredictionUpdateWithoutModelInput = {
    modelType?: StringFieldUpdateOperationsInput | string
    p0?: NullableFloatFieldUpdateOperationsInput | number | null
    asset?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    timeframe?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    priceTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    performance?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    modelSource?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIPredictionUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelType?: StringFieldUpdateOperationsInput | string
    p0?: NullableFloatFieldUpdateOperationsInput | number | null
    asset?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    timeframe?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    priceTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    performance?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    modelSource?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIPredictionUncheckedUpdateManyWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelType?: StringFieldUpdateOperationsInput | string
    p0?: NullableFloatFieldUpdateOperationsInput | number | null
    asset?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    confidence?: FloatFieldUpdateOperationsInput | number
    timeframe?: StringFieldUpdateOperationsInput | string
    reasoning?: StringFieldUpdateOperationsInput | string
    priceTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    performance?: NullableFloatFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    modelSource?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModelPreferenceUpdateWithoutModelInput = {
    userAddress?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModelPreferenceUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    userAddress?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserModelPreferenceUncheckedUpdateManyWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    userAddress?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManySignalInput = {
    id?: number
    content: string
    authorName: string
    authorAddress: string
    createdAt?: Date | string
  }

  export type LikeCreateManySignalInput = {
    id?: number
    userAddress: string
    userName: string
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutSignalInput = {
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutSignalInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutSignalInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    authorAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutSignalInput = {
    userAddress?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateWithoutSignalInput = {
    id?: IntFieldUpdateOperationsInput | number
    userAddress?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutSignalInput = {
    id?: IntFieldUpdateOperationsInput | number
    userAddress?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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