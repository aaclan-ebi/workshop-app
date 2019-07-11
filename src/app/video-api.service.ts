import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const API_URL = 'https://api.angularbootcamp.com'; // TODO can be put to env ts

@Injectable({
  providedIn: 'root'
})

export class VideoApiService {

  constructor(private http: HttpClient) {}

  public getVideos(){
    return this.http.get<Video[]>(API_URL + '/videos');
  }
}
