import { Component, OnInit } from '@angular/core';
import { Tournament } from 'src/app/models/tournament';
import { CsgoService } from 'src/app/services/csgo.service';

@Component({
  selector: 'app-csgo-tournament-list',
  templateUrl: './csgo-tournament-list.component.html',
  styleUrls: ['./csgo-tournament-list.component.css']
})
export class CsgoTournamentListComponent implements OnInit {
  tournaments: Array<Tournament>;
  constructor(private csGoService: CsgoService) { }

  ngOnInit() {
    this.csGoService.listAllTournaments().subscribe(data => {this.tournaments=data;});
  }

}
