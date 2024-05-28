
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit, AfterViewInit {

  constructor() { }
  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];
  ngOnInit(): void {
  }
  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();
  searchHousingLocations(searchText: string) {
    if (!searchText) return;
    this.results = this.locationList.filter(
      (location: HousingLocation) => location.city.
        toLowerCase().
        includes(
          searchText.toLowerCase()
     ));
  }
  @ViewChild("searchButton") searchButton?: ElementRef<HTMLButtonElement>;
  ngAfterViewInit(): void {
    
    if (this.searchButton) {
      console.log('searchButton have been initialized:', this.searchButton.nativeElement);
    } else {
      console.error('searchButton have not been initialized');
    }
  }
  selectHousingLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }
  

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.searchButton!.nativeElement.click();
    }
  }

  
}


