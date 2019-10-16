import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { WitchComponent } from './witch/witch.component';


const routes: Routes = [
  { path: 'home', component: IndexComponent},
  { path: 'create', component: CreateComponent},
  { path: 'witch/:id', component: WitchComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// const routes: Routes = [
//   { path: 'alpha',component: AlphaComponent },
//   { path: 'beta',component: BetaComponent },
//   // use a colon and parameter name to include a parameter in the url
//   { path: 'gamma/:id', component: GammaComponent },
//   // redirect to /alpha if there is nothing in the url
//   { path: '', pathMatch: 'full', redirectTo: '/alpha' },
//   // the ** will catch anything that did not match any of the above routes
//   { path: '**', component: PageNotFoundComponent }
// ];
