import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListmaterielComponent } from './informatique/listmateriel/listmateriel.component';
import { DetailmaterielComponent } from './informatique/detailmateriel/detailmateriel.component';
import { MaterielComponent } from './informatique/materiel/materiel.component';
import { CommentComponent } from './commentaires/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    ListmaterielComponent,
    DetailmaterielComponent,
    MaterielComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
