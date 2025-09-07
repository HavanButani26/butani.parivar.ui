import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMembers } from './create-members';

describe('CreateMembers', () => {
  let component: CreateMembers;
  let fixture: ComponentFixture<CreateMembers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMembers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMembers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
