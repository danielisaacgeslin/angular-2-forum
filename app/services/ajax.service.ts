import { Injectable } from 'angular2/core';
import { AdapterService } from './adapter.service';
import { Http, Response } from 'angular2/http';
import { IArticle } from '../interfaces/article.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AjaxService{
  api: string = '../dgeslin/?route=';

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

  handleError(error: Response){
    return Observable.throw(error.json().error || 'server error');
  }
}
