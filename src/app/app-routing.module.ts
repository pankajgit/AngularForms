import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'templateForm', component: TemplateFormComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  HomeComponent,
  TemplateFormComponent,
  ReactiveFormComponent,
  PageNotFoundComponent
] ;
