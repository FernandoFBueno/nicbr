import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoricoComponent } from './historico.component';
import { LoginService } from '../services/login.service';
import { DataService } from '../services/data.service';
import { LOCAL_STORAGE, SESSION_STORAGE, StorageServiceModule} from 'angular-webstorage-service';
import { NIC_SESSION_STORAGE, SessoesService } from '../services/sessoes.service';
import { NIC_LOCAL_STORAGE, LocalWebStorageService } from '../services/localstorage.service';
import { HomeComponent } from '../home/home.component';


describe('HistoricoComponent', () => {
  let fixture: ComponentFixture<HistoricoComponent>;
  let component: HistoricoComponent;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        AppComponent,
        HomeComponent,
        HistoricoComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        StorageServiceModule,
        RouterTestingModule
      ],
      providers: [
        LoginService,
        DataService,
        { provide: NIC_SESSION_STORAGE, useExisting: SESSION_STORAGE },
        { provide: NIC_LOCAL_STORAGE, useExisting: LOCAL_STORAGE },
        SessoesService,
        LocalWebStorageService
      ],

    }).compileComponents();
  }));

  beforeEach(async(() => {
    this.fixture = TestBed.createComponent(HistoricoComponent);
    this.component = this.fixture.componentInstance;
    this.compiled = this.fixture.debugElement.nativeElement;

  }));

  it('Teste de criação do HistoricoComponent', () => {
    expect(this.component).toBeTruthy();
  });


});
