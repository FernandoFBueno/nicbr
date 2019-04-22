import { Component, OnInit } from '@angular/core';
import { CollectorService } from '../services/collector.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { NIC_SESSION_STORAGE, SessoesService } from '../services/sessoes.service';
import { NIC_LOCAL_STORAGE, LocalWebStorageService } from '../services/localstorage.service';

@Component({
  selector: 'app-fullstack',
  templateUrl: './fullstack.component.html'
})
export class FullstackComponent implements OnInit {

  constructor(private collectorService: CollectorService,
              private http: HttpClient,
              private sessoesService: SessoesService) { }

  public getCollector() {

    this.collectorService.getCollector()
    .subscribe((response: any) => {
      console.log(response);

    },
    error => {
      console.dir(error);
    });
  }

  ngOnInit() {
    this.getCollector();
  }

}
