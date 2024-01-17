import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstilosPage } from './estilos.page';

describe('EstilosPage', () => {
  let component: EstilosPage;
  let fixture: ComponentFixture<EstilosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstilosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
