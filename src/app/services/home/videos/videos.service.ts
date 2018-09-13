import { Injectable } from '@angular/core';
import { videos } from '@app/services/home/videos/videosList';


@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor() { }
  getVideos(){
    return videos;
  }
}
