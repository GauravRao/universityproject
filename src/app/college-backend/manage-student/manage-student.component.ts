import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent implements OnInit {
  data: any;
  rowsOnPage: number = 5;
  constructor() { }

  ngOnInit() {
  }

}
