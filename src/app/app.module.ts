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
import { UpdateEventComponent } from './update-event/update-event.component';
import { UpdateArticalComponent } from './update-artical/update-artical.component';
import { OwnerNavComponent } from './owner-nav/owner-nav.component';
import { HomeOwnerComponent } from './home-owner/home-owner.component';
import { SideOwnerComponent } from './side-owner/side-owner.component';
import { OwnerArticalComponent } from './owner-artical/owner-artical.component';
import { OwnerDhashComponent } from './owner-dhash/owner-dhash.component';

import { HttpClientModule } from '@angular/common/http';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { UserAssociationProfilComponent } from './user-association-profil/user-association-profil.component';
import { EventsComponent } from './events/events.component';



const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Inscri', component: InscriassociationComponent },

//super admin
{path:'superadmin',component:HomesuperadminComponent,children:[
  { path: 'Dashboared', component: DashboaredComponent },
  { path: 'listeAssociation', component: ListeAssociationComponent },
  { path: 'listeRequest', component: ListeRequestComponent },
  { path: 'ProfilAssociation/:id', component: ProfilAssociationComponent },
  { path: 'ProfilAss/:id', component: ProfilAssComponent },

]},

{path: 'owner', component: HomeOwnerComponent,children:[
  { path: 'updateEvent/:id', component: UpdateEventComponent },
  { path: 'updateArtical/:id', component: UpdateArticalComponent },
  { path: 'OwnerArtical', component: OwnerArticalComponent },
  { path: 'OwnerDashowner', component: OwnerDhashComponent },
]},
{ path: 'home', component: AcceuilComponent },
{ path: 'event/:id', component: EventsComponent },
{ path: 'ProfilAssComponent/:id', component: UserAssociationProfilComponent },
];



//owner

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriassociationComponent,
    SaidbarComponent,
    HomesuperadminComponent,
    DashboaredComponent,
    NavComponent,
    ListeAssociationComponent,
    ListeRequestComponent,
    ProfilAssociationComponent,
    ProfilAssComponent,
    UpdateEventComponent,
    UpdateArticalComponent,
    OwnerNavComponent,
    HomeOwnerComponent,
    SideOwnerComponent,
    OwnerArticalComponent,
    OwnerDhashComponent,
    AcceuilComponent,
    UserAssociationProfilComponent,
    EventsComponent
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
