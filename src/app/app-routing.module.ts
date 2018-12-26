import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { ExtjsComponent } from './extjs/extjs.component';
import { IonicComponent } from './ionic/ionic.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'extjs', component: ExtjsComponent },
  { path: 'ionic', component: IonicComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**',  component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
