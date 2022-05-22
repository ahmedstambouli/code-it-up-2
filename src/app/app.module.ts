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
import { DashboaredComponent } from './dashboared/dashboared.component';
import { NavComponent } from './nav/nav.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { ListeAssociationComponent } from './liste-association/liste-association.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ListeRequestComponent } from './liste-request/liste-request.component';
import { ProfilAssociationComponent } from './profil-association/profil-association.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ProfilAssComponent } from './profil-ass/profil-ass.component';

import { HttpClientModule } from '@angular/common/http';
import { HomefounderComponent } from './dashbordfounder/homefounder/homefounder.component';
import { NavbarfounderComponent } from './dashbordfounder/navbarfounder/navbarfounder.component';
import { InscriuserComponent } from './inscriuser/inscriuser.component';



const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Inscri', component: InscriassociationComponent },
  {path:'InscriUser',component:InscriuserComponent},

//super admin
{path:'superadmin',component:HomesuperadminComponent,children:[
  { path: 'Dashboared', component: DashboaredComponent },
  { path: 'listeAssociation', component: ListeAssociationComponent },
  { path: 'listeRequest', component: ListeRequestComponent },
  { path: 'ProfilAssociation/:id', component: ProfilAssociationComponent },
  { path: 'ProfilAss/:id', component: ProfilAssComponent },

]},

//founder
{path:'homefoundr',component:HomefounderComponent,children:[
  
]}


];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriassociationComponent,
    SaidbarComponent,
    HomesuperadminComponent,
    DashboaredComponent,
    NavComponent,
    HomefounderComponent,
    NavbarfounderComponent,
    ListeAssociationComponent,
    ListeRequestComponent,
    ProfilAssociationComponent,
    ProfilAssComponent,
    InscriuserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,

     // Material
     MatStepperModule,
     MatInputModule,
     MatFormFieldModule,
     ReactiveFormsModule,
     FormsModule,
     MatIconModule,
     MatCheckboxModule,
     MatTableModule,
     MatPaginatorModule ,
     MatTabsModule
     

  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
