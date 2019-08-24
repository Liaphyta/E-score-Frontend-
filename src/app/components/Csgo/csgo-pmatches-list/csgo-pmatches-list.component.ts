import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/models/match';
import { CsgoService } from 'src/app/services/csgo.service';

@Component({
  selector: 'app-csgo-pmatches-list',
  templateUrl: './csgo-pmatches-list.component.html',
  styleUrls: ['./csgo-pmatches-list.component.css']
})
export class CsgoPmatchesListComponent implements OnInit {

  matches: Array<Match>;

  constructor(private csGoService: CsgoService) { }

  ngOnInit() {
    this.csGoService.listAllPreviousMatches().subscribe(data => {this.matches=data;});
  }

}
