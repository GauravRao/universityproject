import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-manage-admins',
  templateUrl: './manage-admins.component.html',
  styleUrls: ['./manage-admins.component.css']
})
export class ManageAdminsComponent implements OnInit {

  public data: any;
  public rowsOnPage: number = 5;

  constructor(private http: Http) { }

  getUniversity() {
    this.http.get("assets/university.json")
      .subscribe((res: any) => {
        this.data = res.json();
      });
  }

  ngOnInit() {
    this.getUniversity();

  }

}
