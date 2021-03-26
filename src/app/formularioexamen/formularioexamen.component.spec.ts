import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioexamenComponent } from './formularioexamen.component';

describe('FormularioexamenComponent', () => {
  let component: FormularioexamenComponent;
  let fixture: ComponentFixture<FormularioexamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioexamenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioexamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
