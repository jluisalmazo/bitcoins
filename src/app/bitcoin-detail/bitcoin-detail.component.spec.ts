import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinDetailComponent } from './bitcoin-detail.component';

describe('BitcoinDetailComponent', () => {
  let component: BitcoinDetailComponent;
  let fixture: ComponentFixture<BitcoinDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitcoinDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
