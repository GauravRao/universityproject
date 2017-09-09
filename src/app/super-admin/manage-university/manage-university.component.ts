import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-manage-university',
  templateUrl: './manage-university.component.html',
  styleUrls: ['./manage-university.component.css']
})
export class ManageUniversityComponent implements OnInit {

  public data: any;
  public programDataSet:any;
  public courseDataSet:any;
  public membersDataSet:any;
  public roleDataSet:any
  selectedAll:any;
  public rowsOnPage: number = 5;

  constructor(private http: Http) { }

  getUniversity() {
    this.http.get("assets/university.json")
      .subscribe((res: any) => {
        this.data = res.json();
      });
  }
  getprogram() {
    this.http.get("assets/university.json")
      .subscribe((res: any) => {
        this.programDataSet=res.json();
        this.courseDataSet=res.json();
        this.membersDataSet=res.json();
        this.roleDataSet=res.json();
      });
  }

  ngOnInit() {
    this.getUniversity();
    this.getprogram();

  }
  selectAll() {
    this.data[0].quiz_status = false;
    for (let i = 0; i < this.data.length; i++) {
      this.data[i].selected = this.selectedAll;
    }
  }

  checkIfAllSelected() {
    this.data[0].quiz_status = false;
    this.selectedAll = this.data.every(function(item: any) {
      return item.selected == true;
    });
  }


}
