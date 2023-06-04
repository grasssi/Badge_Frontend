import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfccmComponent } from './efccm.component';

describe('EfccmComponent', () => {
  let component: EfccmComponent;
  let fixture: ComponentFixture<EfccmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfccmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EfccmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
