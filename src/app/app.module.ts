import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { 
  MatToolbarModule,
  MatCardModule, 
  MatInputModule,
  MatExpansionModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
