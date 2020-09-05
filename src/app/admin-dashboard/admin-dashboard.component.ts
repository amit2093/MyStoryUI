import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare let google: any;
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  totalResponses: number;
  page: number = 1;

  total_views: any = 0;
  friends: number = 0;
  friend_request: number = 0;
  total_unread_messages: number = 0;
  total_unseen_notifications: number = 0;
  selectMonthToChangeChartData = 0;

  monthTest: any = [{ "month": "January 2019", "value": 0 },
  { "month": "December 2018", "value": 1 },
  { "month": "November 2018", "value": 2 },
  { "month": "October 2018", "value": 3 }];

  feedReportArray: any;
  feedReportTest: any;


  constructor(private http: HttpClient) {
    this.http.get('./assets/feedReport.json').subscribe(data => {
      this.feedReportTest = data;
      this.feedReportArray = this.feedReportTest[0];
      for (let i = 0; i < this.feedReportTest.length; i++) {
        for (let j = 0; j < this.feedReportTest[i].feedsDetails.length; j++) {
          this.total_views = this.total_views + this.feedReportTest[i].feedsDetails[j].views;
        }
      }
      if (this.total_views > 999) {
        this.total_views = this.total_views / 1000 + 'k';
      }
    });
  }

  ngOnInit() {
    this.drawChart(7);
    this.friends = 350;
    this.friend_request = 34;
    this.total_unread_messages = 14;
    this.total_unseen_notifications = 25;

  }

  getMonthValue(id: any): void {
    this.totalResponses = this.feedReportTest[id].length;
    this.feedReportArray = this.feedReportTest[id];
    this.selectMonthToChangeChartData = id;
    this.drawChart(this.feedReportArray.feedsDetails.length - 1);
  }

  drawChart(index) {
    let color = 'green';

    google.charts.load('current', {
      packages: ['corechart']
    }).then(() => {
      const data = new google.visualization.DataTable();
      data.addColumn({ type: 'date', label: 'Date' });
      data.addColumn({ type: 'number', label: 'Value' });
      data.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true } });
      data.addColumn({ type:'string', role:'style' }); 

      for (let i = 0; i < this.feedReportArray.feedsDetails.length; i++) {
        data.addRow([new Date(this.feedReportArray.feedsDetails[i].date),
        this.feedReportArray.feedsDetails[i].views,
        '<div style="width: 180px;"> <b> Title: </b>' + this.feedReportArray.feedsDetails[i].name + '<br> <b> Views:</b> ' +
        this.feedReportArray.feedsDetails[i].views + ', <b> Likes:</b> ' +
        this.feedReportArray.feedsDetails[i].likes + '</div>',
        'point { size: 5; shape-type: circle; fill-color:'+color+' ; }']);
      }

      let options = {
        smoothLine: true,
        title: 'Monthly Stats',
        titleTextStyle: { 'fontSize': '18' },
        width: '600',
        height: '350',
        curveType: 'function',
        chartArea: { 'width': '90%', 'height': '50%' },
        tooltip: { isHtml: true, trigger:'selection' },
        hAxis: { title: "Date" },
        animation: {
          startup: true,
          duration: 1000,
          easing: 'out'
        },
        vAxis: {
          baselineColor: '#000',
          gridlineColor: '#aaa',
          textPosition: 'in',
          title: "Views"
        },
        series: {
          0: {lineWidth: 2},
          1: {
             color: 'red',
             lineWidth: 0,
             pointSize: 4
           }
        },
        pointSize: 5,
        colors: ['green'],
        slices: {},
        legend: { position: 'bottom' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);

      chart.setSelection([{"row":index,"column":1}]);

      google.visualization.events.addListener(chart, 'select', selectHandler);
      function selectHandler(e) {
        const selection = chart.getSelection();
        let message = '';
        for (var i = 0; i < selection.length; i++) {
          const item = selection[i];
          const str = data.getFormattedValue(item.row, item.column);
          message += str;
        }
        // alert('Views: ' + message);
      }
    });
  }
}
