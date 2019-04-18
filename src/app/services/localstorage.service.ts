import { Inject, Injectable, InjectionToken } from '@angular/core';
import { SESSION_STORAGE, LOCAL_STORAGE, StorageService, WebStorageService } from 'angular-webstorage-service';

const STORAGE_HISTORICO = 'historico';
const STORAGE_FONTSIZE = 'font_size';
const STORAGE_CONTRASTE = 'contraste';

export const NIC_LOCAL_STORAGE =
    new InjectionToken<WebStorageService>('NIC_LOCAL_STORAGE');

@Injectable()
export class LocalWebStorageService {

  constructor(@Inject(NIC_LOCAL_STORAGE) private storageSession: WebStorageService) {}

  public setHistorico(historico: any) {
      this.storageSession.set(STORAGE_HISTORICO, historico);
  }

  public getHistorico() {
      return this.storageSession.get(STORAGE_HISTORICO);
  }

  public removeHistorico() {
    this.storageSession.remove(STORAGE_HISTORICO);
  }

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
