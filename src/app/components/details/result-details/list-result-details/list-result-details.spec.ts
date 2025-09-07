import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResultDetails } from './list-result-details';

describe('ListResultDetails', () => {
  let component: ListResultDetails;
  let fixture: ComponentFixture<ListResultDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListResultDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListResultDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
