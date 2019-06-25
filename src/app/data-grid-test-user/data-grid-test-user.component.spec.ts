import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridTestUserComponent } from './data-grid-test-user.component';

describe('DataGridTestUserComponent', () => {
  let component: DataGridTestUserComponent;
  let fixture: ComponentFixture<DataGridTestUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGridTestUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridTestUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
