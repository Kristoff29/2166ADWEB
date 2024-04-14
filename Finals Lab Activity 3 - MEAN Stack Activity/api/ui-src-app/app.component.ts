import { Component } from '@angular/core';
//import httpclient
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booksapp';
  //set the link of the based route
  readonly APIUrl="http://localhost:5038/api/books/";
  

  constructor(private http:HttpClient){
  }
  //initialize the books array
  books:any=[];

  refreshBooks(){
    this.http.get(this.APIUrl+'GetBooks').subscribe(data=>{
      this.books=data;
    })
  }
  ngOnInit(){
    this.refreshBooks();
  }

  addBook() {
    var newBook = (<HTMLInputElement>document.getElementById("newBook")).value;
    var newDesc = (<HTMLInputElement>document.getElementById("newDesc")).value;
    var newPrice = parseFloat((<HTMLInputElement>document.getElementById("newPrice")).value); // Ensure price is parsed as a number
    var formData = new FormData();
    formData.append("title", newBook);
    formData.append("description", newDesc); // Add description to FormData
    formData.append("price", newPrice.toString()); // Add price to FormData and convert to string
    this.http.post(this.APIUrl + 'AddBook', formData).subscribe(
      (data) => {
        alert("Book added successfully!");
        this.refreshBooks();
      },
      (error) => {
        console.error("Error adding book:", error);
        alert("Failed to add book. Please try again later.");
      }
    );
  }
  deleteBook(id:any){
      this.http.delete(this.APIUrl+'DeleteBook?id='+id).subscribe(data=>{
      alert(data);
      this.refreshBooks()
    })
  }
}