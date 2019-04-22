import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { NIC_SESSION_STORAGE, SessoesService } from '../services/sessoes.service';
import { NIC_LOCAL_STORAGE, LocalWebStorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html'
})
export class HistoricoComponent implements OnInit {
  historicoJson;
  hist = [];

  constructor(private sessoesService: SessoesService,
              private localStorageService: LocalWebStorageService) { }

  ngOnInit() {

    this.historicoJson = this.localStorageService.getHistorico();
    this.historicoJson = JSON.parse(this.historicoJson);

    for (const value of this.historicoJson) {
      this.hist.push(JSON.parse(value));
    }
  }

}
