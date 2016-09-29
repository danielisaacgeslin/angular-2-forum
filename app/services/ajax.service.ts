import { Injectable } from 'angular2/core';
import { AdapterService } from './adapter.service';
import { Http, Response } from 'angular2/http';
import { IArticle } from '../interfaces/article.interface';
import { ITag } from '../interfaces/tag.interface';
import { IComment } from '../interfaces/comment.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AjaxService{
  private api: string = 'http://localhost/dgeslin/?route=';

  public constructor(private _http: Http, private _adapterService: AdapterService){ }

  public getArticleList(): Observable<IArticle[]>{
    return this._http.get(this.api.concat('getArticleList'))
    .map((response: Response)=><IArticle[]>this._adapterService.adaptDBArray(response.json().payload))
    //.do(data=>console.log(data))
    .catch(this.handleError);
  }

  public getArticle(id: number): Observable<IArticle>{
    return this._http.get(this.api.concat('getArticle&id=' + id))
    .map((response: Response)=><IArticle>this._adapterService.adaptDBArray(response.json().payload)[0])
    .catch(this.handleError);
  }

  public getComments(id: number): Observable<IComment[]>{
    return this._http.get(this.api.concat('getComments&article_id=' + id))
    .map((response: Response)=><IComment[]>this._adapterService.adaptDBArray(response.json().payload))
    .catch(this.handleError);
  }

  public getArticleTagList(id: number): Observable<ITag[]>{
    return this._http.get(this.api.concat('getArticleTagList&article_id=' + id))
    .map((response: Response)=><ITag[]>this._adapterService.adaptDBArray(response.json().payload))
    .catch(this.handleError);
  }

  public getTags(): Observable<ITag[]>{
    return this._http.get(this.api.concat('getTags'))
    .map((response: Response)=><ITag[]>this._adapterService.adaptDBArray(response.json().payload))
    .catch(this.handleError);
  }

  private handleError(error: Response){
    return Observable.throw(error || 'server error');
  }
}
