import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { GraphListComponent } from './dynamic/graph-list/graph-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'graph', component: GraphListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
