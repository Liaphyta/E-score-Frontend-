import { Component, OnInit } from '@angular/core';
import { Match }  from '../../../models/match';
import { LolService } from '../../../services/lol.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-lol-umatches-list',
  templateUrl: './lol-umatches-list.component.html',
  styleUrls: ['./lol-umatches-list.component.css']
})
export class LolUMatchesListComponent implements OnInit {

  matches: Array<Match>;

  constructor(private lolService: LolService, public nav: NavbarService) {

   }

  ngOnInit() {
    this.nav.show();
    this.lolService.listAllUpcomingMatches().subscribe(data => {this.matches=data; });

  }
 
}
