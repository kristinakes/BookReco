import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; //maight not be used
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipsComponent } from './start-page_tips/tips.component';
import { FavoritesComponent } from './start-page_favorites/favorites.component';
import { RecoFormComponent } from './reco-form/reco-form.component';
import { WelcomeComponent } from './start-page/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './nav-header/header.component';
import { SidenavComponent } from './nav-sidenav/sidenav.component';
import { environment } from 'src/environments/environment.development';
import { RecoService } from './reco-form/reco.service';


@NgModule({
  declarations: [
    AppComponent,
    TipsComponent,
    FavoritesComponent,
    RecoFormComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  exports: [
  ],
  providers: [RecoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
