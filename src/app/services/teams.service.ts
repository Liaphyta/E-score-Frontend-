import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  httpUrl: string;
  constructor(private http: HttpClient) { 
    this.httpUrl='http://localhost:8080/teams';
  }

  public getAllTeams(): Observable<Array<Team>>
  {
    return this.http.get<Array<Team>>(this.httpUrl);
  }
}
