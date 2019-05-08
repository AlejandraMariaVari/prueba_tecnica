import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Routes library
import { APP_ROUTING } from './app.routes';
// Components
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormComponent } from './components/form/form.component';

// Services
import { SetFormService } from './services/set-form.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
    SetFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
