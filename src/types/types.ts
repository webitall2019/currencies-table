export interface Icurrencies {
  [key: string]: object;
}
export interface Iaction {
  type: string;
  payload: Icurrencies;
}
