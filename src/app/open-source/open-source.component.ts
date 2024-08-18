import { Component, ViewChild } from '@angular/core';
import { ClientService } from '../client/client.service';
import * as Aos from 'aos';
import { ChartDataset } from 'chart.js';
import { Submissions } from '../interface/submission';
import * as ApexCharts from 'apexcharts';
import { contributions } from '../interface/githubsubmission';
import { LeetCodeStatsDTO, recentSubmissions } from '../interface/LeetcodeDTO';

@Component({
  selector: 'app-open-source',
  templateUrl: './open-source.component.html',
  styleUrls: ['./open-source.component.css']
})
export class OpenSourceComponent {

  constructor(private clientServ: ClientService) { }
  //#region Doughnut Chart
  hackerrankStats: any = {
    "solvedProblem": 80,
    "easySolved": 30,
    "mediumSolved": 25,
    "hardSolved": 25,
  }

  colors: string[] = [
    'hsl(180 74% 42%)',
    'hsl(43 100% 50%)',
    'hsl(0 91% 59%)'
  ]
  leetcodeStats !: LeetCodeStatsDTO;
  leetcodeChartData: ChartDataset[] | undefined;
  chartData: ChartDataset[] = [
    {
      data: [this.hackerrankStats.easySolved, 
        this.hackerrankStats.mediumSolved,
      this.hackerrankStats.hardSolved],
      backgroundColor: this.colors,
      hoverBackgroundColor: this.colors,
      borderWidth: 2
    },
  ];

  chartLabels = [
    'Easy',
    'Medium',
    'Hard'
  ];
  chartOptions = {
    responsive: true
  };



  formDoughnutChart(stat: LeetCodeStatsDTO) {
    this.leetcodeChartData = [
      {
        data: [stat.easySolved, stat.mediumSolved, stat.hardSolved],
        backgroundColor: this.colors,
        hoverBackgroundColor: this.colors,
        borderWidth: 2
      },
    ];

    for (let i = 0; i < 9; i++) {
      const unixTimeStamp = parseInt(stat.recentSubmissions[i].timestamp, 10);
      const submission = {
        title: stat.recentSubmissions[i].title,
        statusDisplay: stat.recentSubmissions[i].statusDisplay.toLowerCase() !== "accepted" ? "Incorrect" : stat.recentSubmissions[i].statusDisplay,
        lang: stat.recentSubmissions[i].lang,
        titleSlug: stat.recentSubmissions[i].titleSlug,
        __typename: stat.recentSubmissions[i].__typename,
        timestamp: new Date(unixTimeStamp * 1000).toLocaleDateString('en-uk', {'dateStyle':"long"}),
      }
      this.leetcodeSubmissions.push(submission);
    }
  }
  //#endregion

  //#region Leetcode HeatMap Chart
  leetcode = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  public isLeetCodeFetched = false;
  public isLeetCodeCalFetched = false;
  public leetcodeSubmissions : recentSubmissions[] = [];
  heatMapChart(data: any, title: string) {
    for (const key in data) {
      const unixTimeStamp = parseInt(key, 10);
      var date = new Date( unixTimeStamp * 1000);
      const day = date.getDate() - 1;
      const month = date.getMonth();
      this.leetcode[month][day] = data[key]
    }

  }
  //#endregion

  //#region Github HeatMap Chart
  github = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  public isGithubFetched = false;
  GithubHeatMapChart(data: any, title: string) {
    for (const key in data.contributions) {
      const score = data.contributions[key]
      const day = new Date(score.date).getDate() - 1
      const month = new Date(score.date).getMonth()
      this.github[month][day] = score.count
    }
  }

  //#endregion

  //#region Stats API Call
  getLeetcodestats() {
    let leetcodeStat = null;
    if (sessionStorage.getItem('leetcode') == null) {
      this.clientServ.getLeetCodeStats().subscribe(x => {
        x.recentSubmissions = x.recentSubmissions.sort((a,b) => parseInt(b.timestamp) - parseInt(a.timestamp))
        this.leetcodeStats = x;
        this.formDoughnutChart(x);
        this.isLeetCodeFetched = !this.isLeetCodeFetched;
        
        sessionStorage.setItem('leetcode', JSON.stringify(x));
      },
        err => {

        },
        () => {

        })
    }
    else {
      leetcodeStat = JSON.parse(sessionStorage.getItem('leetcode')!);
      leetcodeStat.recentSubmissions = leetcodeStat.recentSubmissions.sort((a:any,b:any) => parseInt(b.timestamp) - parseInt(a.timestamp))
      this.leetcodeStats = leetcodeStat;
      this.formDoughnutChart(leetcodeStat);
      //this.leetcodeSubmissions = leetcodeStat.recentSubmissions;
      this.isLeetCodeFetched = !this.isLeetCodeFetched;
    }

  }

  getLeetcodeCalendarStats() {
    if (sessionStorage.getItem('leetcode_cal') == null) {
      this.clientServ.getLeetCodeCalendarStats().subscribe(x => {
        this.heatMapChart(x, "Leetcode")
        this.isLeetCodeCalFetched = !this.isLeetCodeCalFetched;
        sessionStorage.setItem('leetcode_cal', JSON.stringify(x));
      })
    }
    else {
      let leetcodeStat = JSON.parse(sessionStorage.getItem('leetcode_cal')!);
      this.heatMapChart(leetcodeStat, 'LeetCode')
      this.isLeetCodeCalFetched = !this.isLeetCodeCalFetched;
    }

  }

  getGithubStats() {
    if (sessionStorage.getItem('github') == null) {
      this.clientServ.getGithubStat().subscribe((x: contributions) => {
        this.GithubHeatMapChart(x, "Github");
        this.isGithubFetched = !this.isGithubFetched
        sessionStorage.setItem('github', JSON.stringify(x));
      },
        err => {

        },
        () => {

        })
    }
    else {
      let githubStat = JSON.parse(sessionStorage.getItem('github')!);
      this.GithubHeatMapChart(githubStat, "Github");
      this.isGithubFetched = !this.isGithubFetched

    }
  }

  getStackOverFlowStats(){
    this.clientServ.getStackOverFlowStats().subscribe(
      (res :any) => {
        console.log(res);
      }
    )
  }
  //#endregion

  ngOnInit(): void {
    Aos.init({
      duration: 1000
    });

    this.getLeetcodestats();
    this.getLeetcodeCalendarStats();
    this.getGithubStats();
    //this.getStackOverFlowStats();
  }
}
