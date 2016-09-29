import { Injectable } from 'angular2/core';

@Injectable()
export class AdapterService{
  public adaptDBArray(array: any[]): any[]{
    const adapted: any[] = [];
    for(let arrayItem of array){
      const obj: Object = {};
      for(let key in arrayItem){
        let item: any = arrayItem[key];
        item = !isNaN(item) && item !== undefined && item !== null ? Number(item) : item;
        item = new RegExp('timestamp','i').test(key) ? new Date(item) : item;
        obj[this.adaptKey(key)] = item;
      }
      adapted.push(obj);
    }
    return <any[]>adapted;
  }

  public adaptKey(key: string): string{
    const keyArray: string[] = key.split('_');
    let newKey: string = '';
    for(let item of keyArray){
      item = item.charAt(0).toUpperCase() + item.substring(1, item.length).toLowerCase();
      newKey = newKey.concat(item);
    }
    newKey = newKey.charAt(0).toLowerCase() + newKey.substring(1, newKey.length);
    return <string>newKey;
  }
}
