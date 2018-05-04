import { Component, OnInit } from '@angular/core';
import { JournalEntriesService } from '../../services/journal-entries.service';

@Component({
  selector: 'app-journal-entries',
  templateUrl: './journal-entries.component.html',
  styleUrls: ['./journal-entries.component.css']
})
export class JournalEntriesComponent implements OnInit {

  entries: Array<any> = [];

  constructor(private journalEntryService: JournalEntriesService) { }

  ngOnInit() {
    this.journalEntryService.getList()
      .then(data => this.entries = data)
      .catch(err => console.log(err));
  }

}
