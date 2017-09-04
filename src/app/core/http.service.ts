import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ServerResponse} from "../model/core/server-response";
import {escape, unescape} from "querystring";
import {toBase64String} from "@angular/compiler/src/output/source_map";

@Injectable()
export class HttpService {


  private headers : HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append("Accept-Charset","charset=utf-8");
  }


  public post<T>(url: string, data: any, success: (d: ServerResponse<T>) => void, fail?: () => void, allways?: () => void): void {
    this.http.post<T>(url, data, {observe: 'response', headers: this.headers}).subscribe(resp => {
      console.log(resp);
      let succes: boolean = (resp.headers.get('x-app-success') == "true");
      let message = atob(resp.headers.get('x-app-message').toString().trim());
      if (succes) {
        let response = new ServerResponse(succes, message, resp.body);
        success(response);
      } else {
        alert(message);
        if (fail) fail();
      }
      if(allways) allways();
    });
  }

}
