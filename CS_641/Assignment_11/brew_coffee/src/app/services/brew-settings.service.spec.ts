import { TestBed } from '@angular/core/testing';

import { BrewSettingsService } from './brew-settings.service';

describe('BrewSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrewSettingsService = TestBed.get(BrewSettingsService);
    expect(service).toBeTruthy();
  });
});
