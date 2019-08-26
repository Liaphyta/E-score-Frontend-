import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match';
import { CsgoService } from 'src/app/services/csgo.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-csgo-pmatches-list',
  templateUrl: './csgo-pmatches-list.component.html',
  styleUrls: ['./csgo-pmatches-list.component.css']
})
export class CsgoPmatchesListComponent implements OnInit {

  matches: Array<Match>;

  constructor(private csGoService: CsgoService, public nav:NavbarService) { }

  ngOnInit() {
    this.nav.show();
    this.csGoService.listAllPreviousMatches().subscribe(data => {this.matches=data;});
  }

}
