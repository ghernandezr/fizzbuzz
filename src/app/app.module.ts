import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RangeFormComponent } from './components/range-form/range-form.component';
import { TerminalComponent } from './components/terminal/terminal.component';

@NgModule({
  declarations: [AppComponent, RangeFormComponent, TerminalComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
