import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { DataGridSearchPipe } from './data-grid-search.pipe';
import { DataGridSortPipe } from './data-grid-sort.pipe';
import { DataGridTestUserComponent } from './data-grid-test-user/data-grid-test-user.component';
import { PagerService } from './pager.service';
import { PaginationPipe } from './pagination.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataGridComponent,
    DataGridSearchPipe,
    DataGridSortPipe,
    DataGridTestUserComponent,
    PaginationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
