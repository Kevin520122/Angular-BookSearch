import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWishListPageComponent } from './show-wish-list-page.component';

describe('ShowWishListPageComponent', () => {
  let component: ShowWishListPageComponent;
  let fixture: ComponentFixture<ShowWishListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowWishListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowWishListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
