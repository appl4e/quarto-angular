import { Component, OnInit } from '@angular/core';
import { VideosService } from '@app/services/home/videos/videos.service';

@Component({
  selector: 'quarto-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  videoSorts = 1;
  vidSorts = [
    { id: 1, name: 'A-Z' },
    { id: 2, name: 'Z-A' },
    { id: 3, name: 'Most Viewed' },
    { id: 4, name: 'Date' }
  ]

  public videos = [];
  constructor(private videosService: VideosService) { }

  ngOnInit() {
    this.videos = this.videosService.getVideos();
  }

}
