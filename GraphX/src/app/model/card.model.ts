export class Graph {
  _id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  grade: number;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || 0;
    this.title = (obj && obj.title) || '';
    this.subtitle = (obj && obj.subtitle) || '';
    this.description = (obj && obj.description) || '';
    this.image = (obj && obj.image) || '';
    this.grade = (obj && obj.grade) || 0;
  }
}

export class GraphList {
  count: number;
  results: Graph[];

  constructor(obj?: any) {
    this.count = (obj && obj.count) || 0;
    this.results =
      (obj && obj.results && obj.results.map((elem: any) => new Graph(elem))) ||
      [];
  }
}
