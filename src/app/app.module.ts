import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {DividerModule} from 'primeng/divider';
import {TimelineModule} from 'primeng/timeline';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChipModule } from 'primeng/chip';
import {CarouselModule} from 'primeng/carousel';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputSwitchModule,
    FormsModule,
    ButtonModule,
    MenuModule,
    DividerModule,
    TimelineModule,
    BrowserAnimationsModule,
    ChipModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
