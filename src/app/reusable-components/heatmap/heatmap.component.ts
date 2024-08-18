import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.css']
})
export class HeatmapComponent {
  @Input() zArray !: number[][];
  @Input() title !: string;
  public graph !: any;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event | any) {
    
  }

  ngOnInit(): void {
    this.graph = {
      data: [
        {
          z: this.zArray,
          x: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
          y: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].reverse(),
          type: 'heatmap',
          hoverongaps: false,
          showscale: false,
          colorscale: [[0, '#ffff'], [1, '001c55']],
           hoverinfo: 'text',
           hovertemplate: 
           ' <b>Month : </b>: <b>%{y}</b> <br>' +
           ' <b>Day : </b>: <b>%{x}</b> <br>' +
           ' <b>contributions : </b>: <b>%{z}</b> ',
        }
      ],
      layout: {
        title: this.title,
        margin : 0,
        xaxis: {
          title: 'Days',
          dtick: 1
        },
        yaxis: {
          title: 'Months',
          dtick: 1,
        },
        showlegend: false,
         height: 500,
         width: 1410,
        plot_bgcolor: '#ffffff',    
        paper_bgcolor: '#d7e7ee',
        dragmode: false
      },
      config: {
        displayModeBar: false,
        scrollZoom: false,
        responsive: true,
      }
    };
  }
}
