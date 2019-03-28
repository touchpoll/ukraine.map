import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ukraine.MapComponent } from './ukraine.map.component';

describe('Ukraine.MapComponent', () => {
  let component: Ukraine.MapComponent;
  let fixture: ComponentFixture<Ukraine.MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ukraine.MapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ukraine.MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
