import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellous'
})
export class MarvellousPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // console.log(value +" " +args[1]);
    let str=value;
    if(args[0]=="PPA")
    {
      str+=" covers the programming foundation";
    }
    if(args[0]=="LB")
    {
      str+=" covers the programming logic";
    }
    if(args[0]=="MEAN")
    {
      str+=" covers the web development";
    }
    return str;
  }
}
