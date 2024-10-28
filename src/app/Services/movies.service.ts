import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, map, pluck, take, of, tap, catchError, firstValueFrom, lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})



export class MoviesService {


 

  private apikey : string = 'bbccbb23';
  readonly url = `https://www.omdbapi.com/`;

  private apikey2 : string = '2fc2c182ed24a42a258f522f4e63d940';
  readonly url2 = `https://api.themoviedb.org/3/search/movie?`;
  readonly url3 = `https://api.themoviedb.org/3/movie/`
  constructor(private http: HttpClient) { }

 async getMovies(name : string) {

 const data$ = this.http.get(`${this.url2}api_key=${this.apikey2}&language=es-Es&query=${name}&page=1&include_adult=false`)
  const movies = lastValueFrom(data$);
  return movies;
 }

 async getMovie(id: number) {
  const data$ = this.http.get(`${this.url3}${id}?api_key=${this.apikey2}&language=es-Es`)
  const movie =  lastValueFrom(data$);
  return movie;
 }



 
  
}
















 








  

  


