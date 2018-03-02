import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BrowserModule } from "@angular/platform-browser";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  books: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("/book").subscribe(data => {
      this.books = data;
    });
  }
}
