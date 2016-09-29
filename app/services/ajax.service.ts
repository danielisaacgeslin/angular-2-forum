import { Injectable } from 'angular2/core';
import { AdapterService } from './adapter.service';
import { Http, Response } from 'angular2/http';
import { IArticle } from '../interfaces/article.interface';
import { ITag } from '../interfaces/tag.interface';
import { IComment } from '../interfaces/comment.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AjaxService{
  api: string = 'http://localhost/dgeslin/?route=';

  constructor(private _http: Http, private _adapterService: AdapterService){ }

  getArticleList(): Observable<IArticle[]>{
    return this._http.get(this.api.concat('getArticleList'))
    .map((response: Response)=><IArticle[]>this._adapterService.adaptDBArray(response.json().payload))
    //.do(data=>console.log(data))
    .catch(this.handleError);
  }

  getArticle(id: number): Observable<IArticle>{
    return this._http.get(this.api.concat('getArticle&id=' + id))
    .map((response: Response)=><IArticle>this._adapterService.adaptDBArray(response.json().payload)[0])
    .catch(this.handleError);
  }

  getComments(id: number): Observable<IComment[]>{
    return this._http.get(this.api.concat('getComments&article_id=' + id))
    .map((response: Response)=><IComment[]>this._adapterService.adaptDBArray(response.json().payload))
    .catch(this.handleError);
  }

  getArticleTagList(id: number): Observable<ITag[]>{
    return this._http.get(this.api.concat('getArticleTagList&article_id=' + id))
    .map((response: Response)=><ITag[]>this._adapterService.adaptDBArray(response.json().payload))
    .catch(this.handleError);
  }

  getTags(): Observable<ITag[]>{
    return this._http.get(this.api.concat('getTags'))
    .map((response: Response)=><ITag[]>this._adapterService.adaptDBArray(response.json().payload))
    .catch(this.handleError);
  }

  handleError(error: Response){
    return Observable.throw(error || 'server error');
  }
}
