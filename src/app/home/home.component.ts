import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { NIC_SESSION_STORAGE, SessoesService } from '../services/sessoes.service';
import { NIC_LOCAL_STORAGE, LocalWebStorageService } from '../services/localstorage.service';
import { DataService } from '../services/data.service';
import { Historico } from '../historico/historico.model';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
  noAnimateClass = '';
  noAnimateClass2 = 'no-animate';
  @Input() DownMbps = 0;
  @Input() UpMbps = 0;
  @Input() calculando: string;
  historico = '';
  historicoJson;
  histaux = [];
  mediaCont = 0;
  mediaDown = 0;
  mediaValorDown = 0;
  mediaUp = 0;
  mediaValorUp = 0;
  mediaDownload = '';

  public usuario = '';
  public user = new User();
  public velocidade: number;

  constructor(private sessoesService: SessoesService,
              private localStorageService: LocalWebStorageService,
              private data: DataService) { }


  public simularVelocidade(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public repeticao(direcao: string) {
    let intervalo = setInterval(() => {
      if (direcao === 'Download') {
        this.velocidade = this.simularVelocidade(90, 100);
        this.DownMbps = this.velocidade;
      } else {
        this.velocidade = this.simularVelocidade(0, 10);
        this.UpMbps = this.velocidade;
      }
    }, 1000);
    return intervalo;
  }

  public pararContagem(intervalo) {
    if (this.calculando === 'Upload') {
      if (this.usuario === '') {
        this.usuario = 'Usuario não informado';
      }

      this.historico = JSON.stringify({
        Download: this.DownMbps,
        Upload: this.UpMbps,
        Usuario: this.usuario,
        Data: new Date().toLocaleString()
      });
      this.historicoJson.push(this.historico);
      this.localStorageService.setHistorico(JSON.stringify(this.historicoJson));

      this.mediaDown = this.mediaDown + this.DownMbps;
      this.mediaUp = this.mediaUp + this.UpMbps;
      this.mediaCont++;

      this.mediaValorDown = (this.mediaDown / this.mediaCont);
      this.mediaValorUp = (this.mediaUp / this.mediaCont);

      this.localStorageService.setMedia(this.mediaValorDown.toFixed(2));

      console.log(this.mediaValorDown.toFixed(2));
      this.mediaDownload = 'Sua média de Download é: ' + this.localStorageService.getMedia();
      this.user.Usuario = this.usuario;
      this.user.mediaDowload = this.mediaValorDown;
      this.user.mediaUpload = this.mediaValorUp;
      // persiste os dados da classe User entre as telas sem usar storage
      // util para passar dados sensiveis sem necessidade de criptografar o storage
      this.data.changeMessage(this.user);

    }
    clearInterval(intervalo);
    this.calculando = 'Teste concluído';
    this.noAnimateClass = 'no-animate';
    this.noAnimateClass2 = 'no-animate';
  }
  public getVelocidade(direcao: string) {
    this.calculando = direcao;
    if (direcao === 'Upload') {
      this.noAnimateClass2 = '';
    }
    let intervalo = this.repeticao(direcao);
    setTimeout(() =>
      this.pararContagem(intervalo)
    , 10000);
    return null;
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(users => this.user = users);
    // this.localStorageService.removeHistorico();
    this.historicoJson = this.localStorageService.getHistorico();
    this.historicoJson = JSON.parse(this.historicoJson);

    for (const value of this.historicoJson) {
      this.histaux.push(JSON.parse(value));
    }

    for (const value of this.histaux) {
      this.mediaDown = this.mediaDown + value.Download;
      this.mediaUp = this.mediaUp + value.Upload;
      this.mediaCont++;
    }

    if (this.historicoJson === null) {
      this.historicoJson = [];
    }

    this.getVelocidade('Download');

    setTimeout(() =>
      this.getVelocidade('Upload')
    , 10000);
  }
}
