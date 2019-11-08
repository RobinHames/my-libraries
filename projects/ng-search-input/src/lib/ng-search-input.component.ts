import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-ng-search-input',
  templateUrl: './ng-search-input.component.html',
  styleUrls: ['./ng-search-input.component.css']
})
export class NgSearchInputComponent implements OnInit {

  private innerSearchTerm: string;

  get SearchTerm(): string {
    return this.innerSearchTerm;
  }

  @Input() set SearchTerm(value: string) {
    if (value !== this.innerSearchTerm) {
      this.innerSearchTerm = value;
      this.SearchTermChange.emit(value);
    }
  }

  @Output() SearchTermChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
