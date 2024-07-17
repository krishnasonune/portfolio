import { Component } from '@angular/core';
import { ClientService } from '../client/client.service';
import * as Aos from 'aos';
import { ChartDataset } from 'chart.js';
import { ChartOptions } from '../interface/chartOptions';
import { Submissions } from '../interface/submission';
import * as ApexCharts from 'apexcharts';
import { contributions } from '../interface/githubsubmission';

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
  leetcodeChartData: ChartDataset[] | undefined;
  leetcodeSubmissionCalendar: Submissions[] = [];
  chartData: ChartDataset[] = [
    {
      data: [20, 25, 30],
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



  formDoughnutChart(stat: any) {
    this.leetcodeChartData = [
      {
        data: [stat.easySolved, stat.mediumSolved, stat.hardSolved],
        backgroundColor: this.colors,
        hoverBackgroundColor: this.colors,
        borderWidth: 2
      },
    ];

    for (const key in stat.submissionCalendar) {
      var day = new Date(Number(key) * 1000).toLocaleDateString();
      this.leetcodeSubmissionCalendar.push({ date: day, count: stat.submissionCalendar[key] });
    }
  }
  //#endregion

  //#region Leetcode HeatMap Chart
  public HeatmapchartOptions: ChartOptions | undefined;


  heatMapChart(data: any, title: string) {
    this.HeatmapchartOptions = {
      series: [
        {
          name: "Jan",
          data: this.generateData(31, this.leetcodeSubmissionCalendar
            .filter(x => new Date(x.date).getMonth() == 0))
        },
        {
          name: "Feb",
          data: this.generateData(29, this.leetcodeSubmissionCalendar
            .filter(x => new Date(x.date).getMonth() == 1))
        },
        {
          name: "Mar",
          data: this.generateData(31, this.leetcodeSubmissionCalendar
            .filter(x => new Date(x.date).getMonth() == 2))
        },
        {
          name: "Apr",
          data: this.generateData(30, this.leetcodeSubmissionCalendar
            .filter(x => new Date(x.date).getMonth() == 3))
        },
        {
          name: "May",
          data: this.generateData(31, this.leetcodeSubmissionCalendar
            .filter(x => new Date(x.date).getMonth() == 4))
        },
        {
          name: "Jun",
          data: this.generateData(30, this.leetcodeSubmissionCalendar
            .filter(x => new Date(x.date).getMonth() == 5))
        },
        {
          name: "Jul",
          data: this.generateData(31, this.leetcodeSubmissionCalendar
            .filter(x => new Date(x.date).getMonth() == 6))
        },
        {
          name: "Aug",
          data: this.generateData(31, this.leetcodeSubmissionCalendar
            .filter(x => new Date(x.date).getMonth() == 7))
        },
        {
          name: "Sep",
          data: this.generateData(30, this.leetcodeSubmissionCalendar
            .filter(x => new Date(x.date).getMonth() == 8))
        },
        {
          name: "Oct",
          data: this.generateData(31, this.leetcodeSubmissionCalendar
            .filter(x => new Date(x.date).getMonth() == 9))
        },
        {
          name: "Nov",
          data: this.generateData(30, this.leetcodeSubmissionCalendar
            .filter(x => new Date(x.date).getMonth() == 10))
        },
        {
          name: "Dec",
          data: this.generateData(31, this.leetcodeSubmissionCalendar
            .filter(x => new Date(x.date).getMonth() == 11))
        }
      ].reverse(),
      chart: {
        height: 350,
        type: "heatmap",
        toolbar: {
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true
          },
          export: {
            svg: {
              filename: "Krishna's Statisrics",
            },
            png: {
              filename: "Krishna's Statisrics",
            }
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#001c55"], //["#008FFB"],
      title: {
        text: `${title} Statistics`
      },
      theme: {
        mode: "light"
      },
      xaxis: {},
      yaxis: {},
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 270,
              width: 900
            }
          }
        },
        {
          breakpoint: 620,
          options: {
            chart: {
              height: 280,
              width: 850
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: '1rem'
                }
              }
            }
          }
        },
        {
          breakpoint: 400,
          options: {
            chart: {
              height: 350,
              width: 850
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: '1rem'
                }
              }
            }
          }
        },
        {
          breakpoint: 300,
          options: {
            chart: {
              height: 350,
              width: 850
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: '1rem'
                }
              }
            }
          }
        }
      ]
    };
  }

  generateData(count: any, data: Submissions[]) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y = 0;

      series.push({
        x: x,
        y: y
      });
      i++;
    }

    for (const key in data) {
      let day = data[key].date.split('/')[1];
      let serie = series.find(d => d.x == day)!;
      serie.y = data[key].count;
    }

    return series;
  }
  //#endregion

  //#region Github HeatMap Chart
  public GithubHeatmapchartOptions: ChartOptions | undefined;

  GithubHeatMapChart(data: any, title: string) {
    console.log(new Date(data.contributions[0].date).getMonth());
    this.GithubHeatmapchartOptions = {
      series: [
        {
          name: "Jan",
          data: this.generateGithubData(31, data.contributions
            .filter((x: { date: string }) => new Date(x.date).getMonth() == 0))
        },
        {
          name: "Feb",
          data: this.generateGithubData(31, data.contributions
            .filter((x: { date: string | Date }) => new Date(x.date).getMonth() == 1))
        },
        {
          name: "Mar",
          data: this.generateGithubData(31, data.contributions
            .filter((x: { date: string | Date }) => new Date(x.date).getMonth() == 2 ))
        },
        {
          name: "Apr",
          data: this.generateGithubData(31, data.contributions
            .filter((x: { date: string | Date }) => new Date(x.date).getMonth() == 3 ))
        },
        {
          name: "May",
          data: this.generateGithubData(31, data.contributions
            .filter((x: { date: string | Date }) => new Date(x.date).getMonth() == 4 ))
        },
        {
          name: "Jun",
          data: this.generateGithubData(31, data.contributions
            .filter((x: { date: string | Date }) => new Date(x.date).getMonth() == 5 ))
        },
        {
          name: "Jul",
          data: this.generateGithubData(31, data.contributions
            .filter((x: { date: string | Date }) => new Date(x.date).getMonth() == 6 ))
        },
        {
          name: "Aug",
          data: this.generateGithubData(31, data.contributions
            .filter((x: { date: string | Date }) => new Date(x.date).getMonth() == 7))
        },
        {
          name: "Sep",
          data: this.generateGithubData(31, data.contributions
            .filter((x: { date: string | Date }) => new Date(x.date).getMonth() == 8 ))
        },
        {
          name: "Oct",
          data: this.generateGithubData(31, data.contributions
            .filter((x: { date: string | Date }) => new Date(x.date).getMonth() == 9 ))
        },
        {
          name: "Nov",
          data: this.generateGithubData(31, data.contributions
            .filter((x: { date: string | Date }) => new Date(x.date).getMonth() == 10))
        },
        {
          name: "Dec",
          data: this.generateGithubData(31, data.contributions
            .filter((x: { date: string | Date }) => new Date(x.date).getMonth() == 11))
        }
      ].reverse(),
      chart: {
        height: 350,
        type: "heatmap",
        toolbar: {
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true
          },
          export: {
            svg: {
              filename: "Krishna's Statisrics",
            },
            png: {
              filename: "Krishna's Statisrics",
            }
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#001c55"], //["#008FFB"],
      title: {
        text: `${title} Statistics`
      },
      theme: {
        mode: "light"
      },
      xaxis: {},
      yaxis: {},
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 270,
              width: 900
            }
          }
        },
        {
          breakpoint: 620,
          options: {
            chart: {
              height: 280,
              width: 850
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: '1rem'
                }
              }
            }
          }
        },
        {
          breakpoint: 400,
          options: {
            chart: {
              height: 350,
              width: 850
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: '1rem'
                }
              }
            }
          }
        },
        {
          breakpoint: 300,
          options: {
            chart: {
              height: 350,
              width: 850
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: '1rem'
                }
              }
            }
          }
        }
      ]
    };
  }

  generateGithubData(count: any, data: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y = 0;

      
      i++;
    }

    for (const key in data) {
      let day = data[key].date.split('-')[2];
      let val = data[key].count;
      series.push({
        x: day,
        y: val
      });
    }

    return series;
  }
  //#endregion

  //#region Stats API Call
  getLeetcodestats() {
    let leetcodeStat = null;
    if (sessionStorage.getItem('leetcode') == null) {
      this.clientServ.getLeetCodeStats().subscribe(x => {
        this.formDoughnutChart(x);
        this.heatMapChart(x, "LeetCode");
        leetcodeStat = JSON.stringify(x);
        sessionStorage.setItem('leetcode', leetcodeStat);


      },
        err => {

        },
        () => {

        })
    }
    else {
      leetcodeStat = JSON.parse(sessionStorage.getItem('leetcode')!);
      this.formDoughnutChart(leetcodeStat);
      this.heatMapChart(leetcodeStat, "LeetCode");
    }

  }

  getGithubStats() {
    let githubStat = null;
    if (sessionStorage.getItem('github') == null) {
      this.clientServ.getGithubStat().subscribe((x: contributions) => {
        githubStat = JSON.stringify(x);
        sessionStorage.setItem('github', githubStat);
        this.GithubHeatMapChart(x, "Github");


      },
        err => {

        },
        () => {

        })
    }
    else {
      githubStat = JSON.parse(sessionStorage.getItem('github')!);
      this.GithubHeatMapChart(githubStat, "Github");
    }
  }
  //#endregion

  ngOnInit(): void {
    Aos.init({
      duration: 1000
    });

    this.getLeetcodestats();
    this.getGithubStats();
  }
}
