import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './../user';
import { TemplateUserFormService } from '../template-user-form.service';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  myTopics = ['Angular', 'JS', 'HTML', 'CSS', 'Web Development'];
  userModel = new User('', 'pankaj@example.com', 0, '27A', 'pune', 411001, 'JS', 'morning', true);
  topicErr = true;

  constructor( private _userEnrollService: TemplateUserFormService) { }

  ngOnInit() {
  }
  validateTopic(value) {
    console.log(value);
    (value === 'default') ? this.topicErr = true : this.topicErr = false;
  }
  onSubmit() {
    // console.log(this.userModel);
    this._userEnrollService.usrEnroll(this.userModel)
        .subscribe(
          data => console.log('Success :', data),
          err => console.log('Error! ', err)
        );
  }
}
