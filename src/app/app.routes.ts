import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoricoComponent } from './historico/historico.component';
import { FullstackComponent } from './fullstack/fullstack.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'historico', component: HistoricoComponent},
  {path: 'fullstack', component: FullstackComponent}
];
