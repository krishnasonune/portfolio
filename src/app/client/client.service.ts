import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { LeetCodeStatsDTO } from '../interface/LeetcodeDTO';
import { StackOverflowResponse } from '../interface/stackoverflow';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getLeetCodeStats() : Observable<LeetCodeStatsDTO>{
    return this.http.get<LeetCodeStatsDTO>('https://leetcode-api-faisalshohag.vercel.app/krishnasonune87');
  }

  getLeetCodeCalendarStats() : Observable<any> {
    return this.http.get('https://alfa-leetcode-api.onrender.com/krishnasonune87/calendar')
      .pipe(
        map((val : any) => {
            return JSON.parse(val.submissionCalendar);
        })
      )
  }

  getGithubStat() : Observable<any>{
    return this.http.get('https://github-contributions-api.jogruber.de/v4/krishnasonune?y=2023');
  }

  getStackOverFlowStats() : Observable<StackOverflowResponse>{
    return this.http.get<StackOverflowResponse>('https://api.stackexchange.com/2.3/users/17624910/answers?order=desc&sort=activity&site=stackoverflow')
  }
}
