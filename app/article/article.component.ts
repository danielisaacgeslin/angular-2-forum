import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { IArticle } from '../interfaces/article.interface';
import { ITag } from '../interfaces/tag.interface';
import { IComment } from '../interfaces/comment.interface';
import { AjaxService } from '../services/ajax.service';

@Component({
  templateUrl: 'app/article/article.component.html'
})
export class Article{
  id: number;
  article: IArticle;
  edition: IArticle;
  tags: ITag[];
  comments: IComment[];
  editEnabled: boolean = true;

  constructor(private _ajaxService: AjaxService, private _routeParams: RouteParams){ }

  ngOnInit(): void{
    const id: number = Number(this._routeParams.get('id'));
    if(!isNaN(id)){
      this.id = id;
    }
  }
}
