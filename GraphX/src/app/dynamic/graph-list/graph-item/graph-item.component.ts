import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Graph } from 'src/app/model/card.model';
@Component({
  selector: 'app-graph-item',
  templateUrl: './graph-item.component.html',
  styleUrls: ['./graph-item.component.css'],
})
export class GraphItemComponent implements OnInit {
  @Input() card: Graph = new Graph();
  @Output() newCard: EventEmitter<Graph> = new EventEmitter();
  @Output() cardIsClicked: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  changeGrade(mark: string) {
    if (mark == '+') {
      this.card.grade++;
    } else {
      this.card.grade--;
    }
    console.log(this.card);
    this.newCard.emit(this.card);
  }

  cardClicked() {
    this.cardIsClicked.emit(this.card._id);
  }
}
