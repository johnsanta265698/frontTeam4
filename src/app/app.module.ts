import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule, NavbarModule} from 'angular-bootstrap-md'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadorComponent } from './components/empleador/empleador.component';
import { UsersComponent} from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadorComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
