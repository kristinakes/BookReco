import { Injectable } from '@angular/core';
import { Reco } from './reco.model';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RecoService {
    //used to fetch data from db
    recosChanged = new Subject<Reco[]>();
    private fbSubscriptions: Subscription[] = [];

    //used to put new recos to db
    private addedReco: Reco;

  constructor(private db: AngularFirestore) {}

  fetchRecos() {
    this.fbSubscriptions.push(
        this.db.collection('recommendations')
        .valueChanges()
        .subscribe((recos: Reco[]) => {
            this.recosChanged.next(recos);
        }));
  }

  pushRecosToDb(newReco) {
    this.addedReco = newReco;
    this.addDataToDatabase({
        ...this.addedReco,
        date: new Date()});
    this.addedReco = null;
  }

  private addDataToDatabase(reco: Reco) {
    return this.db.collection('recommendations').add(reco);
  }
  
  cancelSubscriptions() {
    this.fbSubscriptions.forEach(sub => sub.unsubscribe());
    }
}
