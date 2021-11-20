import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have at least one paragraph', ()=>{
    let pElements = fixture.nativeElement.querySelectorAll("p");
    expect(pElements.length).toBeGreaterThan(0);
  });

  it('should have a p element with class "greeting" that says: home works!',()=>{
    let pElement = fixture.nativeElement.querySelector("p.greeting");
    expect(pElement).toBeTruthy();
    expect(pElement.textContent).toEqual("home works!");
  });

  it('should set x to 1 when the button is clicked', ()=>{
    let btn = fixture.nativeElement.querySelector("button");
    expect(btn).toBeTruthy();

    btn.click();

    fixture.whenStable().then(()=>{
      expect(component.x).toEqual(1);
    })

  });

});
