import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { DataService } from './services/data.service';
import { SESSION_STORAGE, LOCAL_STORAGE, StorageServiceModule} from 'angular-webstorage-service';
import { NIC_SESSION_STORAGE, SessoesService } from './services/sessoes.service';
import { NIC_LOCAL_STORAGE, LocalWebStorageService } from './services/localstorage.service';
import { HistoricoComponent } from './historico/historico.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoricoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StorageServiceModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    LoginService,
    DataService,
    { provide: NIC_SESSION_STORAGE, useExisting: SESSION_STORAGE },
    { provide: NIC_LOCAL_STORAGE, useExisting: LOCAL_STORAGE },
    SessoesService,
    LocalWebStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
