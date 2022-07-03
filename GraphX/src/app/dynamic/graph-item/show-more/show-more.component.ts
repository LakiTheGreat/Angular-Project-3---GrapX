import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-more',
  templateUrl: './show-more.component.html',
  styleUrls: ['./show-more.component.css'],
})
export class ShowMoreComponent implements OnInit {
  @Input() desct: string = ''; //prima opis od roditeljske klase
  showMore = false;

  constructor() {}

  ngOnInit(): void {}

  onShow() {
    this.showMore = !this.showMore;
  }
}
