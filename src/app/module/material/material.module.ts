import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSliderModule} from '@angular/material/slider';
 import{MatTableModule} from '@angular/material/table';
const materialcomponent =[MatSidenavModule,MatButtonModule,MatMenuModule,MatSliderModule, MatTableModule];

@NgModule({
  declarations: [],
  imports: [
    materialcomponent
  ],
  exports:[materialcomponent]
})
export class MaterialModule { }
