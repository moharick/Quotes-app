import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Output() isComplete = new EventEmitter<boolean>();
    uvotes = 0;
    dvotes = 0;

    upVote() {
      this.uvotes = this.uvotes + 1;
    }

    downVote() {
      this.dvotes = this.dvotes + 1;
    }

  constructor() { }

  ngOnInit() {
  }

}
