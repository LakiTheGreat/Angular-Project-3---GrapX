export class CardComment {
  cards: number;
  text: string;
  author: string;
  date: Date;
  _id: number;

  constructor(obj?: any) {
    this.cards = (obj && obj.cards) || 0;
    this.text = (obj && obj.text) || '';
    this.author = (obj && obj.author) || '';
    this.date = (obj && new Date(obj.date)) || new Date();
    this._id = (obj && obj._id) || 0;
  }
}

export class CommentList {
  count: number;
  results: CardComment[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj &&
        obj.results &&
        obj.results.map((elem: any) => new CardComment(elem))) ||
      [];
  }
}
