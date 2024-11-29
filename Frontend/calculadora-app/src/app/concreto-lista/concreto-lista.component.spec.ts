import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcretoListaComponent } from './concreto-lista.component';

describe('ConcretoListaComponent', () => {
  let component: ConcretoListaComponent;
  let fixture: ComponentFixture<ConcretoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcretoListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcretoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
