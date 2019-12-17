import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoffeeViewPage } from './coffee-view.page';

describe('CoffeeViewPage', () => {
  let component: CoffeeViewPage;
  let fixture: ComponentFixture<CoffeeViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoffeeViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
