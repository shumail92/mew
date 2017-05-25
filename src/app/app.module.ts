import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './components/app-home';
import { TimelineComponent } from './components/timeline';
import { TimelineEventComponent } from './components/timeline-event';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppHomeComponent, pathMatch: 'full'},
      { path: 'tm', component: TimelineComponent, pathMatch: 'full'}
    ])
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  declarations: [ AppComponent, AppHomeComponent, TimelineComponent, TimelineEventComponent ],
  exports: [ AppComponent ]
})
export class AppModule {}
