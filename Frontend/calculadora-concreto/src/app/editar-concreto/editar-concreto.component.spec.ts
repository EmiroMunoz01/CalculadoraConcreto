import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarConcretoComponent } from './editar-concreto.component';

describe('EditarConcretoComponent', () => {
  let component: EditarConcretoComponent;
  let fixture: ComponentFixture<EditarConcretoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarConcretoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarConcretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
