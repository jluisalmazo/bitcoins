import { Component, OnInit } from '@angular/core';
import { HttpRequestsService } from '../http-requests.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';


@Component({
  selector: 'app-bitcoin-detail',
  templateUrl: './bitcoin-detail.component.html',
  styleUrls: ['./bitcoin-detail.component.scss']
})
export class BitcoinDetailComponent implements OnInit {

  bitcoin_Id = '';
  bitcoin_Name = '';
  bitcoin_Rank = 0;
  bitcoin_USDprice = 0;
  USD_exchangeRate = 0;
  MXN = 0;
  bitcoin_toMXN = 0;
  todayAsString = '';
  ready = false;

  constructor(private readonly httpRequestsService: HttpRequestsService, private route: ActivatedRoute, private _location: Location) {

    // Obtenemos el parámetro id (del url) para poder hacer el request al end point con los datos del bitcoin.
    this.bitcoin_Id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {


    this.httpRequestsService.sendGetRequest('https://api.coinmarketcap.com/v2/ticker/' + this.bitcoin_Id + '/').subscribe(
      res => {

        console.log(res['data']);

        // Hacemos el request a un endpoint para obtener el tipo de cambio de USD a MXN.
        // No encontré como obtenerlo con el API coinmarketcap, así que busqué un endpoint sencillo que me lo diera sin necesidad de key.
        this.httpRequestsService.sendGetRequest('https://ratesapi.io/api/latest?base=USD').subscribe(
          res => {
            console.log(res);
            this.USD_exchangeRate =  res['rates']['MXN'];
          },
          (err: HttpErrorResponse) => {
            console.log(err);
          }
        );
    

        this.bitcoin_Name = res['data']['name'];
        this.bitcoin_Rank = res['data']['rank']
        this.bitcoin_USDprice = res['data']['quotes']['USD']['price'];
        //this.usdExchangeRate = 0;
        this.MXN = 0;
        this.bitcoin_toMXN = 0;

        // Obtenemos la fecha actual.
        let today = new Date();
        let day = today.getDate();
        let dayAsString = day < 10 ? '0' + day : day;
        let month = today.getMonth() + 1;
        let monthAsString = month < 10 ? '0' + month : month;
        this.todayAsString = dayAsString + '-' + monthAsString + '-' + today.getFullYear();

        this.ready = true;
        
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );

  }

  gotoPreviousPage() {
    this._location.back();
  }
}
