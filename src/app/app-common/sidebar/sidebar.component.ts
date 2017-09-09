import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isClassVisible: boolean;
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  eventTrigger() {
    this.router.navigate(['/event/list']);
    this.isClassVisible = true;
  }

  ngOnInit() {
  }

}
