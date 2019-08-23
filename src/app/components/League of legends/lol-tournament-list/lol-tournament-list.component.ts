import { Component, OnInit } from '@angular/core';
import { Tournament } from 'src/app/models/tournament';
import { LolService } from 'src/app/services/lol.service';

@Component({
  selector: 'app-lol-tournament-list',
  templateUrl: './lol-tournament-list.component.html',
  styleUrls: ['./lol-tournament-list.component.css']
})
export class LolTournamentListComponent implements OnInit {

  tournaments: Array<Tournament>;
  
  constructor(private lolService: LolService) { }

  ngOnInit() {
    this.lolService.listAllTournaments().subscribe(data => {this.tournaments=data; });
  }

}
