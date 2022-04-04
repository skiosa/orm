// Get all Keys of T with Type U
export type KeysOfType<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T];
export type RequiredKeys<T> = Exclude<KeysOfType<T, Exclude<T[keyof T], undefined>>, undefined>;
export type OptionalKeys<T> = Exclude<keyof T, RequiredKeys<T>>;
export type ExcludeOptionalProps<T> = Pick<T, RequiredKeys<T>>
export type RequiredFieldsOnly<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K]
}
type MappedC<A, B> = {
    [K in keyof A & keyof B]:
    A[K] extends B[K]
    ? never
    : K
};
type OptionalKeys2<T> = MappedC<T, Required<T>>[keyof T];
type foo = { a: string, b: string | undefined, c?: string };
type A = ExcludeOptionalProps<foo>
type B = RequiredFieldsOnly<foo>
type C = RequiredKeys<foo>
type D = KeysOfType<foo, undefined>
type E = Omit<A, "a" | "b">
type F = OptionalKeys2<foo>


type Intersection<T> = { [K in keyof T]: T[K] extends Partial<T>[K] ? T[K] : never };
type G = Intersection<foo>;