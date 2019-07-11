import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListComponent } from './video-list.component';
import {DashboardModule} from '../dashboard.module';

describe('VideoListComponent', () => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoListComponent ],
      imports:[ DashboardModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const videos: Video[] = [  {
      "title": "Angular Observable Data Flow",
      "author": "Kyle Cordes",
      "id": "JPuqluYYa-o",
      "viewDetails": [
        {
          "age": 17,
          "region": "North America",
          "date": "2016-03-23"
        }
      ]
    }]
    component.videos = videos;
    component.selectedVideo = videos[0];
    expect(component).toBeTruthy();
  });
});
