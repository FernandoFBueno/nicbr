import { Inject, Injectable, InjectionToken } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const STORAGE_HISTORICO_NAME = 'historicoName';
const STORAGE_HISTORICO_DOWN = 'historicoDown';
const STORAGE_HISTORICO_UP = 'historicoUp';
const STORAGE_HISTORICO_DATA = 'historicoData';
const STORAGE_FONTSIZE = 'font_size';
const STORAGE_CONTRASTE = 'contraste';

export const NIC_SESSION_STORAGE =
    new InjectionToken<StorageService>('NIC_SESSION_STORAGE');

@Injectable()
export class SessoesService {

  constructor(@Inject(NIC_SESSION_STORAGE) private storageSession: StorageService) {}

  public setFontSize(fontSize: number) {
    this.storageSession.set(STORAGE_FONTSIZE, fontSize);
  }

  public getFontSize() {
    return this.storageSession.get(STORAGE_FONTSIZE);
  }

  public removeFontSize() {
    this.storageSession.remove(STORAGE_FONTSIZE);
  }

  public setContraste(contraste: boolean) {
    this.storageSession.set(STORAGE_CONTRASTE, contraste);
  }

  public getContraste() {
    return this.storageSession.get(STORAGE_CONTRASTE);
  }

  public removeContraste() {
    this.storageSession.remove(STORAGE_CONTRASTE);
  }

}
