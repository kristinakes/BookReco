import { AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription} from 'rxjs';

import { Reco } from '../reco-form/reco.model';
import { RecoService } from '../reco-form/reco.service';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, AfterViewInit, OnDestroy {
  //for passing values between components
  @Output() newSearchEvent = new EventEmitter<string>();

  displayedColumns = ['author', 'title', 'genre', 'comment', 'name', 'date'];
  recos: Reco[];
  private recoSubscriptions: Subscription;

  // data source is an object where we define what kind of data we pass there. the data model from Recos
  //It automatically assumes that it will get array so no need to define it
  dataSource = new MatTableDataSource<Reco>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private recoService: RecoService) {};

  ngOnInit(): void{
    this.recoService.fetchRecos();

    this.recoSubscriptions = this.recoService.recosChanged.subscribe((recos: Reco[]) =>{
      this.dataSource.data = recos;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(event: KeyboardEvent) {
    this.dataSource.filter = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
  }

  //for search data output
  showSearch(value: string) {
    this.newSearchEvent.emit(value);
  }

  ngOnDestroy(): void {
    if (this.recoSubscriptions) {
      this.recoSubscriptions.unsubscribe();
      this.recoService.cancelSubscriptions();
    }
  }

}
