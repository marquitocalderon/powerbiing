import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EltcomprasComponent } from './eltcompras.component';

describe('EltcomprasComponent', () => {
  let component: EltcomprasComponent;
  let fixture: ComponentFixture<EltcomprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EltcomprasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EltcomprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
