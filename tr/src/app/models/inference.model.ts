


export class Inference{
id!: number;
query!: string;
response!: string;
whenMade!: Date;
correct: boolean = true;    
// incorrectWords?: string;
constructor(query: string, whenCreated: Date){
    this.whenMade = whenCreated;
    this.query = query;
}
}