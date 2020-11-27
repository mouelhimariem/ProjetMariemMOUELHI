import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/models/commentaire';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() cmnt:Commentaire;

  constructor() {
    console.log(this.cmnt);
   }

  ngOnInit(): void {
  }

}
