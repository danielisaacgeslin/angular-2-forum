import { Component } from 'angular2/core';
import { AjaxService } from '../services/ajax.service';
import { IArticle } from '../interfaces/article.interface';

@Component({
  selector: 'a2f-article-list',
  templateUrl: 'app/articleList/article-list.component.html'
})
export class ArticleList {
  articles: IArticle[];

  constructor(private _ajaxService: AjaxService){
  }

  ngOnInit(): void{
    this._ajaxService.getArticleList().subscribe(
      articles => this.articles = articles
    );
  }
}
