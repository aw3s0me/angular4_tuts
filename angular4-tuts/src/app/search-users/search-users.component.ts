import { Component, OnInit } from '@angular/core';
import {SearchUsersService} from '../search-users.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
  place: string;
  language: string;
  results: any[] = []; // This will hold the data coming from the service
  selected = false; // Flag to check if a user is clicked or not
  selectedUser: any; // presently Selected user details
  error_text = ''; // So called error reporing text to the end user
  // inject service into component
  constructor(private searchService: SearchUsersService) {}

  ngOnInit() {
  }

  search(place: string, language: string) {
    this.selected = false;
    this.error_text = '';
    if (place || language) {
      this.place = place;
      this.language = language;
      // we will subscribe to the Observables
      this.searchService.getUsersByPlaceAndLanguage(place, language).subscribe(
        // first parameter is the result
        users => {
          this.results = users;
        },
        // second param of the subscribe method gives the error
        error => {
          this.results = [];
          this.error_text = 'Sorry! No Users found. Try again';
          console.error(error);
        }
      );
    }
  }

  getDetails(username: string) {
    this.searchService.getDetailsByUserName(username).subscribe(
      userDatils => {
        this.selectedUser = userDatils;
        this.selected = true;
      },
      error => {
        this.selected = false;
        console.error(error);
      }
    )
  }
}
