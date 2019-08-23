import { Component, OnInit } from '@angular/core';
import { Match } from '../../../models/match';
import { LolService } from '../../../services/lol.service';

@Component({
  selector: 'app-lol-pmatches-list',
  templateUrl: './lol-pmatches-list.component.html',
  styleUrls: ['./lol-pmatches-list.component.css']
})
export class LolPmatchesListComponent implements OnInit {

  matches: Array<Match>;

  constructor(private lolService: LolService) {

   }

  ngOnInit() {
    this.lolService.listAllPreviousMatches().subscribe(data => {this.matches=data; });

  }

}
