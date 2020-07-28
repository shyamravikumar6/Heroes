import { NgModule } from '@angular/core';
import {  MatSidenavModule,MatSidenavContainer,MatSidenav  } from  '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const materialcomponent =[MatButtonModule,MatIconModule,MatListModule,MatSidenavModule,MatToolbarModule,MatSidenav,MatSidenavContainer];


@NgModule({
  declarations: [],
  imports: [
   
    materialcomponent
  ],
  exports:[materialcomponent]
})
export class MaterialModule { }
