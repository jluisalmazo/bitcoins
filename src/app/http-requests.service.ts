import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpRequestsService {

  constructor(private readonly http: HttpClient) {    
  }

  sendGetRequest(webservice_URL: string) {

    console.log("Sending GET request to: " + webservice_URL);

    return this.http.get(webservice_URL);
  }

}