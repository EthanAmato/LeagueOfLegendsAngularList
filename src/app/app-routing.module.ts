import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionsComponent } from './champions/champions.component';
import { InfoComponent } from './info/info.component';
import { WorldsinfoComponent } from './worldsinfo/worldsinfo.component';
const routes: Routes = [
  { path: 'champions', component: ChampionsComponent },
  { path: 'info', component: InfoComponent},
  { path: 'worlds', component: WorldsinfoComponent},
  { path: '', redirectTo: '/info', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }