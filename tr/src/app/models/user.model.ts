

export class User {

username!: string;
firstName!: string;
lastName!: string;
email!: string;
whenCreated!: Date;
premium: Date | null = null;
// pfp?: string;

// isPremium(): boolean {
//     if(!this.premium || this.premium < new Date())
//         return false;
//     return true;
// }
}