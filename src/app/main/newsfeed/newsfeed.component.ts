import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  rssToJsonServiceBaseUrl = "http://globalnews.ca/feed/";
  constructor(private http: Http) { }

  // getFeedContent(url: string): Observable<any> {
  //   debugger;
  //   return this.http.get(this.rssToJsonServiceBaseUrl + url)
  //     .map(this.extractFeeds)
  //     .catch(this.handleError);
  // }
  getFeedContent(q: any): Observable<any> {

    return this.http.get(this.rssToJsonServiceBaseUrl + q)
      .map(res => res.json())
      .catch(this.handleError);
  }
  // private extractData(res: Response) {
  //   let body;
  //   let status: number;
  //   try {
  //     body = res.text() ? res.json() : {};
  //   }
  //   catch (e) {
  //     body = res.text();
  //   }
  //   finally {
  //     status = res.status;
  //   }
  //   return { body, status };
  // }
  // private extractFeeds(res): any {
  //   debugger;
  //   console.log(12);
  //   let feed = res.json();
  //   console.log(feed);
  //   return feed || {};
  // }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  ngOnInit() {
    let feed = this.getFeedContent('');
    console.log(feed);
  }


}
