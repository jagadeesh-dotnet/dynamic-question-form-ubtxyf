import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormsModule,FormGroup, Validators, FormControl,AbstractControl } from '@angular/forms';
import {Question,QuestionGroup} from './QuestionGroup';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Dynamic Question Form';
  questions: any;
  questiononeForm: FormGroup;
  submitted = false;
  isDataAvailable = false;
  constructor(private formBuilder: FormBuilder,private http:HttpClient) {
  }
   ngOnInit() {
     this.GetQuestionFromJSon()
     this.questiononeForm = this.formBuilder.group({
       bolloywoodfilms: ['', Validators.required],
      housefull4: ['', Validators.required],
      amitabhangryyoungman: ['', Validators.required]
      
     });
   }
   public QuestionOne: Question[];
   public lstQG: QuestionGroup[];
   GetQuestionFromJSon()
   {
       this.http.get('../assets/question.json').subscribe(res2 => {
       this.lstQG = res2 as QuestionGroup[];
      //console.log(this.lstQG);
     // this.QuestionOne = this.lstQG[0].plp;
      console.log(this.lstQG.length);
      if (this.lstQG[0].plp.length > 0) {
        this.isDataAvailable = true;
        this.QuestionOne = this.lstQG[0].plp;
      }
    });
   }
   getQuestionFormGroup(index): AbstractControl {
   
    switch (index) {
      case 0:
        //console.log(this.devicequestiononeForm.controls.simWorking.errors);
        return this.questiononeForm.controls.bolloywoodfilms;
      case 1:
        return this.questiononeForm.controls.housefull4;
      case 2:
        return this.questiononeForm.controls.amitabhangryyoungman;
      
      default:
        return undefined;
    }
    // return formGroup;
  }
   onSubmit() {
    console.log("form submitted");
    console.log(this.questiononeForm.invalid);
    

    // stop here if form is invalid
    if (this.questiononeForm.invalid) {

      return;
    }
    this.submitted = true;
   }
}
