export interface IResult<T> {
  succeeded: boolean;
  message: string[];
  data: T | T[];
}
