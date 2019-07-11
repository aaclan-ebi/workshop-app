import { Component, OnInit } from "@angular/core";
import { VideoApiService } from "../../video-api.service";
import {Observable} from 'rxjs';

@Component({
  selector: "app-video-dashboard",
  templateUrl: "./video-dashboard.component.html",
  styleUrls: ["./video-dashboard.component.css"]
})
export class VideoDashboardComponent implements OnInit {
  videos$: Observable<Video[]>;
  selectedVideo;

  constructor(private videoService: VideoApiService) {
    this.videos$ = videoService.getVideos();
  }

  ngOnInit() {}

  onSelect(event: Video) {
    this.selectedVideo = event;
  }
}
