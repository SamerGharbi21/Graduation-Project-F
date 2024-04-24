import { SubscriptionType } from "../constants/subscription-type";


export class Subscription{
id!: number;
whenMade!: Date;
price!: number;
type!: SubscriptionType;
}