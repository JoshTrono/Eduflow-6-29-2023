import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';
  originalItems = [
    { Name: 'apple', Price: '1.00' },
    { Name: 'banana', Price: '1.50' },
    { Name: 'cherry', Price: '2.00' },
    { Name: 'date', Price: '1.25' },
    { Name: 'elderberry', Price: '3.00' }
  ];
  items = this.originalItems;

  onSearch() {
        if (this.searchTerm) {
      this.items = this.originalItems.filter((item: { Name: string }) => item.Name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    } else {
      this.items = this.originalItems;
    }
  }
}
