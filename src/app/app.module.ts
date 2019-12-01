import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MDBBootstrapModule, NavbarModule, IconsModule, TableModule} from 'angular-bootstrap-md'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadorComponent } from './components/empleador/empleador.component';
import { EmpleadorService } from './services/empleador.services';
import { UsersComponent} from './components/users/users.component';
import { UsersServices } from './services/users.services';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadorComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    NavbarModule,
    IconsModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersServices, EmpleadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
