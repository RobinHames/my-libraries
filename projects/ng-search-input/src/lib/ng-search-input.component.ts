import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-ng-search-input',
  templateUrl: './ng-search-input.component.html',
  styleUrls: ['./ng-search-input.component.css']
})
export class NgSearchInputComponent implements OnInit {

  private innerSearchTerm: string;

  get searchTerm(): string {
    return this.innerSearchTerm;
  }

  @Input() set searchTerm(value: string) {
    if (value !== this.innerSearchTerm) {
      this.innerSearchTerm = value;
      this.searchTermChange.emit(value);
    }
  }

  @Output() searchTermChange: EventEmitter<string> = new EventEmitter<string>();

  @Output() goSearch: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  public clickSearch(): void {
    this.goSearch.emit();
  }

}
