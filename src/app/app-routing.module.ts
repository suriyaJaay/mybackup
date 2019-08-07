import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentA } from './component/component-a/component-a';
import { ComponentB } from './component/component-b/component-b';
const routes: Routes = [
{ path: '',redirectTo: '/menuA', pathMatch: 'full'},
{path: 'menuA', component: ComponentA},
{path: 'menuB', component: ComponentB},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
