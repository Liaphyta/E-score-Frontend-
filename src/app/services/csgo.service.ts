import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from '../models/match';
import { Observable } from 'rxjs';
import { Tournament } from '../models/tournament';

@Injectable({
  providedIn: 'root'
})
export class CsgoService {
  csGoPreviousMatchesUrl: string;
  csGoUpcomingMatchesUrl: string;
  csGoTournamentsUrl: string;

  constructor(private http: HttpClient)
  { 
    this.csGoPreviousMatchesUrl='http://localhost:8080/csgo/previousMatches';
    this.csGoUpcomingMatchesUrl='http://localhost:8080/csgo/upcomingMatches';
    this.csGoTournamentsUrl='http://localhost:8080/csgo/tournaments';
  }
  public listAllPreviousMatches(): Observable<Array<Match>>
  {
    return this.http.get<Array<Match>>(this.csGoPreviousMatchesUrl);
  }
  public listAllUpcomingMatches(): Observable<Array<Match>>
  {
    return this.http.get<Array<Match>>(this.csGoUpcomingMatchesUrl);
  }
  public listAllTournaments(): Observable<Array<Tournament>>
  {
    return this.http.get<Array<Tournament>>(this.csGoTournamentsUrl);
  }
}