import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent implements OnInit {
  @Input() videos: Video[];
  @Output('select') selectVideo : EventEmitter<Video> = new EventEmitter<Video>();

  selectedVideo: Video;

  constructor() { }

  ngOnInit() {
  }

  select(video){
    this.selectedVideo = video;
    this.selectVideo.emit(video);
  }
}
