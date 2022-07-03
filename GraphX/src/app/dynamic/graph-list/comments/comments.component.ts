import { Component, Input, OnInit } from '@angular/core';
import { Graph } from 'src/app/model/card.model';
import { CardComment, CommentList } from 'src/app/model/comment.model';
import { GraphService } from 'src/app/service/graph.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() comments: CommentList = new CommentList();
  @Input() commentId: number = -1;
  @Input() graph: Graph = new Graph();

  komentar: CardComment = new CardComment();

  constructor(private service: GraphService) {}

  ngOnInit(): void {
    // console.log(this.comments);
  }

  createKomentar() {
    this.komentar.cards = this.commentId;
    console.log(this.komentar);
    this.postCommentar(this.komentar);
  }

  postCommentar(comment: CardComment): void {
    this.service.postComment(this.commentId, comment).subscribe({
      next: (data: CardComment) => {
        console.log(data);
        alert('success');
      },
      error: (err: any) => alert(JSON.stringify(err)),
    });
  }
}
