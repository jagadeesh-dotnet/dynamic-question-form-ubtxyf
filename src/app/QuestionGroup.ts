export class Question {
    id: Number;
    category: String;
    displaytext: String;
    text: String;
    cdn: String;
    img: String;
    type: String;
    anstextheader: String;
    controlName:String;
    isRequired:boolean;
    validationMsg: String;
    group: String
    pvr: QuestionOptions[];
}
export class QuestionGroup {
    Id: Number;
    name: String;
    plp: Question[];
}
export class QuestionOptions {
    id: Number;
    qid: String;
    caption: String;
    message: String;
    img: String;
}