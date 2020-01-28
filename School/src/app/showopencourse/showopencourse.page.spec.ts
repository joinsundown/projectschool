import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowopencoursePage } from './showopencourse.page';

describe('ShowopencoursePage', () => {
  let component: ShowopencoursePage;
  let fixture: ComponentFixture<ShowopencoursePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowopencoursePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowopencoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
