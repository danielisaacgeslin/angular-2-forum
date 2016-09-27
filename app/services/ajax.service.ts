import { Injectable } from 'angular2/core';
import { AdapterService } from './adapter.service';
import { Http, Response } from 'angular2/http';
import { IArticle } from '../interfaces/article.interface';
import { ITag } from '../interfaces/tag.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AjaxService{
  api: string = 'http://localhost/dgeslin/?route=';

  constructor(private _http: Http, private _adapterService: AdapterService){ }

  getArticleList(): Observable<IArticle[]>{
    return this._http.get(this.api.concat('getArticleList'))
    .map((response: Response)=>{
      const data: IArticle[] = this._adapterService.adaptDBArray(response.json().payload);
      return <IArticle[]>data;
    })
    //.do(data=>console.log(data))
    .catch(this.handleError);
  }

  getTags(): Observable<ITag[]>{
    return this._http.get(this.api.concat('getTags'))
    .map((response: Response)=>{
      const data: ITag[] = this._adapterService.adaptDBArray(response.json().payload);
      return <ITag[]>data;
    })
    //.do(data=>console.log(data))
    .catch(this.handleError);
  }

  handleError(error: Response){
    return Observable.throw(error.json().error || 'server error');
  }
}
