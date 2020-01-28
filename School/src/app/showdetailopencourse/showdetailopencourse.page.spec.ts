import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowdetailopencoursePage } from './showdetailopencourse.page';

describe('ShowdetailopencoursePage', () => {
  let component: ShowdetailopencoursePage;
  let fixture: ComponentFixture<ShowdetailopencoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdetailopencoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowdetailopencoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
