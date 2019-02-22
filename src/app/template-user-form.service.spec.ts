import { TestBed } from '@angular/core/testing';

import { TemplateUserFormService } from './template-user-form.service';

describe('TemplateUserFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemplateUserFormService = TestBed.get(TemplateUserFormService);
    expect(service).toBeTruthy();
  });
});
