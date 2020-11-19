import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-preventions',
  templateUrl: './preventions.component.html',
  styleUrls: ['./preventions.component.css']
})
export class PreventionsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PreventionsComponent>,
    @Inject(MAT_DIALOG_DATA) public objData) { }

  ngOnInit(): void {
  }

}
