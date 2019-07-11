import { TestBed } from '@angular/core/testing';

import { VideoApiService } from './video-api.service';

describe('VideoApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoApiService = TestBed.get(VideoApiService);
    expect(service).toBeTruthy();
  });
});
