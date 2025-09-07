import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBusinessDetails } from './list-business-details';

describe('ListBusinessDetails', () => {
  let component: ListBusinessDetails;
  let fixture: ComponentFixture<ListBusinessDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBusinessDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBusinessDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
