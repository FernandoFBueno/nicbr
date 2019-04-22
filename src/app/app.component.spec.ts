import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoricoComponent } from './historico/historico.component';
import { CollectorService } from './services/collector.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DataService } from './services/data.service';
import { SESSION_STORAGE, StorageServiceModule} from 'angular-webstorage-service';
import { NIC_SESSION_STORAGE, SessoesService } from './services/sessoes.service';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        AppComponent,
        HistoricoComponent,
        HomeComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        StorageServiceModule,
        RouterTestingModule
      ],
      providers: [
        CollectorService,
        DataService,
        { provide: NIC_SESSION_STORAGE, useExisting: SESSION_STORAGE },
        SessoesService
      ],

    }).compileComponents();
  }));

  beforeEach(async(() => {
    this.fixture = TestBed.createComponent(AppComponent);
    this.component = this.fixture.componentInstance;
    this.compiled = this.fixture.debugElement.nativeElement;

  }));

  it('Teste de criação do AppComponent', () => {
    expect(this.component).toBeTruthy();
  });

  it(`Validando a variável title = 'FrontEndSPA'`, () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('FrontEndSPA');
  });

  it('Validando se possuí h1 tag', () => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Bem vindo ao FrontEndSPA!');
  });


});
