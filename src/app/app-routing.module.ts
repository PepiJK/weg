import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WineListComponent} from "./wine-list/wine-list.component";
import {WineDetailComponent} from "./wine-detail/wine-detail.component";
import {WineNewComponent} from "./wine-new/wine-new.component";


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: WineListComponent},
  {path: 'detail/:id', component: WineDetailComponent},
  {path: 'detail', component: WineListComponent},
  {path: 'new', component: WineNewComponent},
  {path: '**', redirectTo: 'list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
