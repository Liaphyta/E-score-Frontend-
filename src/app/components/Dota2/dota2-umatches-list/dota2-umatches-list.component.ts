import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match';
import { Dota2Service } from 'src/app/services/dota2.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-dota2-umatches-list',
  templateUrl: './dota2-umatches-list.component.html',
  styleUrls: ['./dota2-umatches-list.component.css']
})
export class Dota2UMatchesListComponent implements OnInit {
  matches: Array<Match>
  constructor(private dota2Service: Dota2Service,public nav:NavbarService) { }

  ngOnInit() {
    this.nav.show();
    this.dota2Service.listAllUpcomingMatches().subscribe(data => {this.matches=data; });
  }

}
