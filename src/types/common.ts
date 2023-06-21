export type Order = "asc" | "desc" | "";
export interface Dictionary<T = any> {
  [key: string]: T;
}
