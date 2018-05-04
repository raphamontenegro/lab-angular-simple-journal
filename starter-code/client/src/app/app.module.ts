import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


import { JournalEntriesService } from './services/journal-entries.service';
import { JournalEntriesComponent } from './pages/journal-entries/journal-entries.component';
import { EntryDetailPageComponent } from './pages/entry-detail-page/entry-detail-page.component';
import { EntryDetailCardComponent } from './components/entry-detail-card/entry-detail-card.component';

const routes: Routes = [
  { path: '', component: JournalEntriesComponent },
  { path: 'journal-entries/:id', component: EntryDetailPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    JournalEntriesComponent,
    EntryDetailPageComponent,
    EntryDetailCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule,
  ],
  providers: [JournalEntriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
