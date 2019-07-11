import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VideoDashboardComponent } from "./video-dashboard.component";
import { VideoComponent } from "../video/video.component";

describe("VideoDashboardComponent", () => {
  let component: VideoDashboardComponent;
  let video: VideoComponent;
  let fixture: ComponentFixture<VideoDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoDashboardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
