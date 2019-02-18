import { Component } from '@angular/core';
import { HttpRequestsService } from './http-requests.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private readonly httpRequestsService: HttpRequestsService) {

    this.httpRequestsService.sendGetRequest('https://api.coinmarketcap.com/v2/listings/').subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );

  }



  

}
