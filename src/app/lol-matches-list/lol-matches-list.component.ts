import { Component, OnInit } from '@angular/core';
import { Match }  from '../models/match';
import { LolService } from '../services/lol.service';

@Component({
  selector: 'app-lol-matches-list',
  templateUrl: './lol-matches-list.component.html',
  styleUrls: ['./lol-matches-list.component.css']
})
export class LolMatchesListComponent implements OnInit {

  matches: Array<Match>;

  constructor(private lolService: LolService) { }

  ngOnInit() {
    this.lolService.listAllUpcomingMatches().subscribe(data => {this.matches=data; });
  }
 
}
