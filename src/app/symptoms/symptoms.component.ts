import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SymptomsComponent>,
    @Inject(MAT_DIALOG_DATA) public objData) { }

  ngOnInit(): void {
  }

}
