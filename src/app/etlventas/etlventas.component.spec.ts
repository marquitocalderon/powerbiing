import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtlventasComponent } from './etlventas.component';

describe('EtlventasComponent', () => {
  let component: EtlventasComponent;
  let fixture: ComponentFixture<EtlventasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtlventasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtlventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
