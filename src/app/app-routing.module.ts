import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ShowWishListPageComponent } from './show-wish-list-page/show-wish-list-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'showWishList', component: ShowWishListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
