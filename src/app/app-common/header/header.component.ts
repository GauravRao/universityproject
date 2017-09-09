import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderService } from './header.service';
// import { Logger, Options } from "angular2-logger/core";
// import { MdDialog, MdDialogRef } from '@angular/material';
// import { MD_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: any;
  id: any;
  msg: any;
  log: any;
  time: any;

  constructor(private route: ActivatedRoute,
    private router: Router, private headerService: HeaderService,
    // private _logger: Logger,
    // public dialog: MdDialog,
   ) { }

  private getDateTime(): Date {
    let date = new Date();
    return date;
  }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

}
