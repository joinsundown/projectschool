import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowdatastudentPage } from './showdatastudent.page';

describe('ShowdatastudentPage', () => {
  let component: ShowdatastudentPage;
  let fixture: ComponentFixture<ShowdatastudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdatastudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowdatastudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
