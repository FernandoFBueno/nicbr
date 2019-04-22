import { Component, OnInit } from '@angular/core';
import { SessoesService } from './services/sessoes.service';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';
import { User } from './models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'FrontEndSPA';

  public user = new User();
  fontSize: number;
  tamFonte = '';
  divSite: HTMLElement = document.getElementById('site');
  temContraste: boolean;

  constructor(private sessoesService: SessoesService,
              private router: Router,
              private data: DataService) { }

  public fnSair(): void {
    this.router.navigate(['/']);
  }

  public fnContraste(): void {
    this.temContraste = !this.temContraste;
    this.sessoesService.setContraste(this.temContraste);
  }

  public fnDiminuirFonte(): void {
    if (this.fontSize > 50) {
      this.fontSize = this.fontSize - 25;
      this.tamFonte = 'Fonte' + this.fontSize;
      this.sessoesService.setFontSize(this.fontSize);
    }
  }

  public fnAumentarFonte(): void {
    if (this.fontSize < 150) {
      this.fontSize = this.fontSize + 25;
      this.tamFonte = 'Fonte' + this.fontSize;
      this.sessoesService.setFontSize(this.fontSize);
    }
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(users => this.user = users);
    this.data.changeMessage(this.user);

    if (this.sessoesService.getFontSize() > 0) {
      this.fontSize = this.sessoesService.getFontSize();
    } else {
      this.fontSize = 100;
    }

    if (this.sessoesService.getContraste() === true) {
      this.temContraste = true;
    } else {
      this.temContraste = false;
    }

    this.tamFonte = 'Fonte' + this.fontSize;
    this.divSite = document.getElementById('site');
  }
}
