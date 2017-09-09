import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

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
