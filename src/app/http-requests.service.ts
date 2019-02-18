import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpRequestsService {

  constructor(private readonly http: HttpClient) {    
  }

  sendGetRequest(webservice_URL: string) {

    console.log("Sending GET request to: " + webservice_URL);

    const httpOptions = {
        headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
            'Content-Type': 'application/json'
        })
    };


    console.log(httpOptions);

    return this.http.get(webservice_URL, httpOptions);
  }

}


//'Content-Type': 'application/json',

// ,
//             'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'