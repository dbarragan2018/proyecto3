import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebagitComponent } from './pruebagit.component';

describe('PruebagitComponent', () => {
  let component: PruebagitComponent;
  let fixture: ComponentFixture<PruebagitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebagitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebagitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
