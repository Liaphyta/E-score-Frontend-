import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { TeamsService } from 'src/app/services/teams.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {
     teams: Array<Team>;
  constructor(private teamService: TeamsService, public nav:NavbarService) { }

  ngOnInit() {
    this.nav.show();
    this.teamService.getAllTeams().subscribe(data => { this.teams=data;});
  }

}
