import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserRegisterComponent} from './user-register.component';
import {UserModule} from '../../user.module';
import {DasboardComponent} from '../../../home/components/dasboard/dasboard.component';

describe('UserRegisterComponent', () => {
  let component: UserRegisterComponent;
  let fixture: ComponentFixture<UserRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DasboardComponent],
      imports: [UserModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
