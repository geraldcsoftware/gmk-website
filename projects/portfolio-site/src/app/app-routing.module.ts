import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage, ContactPage } from './pages';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePage },
  { path: 'contact', component: ContactPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
