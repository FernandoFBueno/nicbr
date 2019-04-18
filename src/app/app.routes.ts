import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoricoComponent } from './historico/historico.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'historico', component: HistoricoComponent}
];
