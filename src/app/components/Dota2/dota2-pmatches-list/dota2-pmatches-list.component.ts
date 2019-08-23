import { Component, OnInit } from '@angular/core';
import { Match } from '../../../models/match';
import { Dota2Service } from '../../../services/dota2.service';

@Component({
  selector: 'app-dota2-pmatches-list',
  templateUrl: './dota2-pmatches-list.component.html',
  styleUrls: ['./dota2-pmatches-list.component.css']
})
export class Dota2PmatchesListComponent implements OnInit {
  matches: Array<Match>;

  constructor(private dota2Service: Dota2Service) {

   }

  ngOnInit() {
    this.dota2Service.listAllPreviousMatches().subscribe(data => {this.matches=data; });
  }

}
