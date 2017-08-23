import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';
import { MdDialog, MdDialogRef } from '@angular/material';
import { MdInputModule,
  MdButtonModule,
  MdIconModule,
  MdSlideToggleModule }     from '@angular/material';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  constructor(  public dialogRef: MdDialogRef<ConfirmModalComponent>,
    @Inject(MD_DIALOG_DATA) public modalMessage: any) { }

    ngOnInit() {
     
    }
}
