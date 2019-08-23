import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Match } from 'src/app/models/match';
import { Observable } from 'rxjs/Observable';
import { Tournament } from '../models/tournament';

@Injectable({
  providedIn: 'root'
})
export class Dota2Service {

  private dota2MatchesUpcomingUrl: string;
  private dota2MatchesPreviousUrl: string;
  private dota2Tournaments: string;

  constructor(private http: HttpClient) {
    this.dota2MatchesUpcomingUrl='http://localhost:8080/dota2/upcomingMatches'
    this.dota2MatchesPreviousUrl='http://localhost:8080/dota2/previousMatches'
    this.dota2Tournaments='http://localhost:8080/dota2/tournaments'
   }
   public listAllUpcomingMatches(): Observable<Array<Match>>
  {
    return this.http.get<Array<Match>>(this.dota2MatchesUpcomingUrl);
  }
  public listAllPreviousMatches(): Observable<Array<Match>>
  {
    return this.http.get<Array<Match>>(this.dota2MatchesPreviousUrl)
  }
  public listAllTournaments(): Observable<Array<Tournament>>
  {
    return this.http.get<Array<Tournament>>(this.dota2Tournaments)
  }
}
