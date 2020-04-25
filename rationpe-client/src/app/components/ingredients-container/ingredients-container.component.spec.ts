import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsContainerComponent } from './ingredients-container.component';

describe('IngredientsContainerComponent', () => {
  let component: IngredientsContainerComponent;
  let fixture: ComponentFixture<IngredientsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
