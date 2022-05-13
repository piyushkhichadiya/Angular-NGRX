import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ProductListComponent } from './product-list/product-list.component';

import { StoreModule } from '@ngrx/store';
import { newReducer, reducer } from './reducers/tutorial.reducer';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CoursesComponent,
    routingComponents,
    ProductListComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      // tutorial: reducer,
      count: reducer,
      tutorial: newReducer
    }),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
