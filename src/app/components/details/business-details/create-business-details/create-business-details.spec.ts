import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBusinessDetails } from './create-business-details';

describe('CreateBusinessDetails', () => {
  let component: CreateBusinessDetails;
  let fixture: ComponentFixture<CreateBusinessDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBusinessDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBusinessDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
