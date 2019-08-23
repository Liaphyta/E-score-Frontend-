import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Match } from 'src/app/models/match';
import { Observable } from 'rxjs/Observable';
import { Tournament } from '../models/tournament';

@Injectable({
  providedIn: 'root'
})
export class LolService {

  private lolMatchesUpcomingUrl: string;
  private lolMatchesPreviousUrl: string;
  private lolTournaments: string;

  constructor(private http: HttpClient) {
    this.lolMatchesUpcomingUrl='http://localhost:8080/lol/upcomingMatches'
    this.lolMatchesPreviousUrl='http://localhost:8080/lol/previousMatches'
    this.lolTournaments='http://localhost:8080/lol/tournaments'
   }
   public listAllUpcomingMatches(): Observable<Array<Match>>
  {
    return this.http.get<Array<Match>>(this.lolMatchesUpcomingUrl);
  }
  public listAllPreviousMatches(): Observable<Array<Match>>
  {
    return this.http.get<Array<Match>>(this.lolMatchesPreviousUrl)
  }
  public listAllTournaments(): Observable<Array<Tournament>>
  {
    return this.http.get<Array<Tournament>>(this.lolTournaments)
  }
}
