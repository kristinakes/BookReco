import { Component, Input } from '@angular/core';
import { Tip } from './tip';
import { TipService } from './tip.service';

@Component({
  selector: 'tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent {
  
    panelOpenState = false;
    tips: Tip[] = [];
    
    constructor(private tipService:TipService) {};

    ngOnInit(): void{
      this.getTips();
    }

    getTips(): void{
      this.tips = this.tipService.getTips();
    }

}
