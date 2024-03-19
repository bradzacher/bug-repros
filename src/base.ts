export abstract class One<
  D = unknown,
  S = unknown,
  M = unknown,
  DP = unknown,
  SP = unknown,
> {}
export abstract class Two<
  D = any,
  S = any,
  M = any,
  DP = any,
  SP = any,
> extends One<D, S, M, DP, SP> {
  readonly a!: D;
  readonly b!: S;
  readonly c!: M;
  abstract readonly d: Six<D, S>;
}

export class Three<D> {}
export class Four<D> {}
export type Five<D, S> = Three<D> | Four<S> | undefined;
export abstract class Six<D = unknown, S = unknown> {
  readonly e!: D;
  readonly f!: S;
}

export type Seven<S> = S;
export class Eight<D, S> extends Six<Five<D, S>, Seven<S>> {}
export type Nine<C extends Six> = Eight<Ten<C>, Eleven<C>>;
export type Ten<C extends Six> = C["e"];
export type Eleven<C extends Six> = C["f"];
export type Twelve<T> = Nine<Fourteen<T>>;
export type Thirteen<T> = Ten<Twelve<T>>;
export class Fourteen<T> extends Six<void, T> {}
export interface Fifteen<T> {
  g: T;
}
export class Sixteen<T = any> extends Two<
  Thirteen<T>,
  T,
  Fifteen<T>,
  never,
  never
> {
  override readonly d: Eight<void, T>;
}

export type Seventeen<T extends TwentyOne> = T["h"];
export type Eighteen = { [k: string]: TwentyOne };
export type Nineteen = { [k: string]: Two };
export type Twenty = Record<string, Sixteen>;

export class TwentyOne<T = any> {
  readonly h!: T;
}
export class TwentyTwo<T extends TwentyOne> extends TwentyOne<
  Seventeen<T> | undefined
> {}
export class TwentyThree<D, S> extends Six<D | undefined, S | undefined> {}
export class TwentyFour<D, S, M, DP, SP> extends Two<
  D | undefined,
  S | undefined,
  M | undefined,
  DP | undefined,
  SP | undefined
> {
  override readonly d: TwentyThree<D, S>;
}

export type TwentyFive<T extends Two> = T["d"];
type TwentySix<V extends Eighteen, R extends Nineteen, A extends Twenty> = {
  [K in keyof V]: Fourteen<Seventeen<V[K]>>;
} & { [K in keyof R]: TwentyFive<R[K]> } & {
  [K in keyof A]: TwentyFive<A[K]>;
};
export type TwentySeven<
  V extends Eighteen,
  R extends Nineteen,
  A extends Twenty,
> = ThirtyThree<TwentySix<V, R, A>>;
export type TwentyEight<
  V extends Eighteen,
  R extends Nineteen,
  A extends Twenty,
> = Eleven<TwentySeven<V, R, A>>;
export type TwentyNine<
  V extends Eighteen,
  R extends Nineteen,
  A extends Twenty,
> = Ten<TwentySeven<V, R, A>>;
export type Thirty<C extends Eighteen> = {
  [k in keyof C]: Fourteen<Seventeen<C[k]>>;
};
export type ThirtyOne<C extends Twenty> = {
  [k in keyof C]: TwentyFive<C[k]>;
};
export type ThirtyTwo<C extends Nineteen> = {
  [k in keyof C]: TwentyFive<C[k]>;
};
export class ThirtyThree<Spec extends ThirtyFour> extends Six<
  ThirtySix<Spec>,
  ThirtyFive<Spec>
> {}
export type ThirtyFour = { readonly [k: string]: Six };
export type ThirtyFive<Domains extends ThirtyFour> = {
  readonly [K in keyof Domains]: Eleven<Domains[K]>;
};
export type ThirtySix<Domains extends ThirtyFour> = {
  readonly [K in keyof Domains]?: Ten<Domains[K]>;
};
export type ThirtySeven<T extends Two> = T["c"];
export type ThirtyEight<T extends Two> = T["b"];
export type ThirtyNine<
  V extends Eighteen,
  R extends Nineteen,
  A extends Twenty,
> = { readonly [K in keyof V]: Seventeen<V[K]> } & {
  readonly [K in keyof R]: ThirtySeven<R[K]>;
} & { [K in keyof A]: ThirtyEight<A[K]> };
export class Forty<
  V extends Eighteen,
  R extends Nineteen,
  A extends Twenty,
> extends Two<
  TwentyNine<V, R, A>,
  TwentyEight<V, R, A>,
  ThirtyNine<V, R, A>,
  never,
  never
> {
  override readonly d: ThirtyThree<Thirty<V> & ThirtyTwo<R> & ThirtyOne<A>>;
}

export declare function doThing<D, S, M, DP, SP>(
  arg: Two<D, S, M, DP, SP>,
): TwentyFour<D, S, M, DP, SP>;
