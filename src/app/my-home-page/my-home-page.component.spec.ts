import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHomePageComponent } from './my-home-page.component';

describe('MyHomePageComponent', () => {
  let component: MyHomePageComponent;
  let fixture: ComponentFixture<MyHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
