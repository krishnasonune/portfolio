import {
    ApexAxisChartSeries,
    ApexTitleSubtitle,
    ApexDataLabels,
    ApexChart,
    ApexTheme,
    ApexResponsive
  } from "ng-apexcharts";

export interface ChartOptions {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    title: ApexTitleSubtitle;
    colors: any;
    theme: ApexTheme;
    responsive: ApexResponsive[];
    xaxis : ApexXAxis;
    yaxis : ApexYAxis;
  };