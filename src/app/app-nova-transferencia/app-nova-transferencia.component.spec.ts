import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNovaTransferenciaComponent } from './app-nova-transferencia.component';

describe('AppNovaTransferenciaComponent', () => {
  let component: AppNovaTransferenciaComponent;
  let fixture: ComponentFixture<AppNovaTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNovaTransferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNovaTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
