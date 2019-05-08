import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SetFormService {

  constructor(private http: HttpClient) { }

  setData(name, email, cellphone_number, age) {
  		var body = new HttpParams().set('name', String(name));
  		if(email != null) {
  			body = body.append('email', email);
      }
      if(cellphone_number != null) {
  			body = body.append('cellphone_number', cellphone_number);
      }
      if(age != null) {
  			body = body.append('age', age);
  		}
  		let headers = new HttpHeaders({'Content-Type':  'application/x-www-form-urlencoded'});
  		console.log(body);
  		return this.http.post("http://192.168.1.5:8080/app/store", body.toString(),{
  			headers: headers,
  			observe: 'response'
      })
  }  
}
