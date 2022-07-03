import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './core/nav/nav.component';
import { HomeComponent } from './core/home/home.component';
import { GraphListComponent } from './dynamic/graph-list/graph-list.component';
import { PaginationComponent } from './dynamic/graph-list/pagination/pagination.component';
import { GraphItemComponent } from './dynamic/graph-list/graph-item/graph-item.component';
import { CommentsComponent } from './dynamic/graph-list/comments/comments.component';
import { FormsModule } from '@angular/forms';
import { ShowMoreComponent } from './dynamic/graph-item/show-more/show-more.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    GraphListComponent,
    PaginationComponent,
    GraphItemComponent,
    CommentsComponent,
    ShowMoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
