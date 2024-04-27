import { Pipe, PipeTransform } from "@angular/core";



@Pipe({
    name: 'fullName',
    standalone: true
})
export class NamePipe implements PipeTransform{

    transform(firstName?: string, lastName?: string): string {
        if(!firstName || !lastName)
            return '';
        return `${firstName} ${lastName.charAt(0).toUpperCase()+lastName.charAt(lastName.length-1)}`;
    }

}