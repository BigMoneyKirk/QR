import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RoutingConstant } from './constant/RoutingConstant';
import { IWantOneComponent } from './pages/i-want-one/i-want-one.component';


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: MainComponent },
  { path: RoutingConstant.IWantOne, component: IWantOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
