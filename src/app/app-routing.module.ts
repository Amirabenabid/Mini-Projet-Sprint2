import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmusiqueComponent } from './add-musique/add-musique.component';
import { musiquesComponent } from './musiques/musiques.component';
import { RechercheParstyleComponent } from './recherche-par-style/recherche-par-style.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdatemusiqueComponent } from './update-musique/update-musique.component';
import { listestylesComponent } from './liste-styles/liste-styles.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { musiqueGuard } from './musique.guard';


const routes: Routes = [
  {path: "musiques", component : musiquesComponent},
  {path: "add-musique", component : AddmusiqueComponent},
  {path: "updatemusique/:id", component: UpdatemusiqueComponent},
  {path: "", redirectTo: "musiques", pathMatch: "full" },
  {path: "rechercheParstyle", component : RechercheParstyleComponent},
  {path: "listestyles", component : listestylesComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path : "add-musique", component : AddmusiqueComponent, canActivate:[musiqueGuard]},
  {path: 'login', component: LoginComponent},

  {path: "rechercheParNom", component : RechercheParNomComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
