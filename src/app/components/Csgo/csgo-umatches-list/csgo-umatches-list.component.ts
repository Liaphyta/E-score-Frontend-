import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match';
import { CsgoService } from 'src/app/services/csgo.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-csgo-umatches-list',
  templateUrl: './csgo-umatches-list.component.html',
  styleUrls: ['./csgo-umatches-list.component.css']
})
export class CsgoUmatchesListComponent implements OnInit {

  matches: Array<Match>;
  
  constructor(private csGoService: CsgoService, public nav:NavbarService) { }

  ngOnInit() {
    this.nav.show();
   this.csGoService.listAllUpcomingMatches().subscribe(data => {this.matches=data;});
  }

}
