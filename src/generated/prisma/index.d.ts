
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
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model CharacterStats
 * 
 */
export type CharacterStats = $Result.DefaultSelection<Prisma.$CharacterStatsPayload>
/**
 * Model CharacterAttributeProgress
 * 
 */
export type CharacterAttributeProgress = $Result.DefaultSelection<Prisma.$CharacterAttributeProgressPayload>
/**
 * Model SkillNodeDefinition
 * 
 */
export type SkillNodeDefinition = $Result.DefaultSelection<Prisma.$SkillNodeDefinitionPayload>
/**
 * Model SurvivalLeaderboard
 * 
 */
export type SurvivalLeaderboard = $Result.DefaultSelection<Prisma.$SurvivalLeaderboardPayload>
/**
 * Model FlightLeaderboard
 * 
 */
export type FlightLeaderboard = $Result.DefaultSelection<Prisma.$FlightLeaderboardPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CharacterType: {
  CAPTAIN_PHOENIX: 'CAPTAIN_PHOENIX',
  RILEY: 'RILEY',
  XYLO: 'XYLO',
  JOHNNY: 'JOHNNY',
  AI_WRAITH: 'AI_WRAITH'
};

export type CharacterType = (typeof CharacterType)[keyof typeof CharacterType]


export const SkillCategory: {
  SPECIAL: 'SPECIAL',
  HEALTH: 'HEALTH',
  DEFENSE: 'DEFENSE',
  ATTACK: 'ATTACK',
  SPEED: 'SPEED'
};

export type SkillCategory = (typeof SkillCategory)[keyof typeof SkillCategory]

}

export type CharacterType = $Enums.CharacterType

export const CharacterType: typeof $Enums.CharacterType

export type SkillCategory = $Enums.SkillCategory

export const SkillCategory: typeof $Enums.SkillCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Players
 * const players = await prisma.player.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Players
   * const players = await prisma.player.findMany()
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
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.characterStats`: Exposes CRUD operations for the **CharacterStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharacterStats
    * const characterStats = await prisma.characterStats.findMany()
    * ```
    */
  get characterStats(): Prisma.CharacterStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.characterAttributeProgress`: Exposes CRUD operations for the **CharacterAttributeProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharacterAttributeProgresses
    * const characterAttributeProgresses = await prisma.characterAttributeProgress.findMany()
    * ```
    */
  get characterAttributeProgress(): Prisma.CharacterAttributeProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skillNodeDefinition`: Exposes CRUD operations for the **SkillNodeDefinition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SkillNodeDefinitions
    * const skillNodeDefinitions = await prisma.skillNodeDefinition.findMany()
    * ```
    */
  get skillNodeDefinition(): Prisma.SkillNodeDefinitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.survivalLeaderboard`: Exposes CRUD operations for the **SurvivalLeaderboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SurvivalLeaderboards
    * const survivalLeaderboards = await prisma.survivalLeaderboard.findMany()
    * ```
    */
  get survivalLeaderboard(): Prisma.SurvivalLeaderboardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flightLeaderboard`: Exposes CRUD operations for the **FlightLeaderboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlightLeaderboards
    * const flightLeaderboards = await prisma.flightLeaderboard.findMany()
    * ```
    */
  get flightLeaderboard(): Prisma.FlightLeaderboardDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Player: 'Player',
    CharacterStats: 'CharacterStats',
    CharacterAttributeProgress: 'CharacterAttributeProgress',
    SkillNodeDefinition: 'SkillNodeDefinition',
    SurvivalLeaderboard: 'SurvivalLeaderboard',
    FlightLeaderboard: 'FlightLeaderboard'
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
      modelProps: "player" | "characterStats" | "characterAttributeProgress" | "skillNodeDefinition" | "survivalLeaderboard" | "flightLeaderboard"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      CharacterStats: {
        payload: Prisma.$CharacterStatsPayload<ExtArgs>
        fields: Prisma.CharacterStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatsPayload>
          }
          findFirst: {
            args: Prisma.CharacterStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatsPayload>
          }
          findMany: {
            args: Prisma.CharacterStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatsPayload>[]
          }
          create: {
            args: Prisma.CharacterStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatsPayload>
          }
          createMany: {
            args: Prisma.CharacterStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatsPayload>[]
          }
          delete: {
            args: Prisma.CharacterStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatsPayload>
          }
          update: {
            args: Prisma.CharacterStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatsPayload>
          }
          deleteMany: {
            args: Prisma.CharacterStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatsPayload>[]
          }
          upsert: {
            args: Prisma.CharacterStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterStatsPayload>
          }
          aggregate: {
            args: Prisma.CharacterStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacterStats>
          }
          groupBy: {
            args: Prisma.CharacterStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterStatsCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterStatsCountAggregateOutputType> | number
          }
        }
      }
      CharacterAttributeProgress: {
        payload: Prisma.$CharacterAttributeProgressPayload<ExtArgs>
        fields: Prisma.CharacterAttributeProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterAttributeProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAttributeProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterAttributeProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAttributeProgressPayload>
          }
          findFirst: {
            args: Prisma.CharacterAttributeProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAttributeProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterAttributeProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAttributeProgressPayload>
          }
          findMany: {
            args: Prisma.CharacterAttributeProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAttributeProgressPayload>[]
          }
          create: {
            args: Prisma.CharacterAttributeProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAttributeProgressPayload>
          }
          createMany: {
            args: Prisma.CharacterAttributeProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterAttributeProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAttributeProgressPayload>[]
          }
          delete: {
            args: Prisma.CharacterAttributeProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAttributeProgressPayload>
          }
          update: {
            args: Prisma.CharacterAttributeProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAttributeProgressPayload>
          }
          deleteMany: {
            args: Prisma.CharacterAttributeProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterAttributeProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterAttributeProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAttributeProgressPayload>[]
          }
          upsert: {
            args: Prisma.CharacterAttributeProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterAttributeProgressPayload>
          }
          aggregate: {
            args: Prisma.CharacterAttributeProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacterAttributeProgress>
          }
          groupBy: {
            args: Prisma.CharacterAttributeProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterAttributeProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterAttributeProgressCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterAttributeProgressCountAggregateOutputType> | number
          }
        }
      }
      SkillNodeDefinition: {
        payload: Prisma.$SkillNodeDefinitionPayload<ExtArgs>
        fields: Prisma.SkillNodeDefinitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillNodeDefinitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillNodeDefinitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillNodeDefinitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillNodeDefinitionPayload>
          }
          findFirst: {
            args: Prisma.SkillNodeDefinitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillNodeDefinitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillNodeDefinitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillNodeDefinitionPayload>
          }
          findMany: {
            args: Prisma.SkillNodeDefinitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillNodeDefinitionPayload>[]
          }
          create: {
            args: Prisma.SkillNodeDefinitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillNodeDefinitionPayload>
          }
          createMany: {
            args: Prisma.SkillNodeDefinitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillNodeDefinitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillNodeDefinitionPayload>[]
          }
          delete: {
            args: Prisma.SkillNodeDefinitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillNodeDefinitionPayload>
          }
          update: {
            args: Prisma.SkillNodeDefinitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillNodeDefinitionPayload>
          }
          deleteMany: {
            args: Prisma.SkillNodeDefinitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillNodeDefinitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillNodeDefinitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillNodeDefinitionPayload>[]
          }
          upsert: {
            args: Prisma.SkillNodeDefinitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillNodeDefinitionPayload>
          }
          aggregate: {
            args: Prisma.SkillNodeDefinitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkillNodeDefinition>
          }
          groupBy: {
            args: Prisma.SkillNodeDefinitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillNodeDefinitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillNodeDefinitionCountArgs<ExtArgs>
            result: $Utils.Optional<SkillNodeDefinitionCountAggregateOutputType> | number
          }
        }
      }
      SurvivalLeaderboard: {
        payload: Prisma.$SurvivalLeaderboardPayload<ExtArgs>
        fields: Prisma.SurvivalLeaderboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurvivalLeaderboardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalLeaderboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurvivalLeaderboardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalLeaderboardPayload>
          }
          findFirst: {
            args: Prisma.SurvivalLeaderboardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalLeaderboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurvivalLeaderboardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalLeaderboardPayload>
          }
          findMany: {
            args: Prisma.SurvivalLeaderboardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalLeaderboardPayload>[]
          }
          create: {
            args: Prisma.SurvivalLeaderboardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalLeaderboardPayload>
          }
          createMany: {
            args: Prisma.SurvivalLeaderboardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SurvivalLeaderboardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalLeaderboardPayload>[]
          }
          delete: {
            args: Prisma.SurvivalLeaderboardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalLeaderboardPayload>
          }
          update: {
            args: Prisma.SurvivalLeaderboardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalLeaderboardPayload>
          }
          deleteMany: {
            args: Prisma.SurvivalLeaderboardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurvivalLeaderboardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SurvivalLeaderboardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalLeaderboardPayload>[]
          }
          upsert: {
            args: Prisma.SurvivalLeaderboardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurvivalLeaderboardPayload>
          }
          aggregate: {
            args: Prisma.SurvivalLeaderboardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurvivalLeaderboard>
          }
          groupBy: {
            args: Prisma.SurvivalLeaderboardGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurvivalLeaderboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.SurvivalLeaderboardCountArgs<ExtArgs>
            result: $Utils.Optional<SurvivalLeaderboardCountAggregateOutputType> | number
          }
        }
      }
      FlightLeaderboard: {
        payload: Prisma.$FlightLeaderboardPayload<ExtArgs>
        fields: Prisma.FlightLeaderboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlightLeaderboardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightLeaderboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlightLeaderboardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightLeaderboardPayload>
          }
          findFirst: {
            args: Prisma.FlightLeaderboardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightLeaderboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlightLeaderboardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightLeaderboardPayload>
          }
          findMany: {
            args: Prisma.FlightLeaderboardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightLeaderboardPayload>[]
          }
          create: {
            args: Prisma.FlightLeaderboardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightLeaderboardPayload>
          }
          createMany: {
            args: Prisma.FlightLeaderboardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlightLeaderboardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightLeaderboardPayload>[]
          }
          delete: {
            args: Prisma.FlightLeaderboardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightLeaderboardPayload>
          }
          update: {
            args: Prisma.FlightLeaderboardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightLeaderboardPayload>
          }
          deleteMany: {
            args: Prisma.FlightLeaderboardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlightLeaderboardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlightLeaderboardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightLeaderboardPayload>[]
          }
          upsert: {
            args: Prisma.FlightLeaderboardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightLeaderboardPayload>
          }
          aggregate: {
            args: Prisma.FlightLeaderboardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlightLeaderboard>
          }
          groupBy: {
            args: Prisma.FlightLeaderboardGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlightLeaderboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlightLeaderboardCountArgs<ExtArgs>
            result: $Utils.Optional<FlightLeaderboardCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    player?: PlayerOmit
    characterStats?: CharacterStatsOmit
    characterAttributeProgress?: CharacterAttributeProgressOmit
    skillNodeDefinition?: SkillNodeDefinitionOmit
    survivalLeaderboard?: SurvivalLeaderboardOmit
    flightLeaderboard?: FlightLeaderboardOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    characters: number
    survivalScores: number
    flightScores: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | PlayerCountOutputTypeCountCharactersArgs
    survivalScores?: boolean | PlayerCountOutputTypeCountSurvivalScoresArgs
    flightScores?: boolean | PlayerCountOutputTypeCountFlightScoresArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterStatsWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountSurvivalScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurvivalLeaderboardWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountFlightScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightLeaderboardWhereInput
  }


  /**
   * Count Type CharacterStatsCountOutputType
   */

  export type CharacterStatsCountOutputType = {
    upgrades: number
  }

  export type CharacterStatsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    upgrades?: boolean | CharacterStatsCountOutputTypeCountUpgradesArgs
  }

  // Custom InputTypes
  /**
   * CharacterStatsCountOutputType without action
   */
  export type CharacterStatsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStatsCountOutputType
     */
    select?: CharacterStatsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharacterStatsCountOutputType without action
   */
  export type CharacterStatsCountOutputTypeCountUpgradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterAttributeProgressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerMinAggregateOutputType = {
    email: string | null
    username: string | null
    createdAt: Date | null
  }

  export type PlayerMaxAggregateOutputType = {
    email: string | null
    username: string | null
    createdAt: Date | null
  }

  export type PlayerCountAggregateOutputType = {
    email: number
    username: number
    createdAt: number
    _all: number
  }


  export type PlayerMinAggregateInputType = {
    email?: true
    username?: true
    createdAt?: true
  }

  export type PlayerMaxAggregateInputType = {
    email?: true
    username?: true
    createdAt?: true
  }

  export type PlayerCountAggregateInputType = {
    email?: true
    username?: true
    createdAt?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    email: string
    username: string
    createdAt: Date
    _count: PlayerCountAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    username?: boolean
    createdAt?: boolean
    characters?: boolean | Player$charactersArgs<ExtArgs>
    survivalScores?: boolean | Player$survivalScoresArgs<ExtArgs>
    flightScores?: boolean | Player$flightScoresArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    username?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    username?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    email?: boolean
    username?: boolean
    createdAt?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "username" | "createdAt", ExtArgs["result"]["player"]>
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | Player$charactersArgs<ExtArgs>
    survivalScores?: boolean | Player$survivalScoresArgs<ExtArgs>
    flightScores?: boolean | Player$flightScoresArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      characters: Prisma.$CharacterStatsPayload<ExtArgs>[]
      survivalScores: Prisma.$SurvivalLeaderboardPayload<ExtArgs>[]
      flightScores: Prisma.$FlightLeaderboardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      email: string
      username: string
      createdAt: Date
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const playerWithEmailOnly = await prisma.player.findMany({ select: { email: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `email`
     * const playerWithEmailOnly = await prisma.player.createManyAndReturn({
     *   select: { email: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `email`
     * const playerWithEmailOnly = await prisma.player.updateManyAndReturn({
     *   select: { email: true },
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
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
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
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    characters<T extends Player$charactersArgs<ExtArgs> = {}>(args?: Subset<T, Player$charactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    survivalScores<T extends Player$survivalScoresArgs<ExtArgs> = {}>(args?: Subset<T, Player$survivalScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurvivalLeaderboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flightScores<T extends Player$flightScoresArgs<ExtArgs> = {}>(args?: Subset<T, Player$flightScoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightLeaderboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly email: FieldRef<"Player", 'String'>
    readonly username: FieldRef<"Player", 'String'>
    readonly createdAt: FieldRef<"Player", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player.characters
   */
  export type Player$charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: CharacterStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: CharacterStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatsInclude<ExtArgs> | null
    where?: CharacterStatsWhereInput
    orderBy?: CharacterStatsOrderByWithRelationInput | CharacterStatsOrderByWithRelationInput[]
    cursor?: CharacterStatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterStatsScalarFieldEnum | CharacterStatsScalarFieldEnum[]
  }

  /**
   * Player.survivalScores
   */
  export type Player$survivalScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalLeaderboard
     */
    select?: SurvivalLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalLeaderboard
     */
    omit?: SurvivalLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurvivalLeaderboardInclude<ExtArgs> | null
    where?: SurvivalLeaderboardWhereInput
    orderBy?: SurvivalLeaderboardOrderByWithRelationInput | SurvivalLeaderboardOrderByWithRelationInput[]
    cursor?: SurvivalLeaderboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SurvivalLeaderboardScalarFieldEnum | SurvivalLeaderboardScalarFieldEnum[]
  }

  /**
   * Player.flightScores
   */
  export type Player$flightScoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightLeaderboard
     */
    select?: FlightLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightLeaderboard
     */
    omit?: FlightLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightLeaderboardInclude<ExtArgs> | null
    where?: FlightLeaderboardWhereInput
    orderBy?: FlightLeaderboardOrderByWithRelationInput | FlightLeaderboardOrderByWithRelationInput[]
    cursor?: FlightLeaderboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightLeaderboardScalarFieldEnum | FlightLeaderboardScalarFieldEnum[]
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model CharacterStats
   */

  export type AggregateCharacterStats = {
    _count: CharacterStatsCountAggregateOutputType | null
    _avg: CharacterStatsAvgAggregateOutputType | null
    _sum: CharacterStatsSumAggregateOutputType | null
    _min: CharacterStatsMinAggregateOutputType | null
    _max: CharacterStatsMaxAggregateOutputType | null
  }

  export type CharacterStatsAvgAggregateOutputType = {
    id: number | null
    level: number | null
    xp: number | null
    lives: number | null
  }

  export type CharacterStatsSumAggregateOutputType = {
    id: number | null
    level: number | null
    xp: number | null
    lives: number | null
  }

  export type CharacterStatsMinAggregateOutputType = {
    id: number | null
    playerEmail: string | null
    type: $Enums.CharacterType | null
    level: number | null
    xp: number | null
    lives: number | null
    updatedAt: Date | null
  }

  export type CharacterStatsMaxAggregateOutputType = {
    id: number | null
    playerEmail: string | null
    type: $Enums.CharacterType | null
    level: number | null
    xp: number | null
    lives: number | null
    updatedAt: Date | null
  }

  export type CharacterStatsCountAggregateOutputType = {
    id: number
    playerEmail: number
    type: number
    level: number
    xp: number
    lives: number
    updatedAt: number
    _all: number
  }


  export type CharacterStatsAvgAggregateInputType = {
    id?: true
    level?: true
    xp?: true
    lives?: true
  }

  export type CharacterStatsSumAggregateInputType = {
    id?: true
    level?: true
    xp?: true
    lives?: true
  }

  export type CharacterStatsMinAggregateInputType = {
    id?: true
    playerEmail?: true
    type?: true
    level?: true
    xp?: true
    lives?: true
    updatedAt?: true
  }

  export type CharacterStatsMaxAggregateInputType = {
    id?: true
    playerEmail?: true
    type?: true
    level?: true
    xp?: true
    lives?: true
    updatedAt?: true
  }

  export type CharacterStatsCountAggregateInputType = {
    id?: true
    playerEmail?: true
    type?: true
    level?: true
    xp?: true
    lives?: true
    updatedAt?: true
    _all?: true
  }

  export type CharacterStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterStats to aggregate.
     */
    where?: CharacterStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterStats to fetch.
     */
    orderBy?: CharacterStatsOrderByWithRelationInput | CharacterStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharacterStats
    **/
    _count?: true | CharacterStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterStatsMaxAggregateInputType
  }

  export type GetCharacterStatsAggregateType<T extends CharacterStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterStats[P]>
      : GetScalarType<T[P], AggregateCharacterStats[P]>
  }




  export type CharacterStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterStatsWhereInput
    orderBy?: CharacterStatsOrderByWithAggregationInput | CharacterStatsOrderByWithAggregationInput[]
    by: CharacterStatsScalarFieldEnum[] | CharacterStatsScalarFieldEnum
    having?: CharacterStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterStatsCountAggregateInputType | true
    _avg?: CharacterStatsAvgAggregateInputType
    _sum?: CharacterStatsSumAggregateInputType
    _min?: CharacterStatsMinAggregateInputType
    _max?: CharacterStatsMaxAggregateInputType
  }

  export type CharacterStatsGroupByOutputType = {
    id: number
    playerEmail: string
    type: $Enums.CharacterType
    level: number
    xp: number
    lives: number
    updatedAt: Date
    _count: CharacterStatsCountAggregateOutputType | null
    _avg: CharacterStatsAvgAggregateOutputType | null
    _sum: CharacterStatsSumAggregateOutputType | null
    _min: CharacterStatsMinAggregateOutputType | null
    _max: CharacterStatsMaxAggregateOutputType | null
  }

  type GetCharacterStatsGroupByPayload<T extends CharacterStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterStatsGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterStatsGroupByOutputType[P]>
        }
      >
    >


  export type CharacterStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerEmail?: boolean
    type?: boolean
    level?: boolean
    xp?: boolean
    lives?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    upgrades?: boolean | CharacterStats$upgradesArgs<ExtArgs>
    _count?: boolean | CharacterStatsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterStats"]>

  export type CharacterStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerEmail?: boolean
    type?: boolean
    level?: boolean
    xp?: boolean
    lives?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterStats"]>

  export type CharacterStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerEmail?: boolean
    type?: boolean
    level?: boolean
    xp?: boolean
    lives?: boolean
    updatedAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterStats"]>

  export type CharacterStatsSelectScalar = {
    id?: boolean
    playerEmail?: boolean
    type?: boolean
    level?: boolean
    xp?: boolean
    lives?: boolean
    updatedAt?: boolean
  }

  export type CharacterStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerEmail" | "type" | "level" | "xp" | "lives" | "updatedAt", ExtArgs["result"]["characterStats"]>
  export type CharacterStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    upgrades?: boolean | CharacterStats$upgradesArgs<ExtArgs>
    _count?: boolean | CharacterStatsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharacterStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type CharacterStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $CharacterStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharacterStats"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
      upgrades: Prisma.$CharacterAttributeProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playerEmail: string
      type: $Enums.CharacterType
      level: number
      xp: number
      lives: number
      updatedAt: Date
    }, ExtArgs["result"]["characterStats"]>
    composites: {}
  }

  type CharacterStatsGetPayload<S extends boolean | null | undefined | CharacterStatsDefaultArgs> = $Result.GetResult<Prisma.$CharacterStatsPayload, S>

  type CharacterStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterStatsCountAggregateInputType | true
    }

  export interface CharacterStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharacterStats'], meta: { name: 'CharacterStats' } }
    /**
     * Find zero or one CharacterStats that matches the filter.
     * @param {CharacterStatsFindUniqueArgs} args - Arguments to find a CharacterStats
     * @example
     * // Get one CharacterStats
     * const characterStats = await prisma.characterStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterStatsFindUniqueArgs>(args: SelectSubset<T, CharacterStatsFindUniqueArgs<ExtArgs>>): Prisma__CharacterStatsClient<$Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CharacterStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterStatsFindUniqueOrThrowArgs} args - Arguments to find a CharacterStats
     * @example
     * // Get one CharacterStats
     * const characterStats = await prisma.characterStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterStatsClient<$Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CharacterStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatsFindFirstArgs} args - Arguments to find a CharacterStats
     * @example
     * // Get one CharacterStats
     * const characterStats = await prisma.characterStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterStatsFindFirstArgs>(args?: SelectSubset<T, CharacterStatsFindFirstArgs<ExtArgs>>): Prisma__CharacterStatsClient<$Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CharacterStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatsFindFirstOrThrowArgs} args - Arguments to find a CharacterStats
     * @example
     * // Get one CharacterStats
     * const characterStats = await prisma.characterStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterStatsClient<$Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CharacterStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterStats
     * const characterStats = await prisma.characterStats.findMany()
     * 
     * // Get first 10 CharacterStats
     * const characterStats = await prisma.characterStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterStatsWithIdOnly = await prisma.characterStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterStatsFindManyArgs>(args?: SelectSubset<T, CharacterStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CharacterStats.
     * @param {CharacterStatsCreateArgs} args - Arguments to create a CharacterStats.
     * @example
     * // Create one CharacterStats
     * const CharacterStats = await prisma.characterStats.create({
     *   data: {
     *     // ... data to create a CharacterStats
     *   }
     * })
     * 
     */
    create<T extends CharacterStatsCreateArgs>(args: SelectSubset<T, CharacterStatsCreateArgs<ExtArgs>>): Prisma__CharacterStatsClient<$Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CharacterStats.
     * @param {CharacterStatsCreateManyArgs} args - Arguments to create many CharacterStats.
     * @example
     * // Create many CharacterStats
     * const characterStats = await prisma.characterStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterStatsCreateManyArgs>(args?: SelectSubset<T, CharacterStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CharacterStats and returns the data saved in the database.
     * @param {CharacterStatsCreateManyAndReturnArgs} args - Arguments to create many CharacterStats.
     * @example
     * // Create many CharacterStats
     * const characterStats = await prisma.characterStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CharacterStats and only return the `id`
     * const characterStatsWithIdOnly = await prisma.characterStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CharacterStats.
     * @param {CharacterStatsDeleteArgs} args - Arguments to delete one CharacterStats.
     * @example
     * // Delete one CharacterStats
     * const CharacterStats = await prisma.characterStats.delete({
     *   where: {
     *     // ... filter to delete one CharacterStats
     *   }
     * })
     * 
     */
    delete<T extends CharacterStatsDeleteArgs>(args: SelectSubset<T, CharacterStatsDeleteArgs<ExtArgs>>): Prisma__CharacterStatsClient<$Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CharacterStats.
     * @param {CharacterStatsUpdateArgs} args - Arguments to update one CharacterStats.
     * @example
     * // Update one CharacterStats
     * const characterStats = await prisma.characterStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterStatsUpdateArgs>(args: SelectSubset<T, CharacterStatsUpdateArgs<ExtArgs>>): Prisma__CharacterStatsClient<$Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CharacterStats.
     * @param {CharacterStatsDeleteManyArgs} args - Arguments to filter CharacterStats to delete.
     * @example
     * // Delete a few CharacterStats
     * const { count } = await prisma.characterStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterStatsDeleteManyArgs>(args?: SelectSubset<T, CharacterStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterStats
     * const characterStats = await prisma.characterStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterStatsUpdateManyArgs>(args: SelectSubset<T, CharacterStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterStats and returns the data updated in the database.
     * @param {CharacterStatsUpdateManyAndReturnArgs} args - Arguments to update many CharacterStats.
     * @example
     * // Update many CharacterStats
     * const characterStats = await prisma.characterStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CharacterStats and only return the `id`
     * const characterStatsWithIdOnly = await prisma.characterStats.updateManyAndReturn({
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
    updateManyAndReturn<T extends CharacterStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CharacterStats.
     * @param {CharacterStatsUpsertArgs} args - Arguments to update or create a CharacterStats.
     * @example
     * // Update or create a CharacterStats
     * const characterStats = await prisma.characterStats.upsert({
     *   create: {
     *     // ... data to create a CharacterStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterStats we want to update
     *   }
     * })
     */
    upsert<T extends CharacterStatsUpsertArgs>(args: SelectSubset<T, CharacterStatsUpsertArgs<ExtArgs>>): Prisma__CharacterStatsClient<$Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CharacterStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatsCountArgs} args - Arguments to filter CharacterStats to count.
     * @example
     * // Count the number of CharacterStats
     * const count = await prisma.characterStats.count({
     *   where: {
     *     // ... the filter for the CharacterStats we want to count
     *   }
     * })
    **/
    count<T extends CharacterStatsCountArgs>(
      args?: Subset<T, CharacterStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharacterStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CharacterStatsAggregateArgs>(args: Subset<T, CharacterStatsAggregateArgs>): Prisma.PrismaPromise<GetCharacterStatsAggregateType<T>>

    /**
     * Group by CharacterStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterStatsGroupByArgs} args - Group by arguments.
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
      T extends CharacterStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterStatsGroupByArgs['orderBy'] }
        : { orderBy?: CharacterStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CharacterStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharacterStats model
   */
  readonly fields: CharacterStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharacterStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    upgrades<T extends CharacterStats$upgradesArgs<ExtArgs> = {}>(args?: Subset<T, CharacterStats$upgradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterAttributeProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CharacterStats model
   */
  interface CharacterStatsFieldRefs {
    readonly id: FieldRef<"CharacterStats", 'Int'>
    readonly playerEmail: FieldRef<"CharacterStats", 'String'>
    readonly type: FieldRef<"CharacterStats", 'CharacterType'>
    readonly level: FieldRef<"CharacterStats", 'Int'>
    readonly xp: FieldRef<"CharacterStats", 'Int'>
    readonly lives: FieldRef<"CharacterStats", 'Int'>
    readonly updatedAt: FieldRef<"CharacterStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CharacterStats findUnique
   */
  export type CharacterStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: CharacterStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: CharacterStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatsInclude<ExtArgs> | null
    /**
     * Filter, which CharacterStats to fetch.
     */
    where: CharacterStatsWhereUniqueInput
  }

  /**
   * CharacterStats findUniqueOrThrow
   */
  export type CharacterStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: CharacterStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: CharacterStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatsInclude<ExtArgs> | null
    /**
     * Filter, which CharacterStats to fetch.
     */
    where: CharacterStatsWhereUniqueInput
  }

  /**
   * CharacterStats findFirst
   */
  export type CharacterStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: CharacterStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: CharacterStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatsInclude<ExtArgs> | null
    /**
     * Filter, which CharacterStats to fetch.
     */
    where?: CharacterStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterStats to fetch.
     */
    orderBy?: CharacterStatsOrderByWithRelationInput | CharacterStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterStats.
     */
    cursor?: CharacterStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterStats.
     */
    distinct?: CharacterStatsScalarFieldEnum | CharacterStatsScalarFieldEnum[]
  }

  /**
   * CharacterStats findFirstOrThrow
   */
  export type CharacterStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: CharacterStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: CharacterStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatsInclude<ExtArgs> | null
    /**
     * Filter, which CharacterStats to fetch.
     */
    where?: CharacterStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterStats to fetch.
     */
    orderBy?: CharacterStatsOrderByWithRelationInput | CharacterStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterStats.
     */
    cursor?: CharacterStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterStats.
     */
    distinct?: CharacterStatsScalarFieldEnum | CharacterStatsScalarFieldEnum[]
  }

  /**
   * CharacterStats findMany
   */
  export type CharacterStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: CharacterStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: CharacterStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatsInclude<ExtArgs> | null
    /**
     * Filter, which CharacterStats to fetch.
     */
    where?: CharacterStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterStats to fetch.
     */
    orderBy?: CharacterStatsOrderByWithRelationInput | CharacterStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharacterStats.
     */
    cursor?: CharacterStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterStats.
     */
    skip?: number
    distinct?: CharacterStatsScalarFieldEnum | CharacterStatsScalarFieldEnum[]
  }

  /**
   * CharacterStats create
   */
  export type CharacterStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: CharacterStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: CharacterStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a CharacterStats.
     */
    data: XOR<CharacterStatsCreateInput, CharacterStatsUncheckedCreateInput>
  }

  /**
   * CharacterStats createMany
   */
  export type CharacterStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterStats.
     */
    data: CharacterStatsCreateManyInput | CharacterStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharacterStats createManyAndReturn
   */
  export type CharacterStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: CharacterStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: CharacterStatsOmit<ExtArgs> | null
    /**
     * The data used to create many CharacterStats.
     */
    data: CharacterStatsCreateManyInput | CharacterStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CharacterStats update
   */
  export type CharacterStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: CharacterStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: CharacterStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a CharacterStats.
     */
    data: XOR<CharacterStatsUpdateInput, CharacterStatsUncheckedUpdateInput>
    /**
     * Choose, which CharacterStats to update.
     */
    where: CharacterStatsWhereUniqueInput
  }

  /**
   * CharacterStats updateMany
   */
  export type CharacterStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterStats.
     */
    data: XOR<CharacterStatsUpdateManyMutationInput, CharacterStatsUncheckedUpdateManyInput>
    /**
     * Filter which CharacterStats to update
     */
    where?: CharacterStatsWhereInput
    /**
     * Limit how many CharacterStats to update.
     */
    limit?: number
  }

  /**
   * CharacterStats updateManyAndReturn
   */
  export type CharacterStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: CharacterStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: CharacterStatsOmit<ExtArgs> | null
    /**
     * The data used to update CharacterStats.
     */
    data: XOR<CharacterStatsUpdateManyMutationInput, CharacterStatsUncheckedUpdateManyInput>
    /**
     * Filter which CharacterStats to update
     */
    where?: CharacterStatsWhereInput
    /**
     * Limit how many CharacterStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CharacterStats upsert
   */
  export type CharacterStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: CharacterStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: CharacterStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the CharacterStats to update in case it exists.
     */
    where: CharacterStatsWhereUniqueInput
    /**
     * In case the CharacterStats found by the `where` argument doesn't exist, create a new CharacterStats with this data.
     */
    create: XOR<CharacterStatsCreateInput, CharacterStatsUncheckedCreateInput>
    /**
     * In case the CharacterStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterStatsUpdateInput, CharacterStatsUncheckedUpdateInput>
  }

  /**
   * CharacterStats delete
   */
  export type CharacterStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: CharacterStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: CharacterStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatsInclude<ExtArgs> | null
    /**
     * Filter which CharacterStats to delete.
     */
    where: CharacterStatsWhereUniqueInput
  }

  /**
   * CharacterStats deleteMany
   */
  export type CharacterStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterStats to delete
     */
    where?: CharacterStatsWhereInput
    /**
     * Limit how many CharacterStats to delete.
     */
    limit?: number
  }

  /**
   * CharacterStats.upgrades
   */
  export type CharacterStats$upgradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAttributeProgress
     */
    select?: CharacterAttributeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAttributeProgress
     */
    omit?: CharacterAttributeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAttributeProgressInclude<ExtArgs> | null
    where?: CharacterAttributeProgressWhereInput
    orderBy?: CharacterAttributeProgressOrderByWithRelationInput | CharacterAttributeProgressOrderByWithRelationInput[]
    cursor?: CharacterAttributeProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterAttributeProgressScalarFieldEnum | CharacterAttributeProgressScalarFieldEnum[]
  }

  /**
   * CharacterStats without action
   */
  export type CharacterStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterStats
     */
    select?: CharacterStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterStats
     */
    omit?: CharacterStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterStatsInclude<ExtArgs> | null
  }


  /**
   * Model CharacterAttributeProgress
   */

  export type AggregateCharacterAttributeProgress = {
    _count: CharacterAttributeProgressCountAggregateOutputType | null
    _avg: CharacterAttributeProgressAvgAggregateOutputType | null
    _sum: CharacterAttributeProgressSumAggregateOutputType | null
    _min: CharacterAttributeProgressMinAggregateOutputType | null
    _max: CharacterAttributeProgressMaxAggregateOutputType | null
  }

  export type CharacterAttributeProgressAvgAggregateOutputType = {
    id: number | null
    characterStatsId: number | null
    currentLevel: number | null
  }

  export type CharacterAttributeProgressSumAggregateOutputType = {
    id: number | null
    characterStatsId: number | null
    currentLevel: number | null
  }

  export type CharacterAttributeProgressMinAggregateOutputType = {
    id: number | null
    characterStatsId: number | null
    category: $Enums.SkillCategory | null
    currentLevel: number | null
  }

  export type CharacterAttributeProgressMaxAggregateOutputType = {
    id: number | null
    characterStatsId: number | null
    category: $Enums.SkillCategory | null
    currentLevel: number | null
  }

  export type CharacterAttributeProgressCountAggregateOutputType = {
    id: number
    characterStatsId: number
    category: number
    currentLevel: number
    _all: number
  }


  export type CharacterAttributeProgressAvgAggregateInputType = {
    id?: true
    characterStatsId?: true
    currentLevel?: true
  }

  export type CharacterAttributeProgressSumAggregateInputType = {
    id?: true
    characterStatsId?: true
    currentLevel?: true
  }

  export type CharacterAttributeProgressMinAggregateInputType = {
    id?: true
    characterStatsId?: true
    category?: true
    currentLevel?: true
  }

  export type CharacterAttributeProgressMaxAggregateInputType = {
    id?: true
    characterStatsId?: true
    category?: true
    currentLevel?: true
  }

  export type CharacterAttributeProgressCountAggregateInputType = {
    id?: true
    characterStatsId?: true
    category?: true
    currentLevel?: true
    _all?: true
  }

  export type CharacterAttributeProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterAttributeProgress to aggregate.
     */
    where?: CharacterAttributeProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterAttributeProgresses to fetch.
     */
    orderBy?: CharacterAttributeProgressOrderByWithRelationInput | CharacterAttributeProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterAttributeProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterAttributeProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterAttributeProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharacterAttributeProgresses
    **/
    _count?: true | CharacterAttributeProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterAttributeProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterAttributeProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterAttributeProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterAttributeProgressMaxAggregateInputType
  }

  export type GetCharacterAttributeProgressAggregateType<T extends CharacterAttributeProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterAttributeProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterAttributeProgress[P]>
      : GetScalarType<T[P], AggregateCharacterAttributeProgress[P]>
  }




  export type CharacterAttributeProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterAttributeProgressWhereInput
    orderBy?: CharacterAttributeProgressOrderByWithAggregationInput | CharacterAttributeProgressOrderByWithAggregationInput[]
    by: CharacterAttributeProgressScalarFieldEnum[] | CharacterAttributeProgressScalarFieldEnum
    having?: CharacterAttributeProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterAttributeProgressCountAggregateInputType | true
    _avg?: CharacterAttributeProgressAvgAggregateInputType
    _sum?: CharacterAttributeProgressSumAggregateInputType
    _min?: CharacterAttributeProgressMinAggregateInputType
    _max?: CharacterAttributeProgressMaxAggregateInputType
  }

  export type CharacterAttributeProgressGroupByOutputType = {
    id: number
    characterStatsId: number
    category: $Enums.SkillCategory
    currentLevel: number
    _count: CharacterAttributeProgressCountAggregateOutputType | null
    _avg: CharacterAttributeProgressAvgAggregateOutputType | null
    _sum: CharacterAttributeProgressSumAggregateOutputType | null
    _min: CharacterAttributeProgressMinAggregateOutputType | null
    _max: CharacterAttributeProgressMaxAggregateOutputType | null
  }

  type GetCharacterAttributeProgressGroupByPayload<T extends CharacterAttributeProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterAttributeProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterAttributeProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterAttributeProgressGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterAttributeProgressGroupByOutputType[P]>
        }
      >
    >


  export type CharacterAttributeProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterStatsId?: boolean
    category?: boolean
    currentLevel?: boolean
    characterStats?: boolean | CharacterStatsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterAttributeProgress"]>

  export type CharacterAttributeProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterStatsId?: boolean
    category?: boolean
    currentLevel?: boolean
    characterStats?: boolean | CharacterStatsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterAttributeProgress"]>

  export type CharacterAttributeProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterStatsId?: boolean
    category?: boolean
    currentLevel?: boolean
    characterStats?: boolean | CharacterStatsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterAttributeProgress"]>

  export type CharacterAttributeProgressSelectScalar = {
    id?: boolean
    characterStatsId?: boolean
    category?: boolean
    currentLevel?: boolean
  }

  export type CharacterAttributeProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "characterStatsId" | "category" | "currentLevel", ExtArgs["result"]["characterAttributeProgress"]>
  export type CharacterAttributeProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characterStats?: boolean | CharacterStatsDefaultArgs<ExtArgs>
  }
  export type CharacterAttributeProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characterStats?: boolean | CharacterStatsDefaultArgs<ExtArgs>
  }
  export type CharacterAttributeProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characterStats?: boolean | CharacterStatsDefaultArgs<ExtArgs>
  }

  export type $CharacterAttributeProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharacterAttributeProgress"
    objects: {
      characterStats: Prisma.$CharacterStatsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      characterStatsId: number
      category: $Enums.SkillCategory
      currentLevel: number
    }, ExtArgs["result"]["characterAttributeProgress"]>
    composites: {}
  }

  type CharacterAttributeProgressGetPayload<S extends boolean | null | undefined | CharacterAttributeProgressDefaultArgs> = $Result.GetResult<Prisma.$CharacterAttributeProgressPayload, S>

  type CharacterAttributeProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterAttributeProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterAttributeProgressCountAggregateInputType | true
    }

  export interface CharacterAttributeProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharacterAttributeProgress'], meta: { name: 'CharacterAttributeProgress' } }
    /**
     * Find zero or one CharacterAttributeProgress that matches the filter.
     * @param {CharacterAttributeProgressFindUniqueArgs} args - Arguments to find a CharacterAttributeProgress
     * @example
     * // Get one CharacterAttributeProgress
     * const characterAttributeProgress = await prisma.characterAttributeProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterAttributeProgressFindUniqueArgs>(args: SelectSubset<T, CharacterAttributeProgressFindUniqueArgs<ExtArgs>>): Prisma__CharacterAttributeProgressClient<$Result.GetResult<Prisma.$CharacterAttributeProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CharacterAttributeProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterAttributeProgressFindUniqueOrThrowArgs} args - Arguments to find a CharacterAttributeProgress
     * @example
     * // Get one CharacterAttributeProgress
     * const characterAttributeProgress = await prisma.characterAttributeProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterAttributeProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterAttributeProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterAttributeProgressClient<$Result.GetResult<Prisma.$CharacterAttributeProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CharacterAttributeProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAttributeProgressFindFirstArgs} args - Arguments to find a CharacterAttributeProgress
     * @example
     * // Get one CharacterAttributeProgress
     * const characterAttributeProgress = await prisma.characterAttributeProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterAttributeProgressFindFirstArgs>(args?: SelectSubset<T, CharacterAttributeProgressFindFirstArgs<ExtArgs>>): Prisma__CharacterAttributeProgressClient<$Result.GetResult<Prisma.$CharacterAttributeProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CharacterAttributeProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAttributeProgressFindFirstOrThrowArgs} args - Arguments to find a CharacterAttributeProgress
     * @example
     * // Get one CharacterAttributeProgress
     * const characterAttributeProgress = await prisma.characterAttributeProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterAttributeProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterAttributeProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterAttributeProgressClient<$Result.GetResult<Prisma.$CharacterAttributeProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CharacterAttributeProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAttributeProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterAttributeProgresses
     * const characterAttributeProgresses = await prisma.characterAttributeProgress.findMany()
     * 
     * // Get first 10 CharacterAttributeProgresses
     * const characterAttributeProgresses = await prisma.characterAttributeProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterAttributeProgressWithIdOnly = await prisma.characterAttributeProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterAttributeProgressFindManyArgs>(args?: SelectSubset<T, CharacterAttributeProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterAttributeProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CharacterAttributeProgress.
     * @param {CharacterAttributeProgressCreateArgs} args - Arguments to create a CharacterAttributeProgress.
     * @example
     * // Create one CharacterAttributeProgress
     * const CharacterAttributeProgress = await prisma.characterAttributeProgress.create({
     *   data: {
     *     // ... data to create a CharacterAttributeProgress
     *   }
     * })
     * 
     */
    create<T extends CharacterAttributeProgressCreateArgs>(args: SelectSubset<T, CharacterAttributeProgressCreateArgs<ExtArgs>>): Prisma__CharacterAttributeProgressClient<$Result.GetResult<Prisma.$CharacterAttributeProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CharacterAttributeProgresses.
     * @param {CharacterAttributeProgressCreateManyArgs} args - Arguments to create many CharacterAttributeProgresses.
     * @example
     * // Create many CharacterAttributeProgresses
     * const characterAttributeProgress = await prisma.characterAttributeProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterAttributeProgressCreateManyArgs>(args?: SelectSubset<T, CharacterAttributeProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CharacterAttributeProgresses and returns the data saved in the database.
     * @param {CharacterAttributeProgressCreateManyAndReturnArgs} args - Arguments to create many CharacterAttributeProgresses.
     * @example
     * // Create many CharacterAttributeProgresses
     * const characterAttributeProgress = await prisma.characterAttributeProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CharacterAttributeProgresses and only return the `id`
     * const characterAttributeProgressWithIdOnly = await prisma.characterAttributeProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterAttributeProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterAttributeProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterAttributeProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CharacterAttributeProgress.
     * @param {CharacterAttributeProgressDeleteArgs} args - Arguments to delete one CharacterAttributeProgress.
     * @example
     * // Delete one CharacterAttributeProgress
     * const CharacterAttributeProgress = await prisma.characterAttributeProgress.delete({
     *   where: {
     *     // ... filter to delete one CharacterAttributeProgress
     *   }
     * })
     * 
     */
    delete<T extends CharacterAttributeProgressDeleteArgs>(args: SelectSubset<T, CharacterAttributeProgressDeleteArgs<ExtArgs>>): Prisma__CharacterAttributeProgressClient<$Result.GetResult<Prisma.$CharacterAttributeProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CharacterAttributeProgress.
     * @param {CharacterAttributeProgressUpdateArgs} args - Arguments to update one CharacterAttributeProgress.
     * @example
     * // Update one CharacterAttributeProgress
     * const characterAttributeProgress = await prisma.characterAttributeProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterAttributeProgressUpdateArgs>(args: SelectSubset<T, CharacterAttributeProgressUpdateArgs<ExtArgs>>): Prisma__CharacterAttributeProgressClient<$Result.GetResult<Prisma.$CharacterAttributeProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CharacterAttributeProgresses.
     * @param {CharacterAttributeProgressDeleteManyArgs} args - Arguments to filter CharacterAttributeProgresses to delete.
     * @example
     * // Delete a few CharacterAttributeProgresses
     * const { count } = await prisma.characterAttributeProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterAttributeProgressDeleteManyArgs>(args?: SelectSubset<T, CharacterAttributeProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterAttributeProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAttributeProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterAttributeProgresses
     * const characterAttributeProgress = await prisma.characterAttributeProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterAttributeProgressUpdateManyArgs>(args: SelectSubset<T, CharacterAttributeProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterAttributeProgresses and returns the data updated in the database.
     * @param {CharacterAttributeProgressUpdateManyAndReturnArgs} args - Arguments to update many CharacterAttributeProgresses.
     * @example
     * // Update many CharacterAttributeProgresses
     * const characterAttributeProgress = await prisma.characterAttributeProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CharacterAttributeProgresses and only return the `id`
     * const characterAttributeProgressWithIdOnly = await prisma.characterAttributeProgress.updateManyAndReturn({
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
    updateManyAndReturn<T extends CharacterAttributeProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterAttributeProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterAttributeProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CharacterAttributeProgress.
     * @param {CharacterAttributeProgressUpsertArgs} args - Arguments to update or create a CharacterAttributeProgress.
     * @example
     * // Update or create a CharacterAttributeProgress
     * const characterAttributeProgress = await prisma.characterAttributeProgress.upsert({
     *   create: {
     *     // ... data to create a CharacterAttributeProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterAttributeProgress we want to update
     *   }
     * })
     */
    upsert<T extends CharacterAttributeProgressUpsertArgs>(args: SelectSubset<T, CharacterAttributeProgressUpsertArgs<ExtArgs>>): Prisma__CharacterAttributeProgressClient<$Result.GetResult<Prisma.$CharacterAttributeProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CharacterAttributeProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAttributeProgressCountArgs} args - Arguments to filter CharacterAttributeProgresses to count.
     * @example
     * // Count the number of CharacterAttributeProgresses
     * const count = await prisma.characterAttributeProgress.count({
     *   where: {
     *     // ... the filter for the CharacterAttributeProgresses we want to count
     *   }
     * })
    **/
    count<T extends CharacterAttributeProgressCountArgs>(
      args?: Subset<T, CharacterAttributeProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterAttributeProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharacterAttributeProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAttributeProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CharacterAttributeProgressAggregateArgs>(args: Subset<T, CharacterAttributeProgressAggregateArgs>): Prisma.PrismaPromise<GetCharacterAttributeProgressAggregateType<T>>

    /**
     * Group by CharacterAttributeProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAttributeProgressGroupByArgs} args - Group by arguments.
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
      T extends CharacterAttributeProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterAttributeProgressGroupByArgs['orderBy'] }
        : { orderBy?: CharacterAttributeProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CharacterAttributeProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterAttributeProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharacterAttributeProgress model
   */
  readonly fields: CharacterAttributeProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharacterAttributeProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterAttributeProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    characterStats<T extends CharacterStatsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterStatsDefaultArgs<ExtArgs>>): Prisma__CharacterStatsClient<$Result.GetResult<Prisma.$CharacterStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CharacterAttributeProgress model
   */
  interface CharacterAttributeProgressFieldRefs {
    readonly id: FieldRef<"CharacterAttributeProgress", 'Int'>
    readonly characterStatsId: FieldRef<"CharacterAttributeProgress", 'Int'>
    readonly category: FieldRef<"CharacterAttributeProgress", 'SkillCategory'>
    readonly currentLevel: FieldRef<"CharacterAttributeProgress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CharacterAttributeProgress findUnique
   */
  export type CharacterAttributeProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAttributeProgress
     */
    select?: CharacterAttributeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAttributeProgress
     */
    omit?: CharacterAttributeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAttributeProgressInclude<ExtArgs> | null
    /**
     * Filter, which CharacterAttributeProgress to fetch.
     */
    where: CharacterAttributeProgressWhereUniqueInput
  }

  /**
   * CharacterAttributeProgress findUniqueOrThrow
   */
  export type CharacterAttributeProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAttributeProgress
     */
    select?: CharacterAttributeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAttributeProgress
     */
    omit?: CharacterAttributeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAttributeProgressInclude<ExtArgs> | null
    /**
     * Filter, which CharacterAttributeProgress to fetch.
     */
    where: CharacterAttributeProgressWhereUniqueInput
  }

  /**
   * CharacterAttributeProgress findFirst
   */
  export type CharacterAttributeProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAttributeProgress
     */
    select?: CharacterAttributeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAttributeProgress
     */
    omit?: CharacterAttributeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAttributeProgressInclude<ExtArgs> | null
    /**
     * Filter, which CharacterAttributeProgress to fetch.
     */
    where?: CharacterAttributeProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterAttributeProgresses to fetch.
     */
    orderBy?: CharacterAttributeProgressOrderByWithRelationInput | CharacterAttributeProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterAttributeProgresses.
     */
    cursor?: CharacterAttributeProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterAttributeProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterAttributeProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterAttributeProgresses.
     */
    distinct?: CharacterAttributeProgressScalarFieldEnum | CharacterAttributeProgressScalarFieldEnum[]
  }

  /**
   * CharacterAttributeProgress findFirstOrThrow
   */
  export type CharacterAttributeProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAttributeProgress
     */
    select?: CharacterAttributeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAttributeProgress
     */
    omit?: CharacterAttributeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAttributeProgressInclude<ExtArgs> | null
    /**
     * Filter, which CharacterAttributeProgress to fetch.
     */
    where?: CharacterAttributeProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterAttributeProgresses to fetch.
     */
    orderBy?: CharacterAttributeProgressOrderByWithRelationInput | CharacterAttributeProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterAttributeProgresses.
     */
    cursor?: CharacterAttributeProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterAttributeProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterAttributeProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterAttributeProgresses.
     */
    distinct?: CharacterAttributeProgressScalarFieldEnum | CharacterAttributeProgressScalarFieldEnum[]
  }

  /**
   * CharacterAttributeProgress findMany
   */
  export type CharacterAttributeProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAttributeProgress
     */
    select?: CharacterAttributeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAttributeProgress
     */
    omit?: CharacterAttributeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAttributeProgressInclude<ExtArgs> | null
    /**
     * Filter, which CharacterAttributeProgresses to fetch.
     */
    where?: CharacterAttributeProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterAttributeProgresses to fetch.
     */
    orderBy?: CharacterAttributeProgressOrderByWithRelationInput | CharacterAttributeProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharacterAttributeProgresses.
     */
    cursor?: CharacterAttributeProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterAttributeProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterAttributeProgresses.
     */
    skip?: number
    distinct?: CharacterAttributeProgressScalarFieldEnum | CharacterAttributeProgressScalarFieldEnum[]
  }

  /**
   * CharacterAttributeProgress create
   */
  export type CharacterAttributeProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAttributeProgress
     */
    select?: CharacterAttributeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAttributeProgress
     */
    omit?: CharacterAttributeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAttributeProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a CharacterAttributeProgress.
     */
    data: XOR<CharacterAttributeProgressCreateInput, CharacterAttributeProgressUncheckedCreateInput>
  }

  /**
   * CharacterAttributeProgress createMany
   */
  export type CharacterAttributeProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterAttributeProgresses.
     */
    data: CharacterAttributeProgressCreateManyInput | CharacterAttributeProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharacterAttributeProgress createManyAndReturn
   */
  export type CharacterAttributeProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAttributeProgress
     */
    select?: CharacterAttributeProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAttributeProgress
     */
    omit?: CharacterAttributeProgressOmit<ExtArgs> | null
    /**
     * The data used to create many CharacterAttributeProgresses.
     */
    data: CharacterAttributeProgressCreateManyInput | CharacterAttributeProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAttributeProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CharacterAttributeProgress update
   */
  export type CharacterAttributeProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAttributeProgress
     */
    select?: CharacterAttributeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAttributeProgress
     */
    omit?: CharacterAttributeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAttributeProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a CharacterAttributeProgress.
     */
    data: XOR<CharacterAttributeProgressUpdateInput, CharacterAttributeProgressUncheckedUpdateInput>
    /**
     * Choose, which CharacterAttributeProgress to update.
     */
    where: CharacterAttributeProgressWhereUniqueInput
  }

  /**
   * CharacterAttributeProgress updateMany
   */
  export type CharacterAttributeProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterAttributeProgresses.
     */
    data: XOR<CharacterAttributeProgressUpdateManyMutationInput, CharacterAttributeProgressUncheckedUpdateManyInput>
    /**
     * Filter which CharacterAttributeProgresses to update
     */
    where?: CharacterAttributeProgressWhereInput
    /**
     * Limit how many CharacterAttributeProgresses to update.
     */
    limit?: number
  }

  /**
   * CharacterAttributeProgress updateManyAndReturn
   */
  export type CharacterAttributeProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAttributeProgress
     */
    select?: CharacterAttributeProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAttributeProgress
     */
    omit?: CharacterAttributeProgressOmit<ExtArgs> | null
    /**
     * The data used to update CharacterAttributeProgresses.
     */
    data: XOR<CharacterAttributeProgressUpdateManyMutationInput, CharacterAttributeProgressUncheckedUpdateManyInput>
    /**
     * Filter which CharacterAttributeProgresses to update
     */
    where?: CharacterAttributeProgressWhereInput
    /**
     * Limit how many CharacterAttributeProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAttributeProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CharacterAttributeProgress upsert
   */
  export type CharacterAttributeProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAttributeProgress
     */
    select?: CharacterAttributeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAttributeProgress
     */
    omit?: CharacterAttributeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAttributeProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the CharacterAttributeProgress to update in case it exists.
     */
    where: CharacterAttributeProgressWhereUniqueInput
    /**
     * In case the CharacterAttributeProgress found by the `where` argument doesn't exist, create a new CharacterAttributeProgress with this data.
     */
    create: XOR<CharacterAttributeProgressCreateInput, CharacterAttributeProgressUncheckedCreateInput>
    /**
     * In case the CharacterAttributeProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterAttributeProgressUpdateInput, CharacterAttributeProgressUncheckedUpdateInput>
  }

  /**
   * CharacterAttributeProgress delete
   */
  export type CharacterAttributeProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAttributeProgress
     */
    select?: CharacterAttributeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAttributeProgress
     */
    omit?: CharacterAttributeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAttributeProgressInclude<ExtArgs> | null
    /**
     * Filter which CharacterAttributeProgress to delete.
     */
    where: CharacterAttributeProgressWhereUniqueInput
  }

  /**
   * CharacterAttributeProgress deleteMany
   */
  export type CharacterAttributeProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterAttributeProgresses to delete
     */
    where?: CharacterAttributeProgressWhereInput
    /**
     * Limit how many CharacterAttributeProgresses to delete.
     */
    limit?: number
  }

  /**
   * CharacterAttributeProgress without action
   */
  export type CharacterAttributeProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterAttributeProgress
     */
    select?: CharacterAttributeProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterAttributeProgress
     */
    omit?: CharacterAttributeProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterAttributeProgressInclude<ExtArgs> | null
  }


  /**
   * Model SkillNodeDefinition
   */

  export type AggregateSkillNodeDefinition = {
    _count: SkillNodeDefinitionCountAggregateOutputType | null
    _avg: SkillNodeDefinitionAvgAggregateOutputType | null
    _sum: SkillNodeDefinitionSumAggregateOutputType | null
    _min: SkillNodeDefinitionMinAggregateOutputType | null
    _max: SkillNodeDefinitionMaxAggregateOutputType | null
  }

  export type SkillNodeDefinitionAvgAggregateOutputType = {
    id: number | null
    tier: number | null
    xpCost: number | null
  }

  export type SkillNodeDefinitionSumAggregateOutputType = {
    id: number | null
    tier: number | null
    xpCost: number | null
  }

  export type SkillNodeDefinitionMinAggregateOutputType = {
    id: number | null
    characterType: $Enums.CharacterType | null
    category: $Enums.SkillCategory | null
    tier: number | null
    name: string | null
    description: string | null
    xpCost: number | null
  }

  export type SkillNodeDefinitionMaxAggregateOutputType = {
    id: number | null
    characterType: $Enums.CharacterType | null
    category: $Enums.SkillCategory | null
    tier: number | null
    name: string | null
    description: string | null
    xpCost: number | null
  }

  export type SkillNodeDefinitionCountAggregateOutputType = {
    id: number
    characterType: number
    category: number
    tier: number
    name: number
    description: number
    xpCost: number
    effectMetadata: number
    _all: number
  }


  export type SkillNodeDefinitionAvgAggregateInputType = {
    id?: true
    tier?: true
    xpCost?: true
  }

  export type SkillNodeDefinitionSumAggregateInputType = {
    id?: true
    tier?: true
    xpCost?: true
  }

  export type SkillNodeDefinitionMinAggregateInputType = {
    id?: true
    characterType?: true
    category?: true
    tier?: true
    name?: true
    description?: true
    xpCost?: true
  }

  export type SkillNodeDefinitionMaxAggregateInputType = {
    id?: true
    characterType?: true
    category?: true
    tier?: true
    name?: true
    description?: true
    xpCost?: true
  }

  export type SkillNodeDefinitionCountAggregateInputType = {
    id?: true
    characterType?: true
    category?: true
    tier?: true
    name?: true
    description?: true
    xpCost?: true
    effectMetadata?: true
    _all?: true
  }

  export type SkillNodeDefinitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillNodeDefinition to aggregate.
     */
    where?: SkillNodeDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillNodeDefinitions to fetch.
     */
    orderBy?: SkillNodeDefinitionOrderByWithRelationInput | SkillNodeDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillNodeDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillNodeDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillNodeDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SkillNodeDefinitions
    **/
    _count?: true | SkillNodeDefinitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillNodeDefinitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillNodeDefinitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillNodeDefinitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillNodeDefinitionMaxAggregateInputType
  }

  export type GetSkillNodeDefinitionAggregateType<T extends SkillNodeDefinitionAggregateArgs> = {
        [P in keyof T & keyof AggregateSkillNodeDefinition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkillNodeDefinition[P]>
      : GetScalarType<T[P], AggregateSkillNodeDefinition[P]>
  }




  export type SkillNodeDefinitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillNodeDefinitionWhereInput
    orderBy?: SkillNodeDefinitionOrderByWithAggregationInput | SkillNodeDefinitionOrderByWithAggregationInput[]
    by: SkillNodeDefinitionScalarFieldEnum[] | SkillNodeDefinitionScalarFieldEnum
    having?: SkillNodeDefinitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillNodeDefinitionCountAggregateInputType | true
    _avg?: SkillNodeDefinitionAvgAggregateInputType
    _sum?: SkillNodeDefinitionSumAggregateInputType
    _min?: SkillNodeDefinitionMinAggregateInputType
    _max?: SkillNodeDefinitionMaxAggregateInputType
  }

  export type SkillNodeDefinitionGroupByOutputType = {
    id: number
    characterType: $Enums.CharacterType
    category: $Enums.SkillCategory
    tier: number
    name: string
    description: string
    xpCost: number
    effectMetadata: JsonValue | null
    _count: SkillNodeDefinitionCountAggregateOutputType | null
    _avg: SkillNodeDefinitionAvgAggregateOutputType | null
    _sum: SkillNodeDefinitionSumAggregateOutputType | null
    _min: SkillNodeDefinitionMinAggregateOutputType | null
    _max: SkillNodeDefinitionMaxAggregateOutputType | null
  }

  type GetSkillNodeDefinitionGroupByPayload<T extends SkillNodeDefinitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillNodeDefinitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillNodeDefinitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillNodeDefinitionGroupByOutputType[P]>
            : GetScalarType<T[P], SkillNodeDefinitionGroupByOutputType[P]>
        }
      >
    >


  export type SkillNodeDefinitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterType?: boolean
    category?: boolean
    tier?: boolean
    name?: boolean
    description?: boolean
    xpCost?: boolean
    effectMetadata?: boolean
  }, ExtArgs["result"]["skillNodeDefinition"]>

  export type SkillNodeDefinitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterType?: boolean
    category?: boolean
    tier?: boolean
    name?: boolean
    description?: boolean
    xpCost?: boolean
    effectMetadata?: boolean
  }, ExtArgs["result"]["skillNodeDefinition"]>

  export type SkillNodeDefinitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterType?: boolean
    category?: boolean
    tier?: boolean
    name?: boolean
    description?: boolean
    xpCost?: boolean
    effectMetadata?: boolean
  }, ExtArgs["result"]["skillNodeDefinition"]>

  export type SkillNodeDefinitionSelectScalar = {
    id?: boolean
    characterType?: boolean
    category?: boolean
    tier?: boolean
    name?: boolean
    description?: boolean
    xpCost?: boolean
    effectMetadata?: boolean
  }

  export type SkillNodeDefinitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "characterType" | "category" | "tier" | "name" | "description" | "xpCost" | "effectMetadata", ExtArgs["result"]["skillNodeDefinition"]>

  export type $SkillNodeDefinitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SkillNodeDefinition"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      characterType: $Enums.CharacterType
      category: $Enums.SkillCategory
      tier: number
      name: string
      description: string
      xpCost: number
      effectMetadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["skillNodeDefinition"]>
    composites: {}
  }

  type SkillNodeDefinitionGetPayload<S extends boolean | null | undefined | SkillNodeDefinitionDefaultArgs> = $Result.GetResult<Prisma.$SkillNodeDefinitionPayload, S>

  type SkillNodeDefinitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillNodeDefinitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillNodeDefinitionCountAggregateInputType | true
    }

  export interface SkillNodeDefinitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SkillNodeDefinition'], meta: { name: 'SkillNodeDefinition' } }
    /**
     * Find zero or one SkillNodeDefinition that matches the filter.
     * @param {SkillNodeDefinitionFindUniqueArgs} args - Arguments to find a SkillNodeDefinition
     * @example
     * // Get one SkillNodeDefinition
     * const skillNodeDefinition = await prisma.skillNodeDefinition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillNodeDefinitionFindUniqueArgs>(args: SelectSubset<T, SkillNodeDefinitionFindUniqueArgs<ExtArgs>>): Prisma__SkillNodeDefinitionClient<$Result.GetResult<Prisma.$SkillNodeDefinitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SkillNodeDefinition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillNodeDefinitionFindUniqueOrThrowArgs} args - Arguments to find a SkillNodeDefinition
     * @example
     * // Get one SkillNodeDefinition
     * const skillNodeDefinition = await prisma.skillNodeDefinition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillNodeDefinitionFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillNodeDefinitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillNodeDefinitionClient<$Result.GetResult<Prisma.$SkillNodeDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillNodeDefinition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillNodeDefinitionFindFirstArgs} args - Arguments to find a SkillNodeDefinition
     * @example
     * // Get one SkillNodeDefinition
     * const skillNodeDefinition = await prisma.skillNodeDefinition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillNodeDefinitionFindFirstArgs>(args?: SelectSubset<T, SkillNodeDefinitionFindFirstArgs<ExtArgs>>): Prisma__SkillNodeDefinitionClient<$Result.GetResult<Prisma.$SkillNodeDefinitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SkillNodeDefinition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillNodeDefinitionFindFirstOrThrowArgs} args - Arguments to find a SkillNodeDefinition
     * @example
     * // Get one SkillNodeDefinition
     * const skillNodeDefinition = await prisma.skillNodeDefinition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillNodeDefinitionFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillNodeDefinitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillNodeDefinitionClient<$Result.GetResult<Prisma.$SkillNodeDefinitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SkillNodeDefinitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillNodeDefinitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SkillNodeDefinitions
     * const skillNodeDefinitions = await prisma.skillNodeDefinition.findMany()
     * 
     * // Get first 10 SkillNodeDefinitions
     * const skillNodeDefinitions = await prisma.skillNodeDefinition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillNodeDefinitionWithIdOnly = await prisma.skillNodeDefinition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillNodeDefinitionFindManyArgs>(args?: SelectSubset<T, SkillNodeDefinitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillNodeDefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SkillNodeDefinition.
     * @param {SkillNodeDefinitionCreateArgs} args - Arguments to create a SkillNodeDefinition.
     * @example
     * // Create one SkillNodeDefinition
     * const SkillNodeDefinition = await prisma.skillNodeDefinition.create({
     *   data: {
     *     // ... data to create a SkillNodeDefinition
     *   }
     * })
     * 
     */
    create<T extends SkillNodeDefinitionCreateArgs>(args: SelectSubset<T, SkillNodeDefinitionCreateArgs<ExtArgs>>): Prisma__SkillNodeDefinitionClient<$Result.GetResult<Prisma.$SkillNodeDefinitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SkillNodeDefinitions.
     * @param {SkillNodeDefinitionCreateManyArgs} args - Arguments to create many SkillNodeDefinitions.
     * @example
     * // Create many SkillNodeDefinitions
     * const skillNodeDefinition = await prisma.skillNodeDefinition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillNodeDefinitionCreateManyArgs>(args?: SelectSubset<T, SkillNodeDefinitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SkillNodeDefinitions and returns the data saved in the database.
     * @param {SkillNodeDefinitionCreateManyAndReturnArgs} args - Arguments to create many SkillNodeDefinitions.
     * @example
     * // Create many SkillNodeDefinitions
     * const skillNodeDefinition = await prisma.skillNodeDefinition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SkillNodeDefinitions and only return the `id`
     * const skillNodeDefinitionWithIdOnly = await prisma.skillNodeDefinition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillNodeDefinitionCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillNodeDefinitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillNodeDefinitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SkillNodeDefinition.
     * @param {SkillNodeDefinitionDeleteArgs} args - Arguments to delete one SkillNodeDefinition.
     * @example
     * // Delete one SkillNodeDefinition
     * const SkillNodeDefinition = await prisma.skillNodeDefinition.delete({
     *   where: {
     *     // ... filter to delete one SkillNodeDefinition
     *   }
     * })
     * 
     */
    delete<T extends SkillNodeDefinitionDeleteArgs>(args: SelectSubset<T, SkillNodeDefinitionDeleteArgs<ExtArgs>>): Prisma__SkillNodeDefinitionClient<$Result.GetResult<Prisma.$SkillNodeDefinitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SkillNodeDefinition.
     * @param {SkillNodeDefinitionUpdateArgs} args - Arguments to update one SkillNodeDefinition.
     * @example
     * // Update one SkillNodeDefinition
     * const skillNodeDefinition = await prisma.skillNodeDefinition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillNodeDefinitionUpdateArgs>(args: SelectSubset<T, SkillNodeDefinitionUpdateArgs<ExtArgs>>): Prisma__SkillNodeDefinitionClient<$Result.GetResult<Prisma.$SkillNodeDefinitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SkillNodeDefinitions.
     * @param {SkillNodeDefinitionDeleteManyArgs} args - Arguments to filter SkillNodeDefinitions to delete.
     * @example
     * // Delete a few SkillNodeDefinitions
     * const { count } = await prisma.skillNodeDefinition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillNodeDefinitionDeleteManyArgs>(args?: SelectSubset<T, SkillNodeDefinitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillNodeDefinitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillNodeDefinitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SkillNodeDefinitions
     * const skillNodeDefinition = await prisma.skillNodeDefinition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillNodeDefinitionUpdateManyArgs>(args: SelectSubset<T, SkillNodeDefinitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SkillNodeDefinitions and returns the data updated in the database.
     * @param {SkillNodeDefinitionUpdateManyAndReturnArgs} args - Arguments to update many SkillNodeDefinitions.
     * @example
     * // Update many SkillNodeDefinitions
     * const skillNodeDefinition = await prisma.skillNodeDefinition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SkillNodeDefinitions and only return the `id`
     * const skillNodeDefinitionWithIdOnly = await prisma.skillNodeDefinition.updateManyAndReturn({
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
    updateManyAndReturn<T extends SkillNodeDefinitionUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillNodeDefinitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillNodeDefinitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SkillNodeDefinition.
     * @param {SkillNodeDefinitionUpsertArgs} args - Arguments to update or create a SkillNodeDefinition.
     * @example
     * // Update or create a SkillNodeDefinition
     * const skillNodeDefinition = await prisma.skillNodeDefinition.upsert({
     *   create: {
     *     // ... data to create a SkillNodeDefinition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SkillNodeDefinition we want to update
     *   }
     * })
     */
    upsert<T extends SkillNodeDefinitionUpsertArgs>(args: SelectSubset<T, SkillNodeDefinitionUpsertArgs<ExtArgs>>): Prisma__SkillNodeDefinitionClient<$Result.GetResult<Prisma.$SkillNodeDefinitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SkillNodeDefinitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillNodeDefinitionCountArgs} args - Arguments to filter SkillNodeDefinitions to count.
     * @example
     * // Count the number of SkillNodeDefinitions
     * const count = await prisma.skillNodeDefinition.count({
     *   where: {
     *     // ... the filter for the SkillNodeDefinitions we want to count
     *   }
     * })
    **/
    count<T extends SkillNodeDefinitionCountArgs>(
      args?: Subset<T, SkillNodeDefinitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillNodeDefinitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SkillNodeDefinition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillNodeDefinitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillNodeDefinitionAggregateArgs>(args: Subset<T, SkillNodeDefinitionAggregateArgs>): Prisma.PrismaPromise<GetSkillNodeDefinitionAggregateType<T>>

    /**
     * Group by SkillNodeDefinition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillNodeDefinitionGroupByArgs} args - Group by arguments.
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
      T extends SkillNodeDefinitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillNodeDefinitionGroupByArgs['orderBy'] }
        : { orderBy?: SkillNodeDefinitionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillNodeDefinitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillNodeDefinitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SkillNodeDefinition model
   */
  readonly fields: SkillNodeDefinitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SkillNodeDefinition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillNodeDefinitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SkillNodeDefinition model
   */
  interface SkillNodeDefinitionFieldRefs {
    readonly id: FieldRef<"SkillNodeDefinition", 'Int'>
    readonly characterType: FieldRef<"SkillNodeDefinition", 'CharacterType'>
    readonly category: FieldRef<"SkillNodeDefinition", 'SkillCategory'>
    readonly tier: FieldRef<"SkillNodeDefinition", 'Int'>
    readonly name: FieldRef<"SkillNodeDefinition", 'String'>
    readonly description: FieldRef<"SkillNodeDefinition", 'String'>
    readonly xpCost: FieldRef<"SkillNodeDefinition", 'Int'>
    readonly effectMetadata: FieldRef<"SkillNodeDefinition", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * SkillNodeDefinition findUnique
   */
  export type SkillNodeDefinitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillNodeDefinition
     */
    select?: SkillNodeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillNodeDefinition
     */
    omit?: SkillNodeDefinitionOmit<ExtArgs> | null
    /**
     * Filter, which SkillNodeDefinition to fetch.
     */
    where: SkillNodeDefinitionWhereUniqueInput
  }

  /**
   * SkillNodeDefinition findUniqueOrThrow
   */
  export type SkillNodeDefinitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillNodeDefinition
     */
    select?: SkillNodeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillNodeDefinition
     */
    omit?: SkillNodeDefinitionOmit<ExtArgs> | null
    /**
     * Filter, which SkillNodeDefinition to fetch.
     */
    where: SkillNodeDefinitionWhereUniqueInput
  }

  /**
   * SkillNodeDefinition findFirst
   */
  export type SkillNodeDefinitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillNodeDefinition
     */
    select?: SkillNodeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillNodeDefinition
     */
    omit?: SkillNodeDefinitionOmit<ExtArgs> | null
    /**
     * Filter, which SkillNodeDefinition to fetch.
     */
    where?: SkillNodeDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillNodeDefinitions to fetch.
     */
    orderBy?: SkillNodeDefinitionOrderByWithRelationInput | SkillNodeDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillNodeDefinitions.
     */
    cursor?: SkillNodeDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillNodeDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillNodeDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillNodeDefinitions.
     */
    distinct?: SkillNodeDefinitionScalarFieldEnum | SkillNodeDefinitionScalarFieldEnum[]
  }

  /**
   * SkillNodeDefinition findFirstOrThrow
   */
  export type SkillNodeDefinitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillNodeDefinition
     */
    select?: SkillNodeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillNodeDefinition
     */
    omit?: SkillNodeDefinitionOmit<ExtArgs> | null
    /**
     * Filter, which SkillNodeDefinition to fetch.
     */
    where?: SkillNodeDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillNodeDefinitions to fetch.
     */
    orderBy?: SkillNodeDefinitionOrderByWithRelationInput | SkillNodeDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SkillNodeDefinitions.
     */
    cursor?: SkillNodeDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillNodeDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillNodeDefinitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SkillNodeDefinitions.
     */
    distinct?: SkillNodeDefinitionScalarFieldEnum | SkillNodeDefinitionScalarFieldEnum[]
  }

  /**
   * SkillNodeDefinition findMany
   */
  export type SkillNodeDefinitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillNodeDefinition
     */
    select?: SkillNodeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillNodeDefinition
     */
    omit?: SkillNodeDefinitionOmit<ExtArgs> | null
    /**
     * Filter, which SkillNodeDefinitions to fetch.
     */
    where?: SkillNodeDefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SkillNodeDefinitions to fetch.
     */
    orderBy?: SkillNodeDefinitionOrderByWithRelationInput | SkillNodeDefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SkillNodeDefinitions.
     */
    cursor?: SkillNodeDefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SkillNodeDefinitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SkillNodeDefinitions.
     */
    skip?: number
    distinct?: SkillNodeDefinitionScalarFieldEnum | SkillNodeDefinitionScalarFieldEnum[]
  }

  /**
   * SkillNodeDefinition create
   */
  export type SkillNodeDefinitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillNodeDefinition
     */
    select?: SkillNodeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillNodeDefinition
     */
    omit?: SkillNodeDefinitionOmit<ExtArgs> | null
    /**
     * The data needed to create a SkillNodeDefinition.
     */
    data: XOR<SkillNodeDefinitionCreateInput, SkillNodeDefinitionUncheckedCreateInput>
  }

  /**
   * SkillNodeDefinition createMany
   */
  export type SkillNodeDefinitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SkillNodeDefinitions.
     */
    data: SkillNodeDefinitionCreateManyInput | SkillNodeDefinitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillNodeDefinition createManyAndReturn
   */
  export type SkillNodeDefinitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillNodeDefinition
     */
    select?: SkillNodeDefinitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillNodeDefinition
     */
    omit?: SkillNodeDefinitionOmit<ExtArgs> | null
    /**
     * The data used to create many SkillNodeDefinitions.
     */
    data: SkillNodeDefinitionCreateManyInput | SkillNodeDefinitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SkillNodeDefinition update
   */
  export type SkillNodeDefinitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillNodeDefinition
     */
    select?: SkillNodeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillNodeDefinition
     */
    omit?: SkillNodeDefinitionOmit<ExtArgs> | null
    /**
     * The data needed to update a SkillNodeDefinition.
     */
    data: XOR<SkillNodeDefinitionUpdateInput, SkillNodeDefinitionUncheckedUpdateInput>
    /**
     * Choose, which SkillNodeDefinition to update.
     */
    where: SkillNodeDefinitionWhereUniqueInput
  }

  /**
   * SkillNodeDefinition updateMany
   */
  export type SkillNodeDefinitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SkillNodeDefinitions.
     */
    data: XOR<SkillNodeDefinitionUpdateManyMutationInput, SkillNodeDefinitionUncheckedUpdateManyInput>
    /**
     * Filter which SkillNodeDefinitions to update
     */
    where?: SkillNodeDefinitionWhereInput
    /**
     * Limit how many SkillNodeDefinitions to update.
     */
    limit?: number
  }

  /**
   * SkillNodeDefinition updateManyAndReturn
   */
  export type SkillNodeDefinitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillNodeDefinition
     */
    select?: SkillNodeDefinitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SkillNodeDefinition
     */
    omit?: SkillNodeDefinitionOmit<ExtArgs> | null
    /**
     * The data used to update SkillNodeDefinitions.
     */
    data: XOR<SkillNodeDefinitionUpdateManyMutationInput, SkillNodeDefinitionUncheckedUpdateManyInput>
    /**
     * Filter which SkillNodeDefinitions to update
     */
    where?: SkillNodeDefinitionWhereInput
    /**
     * Limit how many SkillNodeDefinitions to update.
     */
    limit?: number
  }

  /**
   * SkillNodeDefinition upsert
   */
  export type SkillNodeDefinitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillNodeDefinition
     */
    select?: SkillNodeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillNodeDefinition
     */
    omit?: SkillNodeDefinitionOmit<ExtArgs> | null
    /**
     * The filter to search for the SkillNodeDefinition to update in case it exists.
     */
    where: SkillNodeDefinitionWhereUniqueInput
    /**
     * In case the SkillNodeDefinition found by the `where` argument doesn't exist, create a new SkillNodeDefinition with this data.
     */
    create: XOR<SkillNodeDefinitionCreateInput, SkillNodeDefinitionUncheckedCreateInput>
    /**
     * In case the SkillNodeDefinition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillNodeDefinitionUpdateInput, SkillNodeDefinitionUncheckedUpdateInput>
  }

  /**
   * SkillNodeDefinition delete
   */
  export type SkillNodeDefinitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillNodeDefinition
     */
    select?: SkillNodeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillNodeDefinition
     */
    omit?: SkillNodeDefinitionOmit<ExtArgs> | null
    /**
     * Filter which SkillNodeDefinition to delete.
     */
    where: SkillNodeDefinitionWhereUniqueInput
  }

  /**
   * SkillNodeDefinition deleteMany
   */
  export type SkillNodeDefinitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SkillNodeDefinitions to delete
     */
    where?: SkillNodeDefinitionWhereInput
    /**
     * Limit how many SkillNodeDefinitions to delete.
     */
    limit?: number
  }

  /**
   * SkillNodeDefinition without action
   */
  export type SkillNodeDefinitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SkillNodeDefinition
     */
    select?: SkillNodeDefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SkillNodeDefinition
     */
    omit?: SkillNodeDefinitionOmit<ExtArgs> | null
  }


  /**
   * Model SurvivalLeaderboard
   */

  export type AggregateSurvivalLeaderboard = {
    _count: SurvivalLeaderboardCountAggregateOutputType | null
    _avg: SurvivalLeaderboardAvgAggregateOutputType | null
    _sum: SurvivalLeaderboardSumAggregateOutputType | null
    _min: SurvivalLeaderboardMinAggregateOutputType | null
    _max: SurvivalLeaderboardMaxAggregateOutputType | null
  }

  export type SurvivalLeaderboardAvgAggregateOutputType = {
    id: number | null
    points: number | null
    wave: number | null
    time: number | null
  }

  export type SurvivalLeaderboardSumAggregateOutputType = {
    id: number | null
    points: number | null
    wave: number | null
    time: number | null
  }

  export type SurvivalLeaderboardMinAggregateOutputType = {
    id: number | null
    playerEmail: string | null
    characterUsed: $Enums.CharacterType | null
    points: number | null
    wave: number | null
    time: number | null
    createdAt: Date | null
  }

  export type SurvivalLeaderboardMaxAggregateOutputType = {
    id: number | null
    playerEmail: string | null
    characterUsed: $Enums.CharacterType | null
    points: number | null
    wave: number | null
    time: number | null
    createdAt: Date | null
  }

  export type SurvivalLeaderboardCountAggregateOutputType = {
    id: number
    playerEmail: number
    characterUsed: number
    points: number
    wave: number
    time: number
    createdAt: number
    _all: number
  }


  export type SurvivalLeaderboardAvgAggregateInputType = {
    id?: true
    points?: true
    wave?: true
    time?: true
  }

  export type SurvivalLeaderboardSumAggregateInputType = {
    id?: true
    points?: true
    wave?: true
    time?: true
  }

  export type SurvivalLeaderboardMinAggregateInputType = {
    id?: true
    playerEmail?: true
    characterUsed?: true
    points?: true
    wave?: true
    time?: true
    createdAt?: true
  }

  export type SurvivalLeaderboardMaxAggregateInputType = {
    id?: true
    playerEmail?: true
    characterUsed?: true
    points?: true
    wave?: true
    time?: true
    createdAt?: true
  }

  export type SurvivalLeaderboardCountAggregateInputType = {
    id?: true
    playerEmail?: true
    characterUsed?: true
    points?: true
    wave?: true
    time?: true
    createdAt?: true
    _all?: true
  }

  export type SurvivalLeaderboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurvivalLeaderboard to aggregate.
     */
    where?: SurvivalLeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurvivalLeaderboards to fetch.
     */
    orderBy?: SurvivalLeaderboardOrderByWithRelationInput | SurvivalLeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurvivalLeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurvivalLeaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurvivalLeaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SurvivalLeaderboards
    **/
    _count?: true | SurvivalLeaderboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurvivalLeaderboardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurvivalLeaderboardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurvivalLeaderboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurvivalLeaderboardMaxAggregateInputType
  }

  export type GetSurvivalLeaderboardAggregateType<T extends SurvivalLeaderboardAggregateArgs> = {
        [P in keyof T & keyof AggregateSurvivalLeaderboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurvivalLeaderboard[P]>
      : GetScalarType<T[P], AggregateSurvivalLeaderboard[P]>
  }




  export type SurvivalLeaderboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurvivalLeaderboardWhereInput
    orderBy?: SurvivalLeaderboardOrderByWithAggregationInput | SurvivalLeaderboardOrderByWithAggregationInput[]
    by: SurvivalLeaderboardScalarFieldEnum[] | SurvivalLeaderboardScalarFieldEnum
    having?: SurvivalLeaderboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurvivalLeaderboardCountAggregateInputType | true
    _avg?: SurvivalLeaderboardAvgAggregateInputType
    _sum?: SurvivalLeaderboardSumAggregateInputType
    _min?: SurvivalLeaderboardMinAggregateInputType
    _max?: SurvivalLeaderboardMaxAggregateInputType
  }

  export type SurvivalLeaderboardGroupByOutputType = {
    id: number
    playerEmail: string
    characterUsed: $Enums.CharacterType | null
    points: number
    wave: number
    time: number
    createdAt: Date
    _count: SurvivalLeaderboardCountAggregateOutputType | null
    _avg: SurvivalLeaderboardAvgAggregateOutputType | null
    _sum: SurvivalLeaderboardSumAggregateOutputType | null
    _min: SurvivalLeaderboardMinAggregateOutputType | null
    _max: SurvivalLeaderboardMaxAggregateOutputType | null
  }

  type GetSurvivalLeaderboardGroupByPayload<T extends SurvivalLeaderboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurvivalLeaderboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurvivalLeaderboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurvivalLeaderboardGroupByOutputType[P]>
            : GetScalarType<T[P], SurvivalLeaderboardGroupByOutputType[P]>
        }
      >
    >


  export type SurvivalLeaderboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerEmail?: boolean
    characterUsed?: boolean
    points?: boolean
    wave?: boolean
    time?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survivalLeaderboard"]>

  export type SurvivalLeaderboardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerEmail?: boolean
    characterUsed?: boolean
    points?: boolean
    wave?: boolean
    time?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survivalLeaderboard"]>

  export type SurvivalLeaderboardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerEmail?: boolean
    characterUsed?: boolean
    points?: boolean
    wave?: boolean
    time?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["survivalLeaderboard"]>

  export type SurvivalLeaderboardSelectScalar = {
    id?: boolean
    playerEmail?: boolean
    characterUsed?: boolean
    points?: boolean
    wave?: boolean
    time?: boolean
    createdAt?: boolean
  }

  export type SurvivalLeaderboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerEmail" | "characterUsed" | "points" | "wave" | "time" | "createdAt", ExtArgs["result"]["survivalLeaderboard"]>
  export type SurvivalLeaderboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type SurvivalLeaderboardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type SurvivalLeaderboardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $SurvivalLeaderboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SurvivalLeaderboard"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playerEmail: string
      characterUsed: $Enums.CharacterType | null
      points: number
      wave: number
      time: number
      createdAt: Date
    }, ExtArgs["result"]["survivalLeaderboard"]>
    composites: {}
  }

  type SurvivalLeaderboardGetPayload<S extends boolean | null | undefined | SurvivalLeaderboardDefaultArgs> = $Result.GetResult<Prisma.$SurvivalLeaderboardPayload, S>

  type SurvivalLeaderboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SurvivalLeaderboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SurvivalLeaderboardCountAggregateInputType | true
    }

  export interface SurvivalLeaderboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SurvivalLeaderboard'], meta: { name: 'SurvivalLeaderboard' } }
    /**
     * Find zero or one SurvivalLeaderboard that matches the filter.
     * @param {SurvivalLeaderboardFindUniqueArgs} args - Arguments to find a SurvivalLeaderboard
     * @example
     * // Get one SurvivalLeaderboard
     * const survivalLeaderboard = await prisma.survivalLeaderboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurvivalLeaderboardFindUniqueArgs>(args: SelectSubset<T, SurvivalLeaderboardFindUniqueArgs<ExtArgs>>): Prisma__SurvivalLeaderboardClient<$Result.GetResult<Prisma.$SurvivalLeaderboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SurvivalLeaderboard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SurvivalLeaderboardFindUniqueOrThrowArgs} args - Arguments to find a SurvivalLeaderboard
     * @example
     * // Get one SurvivalLeaderboard
     * const survivalLeaderboard = await prisma.survivalLeaderboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurvivalLeaderboardFindUniqueOrThrowArgs>(args: SelectSubset<T, SurvivalLeaderboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurvivalLeaderboardClient<$Result.GetResult<Prisma.$SurvivalLeaderboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SurvivalLeaderboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurvivalLeaderboardFindFirstArgs} args - Arguments to find a SurvivalLeaderboard
     * @example
     * // Get one SurvivalLeaderboard
     * const survivalLeaderboard = await prisma.survivalLeaderboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurvivalLeaderboardFindFirstArgs>(args?: SelectSubset<T, SurvivalLeaderboardFindFirstArgs<ExtArgs>>): Prisma__SurvivalLeaderboardClient<$Result.GetResult<Prisma.$SurvivalLeaderboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SurvivalLeaderboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurvivalLeaderboardFindFirstOrThrowArgs} args - Arguments to find a SurvivalLeaderboard
     * @example
     * // Get one SurvivalLeaderboard
     * const survivalLeaderboard = await prisma.survivalLeaderboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurvivalLeaderboardFindFirstOrThrowArgs>(args?: SelectSubset<T, SurvivalLeaderboardFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurvivalLeaderboardClient<$Result.GetResult<Prisma.$SurvivalLeaderboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SurvivalLeaderboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurvivalLeaderboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SurvivalLeaderboards
     * const survivalLeaderboards = await prisma.survivalLeaderboard.findMany()
     * 
     * // Get first 10 SurvivalLeaderboards
     * const survivalLeaderboards = await prisma.survivalLeaderboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const survivalLeaderboardWithIdOnly = await prisma.survivalLeaderboard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SurvivalLeaderboardFindManyArgs>(args?: SelectSubset<T, SurvivalLeaderboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurvivalLeaderboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SurvivalLeaderboard.
     * @param {SurvivalLeaderboardCreateArgs} args - Arguments to create a SurvivalLeaderboard.
     * @example
     * // Create one SurvivalLeaderboard
     * const SurvivalLeaderboard = await prisma.survivalLeaderboard.create({
     *   data: {
     *     // ... data to create a SurvivalLeaderboard
     *   }
     * })
     * 
     */
    create<T extends SurvivalLeaderboardCreateArgs>(args: SelectSubset<T, SurvivalLeaderboardCreateArgs<ExtArgs>>): Prisma__SurvivalLeaderboardClient<$Result.GetResult<Prisma.$SurvivalLeaderboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SurvivalLeaderboards.
     * @param {SurvivalLeaderboardCreateManyArgs} args - Arguments to create many SurvivalLeaderboards.
     * @example
     * // Create many SurvivalLeaderboards
     * const survivalLeaderboard = await prisma.survivalLeaderboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurvivalLeaderboardCreateManyArgs>(args?: SelectSubset<T, SurvivalLeaderboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SurvivalLeaderboards and returns the data saved in the database.
     * @param {SurvivalLeaderboardCreateManyAndReturnArgs} args - Arguments to create many SurvivalLeaderboards.
     * @example
     * // Create many SurvivalLeaderboards
     * const survivalLeaderboard = await prisma.survivalLeaderboard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SurvivalLeaderboards and only return the `id`
     * const survivalLeaderboardWithIdOnly = await prisma.survivalLeaderboard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SurvivalLeaderboardCreateManyAndReturnArgs>(args?: SelectSubset<T, SurvivalLeaderboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurvivalLeaderboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SurvivalLeaderboard.
     * @param {SurvivalLeaderboardDeleteArgs} args - Arguments to delete one SurvivalLeaderboard.
     * @example
     * // Delete one SurvivalLeaderboard
     * const SurvivalLeaderboard = await prisma.survivalLeaderboard.delete({
     *   where: {
     *     // ... filter to delete one SurvivalLeaderboard
     *   }
     * })
     * 
     */
    delete<T extends SurvivalLeaderboardDeleteArgs>(args: SelectSubset<T, SurvivalLeaderboardDeleteArgs<ExtArgs>>): Prisma__SurvivalLeaderboardClient<$Result.GetResult<Prisma.$SurvivalLeaderboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SurvivalLeaderboard.
     * @param {SurvivalLeaderboardUpdateArgs} args - Arguments to update one SurvivalLeaderboard.
     * @example
     * // Update one SurvivalLeaderboard
     * const survivalLeaderboard = await prisma.survivalLeaderboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurvivalLeaderboardUpdateArgs>(args: SelectSubset<T, SurvivalLeaderboardUpdateArgs<ExtArgs>>): Prisma__SurvivalLeaderboardClient<$Result.GetResult<Prisma.$SurvivalLeaderboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SurvivalLeaderboards.
     * @param {SurvivalLeaderboardDeleteManyArgs} args - Arguments to filter SurvivalLeaderboards to delete.
     * @example
     * // Delete a few SurvivalLeaderboards
     * const { count } = await prisma.survivalLeaderboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurvivalLeaderboardDeleteManyArgs>(args?: SelectSubset<T, SurvivalLeaderboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurvivalLeaderboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurvivalLeaderboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SurvivalLeaderboards
     * const survivalLeaderboard = await prisma.survivalLeaderboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurvivalLeaderboardUpdateManyArgs>(args: SelectSubset<T, SurvivalLeaderboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurvivalLeaderboards and returns the data updated in the database.
     * @param {SurvivalLeaderboardUpdateManyAndReturnArgs} args - Arguments to update many SurvivalLeaderboards.
     * @example
     * // Update many SurvivalLeaderboards
     * const survivalLeaderboard = await prisma.survivalLeaderboard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SurvivalLeaderboards and only return the `id`
     * const survivalLeaderboardWithIdOnly = await prisma.survivalLeaderboard.updateManyAndReturn({
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
    updateManyAndReturn<T extends SurvivalLeaderboardUpdateManyAndReturnArgs>(args: SelectSubset<T, SurvivalLeaderboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurvivalLeaderboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SurvivalLeaderboard.
     * @param {SurvivalLeaderboardUpsertArgs} args - Arguments to update or create a SurvivalLeaderboard.
     * @example
     * // Update or create a SurvivalLeaderboard
     * const survivalLeaderboard = await prisma.survivalLeaderboard.upsert({
     *   create: {
     *     // ... data to create a SurvivalLeaderboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SurvivalLeaderboard we want to update
     *   }
     * })
     */
    upsert<T extends SurvivalLeaderboardUpsertArgs>(args: SelectSubset<T, SurvivalLeaderboardUpsertArgs<ExtArgs>>): Prisma__SurvivalLeaderboardClient<$Result.GetResult<Prisma.$SurvivalLeaderboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SurvivalLeaderboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurvivalLeaderboardCountArgs} args - Arguments to filter SurvivalLeaderboards to count.
     * @example
     * // Count the number of SurvivalLeaderboards
     * const count = await prisma.survivalLeaderboard.count({
     *   where: {
     *     // ... the filter for the SurvivalLeaderboards we want to count
     *   }
     * })
    **/
    count<T extends SurvivalLeaderboardCountArgs>(
      args?: Subset<T, SurvivalLeaderboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurvivalLeaderboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SurvivalLeaderboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurvivalLeaderboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SurvivalLeaderboardAggregateArgs>(args: Subset<T, SurvivalLeaderboardAggregateArgs>): Prisma.PrismaPromise<GetSurvivalLeaderboardAggregateType<T>>

    /**
     * Group by SurvivalLeaderboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurvivalLeaderboardGroupByArgs} args - Group by arguments.
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
      T extends SurvivalLeaderboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurvivalLeaderboardGroupByArgs['orderBy'] }
        : { orderBy?: SurvivalLeaderboardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SurvivalLeaderboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurvivalLeaderboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SurvivalLeaderboard model
   */
  readonly fields: SurvivalLeaderboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SurvivalLeaderboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurvivalLeaderboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SurvivalLeaderboard model
   */
  interface SurvivalLeaderboardFieldRefs {
    readonly id: FieldRef<"SurvivalLeaderboard", 'Int'>
    readonly playerEmail: FieldRef<"SurvivalLeaderboard", 'String'>
    readonly characterUsed: FieldRef<"SurvivalLeaderboard", 'CharacterType'>
    readonly points: FieldRef<"SurvivalLeaderboard", 'Int'>
    readonly wave: FieldRef<"SurvivalLeaderboard", 'Int'>
    readonly time: FieldRef<"SurvivalLeaderboard", 'Float'>
    readonly createdAt: FieldRef<"SurvivalLeaderboard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SurvivalLeaderboard findUnique
   */
  export type SurvivalLeaderboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalLeaderboard
     */
    select?: SurvivalLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalLeaderboard
     */
    omit?: SurvivalLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurvivalLeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which SurvivalLeaderboard to fetch.
     */
    where: SurvivalLeaderboardWhereUniqueInput
  }

  /**
   * SurvivalLeaderboard findUniqueOrThrow
   */
  export type SurvivalLeaderboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalLeaderboard
     */
    select?: SurvivalLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalLeaderboard
     */
    omit?: SurvivalLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurvivalLeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which SurvivalLeaderboard to fetch.
     */
    where: SurvivalLeaderboardWhereUniqueInput
  }

  /**
   * SurvivalLeaderboard findFirst
   */
  export type SurvivalLeaderboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalLeaderboard
     */
    select?: SurvivalLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalLeaderboard
     */
    omit?: SurvivalLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurvivalLeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which SurvivalLeaderboard to fetch.
     */
    where?: SurvivalLeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurvivalLeaderboards to fetch.
     */
    orderBy?: SurvivalLeaderboardOrderByWithRelationInput | SurvivalLeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurvivalLeaderboards.
     */
    cursor?: SurvivalLeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurvivalLeaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurvivalLeaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurvivalLeaderboards.
     */
    distinct?: SurvivalLeaderboardScalarFieldEnum | SurvivalLeaderboardScalarFieldEnum[]
  }

  /**
   * SurvivalLeaderboard findFirstOrThrow
   */
  export type SurvivalLeaderboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalLeaderboard
     */
    select?: SurvivalLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalLeaderboard
     */
    omit?: SurvivalLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurvivalLeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which SurvivalLeaderboard to fetch.
     */
    where?: SurvivalLeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurvivalLeaderboards to fetch.
     */
    orderBy?: SurvivalLeaderboardOrderByWithRelationInput | SurvivalLeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurvivalLeaderboards.
     */
    cursor?: SurvivalLeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurvivalLeaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurvivalLeaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurvivalLeaderboards.
     */
    distinct?: SurvivalLeaderboardScalarFieldEnum | SurvivalLeaderboardScalarFieldEnum[]
  }

  /**
   * SurvivalLeaderboard findMany
   */
  export type SurvivalLeaderboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalLeaderboard
     */
    select?: SurvivalLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalLeaderboard
     */
    omit?: SurvivalLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurvivalLeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which SurvivalLeaderboards to fetch.
     */
    where?: SurvivalLeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurvivalLeaderboards to fetch.
     */
    orderBy?: SurvivalLeaderboardOrderByWithRelationInput | SurvivalLeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SurvivalLeaderboards.
     */
    cursor?: SurvivalLeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurvivalLeaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurvivalLeaderboards.
     */
    skip?: number
    distinct?: SurvivalLeaderboardScalarFieldEnum | SurvivalLeaderboardScalarFieldEnum[]
  }

  /**
   * SurvivalLeaderboard create
   */
  export type SurvivalLeaderboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalLeaderboard
     */
    select?: SurvivalLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalLeaderboard
     */
    omit?: SurvivalLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurvivalLeaderboardInclude<ExtArgs> | null
    /**
     * The data needed to create a SurvivalLeaderboard.
     */
    data: XOR<SurvivalLeaderboardCreateInput, SurvivalLeaderboardUncheckedCreateInput>
  }

  /**
   * SurvivalLeaderboard createMany
   */
  export type SurvivalLeaderboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SurvivalLeaderboards.
     */
    data: SurvivalLeaderboardCreateManyInput | SurvivalLeaderboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SurvivalLeaderboard createManyAndReturn
   */
  export type SurvivalLeaderboardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalLeaderboard
     */
    select?: SurvivalLeaderboardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalLeaderboard
     */
    omit?: SurvivalLeaderboardOmit<ExtArgs> | null
    /**
     * The data used to create many SurvivalLeaderboards.
     */
    data: SurvivalLeaderboardCreateManyInput | SurvivalLeaderboardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurvivalLeaderboardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SurvivalLeaderboard update
   */
  export type SurvivalLeaderboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalLeaderboard
     */
    select?: SurvivalLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalLeaderboard
     */
    omit?: SurvivalLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurvivalLeaderboardInclude<ExtArgs> | null
    /**
     * The data needed to update a SurvivalLeaderboard.
     */
    data: XOR<SurvivalLeaderboardUpdateInput, SurvivalLeaderboardUncheckedUpdateInput>
    /**
     * Choose, which SurvivalLeaderboard to update.
     */
    where: SurvivalLeaderboardWhereUniqueInput
  }

  /**
   * SurvivalLeaderboard updateMany
   */
  export type SurvivalLeaderboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SurvivalLeaderboards.
     */
    data: XOR<SurvivalLeaderboardUpdateManyMutationInput, SurvivalLeaderboardUncheckedUpdateManyInput>
    /**
     * Filter which SurvivalLeaderboards to update
     */
    where?: SurvivalLeaderboardWhereInput
    /**
     * Limit how many SurvivalLeaderboards to update.
     */
    limit?: number
  }

  /**
   * SurvivalLeaderboard updateManyAndReturn
   */
  export type SurvivalLeaderboardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalLeaderboard
     */
    select?: SurvivalLeaderboardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalLeaderboard
     */
    omit?: SurvivalLeaderboardOmit<ExtArgs> | null
    /**
     * The data used to update SurvivalLeaderboards.
     */
    data: XOR<SurvivalLeaderboardUpdateManyMutationInput, SurvivalLeaderboardUncheckedUpdateManyInput>
    /**
     * Filter which SurvivalLeaderboards to update
     */
    where?: SurvivalLeaderboardWhereInput
    /**
     * Limit how many SurvivalLeaderboards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurvivalLeaderboardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SurvivalLeaderboard upsert
   */
  export type SurvivalLeaderboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalLeaderboard
     */
    select?: SurvivalLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalLeaderboard
     */
    omit?: SurvivalLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurvivalLeaderboardInclude<ExtArgs> | null
    /**
     * The filter to search for the SurvivalLeaderboard to update in case it exists.
     */
    where: SurvivalLeaderboardWhereUniqueInput
    /**
     * In case the SurvivalLeaderboard found by the `where` argument doesn't exist, create a new SurvivalLeaderboard with this data.
     */
    create: XOR<SurvivalLeaderboardCreateInput, SurvivalLeaderboardUncheckedCreateInput>
    /**
     * In case the SurvivalLeaderboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurvivalLeaderboardUpdateInput, SurvivalLeaderboardUncheckedUpdateInput>
  }

  /**
   * SurvivalLeaderboard delete
   */
  export type SurvivalLeaderboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalLeaderboard
     */
    select?: SurvivalLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalLeaderboard
     */
    omit?: SurvivalLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurvivalLeaderboardInclude<ExtArgs> | null
    /**
     * Filter which SurvivalLeaderboard to delete.
     */
    where: SurvivalLeaderboardWhereUniqueInput
  }

  /**
   * SurvivalLeaderboard deleteMany
   */
  export type SurvivalLeaderboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurvivalLeaderboards to delete
     */
    where?: SurvivalLeaderboardWhereInput
    /**
     * Limit how many SurvivalLeaderboards to delete.
     */
    limit?: number
  }

  /**
   * SurvivalLeaderboard without action
   */
  export type SurvivalLeaderboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurvivalLeaderboard
     */
    select?: SurvivalLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurvivalLeaderboard
     */
    omit?: SurvivalLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurvivalLeaderboardInclude<ExtArgs> | null
  }


  /**
   * Model FlightLeaderboard
   */

  export type AggregateFlightLeaderboard = {
    _count: FlightLeaderboardCountAggregateOutputType | null
    _avg: FlightLeaderboardAvgAggregateOutputType | null
    _sum: FlightLeaderboardSumAggregateOutputType | null
    _min: FlightLeaderboardMinAggregateOutputType | null
    _max: FlightLeaderboardMaxAggregateOutputType | null
  }

  export type FlightLeaderboardAvgAggregateOutputType = {
    id: number | null
    time: number | null
  }

  export type FlightLeaderboardSumAggregateOutputType = {
    id: number | null
    time: number | null
  }

  export type FlightLeaderboardMinAggregateOutputType = {
    id: number | null
    playerEmail: string | null
    characterUsed: $Enums.CharacterType | null
    time: number | null
    createdAt: Date | null
  }

  export type FlightLeaderboardMaxAggregateOutputType = {
    id: number | null
    playerEmail: string | null
    characterUsed: $Enums.CharacterType | null
    time: number | null
    createdAt: Date | null
  }

  export type FlightLeaderboardCountAggregateOutputType = {
    id: number
    playerEmail: number
    characterUsed: number
    time: number
    createdAt: number
    _all: number
  }


  export type FlightLeaderboardAvgAggregateInputType = {
    id?: true
    time?: true
  }

  export type FlightLeaderboardSumAggregateInputType = {
    id?: true
    time?: true
  }

  export type FlightLeaderboardMinAggregateInputType = {
    id?: true
    playerEmail?: true
    characterUsed?: true
    time?: true
    createdAt?: true
  }

  export type FlightLeaderboardMaxAggregateInputType = {
    id?: true
    playerEmail?: true
    characterUsed?: true
    time?: true
    createdAt?: true
  }

  export type FlightLeaderboardCountAggregateInputType = {
    id?: true
    playerEmail?: true
    characterUsed?: true
    time?: true
    createdAt?: true
    _all?: true
  }

  export type FlightLeaderboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlightLeaderboard to aggregate.
     */
    where?: FlightLeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightLeaderboards to fetch.
     */
    orderBy?: FlightLeaderboardOrderByWithRelationInput | FlightLeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlightLeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightLeaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightLeaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlightLeaderboards
    **/
    _count?: true | FlightLeaderboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlightLeaderboardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlightLeaderboardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlightLeaderboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlightLeaderboardMaxAggregateInputType
  }

  export type GetFlightLeaderboardAggregateType<T extends FlightLeaderboardAggregateArgs> = {
        [P in keyof T & keyof AggregateFlightLeaderboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlightLeaderboard[P]>
      : GetScalarType<T[P], AggregateFlightLeaderboard[P]>
  }




  export type FlightLeaderboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightLeaderboardWhereInput
    orderBy?: FlightLeaderboardOrderByWithAggregationInput | FlightLeaderboardOrderByWithAggregationInput[]
    by: FlightLeaderboardScalarFieldEnum[] | FlightLeaderboardScalarFieldEnum
    having?: FlightLeaderboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlightLeaderboardCountAggregateInputType | true
    _avg?: FlightLeaderboardAvgAggregateInputType
    _sum?: FlightLeaderboardSumAggregateInputType
    _min?: FlightLeaderboardMinAggregateInputType
    _max?: FlightLeaderboardMaxAggregateInputType
  }

  export type FlightLeaderboardGroupByOutputType = {
    id: number
    playerEmail: string
    characterUsed: $Enums.CharacterType | null
    time: number
    createdAt: Date
    _count: FlightLeaderboardCountAggregateOutputType | null
    _avg: FlightLeaderboardAvgAggregateOutputType | null
    _sum: FlightLeaderboardSumAggregateOutputType | null
    _min: FlightLeaderboardMinAggregateOutputType | null
    _max: FlightLeaderboardMaxAggregateOutputType | null
  }

  type GetFlightLeaderboardGroupByPayload<T extends FlightLeaderboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlightLeaderboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlightLeaderboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlightLeaderboardGroupByOutputType[P]>
            : GetScalarType<T[P], FlightLeaderboardGroupByOutputType[P]>
        }
      >
    >


  export type FlightLeaderboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerEmail?: boolean
    characterUsed?: boolean
    time?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flightLeaderboard"]>

  export type FlightLeaderboardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerEmail?: boolean
    characterUsed?: boolean
    time?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flightLeaderboard"]>

  export type FlightLeaderboardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerEmail?: boolean
    characterUsed?: boolean
    time?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flightLeaderboard"]>

  export type FlightLeaderboardSelectScalar = {
    id?: boolean
    playerEmail?: boolean
    characterUsed?: boolean
    time?: boolean
    createdAt?: boolean
  }

  export type FlightLeaderboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerEmail" | "characterUsed" | "time" | "createdAt", ExtArgs["result"]["flightLeaderboard"]>
  export type FlightLeaderboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type FlightLeaderboardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type FlightLeaderboardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $FlightLeaderboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlightLeaderboard"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playerEmail: string
      characterUsed: $Enums.CharacterType | null
      time: number
      createdAt: Date
    }, ExtArgs["result"]["flightLeaderboard"]>
    composites: {}
  }

  type FlightLeaderboardGetPayload<S extends boolean | null | undefined | FlightLeaderboardDefaultArgs> = $Result.GetResult<Prisma.$FlightLeaderboardPayload, S>

  type FlightLeaderboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlightLeaderboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlightLeaderboardCountAggregateInputType | true
    }

  export interface FlightLeaderboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlightLeaderboard'], meta: { name: 'FlightLeaderboard' } }
    /**
     * Find zero or one FlightLeaderboard that matches the filter.
     * @param {FlightLeaderboardFindUniqueArgs} args - Arguments to find a FlightLeaderboard
     * @example
     * // Get one FlightLeaderboard
     * const flightLeaderboard = await prisma.flightLeaderboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlightLeaderboardFindUniqueArgs>(args: SelectSubset<T, FlightLeaderboardFindUniqueArgs<ExtArgs>>): Prisma__FlightLeaderboardClient<$Result.GetResult<Prisma.$FlightLeaderboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlightLeaderboard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlightLeaderboardFindUniqueOrThrowArgs} args - Arguments to find a FlightLeaderboard
     * @example
     * // Get one FlightLeaderboard
     * const flightLeaderboard = await prisma.flightLeaderboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlightLeaderboardFindUniqueOrThrowArgs>(args: SelectSubset<T, FlightLeaderboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlightLeaderboardClient<$Result.GetResult<Prisma.$FlightLeaderboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlightLeaderboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightLeaderboardFindFirstArgs} args - Arguments to find a FlightLeaderboard
     * @example
     * // Get one FlightLeaderboard
     * const flightLeaderboard = await prisma.flightLeaderboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlightLeaderboardFindFirstArgs>(args?: SelectSubset<T, FlightLeaderboardFindFirstArgs<ExtArgs>>): Prisma__FlightLeaderboardClient<$Result.GetResult<Prisma.$FlightLeaderboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlightLeaderboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightLeaderboardFindFirstOrThrowArgs} args - Arguments to find a FlightLeaderboard
     * @example
     * // Get one FlightLeaderboard
     * const flightLeaderboard = await prisma.flightLeaderboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlightLeaderboardFindFirstOrThrowArgs>(args?: SelectSubset<T, FlightLeaderboardFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlightLeaderboardClient<$Result.GetResult<Prisma.$FlightLeaderboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlightLeaderboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightLeaderboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlightLeaderboards
     * const flightLeaderboards = await prisma.flightLeaderboard.findMany()
     * 
     * // Get first 10 FlightLeaderboards
     * const flightLeaderboards = await prisma.flightLeaderboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flightLeaderboardWithIdOnly = await prisma.flightLeaderboard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlightLeaderboardFindManyArgs>(args?: SelectSubset<T, FlightLeaderboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightLeaderboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlightLeaderboard.
     * @param {FlightLeaderboardCreateArgs} args - Arguments to create a FlightLeaderboard.
     * @example
     * // Create one FlightLeaderboard
     * const FlightLeaderboard = await prisma.flightLeaderboard.create({
     *   data: {
     *     // ... data to create a FlightLeaderboard
     *   }
     * })
     * 
     */
    create<T extends FlightLeaderboardCreateArgs>(args: SelectSubset<T, FlightLeaderboardCreateArgs<ExtArgs>>): Prisma__FlightLeaderboardClient<$Result.GetResult<Prisma.$FlightLeaderboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlightLeaderboards.
     * @param {FlightLeaderboardCreateManyArgs} args - Arguments to create many FlightLeaderboards.
     * @example
     * // Create many FlightLeaderboards
     * const flightLeaderboard = await prisma.flightLeaderboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlightLeaderboardCreateManyArgs>(args?: SelectSubset<T, FlightLeaderboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlightLeaderboards and returns the data saved in the database.
     * @param {FlightLeaderboardCreateManyAndReturnArgs} args - Arguments to create many FlightLeaderboards.
     * @example
     * // Create many FlightLeaderboards
     * const flightLeaderboard = await prisma.flightLeaderboard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlightLeaderboards and only return the `id`
     * const flightLeaderboardWithIdOnly = await prisma.flightLeaderboard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlightLeaderboardCreateManyAndReturnArgs>(args?: SelectSubset<T, FlightLeaderboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightLeaderboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FlightLeaderboard.
     * @param {FlightLeaderboardDeleteArgs} args - Arguments to delete one FlightLeaderboard.
     * @example
     * // Delete one FlightLeaderboard
     * const FlightLeaderboard = await prisma.flightLeaderboard.delete({
     *   where: {
     *     // ... filter to delete one FlightLeaderboard
     *   }
     * })
     * 
     */
    delete<T extends FlightLeaderboardDeleteArgs>(args: SelectSubset<T, FlightLeaderboardDeleteArgs<ExtArgs>>): Prisma__FlightLeaderboardClient<$Result.GetResult<Prisma.$FlightLeaderboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlightLeaderboard.
     * @param {FlightLeaderboardUpdateArgs} args - Arguments to update one FlightLeaderboard.
     * @example
     * // Update one FlightLeaderboard
     * const flightLeaderboard = await prisma.flightLeaderboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlightLeaderboardUpdateArgs>(args: SelectSubset<T, FlightLeaderboardUpdateArgs<ExtArgs>>): Prisma__FlightLeaderboardClient<$Result.GetResult<Prisma.$FlightLeaderboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlightLeaderboards.
     * @param {FlightLeaderboardDeleteManyArgs} args - Arguments to filter FlightLeaderboards to delete.
     * @example
     * // Delete a few FlightLeaderboards
     * const { count } = await prisma.flightLeaderboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlightLeaderboardDeleteManyArgs>(args?: SelectSubset<T, FlightLeaderboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlightLeaderboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightLeaderboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlightLeaderboards
     * const flightLeaderboard = await prisma.flightLeaderboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlightLeaderboardUpdateManyArgs>(args: SelectSubset<T, FlightLeaderboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlightLeaderboards and returns the data updated in the database.
     * @param {FlightLeaderboardUpdateManyAndReturnArgs} args - Arguments to update many FlightLeaderboards.
     * @example
     * // Update many FlightLeaderboards
     * const flightLeaderboard = await prisma.flightLeaderboard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FlightLeaderboards and only return the `id`
     * const flightLeaderboardWithIdOnly = await prisma.flightLeaderboard.updateManyAndReturn({
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
    updateManyAndReturn<T extends FlightLeaderboardUpdateManyAndReturnArgs>(args: SelectSubset<T, FlightLeaderboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightLeaderboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FlightLeaderboard.
     * @param {FlightLeaderboardUpsertArgs} args - Arguments to update or create a FlightLeaderboard.
     * @example
     * // Update or create a FlightLeaderboard
     * const flightLeaderboard = await prisma.flightLeaderboard.upsert({
     *   create: {
     *     // ... data to create a FlightLeaderboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlightLeaderboard we want to update
     *   }
     * })
     */
    upsert<T extends FlightLeaderboardUpsertArgs>(args: SelectSubset<T, FlightLeaderboardUpsertArgs<ExtArgs>>): Prisma__FlightLeaderboardClient<$Result.GetResult<Prisma.$FlightLeaderboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlightLeaderboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightLeaderboardCountArgs} args - Arguments to filter FlightLeaderboards to count.
     * @example
     * // Count the number of FlightLeaderboards
     * const count = await prisma.flightLeaderboard.count({
     *   where: {
     *     // ... the filter for the FlightLeaderboards we want to count
     *   }
     * })
    **/
    count<T extends FlightLeaderboardCountArgs>(
      args?: Subset<T, FlightLeaderboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlightLeaderboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlightLeaderboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightLeaderboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlightLeaderboardAggregateArgs>(args: Subset<T, FlightLeaderboardAggregateArgs>): Prisma.PrismaPromise<GetFlightLeaderboardAggregateType<T>>

    /**
     * Group by FlightLeaderboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightLeaderboardGroupByArgs} args - Group by arguments.
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
      T extends FlightLeaderboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlightLeaderboardGroupByArgs['orderBy'] }
        : { orderBy?: FlightLeaderboardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlightLeaderboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlightLeaderboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlightLeaderboard model
   */
  readonly fields: FlightLeaderboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlightLeaderboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlightLeaderboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FlightLeaderboard model
   */
  interface FlightLeaderboardFieldRefs {
    readonly id: FieldRef<"FlightLeaderboard", 'Int'>
    readonly playerEmail: FieldRef<"FlightLeaderboard", 'String'>
    readonly characterUsed: FieldRef<"FlightLeaderboard", 'CharacterType'>
    readonly time: FieldRef<"FlightLeaderboard", 'Float'>
    readonly createdAt: FieldRef<"FlightLeaderboard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FlightLeaderboard findUnique
   */
  export type FlightLeaderboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightLeaderboard
     */
    select?: FlightLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightLeaderboard
     */
    omit?: FlightLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightLeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which FlightLeaderboard to fetch.
     */
    where: FlightLeaderboardWhereUniqueInput
  }

  /**
   * FlightLeaderboard findUniqueOrThrow
   */
  export type FlightLeaderboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightLeaderboard
     */
    select?: FlightLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightLeaderboard
     */
    omit?: FlightLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightLeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which FlightLeaderboard to fetch.
     */
    where: FlightLeaderboardWhereUniqueInput
  }

  /**
   * FlightLeaderboard findFirst
   */
  export type FlightLeaderboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightLeaderboard
     */
    select?: FlightLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightLeaderboard
     */
    omit?: FlightLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightLeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which FlightLeaderboard to fetch.
     */
    where?: FlightLeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightLeaderboards to fetch.
     */
    orderBy?: FlightLeaderboardOrderByWithRelationInput | FlightLeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlightLeaderboards.
     */
    cursor?: FlightLeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightLeaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightLeaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlightLeaderboards.
     */
    distinct?: FlightLeaderboardScalarFieldEnum | FlightLeaderboardScalarFieldEnum[]
  }

  /**
   * FlightLeaderboard findFirstOrThrow
   */
  export type FlightLeaderboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightLeaderboard
     */
    select?: FlightLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightLeaderboard
     */
    omit?: FlightLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightLeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which FlightLeaderboard to fetch.
     */
    where?: FlightLeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightLeaderboards to fetch.
     */
    orderBy?: FlightLeaderboardOrderByWithRelationInput | FlightLeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlightLeaderboards.
     */
    cursor?: FlightLeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightLeaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightLeaderboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlightLeaderboards.
     */
    distinct?: FlightLeaderboardScalarFieldEnum | FlightLeaderboardScalarFieldEnum[]
  }

  /**
   * FlightLeaderboard findMany
   */
  export type FlightLeaderboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightLeaderboard
     */
    select?: FlightLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightLeaderboard
     */
    omit?: FlightLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightLeaderboardInclude<ExtArgs> | null
    /**
     * Filter, which FlightLeaderboards to fetch.
     */
    where?: FlightLeaderboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightLeaderboards to fetch.
     */
    orderBy?: FlightLeaderboardOrderByWithRelationInput | FlightLeaderboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlightLeaderboards.
     */
    cursor?: FlightLeaderboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightLeaderboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightLeaderboards.
     */
    skip?: number
    distinct?: FlightLeaderboardScalarFieldEnum | FlightLeaderboardScalarFieldEnum[]
  }

  /**
   * FlightLeaderboard create
   */
  export type FlightLeaderboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightLeaderboard
     */
    select?: FlightLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightLeaderboard
     */
    omit?: FlightLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightLeaderboardInclude<ExtArgs> | null
    /**
     * The data needed to create a FlightLeaderboard.
     */
    data: XOR<FlightLeaderboardCreateInput, FlightLeaderboardUncheckedCreateInput>
  }

  /**
   * FlightLeaderboard createMany
   */
  export type FlightLeaderboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlightLeaderboards.
     */
    data: FlightLeaderboardCreateManyInput | FlightLeaderboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlightLeaderboard createManyAndReturn
   */
  export type FlightLeaderboardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightLeaderboard
     */
    select?: FlightLeaderboardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlightLeaderboard
     */
    omit?: FlightLeaderboardOmit<ExtArgs> | null
    /**
     * The data used to create many FlightLeaderboards.
     */
    data: FlightLeaderboardCreateManyInput | FlightLeaderboardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightLeaderboardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlightLeaderboard update
   */
  export type FlightLeaderboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightLeaderboard
     */
    select?: FlightLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightLeaderboard
     */
    omit?: FlightLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightLeaderboardInclude<ExtArgs> | null
    /**
     * The data needed to update a FlightLeaderboard.
     */
    data: XOR<FlightLeaderboardUpdateInput, FlightLeaderboardUncheckedUpdateInput>
    /**
     * Choose, which FlightLeaderboard to update.
     */
    where: FlightLeaderboardWhereUniqueInput
  }

  /**
   * FlightLeaderboard updateMany
   */
  export type FlightLeaderboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlightLeaderboards.
     */
    data: XOR<FlightLeaderboardUpdateManyMutationInput, FlightLeaderboardUncheckedUpdateManyInput>
    /**
     * Filter which FlightLeaderboards to update
     */
    where?: FlightLeaderboardWhereInput
    /**
     * Limit how many FlightLeaderboards to update.
     */
    limit?: number
  }

  /**
   * FlightLeaderboard updateManyAndReturn
   */
  export type FlightLeaderboardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightLeaderboard
     */
    select?: FlightLeaderboardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FlightLeaderboard
     */
    omit?: FlightLeaderboardOmit<ExtArgs> | null
    /**
     * The data used to update FlightLeaderboards.
     */
    data: XOR<FlightLeaderboardUpdateManyMutationInput, FlightLeaderboardUncheckedUpdateManyInput>
    /**
     * Filter which FlightLeaderboards to update
     */
    where?: FlightLeaderboardWhereInput
    /**
     * Limit how many FlightLeaderboards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightLeaderboardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlightLeaderboard upsert
   */
  export type FlightLeaderboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightLeaderboard
     */
    select?: FlightLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightLeaderboard
     */
    omit?: FlightLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightLeaderboardInclude<ExtArgs> | null
    /**
     * The filter to search for the FlightLeaderboard to update in case it exists.
     */
    where: FlightLeaderboardWhereUniqueInput
    /**
     * In case the FlightLeaderboard found by the `where` argument doesn't exist, create a new FlightLeaderboard with this data.
     */
    create: XOR<FlightLeaderboardCreateInput, FlightLeaderboardUncheckedCreateInput>
    /**
     * In case the FlightLeaderboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlightLeaderboardUpdateInput, FlightLeaderboardUncheckedUpdateInput>
  }

  /**
   * FlightLeaderboard delete
   */
  export type FlightLeaderboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightLeaderboard
     */
    select?: FlightLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightLeaderboard
     */
    omit?: FlightLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightLeaderboardInclude<ExtArgs> | null
    /**
     * Filter which FlightLeaderboard to delete.
     */
    where: FlightLeaderboardWhereUniqueInput
  }

  /**
   * FlightLeaderboard deleteMany
   */
  export type FlightLeaderboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlightLeaderboards to delete
     */
    where?: FlightLeaderboardWhereInput
    /**
     * Limit how many FlightLeaderboards to delete.
     */
    limit?: number
  }

  /**
   * FlightLeaderboard without action
   */
  export type FlightLeaderboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightLeaderboard
     */
    select?: FlightLeaderboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlightLeaderboard
     */
    omit?: FlightLeaderboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightLeaderboardInclude<ExtArgs> | null
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


  export const PlayerScalarFieldEnum: {
    email: 'email',
    username: 'username',
    createdAt: 'createdAt'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const CharacterStatsScalarFieldEnum: {
    id: 'id',
    playerEmail: 'playerEmail',
    type: 'type',
    level: 'level',
    xp: 'xp',
    lives: 'lives',
    updatedAt: 'updatedAt'
  };

  export type CharacterStatsScalarFieldEnum = (typeof CharacterStatsScalarFieldEnum)[keyof typeof CharacterStatsScalarFieldEnum]


  export const CharacterAttributeProgressScalarFieldEnum: {
    id: 'id',
    characterStatsId: 'characterStatsId',
    category: 'category',
    currentLevel: 'currentLevel'
  };

  export type CharacterAttributeProgressScalarFieldEnum = (typeof CharacterAttributeProgressScalarFieldEnum)[keyof typeof CharacterAttributeProgressScalarFieldEnum]


  export const SkillNodeDefinitionScalarFieldEnum: {
    id: 'id',
    characterType: 'characterType',
    category: 'category',
    tier: 'tier',
    name: 'name',
    description: 'description',
    xpCost: 'xpCost',
    effectMetadata: 'effectMetadata'
  };

  export type SkillNodeDefinitionScalarFieldEnum = (typeof SkillNodeDefinitionScalarFieldEnum)[keyof typeof SkillNodeDefinitionScalarFieldEnum]


  export const SurvivalLeaderboardScalarFieldEnum: {
    id: 'id',
    playerEmail: 'playerEmail',
    characterUsed: 'characterUsed',
    points: 'points',
    wave: 'wave',
    time: 'time',
    createdAt: 'createdAt'
  };

  export type SurvivalLeaderboardScalarFieldEnum = (typeof SurvivalLeaderboardScalarFieldEnum)[keyof typeof SurvivalLeaderboardScalarFieldEnum]


  export const FlightLeaderboardScalarFieldEnum: {
    id: 'id',
    playerEmail: 'playerEmail',
    characterUsed: 'characterUsed',
    time: 'time',
    createdAt: 'createdAt'
  };

  export type FlightLeaderboardScalarFieldEnum = (typeof FlightLeaderboardScalarFieldEnum)[keyof typeof FlightLeaderboardScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CharacterType'
   */
  export type EnumCharacterTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CharacterType'>
    


  /**
   * Reference to a field of type 'CharacterType[]'
   */
  export type ListEnumCharacterTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CharacterType[]'>
    


  /**
   * Reference to a field of type 'SkillCategory'
   */
  export type EnumSkillCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillCategory'>
    


  /**
   * Reference to a field of type 'SkillCategory[]'
   */
  export type ListEnumSkillCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillCategory[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    email?: StringFilter<"Player"> | string
    username?: StringFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    characters?: CharacterStatsListRelationFilter
    survivalScores?: SurvivalLeaderboardListRelationFilter
    flightScores?: FlightLeaderboardListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    email?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    characters?: CharacterStatsOrderByRelationAggregateInput
    survivalScores?: SurvivalLeaderboardOrderByRelationAggregateInput
    flightScores?: FlightLeaderboardOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    username?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    createdAt?: DateTimeFilter<"Player"> | Date | string
    characters?: CharacterStatsListRelationFilter
    survivalScores?: SurvivalLeaderboardListRelationFilter
    flightScores?: FlightLeaderboardListRelationFilter
  }, "email" | "username">

  export type PlayerOrderByWithAggregationInput = {
    email?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    email?: StringWithAggregatesFilter<"Player"> | string
    username?: StringWithAggregatesFilter<"Player"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
  }

  export type CharacterStatsWhereInput = {
    AND?: CharacterStatsWhereInput | CharacterStatsWhereInput[]
    OR?: CharacterStatsWhereInput[]
    NOT?: CharacterStatsWhereInput | CharacterStatsWhereInput[]
    id?: IntFilter<"CharacterStats"> | number
    playerEmail?: StringFilter<"CharacterStats"> | string
    type?: EnumCharacterTypeFilter<"CharacterStats"> | $Enums.CharacterType
    level?: IntFilter<"CharacterStats"> | number
    xp?: IntFilter<"CharacterStats"> | number
    lives?: IntFilter<"CharacterStats"> | number
    updatedAt?: DateTimeFilter<"CharacterStats"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    upgrades?: CharacterAttributeProgressListRelationFilter
  }

  export type CharacterStatsOrderByWithRelationInput = {
    id?: SortOrder
    playerEmail?: SortOrder
    type?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    lives?: SortOrder
    updatedAt?: SortOrder
    player?: PlayerOrderByWithRelationInput
    upgrades?: CharacterAttributeProgressOrderByRelationAggregateInput
  }

  export type CharacterStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    playerEmail_type?: CharacterStatsPlayerEmailTypeCompoundUniqueInput
    AND?: CharacterStatsWhereInput | CharacterStatsWhereInput[]
    OR?: CharacterStatsWhereInput[]
    NOT?: CharacterStatsWhereInput | CharacterStatsWhereInput[]
    playerEmail?: StringFilter<"CharacterStats"> | string
    type?: EnumCharacterTypeFilter<"CharacterStats"> | $Enums.CharacterType
    level?: IntFilter<"CharacterStats"> | number
    xp?: IntFilter<"CharacterStats"> | number
    lives?: IntFilter<"CharacterStats"> | number
    updatedAt?: DateTimeFilter<"CharacterStats"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    upgrades?: CharacterAttributeProgressListRelationFilter
  }, "id" | "playerEmail_type">

  export type CharacterStatsOrderByWithAggregationInput = {
    id?: SortOrder
    playerEmail?: SortOrder
    type?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    lives?: SortOrder
    updatedAt?: SortOrder
    _count?: CharacterStatsCountOrderByAggregateInput
    _avg?: CharacterStatsAvgOrderByAggregateInput
    _max?: CharacterStatsMaxOrderByAggregateInput
    _min?: CharacterStatsMinOrderByAggregateInput
    _sum?: CharacterStatsSumOrderByAggregateInput
  }

  export type CharacterStatsScalarWhereWithAggregatesInput = {
    AND?: CharacterStatsScalarWhereWithAggregatesInput | CharacterStatsScalarWhereWithAggregatesInput[]
    OR?: CharacterStatsScalarWhereWithAggregatesInput[]
    NOT?: CharacterStatsScalarWhereWithAggregatesInput | CharacterStatsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CharacterStats"> | number
    playerEmail?: StringWithAggregatesFilter<"CharacterStats"> | string
    type?: EnumCharacterTypeWithAggregatesFilter<"CharacterStats"> | $Enums.CharacterType
    level?: IntWithAggregatesFilter<"CharacterStats"> | number
    xp?: IntWithAggregatesFilter<"CharacterStats"> | number
    lives?: IntWithAggregatesFilter<"CharacterStats"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"CharacterStats"> | Date | string
  }

  export type CharacterAttributeProgressWhereInput = {
    AND?: CharacterAttributeProgressWhereInput | CharacterAttributeProgressWhereInput[]
    OR?: CharacterAttributeProgressWhereInput[]
    NOT?: CharacterAttributeProgressWhereInput | CharacterAttributeProgressWhereInput[]
    id?: IntFilter<"CharacterAttributeProgress"> | number
    characterStatsId?: IntFilter<"CharacterAttributeProgress"> | number
    category?: EnumSkillCategoryFilter<"CharacterAttributeProgress"> | $Enums.SkillCategory
    currentLevel?: IntFilter<"CharacterAttributeProgress"> | number
    characterStats?: XOR<CharacterStatsScalarRelationFilter, CharacterStatsWhereInput>
  }

  export type CharacterAttributeProgressOrderByWithRelationInput = {
    id?: SortOrder
    characterStatsId?: SortOrder
    category?: SortOrder
    currentLevel?: SortOrder
    characterStats?: CharacterStatsOrderByWithRelationInput
  }

  export type CharacterAttributeProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    characterStatsId_category?: CharacterAttributeProgressCharacterStatsIdCategoryCompoundUniqueInput
    AND?: CharacterAttributeProgressWhereInput | CharacterAttributeProgressWhereInput[]
    OR?: CharacterAttributeProgressWhereInput[]
    NOT?: CharacterAttributeProgressWhereInput | CharacterAttributeProgressWhereInput[]
    characterStatsId?: IntFilter<"CharacterAttributeProgress"> | number
    category?: EnumSkillCategoryFilter<"CharacterAttributeProgress"> | $Enums.SkillCategory
    currentLevel?: IntFilter<"CharacterAttributeProgress"> | number
    characterStats?: XOR<CharacterStatsScalarRelationFilter, CharacterStatsWhereInput>
  }, "id" | "characterStatsId_category">

  export type CharacterAttributeProgressOrderByWithAggregationInput = {
    id?: SortOrder
    characterStatsId?: SortOrder
    category?: SortOrder
    currentLevel?: SortOrder
    _count?: CharacterAttributeProgressCountOrderByAggregateInput
    _avg?: CharacterAttributeProgressAvgOrderByAggregateInput
    _max?: CharacterAttributeProgressMaxOrderByAggregateInput
    _min?: CharacterAttributeProgressMinOrderByAggregateInput
    _sum?: CharacterAttributeProgressSumOrderByAggregateInput
  }

  export type CharacterAttributeProgressScalarWhereWithAggregatesInput = {
    AND?: CharacterAttributeProgressScalarWhereWithAggregatesInput | CharacterAttributeProgressScalarWhereWithAggregatesInput[]
    OR?: CharacterAttributeProgressScalarWhereWithAggregatesInput[]
    NOT?: CharacterAttributeProgressScalarWhereWithAggregatesInput | CharacterAttributeProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CharacterAttributeProgress"> | number
    characterStatsId?: IntWithAggregatesFilter<"CharacterAttributeProgress"> | number
    category?: EnumSkillCategoryWithAggregatesFilter<"CharacterAttributeProgress"> | $Enums.SkillCategory
    currentLevel?: IntWithAggregatesFilter<"CharacterAttributeProgress"> | number
  }

  export type SkillNodeDefinitionWhereInput = {
    AND?: SkillNodeDefinitionWhereInput | SkillNodeDefinitionWhereInput[]
    OR?: SkillNodeDefinitionWhereInput[]
    NOT?: SkillNodeDefinitionWhereInput | SkillNodeDefinitionWhereInput[]
    id?: IntFilter<"SkillNodeDefinition"> | number
    characterType?: EnumCharacterTypeFilter<"SkillNodeDefinition"> | $Enums.CharacterType
    category?: EnumSkillCategoryFilter<"SkillNodeDefinition"> | $Enums.SkillCategory
    tier?: IntFilter<"SkillNodeDefinition"> | number
    name?: StringFilter<"SkillNodeDefinition"> | string
    description?: StringFilter<"SkillNodeDefinition"> | string
    xpCost?: IntFilter<"SkillNodeDefinition"> | number
    effectMetadata?: JsonNullableFilter<"SkillNodeDefinition">
  }

  export type SkillNodeDefinitionOrderByWithRelationInput = {
    id?: SortOrder
    characterType?: SortOrder
    category?: SortOrder
    tier?: SortOrder
    name?: SortOrder
    description?: SortOrder
    xpCost?: SortOrder
    effectMetadata?: SortOrderInput | SortOrder
  }

  export type SkillNodeDefinitionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    characterType_category_tier?: SkillNodeDefinitionCharacterTypeCategoryTierCompoundUniqueInput
    AND?: SkillNodeDefinitionWhereInput | SkillNodeDefinitionWhereInput[]
    OR?: SkillNodeDefinitionWhereInput[]
    NOT?: SkillNodeDefinitionWhereInput | SkillNodeDefinitionWhereInput[]
    characterType?: EnumCharacterTypeFilter<"SkillNodeDefinition"> | $Enums.CharacterType
    category?: EnumSkillCategoryFilter<"SkillNodeDefinition"> | $Enums.SkillCategory
    tier?: IntFilter<"SkillNodeDefinition"> | number
    name?: StringFilter<"SkillNodeDefinition"> | string
    description?: StringFilter<"SkillNodeDefinition"> | string
    xpCost?: IntFilter<"SkillNodeDefinition"> | number
    effectMetadata?: JsonNullableFilter<"SkillNodeDefinition">
  }, "id" | "characterType_category_tier">

  export type SkillNodeDefinitionOrderByWithAggregationInput = {
    id?: SortOrder
    characterType?: SortOrder
    category?: SortOrder
    tier?: SortOrder
    name?: SortOrder
    description?: SortOrder
    xpCost?: SortOrder
    effectMetadata?: SortOrderInput | SortOrder
    _count?: SkillNodeDefinitionCountOrderByAggregateInput
    _avg?: SkillNodeDefinitionAvgOrderByAggregateInput
    _max?: SkillNodeDefinitionMaxOrderByAggregateInput
    _min?: SkillNodeDefinitionMinOrderByAggregateInput
    _sum?: SkillNodeDefinitionSumOrderByAggregateInput
  }

  export type SkillNodeDefinitionScalarWhereWithAggregatesInput = {
    AND?: SkillNodeDefinitionScalarWhereWithAggregatesInput | SkillNodeDefinitionScalarWhereWithAggregatesInput[]
    OR?: SkillNodeDefinitionScalarWhereWithAggregatesInput[]
    NOT?: SkillNodeDefinitionScalarWhereWithAggregatesInput | SkillNodeDefinitionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SkillNodeDefinition"> | number
    characterType?: EnumCharacterTypeWithAggregatesFilter<"SkillNodeDefinition"> | $Enums.CharacterType
    category?: EnumSkillCategoryWithAggregatesFilter<"SkillNodeDefinition"> | $Enums.SkillCategory
    tier?: IntWithAggregatesFilter<"SkillNodeDefinition"> | number
    name?: StringWithAggregatesFilter<"SkillNodeDefinition"> | string
    description?: StringWithAggregatesFilter<"SkillNodeDefinition"> | string
    xpCost?: IntWithAggregatesFilter<"SkillNodeDefinition"> | number
    effectMetadata?: JsonNullableWithAggregatesFilter<"SkillNodeDefinition">
  }

  export type SurvivalLeaderboardWhereInput = {
    AND?: SurvivalLeaderboardWhereInput | SurvivalLeaderboardWhereInput[]
    OR?: SurvivalLeaderboardWhereInput[]
    NOT?: SurvivalLeaderboardWhereInput | SurvivalLeaderboardWhereInput[]
    id?: IntFilter<"SurvivalLeaderboard"> | number
    playerEmail?: StringFilter<"SurvivalLeaderboard"> | string
    characterUsed?: EnumCharacterTypeNullableFilter<"SurvivalLeaderboard"> | $Enums.CharacterType | null
    points?: IntFilter<"SurvivalLeaderboard"> | number
    wave?: IntFilter<"SurvivalLeaderboard"> | number
    time?: FloatFilter<"SurvivalLeaderboard"> | number
    createdAt?: DateTimeFilter<"SurvivalLeaderboard"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type SurvivalLeaderboardOrderByWithRelationInput = {
    id?: SortOrder
    playerEmail?: SortOrder
    characterUsed?: SortOrderInput | SortOrder
    points?: SortOrder
    wave?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    player?: PlayerOrderByWithRelationInput
  }

  export type SurvivalLeaderboardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    playerEmail?: string
    AND?: SurvivalLeaderboardWhereInput | SurvivalLeaderboardWhereInput[]
    OR?: SurvivalLeaderboardWhereInput[]
    NOT?: SurvivalLeaderboardWhereInput | SurvivalLeaderboardWhereInput[]
    characterUsed?: EnumCharacterTypeNullableFilter<"SurvivalLeaderboard"> | $Enums.CharacterType | null
    points?: IntFilter<"SurvivalLeaderboard"> | number
    wave?: IntFilter<"SurvivalLeaderboard"> | number
    time?: FloatFilter<"SurvivalLeaderboard"> | number
    createdAt?: DateTimeFilter<"SurvivalLeaderboard"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id" | "playerEmail">

  export type SurvivalLeaderboardOrderByWithAggregationInput = {
    id?: SortOrder
    playerEmail?: SortOrder
    characterUsed?: SortOrderInput | SortOrder
    points?: SortOrder
    wave?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    _count?: SurvivalLeaderboardCountOrderByAggregateInput
    _avg?: SurvivalLeaderboardAvgOrderByAggregateInput
    _max?: SurvivalLeaderboardMaxOrderByAggregateInput
    _min?: SurvivalLeaderboardMinOrderByAggregateInput
    _sum?: SurvivalLeaderboardSumOrderByAggregateInput
  }

  export type SurvivalLeaderboardScalarWhereWithAggregatesInput = {
    AND?: SurvivalLeaderboardScalarWhereWithAggregatesInput | SurvivalLeaderboardScalarWhereWithAggregatesInput[]
    OR?: SurvivalLeaderboardScalarWhereWithAggregatesInput[]
    NOT?: SurvivalLeaderboardScalarWhereWithAggregatesInput | SurvivalLeaderboardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SurvivalLeaderboard"> | number
    playerEmail?: StringWithAggregatesFilter<"SurvivalLeaderboard"> | string
    characterUsed?: EnumCharacterTypeNullableWithAggregatesFilter<"SurvivalLeaderboard"> | $Enums.CharacterType | null
    points?: IntWithAggregatesFilter<"SurvivalLeaderboard"> | number
    wave?: IntWithAggregatesFilter<"SurvivalLeaderboard"> | number
    time?: FloatWithAggregatesFilter<"SurvivalLeaderboard"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SurvivalLeaderboard"> | Date | string
  }

  export type FlightLeaderboardWhereInput = {
    AND?: FlightLeaderboardWhereInput | FlightLeaderboardWhereInput[]
    OR?: FlightLeaderboardWhereInput[]
    NOT?: FlightLeaderboardWhereInput | FlightLeaderboardWhereInput[]
    id?: IntFilter<"FlightLeaderboard"> | number
    playerEmail?: StringFilter<"FlightLeaderboard"> | string
    characterUsed?: EnumCharacterTypeNullableFilter<"FlightLeaderboard"> | $Enums.CharacterType | null
    time?: FloatFilter<"FlightLeaderboard"> | number
    createdAt?: DateTimeFilter<"FlightLeaderboard"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type FlightLeaderboardOrderByWithRelationInput = {
    id?: SortOrder
    playerEmail?: SortOrder
    characterUsed?: SortOrderInput | SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    player?: PlayerOrderByWithRelationInput
  }

  export type FlightLeaderboardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    playerEmail?: string
    AND?: FlightLeaderboardWhereInput | FlightLeaderboardWhereInput[]
    OR?: FlightLeaderboardWhereInput[]
    NOT?: FlightLeaderboardWhereInput | FlightLeaderboardWhereInput[]
    characterUsed?: EnumCharacterTypeNullableFilter<"FlightLeaderboard"> | $Enums.CharacterType | null
    time?: FloatFilter<"FlightLeaderboard"> | number
    createdAt?: DateTimeFilter<"FlightLeaderboard"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id" | "playerEmail">

  export type FlightLeaderboardOrderByWithAggregationInput = {
    id?: SortOrder
    playerEmail?: SortOrder
    characterUsed?: SortOrderInput | SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    _count?: FlightLeaderboardCountOrderByAggregateInput
    _avg?: FlightLeaderboardAvgOrderByAggregateInput
    _max?: FlightLeaderboardMaxOrderByAggregateInput
    _min?: FlightLeaderboardMinOrderByAggregateInput
    _sum?: FlightLeaderboardSumOrderByAggregateInput
  }

  export type FlightLeaderboardScalarWhereWithAggregatesInput = {
    AND?: FlightLeaderboardScalarWhereWithAggregatesInput | FlightLeaderboardScalarWhereWithAggregatesInput[]
    OR?: FlightLeaderboardScalarWhereWithAggregatesInput[]
    NOT?: FlightLeaderboardScalarWhereWithAggregatesInput | FlightLeaderboardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FlightLeaderboard"> | number
    playerEmail?: StringWithAggregatesFilter<"FlightLeaderboard"> | string
    characterUsed?: EnumCharacterTypeNullableWithAggregatesFilter<"FlightLeaderboard"> | $Enums.CharacterType | null
    time?: FloatWithAggregatesFilter<"FlightLeaderboard"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FlightLeaderboard"> | Date | string
  }

  export type PlayerCreateInput = {
    email: string
    username: string
    createdAt?: Date | string
    characters?: CharacterStatsCreateNestedManyWithoutPlayerInput
    survivalScores?: SurvivalLeaderboardCreateNestedManyWithoutPlayerInput
    flightScores?: FlightLeaderboardCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    email: string
    username: string
    createdAt?: Date | string
    characters?: CharacterStatsUncheckedCreateNestedManyWithoutPlayerInput
    survivalScores?: SurvivalLeaderboardUncheckedCreateNestedManyWithoutPlayerInput
    flightScores?: FlightLeaderboardUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterStatsUpdateManyWithoutPlayerNestedInput
    survivalScores?: SurvivalLeaderboardUpdateManyWithoutPlayerNestedInput
    flightScores?: FlightLeaderboardUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterStatsUncheckedUpdateManyWithoutPlayerNestedInput
    survivalScores?: SurvivalLeaderboardUncheckedUpdateManyWithoutPlayerNestedInput
    flightScores?: FlightLeaderboardUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    email: string
    username: string
    createdAt?: Date | string
  }

  export type PlayerUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterStatsCreateInput = {
    type: $Enums.CharacterType
    level?: number
    xp?: number
    lives?: number
    updatedAt?: Date | string
    player: PlayerCreateNestedOneWithoutCharactersInput
    upgrades?: CharacterAttributeProgressCreateNestedManyWithoutCharacterStatsInput
  }

  export type CharacterStatsUncheckedCreateInput = {
    id?: number
    playerEmail: string
    type: $Enums.CharacterType
    level?: number
    xp?: number
    lives?: number
    updatedAt?: Date | string
    upgrades?: CharacterAttributeProgressUncheckedCreateNestedManyWithoutCharacterStatsInput
  }

  export type CharacterStatsUpdateInput = {
    type?: EnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutCharactersNestedInput
    upgrades?: CharacterAttributeProgressUpdateManyWithoutCharacterStatsNestedInput
  }

  export type CharacterStatsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerEmail?: StringFieldUpdateOperationsInput | string
    type?: EnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upgrades?: CharacterAttributeProgressUncheckedUpdateManyWithoutCharacterStatsNestedInput
  }

  export type CharacterStatsCreateManyInput = {
    id?: number
    playerEmail: string
    type: $Enums.CharacterType
    level?: number
    xp?: number
    lives?: number
    updatedAt?: Date | string
  }

  export type CharacterStatsUpdateManyMutationInput = {
    type?: EnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterStatsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerEmail?: StringFieldUpdateOperationsInput | string
    type?: EnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterAttributeProgressCreateInput = {
    category: $Enums.SkillCategory
    currentLevel?: number
    characterStats: CharacterStatsCreateNestedOneWithoutUpgradesInput
  }

  export type CharacterAttributeProgressUncheckedCreateInput = {
    id?: number
    characterStatsId: number
    category: $Enums.SkillCategory
    currentLevel?: number
  }

  export type CharacterAttributeProgressUpdateInput = {
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    currentLevel?: IntFieldUpdateOperationsInput | number
    characterStats?: CharacterStatsUpdateOneRequiredWithoutUpgradesNestedInput
  }

  export type CharacterAttributeProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterStatsId?: IntFieldUpdateOperationsInput | number
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    currentLevel?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterAttributeProgressCreateManyInput = {
    id?: number
    characterStatsId: number
    category: $Enums.SkillCategory
    currentLevel?: number
  }

  export type CharacterAttributeProgressUpdateManyMutationInput = {
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    currentLevel?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterAttributeProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterStatsId?: IntFieldUpdateOperationsInput | number
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    currentLevel?: IntFieldUpdateOperationsInput | number
  }

  export type SkillNodeDefinitionCreateInput = {
    characterType: $Enums.CharacterType
    category: $Enums.SkillCategory
    tier: number
    name: string
    description: string
    xpCost: number
    effectMetadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SkillNodeDefinitionUncheckedCreateInput = {
    id?: number
    characterType: $Enums.CharacterType
    category: $Enums.SkillCategory
    tier: number
    name: string
    description: string
    xpCost: number
    effectMetadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SkillNodeDefinitionUpdateInput = {
    characterType?: EnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    tier?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xpCost?: IntFieldUpdateOperationsInput | number
    effectMetadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SkillNodeDefinitionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterType?: EnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    tier?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xpCost?: IntFieldUpdateOperationsInput | number
    effectMetadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SkillNodeDefinitionCreateManyInput = {
    id?: number
    characterType: $Enums.CharacterType
    category: $Enums.SkillCategory
    tier: number
    name: string
    description: string
    xpCost: number
    effectMetadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SkillNodeDefinitionUpdateManyMutationInput = {
    characterType?: EnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    tier?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xpCost?: IntFieldUpdateOperationsInput | number
    effectMetadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SkillNodeDefinitionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterType?: EnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    tier?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    xpCost?: IntFieldUpdateOperationsInput | number
    effectMetadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SurvivalLeaderboardCreateInput = {
    characterUsed?: $Enums.CharacterType | null
    points: number
    wave: number
    time: number
    createdAt?: Date | string
    player: PlayerCreateNestedOneWithoutSurvivalScoresInput
  }

  export type SurvivalLeaderboardUncheckedCreateInput = {
    id?: number
    playerEmail: string
    characterUsed?: $Enums.CharacterType | null
    points: number
    wave: number
    time: number
    createdAt?: Date | string
  }

  export type SurvivalLeaderboardUpdateInput = {
    characterUsed?: NullableEnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType | null
    points?: IntFieldUpdateOperationsInput | number
    wave?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutSurvivalScoresNestedInput
  }

  export type SurvivalLeaderboardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerEmail?: StringFieldUpdateOperationsInput | string
    characterUsed?: NullableEnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType | null
    points?: IntFieldUpdateOperationsInput | number
    wave?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurvivalLeaderboardCreateManyInput = {
    id?: number
    playerEmail: string
    characterUsed?: $Enums.CharacterType | null
    points: number
    wave: number
    time: number
    createdAt?: Date | string
  }

  export type SurvivalLeaderboardUpdateManyMutationInput = {
    characterUsed?: NullableEnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType | null
    points?: IntFieldUpdateOperationsInput | number
    wave?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurvivalLeaderboardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerEmail?: StringFieldUpdateOperationsInput | string
    characterUsed?: NullableEnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType | null
    points?: IntFieldUpdateOperationsInput | number
    wave?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightLeaderboardCreateInput = {
    characterUsed?: $Enums.CharacterType | null
    time: number
    createdAt?: Date | string
    player: PlayerCreateNestedOneWithoutFlightScoresInput
  }

  export type FlightLeaderboardUncheckedCreateInput = {
    id?: number
    playerEmail: string
    characterUsed?: $Enums.CharacterType | null
    time: number
    createdAt?: Date | string
  }

  export type FlightLeaderboardUpdateInput = {
    characterUsed?: NullableEnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType | null
    time?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutFlightScoresNestedInput
  }

  export type FlightLeaderboardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerEmail?: StringFieldUpdateOperationsInput | string
    characterUsed?: NullableEnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType | null
    time?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightLeaderboardCreateManyInput = {
    id?: number
    playerEmail: string
    characterUsed?: $Enums.CharacterType | null
    time: number
    createdAt?: Date | string
  }

  export type FlightLeaderboardUpdateManyMutationInput = {
    characterUsed?: NullableEnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType | null
    time?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightLeaderboardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerEmail?: StringFieldUpdateOperationsInput | string
    characterUsed?: NullableEnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType | null
    time?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CharacterStatsListRelationFilter = {
    every?: CharacterStatsWhereInput
    some?: CharacterStatsWhereInput
    none?: CharacterStatsWhereInput
  }

  export type SurvivalLeaderboardListRelationFilter = {
    every?: SurvivalLeaderboardWhereInput
    some?: SurvivalLeaderboardWhereInput
    none?: SurvivalLeaderboardWhereInput
  }

  export type FlightLeaderboardListRelationFilter = {
    every?: FlightLeaderboardWhereInput
    some?: FlightLeaderboardWhereInput
    none?: FlightLeaderboardWhereInput
  }

  export type CharacterStatsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurvivalLeaderboardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlightLeaderboardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerCountOrderByAggregateInput = {
    email?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    email?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    email?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
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

  export type EnumCharacterTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CharacterType | EnumCharacterTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CharacterType[] | ListEnumCharacterTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharacterType[] | ListEnumCharacterTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCharacterTypeFilter<$PrismaModel> | $Enums.CharacterType
  }

  export type PlayerScalarRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type CharacterAttributeProgressListRelationFilter = {
    every?: CharacterAttributeProgressWhereInput
    some?: CharacterAttributeProgressWhereInput
    none?: CharacterAttributeProgressWhereInput
  }

  export type CharacterAttributeProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterStatsPlayerEmailTypeCompoundUniqueInput = {
    playerEmail: string
    type: $Enums.CharacterType
  }

  export type CharacterStatsCountOrderByAggregateInput = {
    id?: SortOrder
    playerEmail?: SortOrder
    type?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    lives?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterStatsAvgOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    lives?: SortOrder
  }

  export type CharacterStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    playerEmail?: SortOrder
    type?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    lives?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterStatsMinOrderByAggregateInput = {
    id?: SortOrder
    playerEmail?: SortOrder
    type?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    lives?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharacterStatsSumOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    xp?: SortOrder
    lives?: SortOrder
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

  export type EnumCharacterTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CharacterType | EnumCharacterTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CharacterType[] | ListEnumCharacterTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharacterType[] | ListEnumCharacterTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCharacterTypeWithAggregatesFilter<$PrismaModel> | $Enums.CharacterType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCharacterTypeFilter<$PrismaModel>
    _max?: NestedEnumCharacterTypeFilter<$PrismaModel>
  }

  export type EnumSkillCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillCategory | EnumSkillCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillCategoryFilter<$PrismaModel> | $Enums.SkillCategory
  }

  export type CharacterStatsScalarRelationFilter = {
    is?: CharacterStatsWhereInput
    isNot?: CharacterStatsWhereInput
  }

  export type CharacterAttributeProgressCharacterStatsIdCategoryCompoundUniqueInput = {
    characterStatsId: number
    category: $Enums.SkillCategory
  }

  export type CharacterAttributeProgressCountOrderByAggregateInput = {
    id?: SortOrder
    characterStatsId?: SortOrder
    category?: SortOrder
    currentLevel?: SortOrder
  }

  export type CharacterAttributeProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    characterStatsId?: SortOrder
    currentLevel?: SortOrder
  }

  export type CharacterAttributeProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    characterStatsId?: SortOrder
    category?: SortOrder
    currentLevel?: SortOrder
  }

  export type CharacterAttributeProgressMinOrderByAggregateInput = {
    id?: SortOrder
    characterStatsId?: SortOrder
    category?: SortOrder
    currentLevel?: SortOrder
  }

  export type CharacterAttributeProgressSumOrderByAggregateInput = {
    id?: SortOrder
    characterStatsId?: SortOrder
    currentLevel?: SortOrder
  }

  export type EnumSkillCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillCategory | EnumSkillCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillCategoryWithAggregatesFilter<$PrismaModel> | $Enums.SkillCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillCategoryFilter<$PrismaModel>
    _max?: NestedEnumSkillCategoryFilter<$PrismaModel>
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SkillNodeDefinitionCharacterTypeCategoryTierCompoundUniqueInput = {
    characterType: $Enums.CharacterType
    category: $Enums.SkillCategory
    tier: number
  }

  export type SkillNodeDefinitionCountOrderByAggregateInput = {
    id?: SortOrder
    characterType?: SortOrder
    category?: SortOrder
    tier?: SortOrder
    name?: SortOrder
    description?: SortOrder
    xpCost?: SortOrder
    effectMetadata?: SortOrder
  }

  export type SkillNodeDefinitionAvgOrderByAggregateInput = {
    id?: SortOrder
    tier?: SortOrder
    xpCost?: SortOrder
  }

  export type SkillNodeDefinitionMaxOrderByAggregateInput = {
    id?: SortOrder
    characterType?: SortOrder
    category?: SortOrder
    tier?: SortOrder
    name?: SortOrder
    description?: SortOrder
    xpCost?: SortOrder
  }

  export type SkillNodeDefinitionMinOrderByAggregateInput = {
    id?: SortOrder
    characterType?: SortOrder
    category?: SortOrder
    tier?: SortOrder
    name?: SortOrder
    description?: SortOrder
    xpCost?: SortOrder
  }

  export type SkillNodeDefinitionSumOrderByAggregateInput = {
    id?: SortOrder
    tier?: SortOrder
    xpCost?: SortOrder
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

  export type EnumCharacterTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CharacterType | EnumCharacterTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CharacterType[] | ListEnumCharacterTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CharacterType[] | ListEnumCharacterTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCharacterTypeNullableFilter<$PrismaModel> | $Enums.CharacterType | null
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

  export type SurvivalLeaderboardCountOrderByAggregateInput = {
    id?: SortOrder
    playerEmail?: SortOrder
    characterUsed?: SortOrder
    points?: SortOrder
    wave?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
  }

  export type SurvivalLeaderboardAvgOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    wave?: SortOrder
    time?: SortOrder
  }

  export type SurvivalLeaderboardMaxOrderByAggregateInput = {
    id?: SortOrder
    playerEmail?: SortOrder
    characterUsed?: SortOrder
    points?: SortOrder
    wave?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
  }

  export type SurvivalLeaderboardMinOrderByAggregateInput = {
    id?: SortOrder
    playerEmail?: SortOrder
    characterUsed?: SortOrder
    points?: SortOrder
    wave?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
  }

  export type SurvivalLeaderboardSumOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    wave?: SortOrder
    time?: SortOrder
  }

  export type EnumCharacterTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CharacterType | EnumCharacterTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CharacterType[] | ListEnumCharacterTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CharacterType[] | ListEnumCharacterTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCharacterTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.CharacterType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCharacterTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumCharacterTypeNullableFilter<$PrismaModel>
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

  export type FlightLeaderboardCountOrderByAggregateInput = {
    id?: SortOrder
    playerEmail?: SortOrder
    characterUsed?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
  }

  export type FlightLeaderboardAvgOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
  }

  export type FlightLeaderboardMaxOrderByAggregateInput = {
    id?: SortOrder
    playerEmail?: SortOrder
    characterUsed?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
  }

  export type FlightLeaderboardMinOrderByAggregateInput = {
    id?: SortOrder
    playerEmail?: SortOrder
    characterUsed?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
  }

  export type FlightLeaderboardSumOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
  }

  export type CharacterStatsCreateNestedManyWithoutPlayerInput = {
    create?: XOR<CharacterStatsCreateWithoutPlayerInput, CharacterStatsUncheckedCreateWithoutPlayerInput> | CharacterStatsCreateWithoutPlayerInput[] | CharacterStatsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: CharacterStatsCreateOrConnectWithoutPlayerInput | CharacterStatsCreateOrConnectWithoutPlayerInput[]
    createMany?: CharacterStatsCreateManyPlayerInputEnvelope
    connect?: CharacterStatsWhereUniqueInput | CharacterStatsWhereUniqueInput[]
  }

  export type SurvivalLeaderboardCreateNestedManyWithoutPlayerInput = {
    create?: XOR<SurvivalLeaderboardCreateWithoutPlayerInput, SurvivalLeaderboardUncheckedCreateWithoutPlayerInput> | SurvivalLeaderboardCreateWithoutPlayerInput[] | SurvivalLeaderboardUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: SurvivalLeaderboardCreateOrConnectWithoutPlayerInput | SurvivalLeaderboardCreateOrConnectWithoutPlayerInput[]
    createMany?: SurvivalLeaderboardCreateManyPlayerInputEnvelope
    connect?: SurvivalLeaderboardWhereUniqueInput | SurvivalLeaderboardWhereUniqueInput[]
  }

  export type FlightLeaderboardCreateNestedManyWithoutPlayerInput = {
    create?: XOR<FlightLeaderboardCreateWithoutPlayerInput, FlightLeaderboardUncheckedCreateWithoutPlayerInput> | FlightLeaderboardCreateWithoutPlayerInput[] | FlightLeaderboardUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: FlightLeaderboardCreateOrConnectWithoutPlayerInput | FlightLeaderboardCreateOrConnectWithoutPlayerInput[]
    createMany?: FlightLeaderboardCreateManyPlayerInputEnvelope
    connect?: FlightLeaderboardWhereUniqueInput | FlightLeaderboardWhereUniqueInput[]
  }

  export type CharacterStatsUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<CharacterStatsCreateWithoutPlayerInput, CharacterStatsUncheckedCreateWithoutPlayerInput> | CharacterStatsCreateWithoutPlayerInput[] | CharacterStatsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: CharacterStatsCreateOrConnectWithoutPlayerInput | CharacterStatsCreateOrConnectWithoutPlayerInput[]
    createMany?: CharacterStatsCreateManyPlayerInputEnvelope
    connect?: CharacterStatsWhereUniqueInput | CharacterStatsWhereUniqueInput[]
  }

  export type SurvivalLeaderboardUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<SurvivalLeaderboardCreateWithoutPlayerInput, SurvivalLeaderboardUncheckedCreateWithoutPlayerInput> | SurvivalLeaderboardCreateWithoutPlayerInput[] | SurvivalLeaderboardUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: SurvivalLeaderboardCreateOrConnectWithoutPlayerInput | SurvivalLeaderboardCreateOrConnectWithoutPlayerInput[]
    createMany?: SurvivalLeaderboardCreateManyPlayerInputEnvelope
    connect?: SurvivalLeaderboardWhereUniqueInput | SurvivalLeaderboardWhereUniqueInput[]
  }

  export type FlightLeaderboardUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<FlightLeaderboardCreateWithoutPlayerInput, FlightLeaderboardUncheckedCreateWithoutPlayerInput> | FlightLeaderboardCreateWithoutPlayerInput[] | FlightLeaderboardUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: FlightLeaderboardCreateOrConnectWithoutPlayerInput | FlightLeaderboardCreateOrConnectWithoutPlayerInput[]
    createMany?: FlightLeaderboardCreateManyPlayerInputEnvelope
    connect?: FlightLeaderboardWhereUniqueInput | FlightLeaderboardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CharacterStatsUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<CharacterStatsCreateWithoutPlayerInput, CharacterStatsUncheckedCreateWithoutPlayerInput> | CharacterStatsCreateWithoutPlayerInput[] | CharacterStatsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: CharacterStatsCreateOrConnectWithoutPlayerInput | CharacterStatsCreateOrConnectWithoutPlayerInput[]
    upsert?: CharacterStatsUpsertWithWhereUniqueWithoutPlayerInput | CharacterStatsUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: CharacterStatsCreateManyPlayerInputEnvelope
    set?: CharacterStatsWhereUniqueInput | CharacterStatsWhereUniqueInput[]
    disconnect?: CharacterStatsWhereUniqueInput | CharacterStatsWhereUniqueInput[]
    delete?: CharacterStatsWhereUniqueInput | CharacterStatsWhereUniqueInput[]
    connect?: CharacterStatsWhereUniqueInput | CharacterStatsWhereUniqueInput[]
    update?: CharacterStatsUpdateWithWhereUniqueWithoutPlayerInput | CharacterStatsUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: CharacterStatsUpdateManyWithWhereWithoutPlayerInput | CharacterStatsUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: CharacterStatsScalarWhereInput | CharacterStatsScalarWhereInput[]
  }

  export type SurvivalLeaderboardUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<SurvivalLeaderboardCreateWithoutPlayerInput, SurvivalLeaderboardUncheckedCreateWithoutPlayerInput> | SurvivalLeaderboardCreateWithoutPlayerInput[] | SurvivalLeaderboardUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: SurvivalLeaderboardCreateOrConnectWithoutPlayerInput | SurvivalLeaderboardCreateOrConnectWithoutPlayerInput[]
    upsert?: SurvivalLeaderboardUpsertWithWhereUniqueWithoutPlayerInput | SurvivalLeaderboardUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: SurvivalLeaderboardCreateManyPlayerInputEnvelope
    set?: SurvivalLeaderboardWhereUniqueInput | SurvivalLeaderboardWhereUniqueInput[]
    disconnect?: SurvivalLeaderboardWhereUniqueInput | SurvivalLeaderboardWhereUniqueInput[]
    delete?: SurvivalLeaderboardWhereUniqueInput | SurvivalLeaderboardWhereUniqueInput[]
    connect?: SurvivalLeaderboardWhereUniqueInput | SurvivalLeaderboardWhereUniqueInput[]
    update?: SurvivalLeaderboardUpdateWithWhereUniqueWithoutPlayerInput | SurvivalLeaderboardUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: SurvivalLeaderboardUpdateManyWithWhereWithoutPlayerInput | SurvivalLeaderboardUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: SurvivalLeaderboardScalarWhereInput | SurvivalLeaderboardScalarWhereInput[]
  }

  export type FlightLeaderboardUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<FlightLeaderboardCreateWithoutPlayerInput, FlightLeaderboardUncheckedCreateWithoutPlayerInput> | FlightLeaderboardCreateWithoutPlayerInput[] | FlightLeaderboardUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: FlightLeaderboardCreateOrConnectWithoutPlayerInput | FlightLeaderboardCreateOrConnectWithoutPlayerInput[]
    upsert?: FlightLeaderboardUpsertWithWhereUniqueWithoutPlayerInput | FlightLeaderboardUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: FlightLeaderboardCreateManyPlayerInputEnvelope
    set?: FlightLeaderboardWhereUniqueInput | FlightLeaderboardWhereUniqueInput[]
    disconnect?: FlightLeaderboardWhereUniqueInput | FlightLeaderboardWhereUniqueInput[]
    delete?: FlightLeaderboardWhereUniqueInput | FlightLeaderboardWhereUniqueInput[]
    connect?: FlightLeaderboardWhereUniqueInput | FlightLeaderboardWhereUniqueInput[]
    update?: FlightLeaderboardUpdateWithWhereUniqueWithoutPlayerInput | FlightLeaderboardUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: FlightLeaderboardUpdateManyWithWhereWithoutPlayerInput | FlightLeaderboardUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: FlightLeaderboardScalarWhereInput | FlightLeaderboardScalarWhereInput[]
  }

  export type CharacterStatsUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<CharacterStatsCreateWithoutPlayerInput, CharacterStatsUncheckedCreateWithoutPlayerInput> | CharacterStatsCreateWithoutPlayerInput[] | CharacterStatsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: CharacterStatsCreateOrConnectWithoutPlayerInput | CharacterStatsCreateOrConnectWithoutPlayerInput[]
    upsert?: CharacterStatsUpsertWithWhereUniqueWithoutPlayerInput | CharacterStatsUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: CharacterStatsCreateManyPlayerInputEnvelope
    set?: CharacterStatsWhereUniqueInput | CharacterStatsWhereUniqueInput[]
    disconnect?: CharacterStatsWhereUniqueInput | CharacterStatsWhereUniqueInput[]
    delete?: CharacterStatsWhereUniqueInput | CharacterStatsWhereUniqueInput[]
    connect?: CharacterStatsWhereUniqueInput | CharacterStatsWhereUniqueInput[]
    update?: CharacterStatsUpdateWithWhereUniqueWithoutPlayerInput | CharacterStatsUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: CharacterStatsUpdateManyWithWhereWithoutPlayerInput | CharacterStatsUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: CharacterStatsScalarWhereInput | CharacterStatsScalarWhereInput[]
  }

  export type SurvivalLeaderboardUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<SurvivalLeaderboardCreateWithoutPlayerInput, SurvivalLeaderboardUncheckedCreateWithoutPlayerInput> | SurvivalLeaderboardCreateWithoutPlayerInput[] | SurvivalLeaderboardUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: SurvivalLeaderboardCreateOrConnectWithoutPlayerInput | SurvivalLeaderboardCreateOrConnectWithoutPlayerInput[]
    upsert?: SurvivalLeaderboardUpsertWithWhereUniqueWithoutPlayerInput | SurvivalLeaderboardUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: SurvivalLeaderboardCreateManyPlayerInputEnvelope
    set?: SurvivalLeaderboardWhereUniqueInput | SurvivalLeaderboardWhereUniqueInput[]
    disconnect?: SurvivalLeaderboardWhereUniqueInput | SurvivalLeaderboardWhereUniqueInput[]
    delete?: SurvivalLeaderboardWhereUniqueInput | SurvivalLeaderboardWhereUniqueInput[]
    connect?: SurvivalLeaderboardWhereUniqueInput | SurvivalLeaderboardWhereUniqueInput[]
    update?: SurvivalLeaderboardUpdateWithWhereUniqueWithoutPlayerInput | SurvivalLeaderboardUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: SurvivalLeaderboardUpdateManyWithWhereWithoutPlayerInput | SurvivalLeaderboardUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: SurvivalLeaderboardScalarWhereInput | SurvivalLeaderboardScalarWhereInput[]
  }

  export type FlightLeaderboardUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<FlightLeaderboardCreateWithoutPlayerInput, FlightLeaderboardUncheckedCreateWithoutPlayerInput> | FlightLeaderboardCreateWithoutPlayerInput[] | FlightLeaderboardUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: FlightLeaderboardCreateOrConnectWithoutPlayerInput | FlightLeaderboardCreateOrConnectWithoutPlayerInput[]
    upsert?: FlightLeaderboardUpsertWithWhereUniqueWithoutPlayerInput | FlightLeaderboardUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: FlightLeaderboardCreateManyPlayerInputEnvelope
    set?: FlightLeaderboardWhereUniqueInput | FlightLeaderboardWhereUniqueInput[]
    disconnect?: FlightLeaderboardWhereUniqueInput | FlightLeaderboardWhereUniqueInput[]
    delete?: FlightLeaderboardWhereUniqueInput | FlightLeaderboardWhereUniqueInput[]
    connect?: FlightLeaderboardWhereUniqueInput | FlightLeaderboardWhereUniqueInput[]
    update?: FlightLeaderboardUpdateWithWhereUniqueWithoutPlayerInput | FlightLeaderboardUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: FlightLeaderboardUpdateManyWithWhereWithoutPlayerInput | FlightLeaderboardUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: FlightLeaderboardScalarWhereInput | FlightLeaderboardScalarWhereInput[]
  }

  export type PlayerCreateNestedOneWithoutCharactersInput = {
    create?: XOR<PlayerCreateWithoutCharactersInput, PlayerUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutCharactersInput
    connect?: PlayerWhereUniqueInput
  }

  export type CharacterAttributeProgressCreateNestedManyWithoutCharacterStatsInput = {
    create?: XOR<CharacterAttributeProgressCreateWithoutCharacterStatsInput, CharacterAttributeProgressUncheckedCreateWithoutCharacterStatsInput> | CharacterAttributeProgressCreateWithoutCharacterStatsInput[] | CharacterAttributeProgressUncheckedCreateWithoutCharacterStatsInput[]
    connectOrCreate?: CharacterAttributeProgressCreateOrConnectWithoutCharacterStatsInput | CharacterAttributeProgressCreateOrConnectWithoutCharacterStatsInput[]
    createMany?: CharacterAttributeProgressCreateManyCharacterStatsInputEnvelope
    connect?: CharacterAttributeProgressWhereUniqueInput | CharacterAttributeProgressWhereUniqueInput[]
  }

  export type CharacterAttributeProgressUncheckedCreateNestedManyWithoutCharacterStatsInput = {
    create?: XOR<CharacterAttributeProgressCreateWithoutCharacterStatsInput, CharacterAttributeProgressUncheckedCreateWithoutCharacterStatsInput> | CharacterAttributeProgressCreateWithoutCharacterStatsInput[] | CharacterAttributeProgressUncheckedCreateWithoutCharacterStatsInput[]
    connectOrCreate?: CharacterAttributeProgressCreateOrConnectWithoutCharacterStatsInput | CharacterAttributeProgressCreateOrConnectWithoutCharacterStatsInput[]
    createMany?: CharacterAttributeProgressCreateManyCharacterStatsInputEnvelope
    connect?: CharacterAttributeProgressWhereUniqueInput | CharacterAttributeProgressWhereUniqueInput[]
  }

  export type EnumCharacterTypeFieldUpdateOperationsInput = {
    set?: $Enums.CharacterType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlayerUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<PlayerCreateWithoutCharactersInput, PlayerUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutCharactersInput
    upsert?: PlayerUpsertWithoutCharactersInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutCharactersInput, PlayerUpdateWithoutCharactersInput>, PlayerUncheckedUpdateWithoutCharactersInput>
  }

  export type CharacterAttributeProgressUpdateManyWithoutCharacterStatsNestedInput = {
    create?: XOR<CharacterAttributeProgressCreateWithoutCharacterStatsInput, CharacterAttributeProgressUncheckedCreateWithoutCharacterStatsInput> | CharacterAttributeProgressCreateWithoutCharacterStatsInput[] | CharacterAttributeProgressUncheckedCreateWithoutCharacterStatsInput[]
    connectOrCreate?: CharacterAttributeProgressCreateOrConnectWithoutCharacterStatsInput | CharacterAttributeProgressCreateOrConnectWithoutCharacterStatsInput[]
    upsert?: CharacterAttributeProgressUpsertWithWhereUniqueWithoutCharacterStatsInput | CharacterAttributeProgressUpsertWithWhereUniqueWithoutCharacterStatsInput[]
    createMany?: CharacterAttributeProgressCreateManyCharacterStatsInputEnvelope
    set?: CharacterAttributeProgressWhereUniqueInput | CharacterAttributeProgressWhereUniqueInput[]
    disconnect?: CharacterAttributeProgressWhereUniqueInput | CharacterAttributeProgressWhereUniqueInput[]
    delete?: CharacterAttributeProgressWhereUniqueInput | CharacterAttributeProgressWhereUniqueInput[]
    connect?: CharacterAttributeProgressWhereUniqueInput | CharacterAttributeProgressWhereUniqueInput[]
    update?: CharacterAttributeProgressUpdateWithWhereUniqueWithoutCharacterStatsInput | CharacterAttributeProgressUpdateWithWhereUniqueWithoutCharacterStatsInput[]
    updateMany?: CharacterAttributeProgressUpdateManyWithWhereWithoutCharacterStatsInput | CharacterAttributeProgressUpdateManyWithWhereWithoutCharacterStatsInput[]
    deleteMany?: CharacterAttributeProgressScalarWhereInput | CharacterAttributeProgressScalarWhereInput[]
  }

  export type CharacterAttributeProgressUncheckedUpdateManyWithoutCharacterStatsNestedInput = {
    create?: XOR<CharacterAttributeProgressCreateWithoutCharacterStatsInput, CharacterAttributeProgressUncheckedCreateWithoutCharacterStatsInput> | CharacterAttributeProgressCreateWithoutCharacterStatsInput[] | CharacterAttributeProgressUncheckedCreateWithoutCharacterStatsInput[]
    connectOrCreate?: CharacterAttributeProgressCreateOrConnectWithoutCharacterStatsInput | CharacterAttributeProgressCreateOrConnectWithoutCharacterStatsInput[]
    upsert?: CharacterAttributeProgressUpsertWithWhereUniqueWithoutCharacterStatsInput | CharacterAttributeProgressUpsertWithWhereUniqueWithoutCharacterStatsInput[]
    createMany?: CharacterAttributeProgressCreateManyCharacterStatsInputEnvelope
    set?: CharacterAttributeProgressWhereUniqueInput | CharacterAttributeProgressWhereUniqueInput[]
    disconnect?: CharacterAttributeProgressWhereUniqueInput | CharacterAttributeProgressWhereUniqueInput[]
    delete?: CharacterAttributeProgressWhereUniqueInput | CharacterAttributeProgressWhereUniqueInput[]
    connect?: CharacterAttributeProgressWhereUniqueInput | CharacterAttributeProgressWhereUniqueInput[]
    update?: CharacterAttributeProgressUpdateWithWhereUniqueWithoutCharacterStatsInput | CharacterAttributeProgressUpdateWithWhereUniqueWithoutCharacterStatsInput[]
    updateMany?: CharacterAttributeProgressUpdateManyWithWhereWithoutCharacterStatsInput | CharacterAttributeProgressUpdateManyWithWhereWithoutCharacterStatsInput[]
    deleteMany?: CharacterAttributeProgressScalarWhereInput | CharacterAttributeProgressScalarWhereInput[]
  }

  export type CharacterStatsCreateNestedOneWithoutUpgradesInput = {
    create?: XOR<CharacterStatsCreateWithoutUpgradesInput, CharacterStatsUncheckedCreateWithoutUpgradesInput>
    connectOrCreate?: CharacterStatsCreateOrConnectWithoutUpgradesInput
    connect?: CharacterStatsWhereUniqueInput
  }

  export type EnumSkillCategoryFieldUpdateOperationsInput = {
    set?: $Enums.SkillCategory
  }

  export type CharacterStatsUpdateOneRequiredWithoutUpgradesNestedInput = {
    create?: XOR<CharacterStatsCreateWithoutUpgradesInput, CharacterStatsUncheckedCreateWithoutUpgradesInput>
    connectOrCreate?: CharacterStatsCreateOrConnectWithoutUpgradesInput
    upsert?: CharacterStatsUpsertWithoutUpgradesInput
    connect?: CharacterStatsWhereUniqueInput
    update?: XOR<XOR<CharacterStatsUpdateToOneWithWhereWithoutUpgradesInput, CharacterStatsUpdateWithoutUpgradesInput>, CharacterStatsUncheckedUpdateWithoutUpgradesInput>
  }

  export type PlayerCreateNestedOneWithoutSurvivalScoresInput = {
    create?: XOR<PlayerCreateWithoutSurvivalScoresInput, PlayerUncheckedCreateWithoutSurvivalScoresInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutSurvivalScoresInput
    connect?: PlayerWhereUniqueInput
  }

  export type NullableEnumCharacterTypeFieldUpdateOperationsInput = {
    set?: $Enums.CharacterType | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlayerUpdateOneRequiredWithoutSurvivalScoresNestedInput = {
    create?: XOR<PlayerCreateWithoutSurvivalScoresInput, PlayerUncheckedCreateWithoutSurvivalScoresInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutSurvivalScoresInput
    upsert?: PlayerUpsertWithoutSurvivalScoresInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutSurvivalScoresInput, PlayerUpdateWithoutSurvivalScoresInput>, PlayerUncheckedUpdateWithoutSurvivalScoresInput>
  }

  export type PlayerCreateNestedOneWithoutFlightScoresInput = {
    create?: XOR<PlayerCreateWithoutFlightScoresInput, PlayerUncheckedCreateWithoutFlightScoresInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutFlightScoresInput
    connect?: PlayerWhereUniqueInput
  }

  export type PlayerUpdateOneRequiredWithoutFlightScoresNestedInput = {
    create?: XOR<PlayerCreateWithoutFlightScoresInput, PlayerUncheckedCreateWithoutFlightScoresInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutFlightScoresInput
    upsert?: PlayerUpsertWithoutFlightScoresInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutFlightScoresInput, PlayerUpdateWithoutFlightScoresInput>, PlayerUncheckedUpdateWithoutFlightScoresInput>
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

  export type NestedEnumCharacterTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CharacterType | EnumCharacterTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CharacterType[] | ListEnumCharacterTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharacterType[] | ListEnumCharacterTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCharacterTypeFilter<$PrismaModel> | $Enums.CharacterType
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

  export type NestedEnumCharacterTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CharacterType | EnumCharacterTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CharacterType[] | ListEnumCharacterTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CharacterType[] | ListEnumCharacterTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCharacterTypeWithAggregatesFilter<$PrismaModel> | $Enums.CharacterType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCharacterTypeFilter<$PrismaModel>
    _max?: NestedEnumCharacterTypeFilter<$PrismaModel>
  }

  export type NestedEnumSkillCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillCategory | EnumSkillCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillCategoryFilter<$PrismaModel> | $Enums.SkillCategory
  }

  export type NestedEnumSkillCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillCategory | EnumSkillCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillCategoryWithAggregatesFilter<$PrismaModel> | $Enums.SkillCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillCategoryFilter<$PrismaModel>
    _max?: NestedEnumSkillCategoryFilter<$PrismaModel>
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

  export type NestedEnumCharacterTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CharacterType | EnumCharacterTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CharacterType[] | ListEnumCharacterTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CharacterType[] | ListEnumCharacterTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCharacterTypeNullableFilter<$PrismaModel> | $Enums.CharacterType | null
  }

  export type NestedEnumCharacterTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CharacterType | EnumCharacterTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.CharacterType[] | ListEnumCharacterTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.CharacterType[] | ListEnumCharacterTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumCharacterTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.CharacterType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCharacterTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumCharacterTypeNullableFilter<$PrismaModel>
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

  export type CharacterStatsCreateWithoutPlayerInput = {
    type: $Enums.CharacterType
    level?: number
    xp?: number
    lives?: number
    updatedAt?: Date | string
    upgrades?: CharacterAttributeProgressCreateNestedManyWithoutCharacterStatsInput
  }

  export type CharacterStatsUncheckedCreateWithoutPlayerInput = {
    id?: number
    type: $Enums.CharacterType
    level?: number
    xp?: number
    lives?: number
    updatedAt?: Date | string
    upgrades?: CharacterAttributeProgressUncheckedCreateNestedManyWithoutCharacterStatsInput
  }

  export type CharacterStatsCreateOrConnectWithoutPlayerInput = {
    where: CharacterStatsWhereUniqueInput
    create: XOR<CharacterStatsCreateWithoutPlayerInput, CharacterStatsUncheckedCreateWithoutPlayerInput>
  }

  export type CharacterStatsCreateManyPlayerInputEnvelope = {
    data: CharacterStatsCreateManyPlayerInput | CharacterStatsCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type SurvivalLeaderboardCreateWithoutPlayerInput = {
    characterUsed?: $Enums.CharacterType | null
    points: number
    wave: number
    time: number
    createdAt?: Date | string
  }

  export type SurvivalLeaderboardUncheckedCreateWithoutPlayerInput = {
    id?: number
    characterUsed?: $Enums.CharacterType | null
    points: number
    wave: number
    time: number
    createdAt?: Date | string
  }

  export type SurvivalLeaderboardCreateOrConnectWithoutPlayerInput = {
    where: SurvivalLeaderboardWhereUniqueInput
    create: XOR<SurvivalLeaderboardCreateWithoutPlayerInput, SurvivalLeaderboardUncheckedCreateWithoutPlayerInput>
  }

  export type SurvivalLeaderboardCreateManyPlayerInputEnvelope = {
    data: SurvivalLeaderboardCreateManyPlayerInput | SurvivalLeaderboardCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type FlightLeaderboardCreateWithoutPlayerInput = {
    characterUsed?: $Enums.CharacterType | null
    time: number
    createdAt?: Date | string
  }

  export type FlightLeaderboardUncheckedCreateWithoutPlayerInput = {
    id?: number
    characterUsed?: $Enums.CharacterType | null
    time: number
    createdAt?: Date | string
  }

  export type FlightLeaderboardCreateOrConnectWithoutPlayerInput = {
    where: FlightLeaderboardWhereUniqueInput
    create: XOR<FlightLeaderboardCreateWithoutPlayerInput, FlightLeaderboardUncheckedCreateWithoutPlayerInput>
  }

  export type FlightLeaderboardCreateManyPlayerInputEnvelope = {
    data: FlightLeaderboardCreateManyPlayerInput | FlightLeaderboardCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type CharacterStatsUpsertWithWhereUniqueWithoutPlayerInput = {
    where: CharacterStatsWhereUniqueInput
    update: XOR<CharacterStatsUpdateWithoutPlayerInput, CharacterStatsUncheckedUpdateWithoutPlayerInput>
    create: XOR<CharacterStatsCreateWithoutPlayerInput, CharacterStatsUncheckedCreateWithoutPlayerInput>
  }

  export type CharacterStatsUpdateWithWhereUniqueWithoutPlayerInput = {
    where: CharacterStatsWhereUniqueInput
    data: XOR<CharacterStatsUpdateWithoutPlayerInput, CharacterStatsUncheckedUpdateWithoutPlayerInput>
  }

  export type CharacterStatsUpdateManyWithWhereWithoutPlayerInput = {
    where: CharacterStatsScalarWhereInput
    data: XOR<CharacterStatsUpdateManyMutationInput, CharacterStatsUncheckedUpdateManyWithoutPlayerInput>
  }

  export type CharacterStatsScalarWhereInput = {
    AND?: CharacterStatsScalarWhereInput | CharacterStatsScalarWhereInput[]
    OR?: CharacterStatsScalarWhereInput[]
    NOT?: CharacterStatsScalarWhereInput | CharacterStatsScalarWhereInput[]
    id?: IntFilter<"CharacterStats"> | number
    playerEmail?: StringFilter<"CharacterStats"> | string
    type?: EnumCharacterTypeFilter<"CharacterStats"> | $Enums.CharacterType
    level?: IntFilter<"CharacterStats"> | number
    xp?: IntFilter<"CharacterStats"> | number
    lives?: IntFilter<"CharacterStats"> | number
    updatedAt?: DateTimeFilter<"CharacterStats"> | Date | string
  }

  export type SurvivalLeaderboardUpsertWithWhereUniqueWithoutPlayerInput = {
    where: SurvivalLeaderboardWhereUniqueInput
    update: XOR<SurvivalLeaderboardUpdateWithoutPlayerInput, SurvivalLeaderboardUncheckedUpdateWithoutPlayerInput>
    create: XOR<SurvivalLeaderboardCreateWithoutPlayerInput, SurvivalLeaderboardUncheckedCreateWithoutPlayerInput>
  }

  export type SurvivalLeaderboardUpdateWithWhereUniqueWithoutPlayerInput = {
    where: SurvivalLeaderboardWhereUniqueInput
    data: XOR<SurvivalLeaderboardUpdateWithoutPlayerInput, SurvivalLeaderboardUncheckedUpdateWithoutPlayerInput>
  }

  export type SurvivalLeaderboardUpdateManyWithWhereWithoutPlayerInput = {
    where: SurvivalLeaderboardScalarWhereInput
    data: XOR<SurvivalLeaderboardUpdateManyMutationInput, SurvivalLeaderboardUncheckedUpdateManyWithoutPlayerInput>
  }

  export type SurvivalLeaderboardScalarWhereInput = {
    AND?: SurvivalLeaderboardScalarWhereInput | SurvivalLeaderboardScalarWhereInput[]
    OR?: SurvivalLeaderboardScalarWhereInput[]
    NOT?: SurvivalLeaderboardScalarWhereInput | SurvivalLeaderboardScalarWhereInput[]
    id?: IntFilter<"SurvivalLeaderboard"> | number
    playerEmail?: StringFilter<"SurvivalLeaderboard"> | string
    characterUsed?: EnumCharacterTypeNullableFilter<"SurvivalLeaderboard"> | $Enums.CharacterType | null
    points?: IntFilter<"SurvivalLeaderboard"> | number
    wave?: IntFilter<"SurvivalLeaderboard"> | number
    time?: FloatFilter<"SurvivalLeaderboard"> | number
    createdAt?: DateTimeFilter<"SurvivalLeaderboard"> | Date | string
  }

  export type FlightLeaderboardUpsertWithWhereUniqueWithoutPlayerInput = {
    where: FlightLeaderboardWhereUniqueInput
    update: XOR<FlightLeaderboardUpdateWithoutPlayerInput, FlightLeaderboardUncheckedUpdateWithoutPlayerInput>
    create: XOR<FlightLeaderboardCreateWithoutPlayerInput, FlightLeaderboardUncheckedCreateWithoutPlayerInput>
  }

  export type FlightLeaderboardUpdateWithWhereUniqueWithoutPlayerInput = {
    where: FlightLeaderboardWhereUniqueInput
    data: XOR<FlightLeaderboardUpdateWithoutPlayerInput, FlightLeaderboardUncheckedUpdateWithoutPlayerInput>
  }

  export type FlightLeaderboardUpdateManyWithWhereWithoutPlayerInput = {
    where: FlightLeaderboardScalarWhereInput
    data: XOR<FlightLeaderboardUpdateManyMutationInput, FlightLeaderboardUncheckedUpdateManyWithoutPlayerInput>
  }

  export type FlightLeaderboardScalarWhereInput = {
    AND?: FlightLeaderboardScalarWhereInput | FlightLeaderboardScalarWhereInput[]
    OR?: FlightLeaderboardScalarWhereInput[]
    NOT?: FlightLeaderboardScalarWhereInput | FlightLeaderboardScalarWhereInput[]
    id?: IntFilter<"FlightLeaderboard"> | number
    playerEmail?: StringFilter<"FlightLeaderboard"> | string
    characterUsed?: EnumCharacterTypeNullableFilter<"FlightLeaderboard"> | $Enums.CharacterType | null
    time?: FloatFilter<"FlightLeaderboard"> | number
    createdAt?: DateTimeFilter<"FlightLeaderboard"> | Date | string
  }

  export type PlayerCreateWithoutCharactersInput = {
    email: string
    username: string
    createdAt?: Date | string
    survivalScores?: SurvivalLeaderboardCreateNestedManyWithoutPlayerInput
    flightScores?: FlightLeaderboardCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutCharactersInput = {
    email: string
    username: string
    createdAt?: Date | string
    survivalScores?: SurvivalLeaderboardUncheckedCreateNestedManyWithoutPlayerInput
    flightScores?: FlightLeaderboardUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutCharactersInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutCharactersInput, PlayerUncheckedCreateWithoutCharactersInput>
  }

  export type CharacterAttributeProgressCreateWithoutCharacterStatsInput = {
    category: $Enums.SkillCategory
    currentLevel?: number
  }

  export type CharacterAttributeProgressUncheckedCreateWithoutCharacterStatsInput = {
    id?: number
    category: $Enums.SkillCategory
    currentLevel?: number
  }

  export type CharacterAttributeProgressCreateOrConnectWithoutCharacterStatsInput = {
    where: CharacterAttributeProgressWhereUniqueInput
    create: XOR<CharacterAttributeProgressCreateWithoutCharacterStatsInput, CharacterAttributeProgressUncheckedCreateWithoutCharacterStatsInput>
  }

  export type CharacterAttributeProgressCreateManyCharacterStatsInputEnvelope = {
    data: CharacterAttributeProgressCreateManyCharacterStatsInput | CharacterAttributeProgressCreateManyCharacterStatsInput[]
    skipDuplicates?: boolean
  }

  export type PlayerUpsertWithoutCharactersInput = {
    update: XOR<PlayerUpdateWithoutCharactersInput, PlayerUncheckedUpdateWithoutCharactersInput>
    create: XOR<PlayerCreateWithoutCharactersInput, PlayerUncheckedCreateWithoutCharactersInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutCharactersInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutCharactersInput, PlayerUncheckedUpdateWithoutCharactersInput>
  }

  export type PlayerUpdateWithoutCharactersInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    survivalScores?: SurvivalLeaderboardUpdateManyWithoutPlayerNestedInput
    flightScores?: FlightLeaderboardUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutCharactersInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    survivalScores?: SurvivalLeaderboardUncheckedUpdateManyWithoutPlayerNestedInput
    flightScores?: FlightLeaderboardUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type CharacterAttributeProgressUpsertWithWhereUniqueWithoutCharacterStatsInput = {
    where: CharacterAttributeProgressWhereUniqueInput
    update: XOR<CharacterAttributeProgressUpdateWithoutCharacterStatsInput, CharacterAttributeProgressUncheckedUpdateWithoutCharacterStatsInput>
    create: XOR<CharacterAttributeProgressCreateWithoutCharacterStatsInput, CharacterAttributeProgressUncheckedCreateWithoutCharacterStatsInput>
  }

  export type CharacterAttributeProgressUpdateWithWhereUniqueWithoutCharacterStatsInput = {
    where: CharacterAttributeProgressWhereUniqueInput
    data: XOR<CharacterAttributeProgressUpdateWithoutCharacterStatsInput, CharacterAttributeProgressUncheckedUpdateWithoutCharacterStatsInput>
  }

  export type CharacterAttributeProgressUpdateManyWithWhereWithoutCharacterStatsInput = {
    where: CharacterAttributeProgressScalarWhereInput
    data: XOR<CharacterAttributeProgressUpdateManyMutationInput, CharacterAttributeProgressUncheckedUpdateManyWithoutCharacterStatsInput>
  }

  export type CharacterAttributeProgressScalarWhereInput = {
    AND?: CharacterAttributeProgressScalarWhereInput | CharacterAttributeProgressScalarWhereInput[]
    OR?: CharacterAttributeProgressScalarWhereInput[]
    NOT?: CharacterAttributeProgressScalarWhereInput | CharacterAttributeProgressScalarWhereInput[]
    id?: IntFilter<"CharacterAttributeProgress"> | number
    characterStatsId?: IntFilter<"CharacterAttributeProgress"> | number
    category?: EnumSkillCategoryFilter<"CharacterAttributeProgress"> | $Enums.SkillCategory
    currentLevel?: IntFilter<"CharacterAttributeProgress"> | number
  }

  export type CharacterStatsCreateWithoutUpgradesInput = {
    type: $Enums.CharacterType
    level?: number
    xp?: number
    lives?: number
    updatedAt?: Date | string
    player: PlayerCreateNestedOneWithoutCharactersInput
  }

  export type CharacterStatsUncheckedCreateWithoutUpgradesInput = {
    id?: number
    playerEmail: string
    type: $Enums.CharacterType
    level?: number
    xp?: number
    lives?: number
    updatedAt?: Date | string
  }

  export type CharacterStatsCreateOrConnectWithoutUpgradesInput = {
    where: CharacterStatsWhereUniqueInput
    create: XOR<CharacterStatsCreateWithoutUpgradesInput, CharacterStatsUncheckedCreateWithoutUpgradesInput>
  }

  export type CharacterStatsUpsertWithoutUpgradesInput = {
    update: XOR<CharacterStatsUpdateWithoutUpgradesInput, CharacterStatsUncheckedUpdateWithoutUpgradesInput>
    create: XOR<CharacterStatsCreateWithoutUpgradesInput, CharacterStatsUncheckedCreateWithoutUpgradesInput>
    where?: CharacterStatsWhereInput
  }

  export type CharacterStatsUpdateToOneWithWhereWithoutUpgradesInput = {
    where?: CharacterStatsWhereInput
    data: XOR<CharacterStatsUpdateWithoutUpgradesInput, CharacterStatsUncheckedUpdateWithoutUpgradesInput>
  }

  export type CharacterStatsUpdateWithoutUpgradesInput = {
    type?: EnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutCharactersNestedInput
  }

  export type CharacterStatsUncheckedUpdateWithoutUpgradesInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerEmail?: StringFieldUpdateOperationsInput | string
    type?: EnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerCreateWithoutSurvivalScoresInput = {
    email: string
    username: string
    createdAt?: Date | string
    characters?: CharacterStatsCreateNestedManyWithoutPlayerInput
    flightScores?: FlightLeaderboardCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutSurvivalScoresInput = {
    email: string
    username: string
    createdAt?: Date | string
    characters?: CharacterStatsUncheckedCreateNestedManyWithoutPlayerInput
    flightScores?: FlightLeaderboardUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutSurvivalScoresInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutSurvivalScoresInput, PlayerUncheckedCreateWithoutSurvivalScoresInput>
  }

  export type PlayerUpsertWithoutSurvivalScoresInput = {
    update: XOR<PlayerUpdateWithoutSurvivalScoresInput, PlayerUncheckedUpdateWithoutSurvivalScoresInput>
    create: XOR<PlayerCreateWithoutSurvivalScoresInput, PlayerUncheckedCreateWithoutSurvivalScoresInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutSurvivalScoresInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutSurvivalScoresInput, PlayerUncheckedUpdateWithoutSurvivalScoresInput>
  }

  export type PlayerUpdateWithoutSurvivalScoresInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterStatsUpdateManyWithoutPlayerNestedInput
    flightScores?: FlightLeaderboardUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutSurvivalScoresInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterStatsUncheckedUpdateManyWithoutPlayerNestedInput
    flightScores?: FlightLeaderboardUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateWithoutFlightScoresInput = {
    email: string
    username: string
    createdAt?: Date | string
    characters?: CharacterStatsCreateNestedManyWithoutPlayerInput
    survivalScores?: SurvivalLeaderboardCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutFlightScoresInput = {
    email: string
    username: string
    createdAt?: Date | string
    characters?: CharacterStatsUncheckedCreateNestedManyWithoutPlayerInput
    survivalScores?: SurvivalLeaderboardUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutFlightScoresInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutFlightScoresInput, PlayerUncheckedCreateWithoutFlightScoresInput>
  }

  export type PlayerUpsertWithoutFlightScoresInput = {
    update: XOR<PlayerUpdateWithoutFlightScoresInput, PlayerUncheckedUpdateWithoutFlightScoresInput>
    create: XOR<PlayerCreateWithoutFlightScoresInput, PlayerUncheckedCreateWithoutFlightScoresInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutFlightScoresInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutFlightScoresInput, PlayerUncheckedUpdateWithoutFlightScoresInput>
  }

  export type PlayerUpdateWithoutFlightScoresInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterStatsUpdateManyWithoutPlayerNestedInput
    survivalScores?: SurvivalLeaderboardUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutFlightScoresInput = {
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharacterStatsUncheckedUpdateManyWithoutPlayerNestedInput
    survivalScores?: SurvivalLeaderboardUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type CharacterStatsCreateManyPlayerInput = {
    id?: number
    type: $Enums.CharacterType
    level?: number
    xp?: number
    lives?: number
    updatedAt?: Date | string
  }

  export type SurvivalLeaderboardCreateManyPlayerInput = {
    id?: number
    characterUsed?: $Enums.CharacterType | null
    points: number
    wave: number
    time: number
    createdAt?: Date | string
  }

  export type FlightLeaderboardCreateManyPlayerInput = {
    id?: number
    characterUsed?: $Enums.CharacterType | null
    time: number
    createdAt?: Date | string
  }

  export type CharacterStatsUpdateWithoutPlayerInput = {
    type?: EnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upgrades?: CharacterAttributeProgressUpdateManyWithoutCharacterStatsNestedInput
  }

  export type CharacterStatsUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upgrades?: CharacterAttributeProgressUncheckedUpdateManyWithoutCharacterStatsNestedInput
  }

  export type CharacterStatsUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType
    level?: IntFieldUpdateOperationsInput | number
    xp?: IntFieldUpdateOperationsInput | number
    lives?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurvivalLeaderboardUpdateWithoutPlayerInput = {
    characterUsed?: NullableEnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType | null
    points?: IntFieldUpdateOperationsInput | number
    wave?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurvivalLeaderboardUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterUsed?: NullableEnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType | null
    points?: IntFieldUpdateOperationsInput | number
    wave?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurvivalLeaderboardUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterUsed?: NullableEnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType | null
    points?: IntFieldUpdateOperationsInput | number
    wave?: IntFieldUpdateOperationsInput | number
    time?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightLeaderboardUpdateWithoutPlayerInput = {
    characterUsed?: NullableEnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType | null
    time?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightLeaderboardUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterUsed?: NullableEnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType | null
    time?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightLeaderboardUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterUsed?: NullableEnumCharacterTypeFieldUpdateOperationsInput | $Enums.CharacterType | null
    time?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterAttributeProgressCreateManyCharacterStatsInput = {
    id?: number
    category: $Enums.SkillCategory
    currentLevel?: number
  }

  export type CharacterAttributeProgressUpdateWithoutCharacterStatsInput = {
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    currentLevel?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterAttributeProgressUncheckedUpdateWithoutCharacterStatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    currentLevel?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterAttributeProgressUncheckedUpdateManyWithoutCharacterStatsInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    currentLevel?: IntFieldUpdateOperationsInput | number
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