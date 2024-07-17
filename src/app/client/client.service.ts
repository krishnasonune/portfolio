import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getLeetCodeStats() : Observable<any>{
    //return this.http.get('https://alfa-leetcode-api.onrender.com/krishnasonune87/solved');
    return this.http.get('https://leetcode-api-faisalshohag.vercel.app/krishnasonune87');
  }

  getGithubStat() : Observable<any>{
    return this.http.get('https://github-contributions-api.jogruber.de/v4/krishnasonune?y=2023');
  }
}
