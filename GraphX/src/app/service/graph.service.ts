import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Graph, GraphList } from '../model/card.model';
import { CardComment, CommentList } from '../model/comment.model';

const baseUrl = 'http://localhost:3000/api/cards';
@Injectable({
  providedIn: 'root',
})
export class GraphService {
  constructor(private http: HttpClient) {}

  //sa count i results
  getCards(params?: any): Observable<GraphList> {
    let options = {};
    if (params) {
      options = {
        params: new HttpParams()
          .set('page', params.page || '')
          .set('pageSize', params.pageSize || '')
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || ''),
      };
    }
    return this.http.get(baseUrl, options).pipe(
      map((data: any) => {
        return new GraphList(data);
      })
    );
  }

  getGraph(id: number): Observable<Graph> {
    return this.http.get(`${baseUrl}/${id}`).pipe(
      map((data: any) => {
        return new Graph(data);
      })
    );
  }

  getComments(id: number): Observable<CommentList> {
    return this.http.get(baseUrl + '/' + id + '/' + 'comments').pipe(
      map((data: any) => {
        return new CommentList(data);
      })
    );
  }

  putRequest(id: number, graph: Graph): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, graph).pipe(
      map((data: any) => {
        return new Graph(data);
      })
    );
  }

  postComment(id: number, comment: CardComment): Observable<any> {
    return this.http.post(`${baseUrl}/${id}/comments`, comment).pipe(
      map((data: any) => {
        return new CardComment(data);
      })
    );
  }
}
