import { PreventionsComponent } from './preventions/preventions.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { TravelingStatsComponent } from './traveling-stats/traveling-stats.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path:"home",component:MainComponent}, 
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'statistics', component:TravelingStatsComponent},
{path:'symptoms', component:SymptomsComponent},
{path:'prevention', component:PreventionsComponent},
{path:'**',component:PageNotFoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
