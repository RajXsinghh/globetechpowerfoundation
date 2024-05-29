import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResonComponent } from './reson.component';

describe('ResonComponent', () => {
  let component: ResonComponent;
  let fixture: ComponentFixture<ResonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
