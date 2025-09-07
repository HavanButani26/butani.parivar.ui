import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResultDetails } from './create-result-details';

describe('CreateResultDetails', () => {
  let component: CreateResultDetails;
  let fixture: ComponentFixture<CreateResultDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateResultDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateResultDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
