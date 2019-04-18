import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { NIC_SESSION_STORAGE, SessoesService } from '../services/sessoes.service';
import { NIC_LOCAL_STORAGE, LocalWebStorageService } from '../services/localstorage.service';
import { Historico } from '../historico/historico.model';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html'
})
export class HistoricoComponent implements OnInit {
  historicoJson;

  historico: Historico[];
  history: Historico[];
  hist = [];

  constructor(private sessoesService: SessoesService,
              private localStorageService: LocalWebStorageService) { }


  ngOnInit() {

    this.historicoJson = this.localStorageService.getHistorico();
    this.historicoJson = JSON.parse(this.historicoJson);
    if (this.historicoJson === null) {
      this.history = [];
    } else {
      this.history = this.historicoJson;
    }

    for (let j = 0; j < this.history.length; j++) {
      this.hist.push(JSON.parse(this.historicoJson[j]));
      // this.historico = new Historico(this.hist);
    }




  }

}
