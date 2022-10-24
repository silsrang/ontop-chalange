import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactorMgtComponent } from './feature/contactor-mgt/contactor-mgt.component';

const routes: Routes = [
  { path: '',   redirectTo: '/contactor-mgt', pathMatch: 'full' }, 

  { path: 'contactor-mgt',  component: ContactorMgtComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
