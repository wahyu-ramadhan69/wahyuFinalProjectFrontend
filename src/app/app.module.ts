import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { DataService, TambahBarangService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormbarangComponent } from './formbarang/formbarang.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableComponent,
    LoginComponent,
    FormbarangComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [DataService, TambahBarangService],
  bootstrap: [AppComponent],
})
export class AppModule {}
