import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { RecoService } from './reco.service';

@Component({
  selector: 'reco-form',
  templateUrl: './reco-form.component.html',
  styleUrls: ['./reco-form.component.css']
})
export class RecoFormComponent {

   public genres = ['Novel', 'Fiction', 'Fantasy', 'Poetry', 'Other'];

   constructor(private recoService: RecoService, private router: Router) {};

   onSubmit(form: NgForm) {
      this.recoService.pushRecosToDb(form);
      this.router.navigate(['welcome']);
   }
}
