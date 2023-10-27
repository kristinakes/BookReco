import { Injectable } from '@angular/core';
import { Tip } from './tip';
import { TIPS } from './tip-list';

@Injectable({
  providedIn: 'root'
})
export class TipService {

  constructor() { }

  getTips(): Tip[] {
    return TIPS;
  }
}
