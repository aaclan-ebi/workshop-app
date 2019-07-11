import { Component, OnInit } from '@angular/core';
import {VideoApiService} from '../../video-api.service';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {

  videos: Video[];
  selectedVideo;

  constructor(private videoService: VideoApiService) {
    videoService.getVideos().subscribe(
      video => (this.videos = video)
    );
  }

  ngOnInit() {
  }

  onSelect(event: Video) {
    this.selectedVideo = event;
  }
}


