import { FeedbackType } from "../constants/feedback-type";



export class Feedback{
id!: number;
complaint!: string;
whenMade!: Date;
type!: FeedbackType;
constructor(info: {complaint: string, type: FeedbackType, whenMade: Date}){
    this.complaint = info.complaint;
    this.whenMade = info.whenMade;
    this.type = info.type;
}

}