import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherAtmService {
  private key: string = 'e8c1cab47ba2897cac83882e320124d2'
  private url: string = 'https://api.openweathermap.org/data/2.5/weather?q='
  private params: string = '&lang=fr&appid='
  constructor(private http: HttpClient) { }
  getWeather(userChoice: string): Observable<any> {
    const obs: Observable<any> = this.http.get(`${this.url}${userChoice}${this.params}${this.key}`)
    const selectedResult = (data: any) => {
      return data as JSON
    }
    return obs.pipe(map(selectedResult))
  }
}
