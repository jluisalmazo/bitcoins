import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from '../http-requests.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-bitcoins-list',
  templateUrl: './bitcoins-list.component.html',
  styleUrls: ['./bitcoins-list.component.scss']
})
export class BitcoinsListComponent implements OnInit {

  bitcoins = [];
  ready = false;

  constructor(private readonly httpRequestsService: HttpRequestsService) {
  }

  ngOnInit() {

    this.httpRequestsService.sendGetRequest('https://api.coinmarketcap.com/v2/listings/').subscribe(
      res => {

        for(let i = 0; i < res['data'].length; i++) {

          // Filtramos los bitcoins con id par y los agregamos al arreglo de bitcoins.
          if((res['data'][i]['id'] % 2) === 0){
            this.bitcoins.push(res['data'][i]);
          }
        }

        // Ordenamos el arreglo de bitcoins alfabéticamente.
        this.bitcoins.sort((a, b) => {
          if(a['name'] < b['name']) { return -1; }
          if(a['name'] > b['name']) { return 1; }
          return 0;
        });

        this.ready = true;

      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );

  }


}
