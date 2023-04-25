import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffModule } from './staff/staff.module';
import { AdminModule } from './admin/admin.module';
import { PipesComponent } from './pipes/pipes.component';
import { MarvellousPipe } from './marvellous.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    MarvellousPipe,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    StaffModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
