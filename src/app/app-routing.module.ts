import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { SignupComponent } from './signup/signup.component'; 

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: SignupComponent }, // Agrega la ruta hacia el nuevo componente
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
