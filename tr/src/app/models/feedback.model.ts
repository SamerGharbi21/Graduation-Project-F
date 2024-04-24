import { FeedbackType } from "../constants/feedback-type";



export class Feedback{
id!: number;
complaint!: string;
whenMade!: Date;
type!: FeedbackType;

}