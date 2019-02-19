import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinsListComponent } from './bitcoins-list.component';

describe('BitcoinsListComponent', () => {
  let component: BitcoinsListComponent;
  let fixture: ComponentFixture<BitcoinsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
