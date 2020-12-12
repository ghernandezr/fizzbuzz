export interface IRange {
  start?: number;
  end?: number;
}

export class Range implements IRange {
  constructor(public start?: number, public end?: number) {}
}
