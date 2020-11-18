import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule,} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import {MatRadioModule , MatRadioGroup} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';


import { from } from 'rxjs';

const Material = 
[

  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSliderModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatInputModule,
  MatGridListModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatListModule,
  MatDialogModule,
  MatSidenavModule,
  MatToolbarModule, 
  MatCheckboxModule,
  MatTableModule,
  MatFormFieldModule,
  MatSelectModule,
  MatRadioModule,
  MatRadioModule,
  MatTabsModule,
  MatExpansionModule
  
  
  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  exports :[
    Material
  ]
})
export class MaterialModule { }
