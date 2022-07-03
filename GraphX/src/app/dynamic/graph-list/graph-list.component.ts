import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Graph, GraphList } from 'src/app/model/card.model';
import { CommentList } from 'src/app/model/comment.model';
import { GraphService } from 'src/app/service/graph.service';

@Component({
  selector: 'app-graph-list',
  templateUrl: './graph-list.component.html',
  styleUrls: ['./graph-list.component.css'],
})
export class GraphListComponent implements OnInit {
  commentId = 0;
  graph: Graph = new Graph();
  cardList: GraphList = new GraphList();
  comments: CommentList = new CommentList();
  params = {
    page: 1,
    pageSize: 5,
    sort: 'grade',
    sortDirection: 'desc',
  };

  constructor(private service: GraphService) {}

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.service.getCards(this.params).subscribe({
      next: (cards: GraphList) => {
        console.log(cards);
        this.cardList = cards;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  getComments(): void {
    this.service.getComments(this.commentId).subscribe({
      next: (comments: CommentList) => {
        this.comments = comments;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  nextPage() {
    this.params.page++;
    this.getRestaurants();
  }

  previousPage() {
    this.params.page--;
    this.getRestaurants();
  }

  setPageSize(page: number) {
    this.params.pageSize = page;
    this.getRestaurants();
  }
  reciveId(id: number) {
    console.log(id);
    this.commentId = id;
    this.getComments();
    console.log(this.comments);
    this.getGraph(id);
    console.log(this.graph);
  }
  getGraph(id: number) {
    this.service.getGraph(id).subscribe({
      next: (data: Graph) => {
        console.log(data);
        this.graph = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  putGraph(card: Graph): void {
    console.log(card);
    this.service.putRequest(card._id, card).subscribe({
      next: (data: Graph) => {
        console.log(data);
        alert('success');
      },
      error: (err: any) => alert(JSON.stringify(err)),
    });
  }
}
