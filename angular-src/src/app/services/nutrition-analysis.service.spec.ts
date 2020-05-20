/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NutritionAnalysisService } from './nutrition-analysis.service';

describe('NutritionAnalysisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NutritionAnalysisService]
    });
  });

  it('should ...', inject([NutritionAnalysisService], (service: NutritionAnalysisService) => {
    expect(service).toBeTruthy();
  }));
});
