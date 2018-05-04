import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JournalEntriesService } from '../../services/journal-entries.service';

@Component({
  selector: 'app-entry-detail-card',
  templateUrl: './entry-detail-card.component.html',
  styleUrls: ['./entry-detail-card.component.css']
})
export class EntryDetailCardComponent implements OnInit {

  @Input() entry: Object;

  constructor(private  journalEntriesService: JournalEntriesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.journalEntriesService.getOneById(params.id)
          .then(data => this.entry = data);
      });
  }
}
