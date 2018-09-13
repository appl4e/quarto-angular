import { Component, OnInit } from '@angular/core';
import { VideosService } from '@app/services/home/videos/videos.service';

@Component({
  selector: 'quarto-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  public videos = [];
  constructor(private videosService: VideosService) { }

  ngOnInit() {
    this.videos = this.videosService.getVideos();
  }

}
