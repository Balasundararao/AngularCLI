import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatMenuModule, MatIconModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  declarations: [HomepageComponent, HeaderComponent ],
  exports: [HeaderComponent, HomepageComponent]
})
export class CoreModule { }
