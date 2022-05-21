import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriassociationComponent } from './association/inscriassociation/inscriassociation.component';
import { SaidbarComponent } from './superadmin/saidbar/saidbar.component';
import { HomesuperadminComponent } from './superadmin/homesuperadmin/homesuperadmin.component';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';




const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Inscri', component: InscriassociationComponent },

//super admin
{path:'superadmin',component:HomesuperadminComponent,children:[


]},


];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriassociationComponent,
    SaidbarComponent,
    HomesuperadminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),

     // Material
     MatStepperModule,
     MatInputModule,
     MatFormFieldModule,
     ReactiveFormsModule,
     FormsModule,
     MatIconModule,
     MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
