import { TestBed } from '@angular/core/testing';

import { AudioDBService } from './audio-db.service';

describe('AudioDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioDBService = TestBed.get(AudioDBService);
    expect(service).toBeTruthy();
  });
});
