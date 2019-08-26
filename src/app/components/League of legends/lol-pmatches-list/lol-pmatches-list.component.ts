import { Component, OnInit } from '@angular/core';
import { Match } from '../../../models/match';
import { LolService } from '../../../services/lol.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-lol-pmatches-list',
  templateUrl: './lol-pmatches-list.component.html',
  styleUrls: ['./lol-pmatches-list.component.css']
})
export class LolPmatchesListComponent implements OnInit {

  matches: Array<Match>;

  constructor(private lolService: LolService, public navService: NavbarService) {

   }

  ngOnInit() {
    this.navService.show();
    this.lolService.listAllPreviousMatches().subscribe(data => {this.matches=data; });

  }

}
