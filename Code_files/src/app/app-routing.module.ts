import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipsComponent } from './start-page_tips/tips.component';
import { FavoritesComponent } from './start-page_favorites/favorites.component';
import { RecoFormComponent } from './reco-form/reco-form.component';
import { WelcomeComponent } from './start-page/welcome.component';


const routes: Routes = [
  { path: 'tips', component: TipsComponent},
  {path: 'welcome', component: WelcomeComponent},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: 'favorites', component: FavoritesComponent},
  { path: 'reco-form', component: RecoFormComponent},
  { path: 'shop', loadChildren: () => import('./shop_services/shop.module').then(m => m.ShopModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
