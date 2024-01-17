import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulariosPage } from './formularios.page';

describe('FormulariosPage', () => {
  let component: FormulariosPage;
  let fixture: ComponentFixture<FormulariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormulariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
