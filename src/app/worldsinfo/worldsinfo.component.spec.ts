import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldsinfoComponent } from './worldsinfo.component';

describe('WorldsinfoComponent', () => {
  let component: WorldsinfoComponent;
  let fixture: ComponentFixture<WorldsinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldsinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
