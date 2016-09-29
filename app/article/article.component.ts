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
  comments: IComment[] = [];
  articleTags: ITag[] = [];
  edition: IArticle;
  tags: ITag[] = [];
  editEnabled: boolean = true;

  constructor(private _ajaxService: AjaxService, private _routeParams: RouteParams){ }
  ngOnInit(): void{
    const id: number = Number(this._routeParams.get('id'));
    if(!isNaN(id)){
      this.id = id;
      this.updateArticle();
      this.updateComments();
      this.updateArticleTags();
    }
    this._ajaxService.getTags().subscribe(tags => this.tags = tags);
  }

  updateArticle(): void{
    this._ajaxService.getArticle(this.id).subscribe(article => this.article = this.edition = article);
  }

  updateComments(): void{
    this._ajaxService.getComments(this.id).subscribe(comments => this.comments = comments);
  }

  updateArticleTags(): void{
    this._ajaxService.getArticleTagList(this.id).subscribe(articleTags => this.articleTags = articleTags);
  }

  filterTags(): ITag[]{
    let filteredTags: ITag[] = [];
    if(this.tags.length && this.articleTags.length){
      filteredTags = this.tags.filter(tag =>{
        for(let i=0; i<this.articleTags.length; i++){
          if(this.articleTags[i].id === tag.id){
            return false;
          }
        }
        return true;
      });
    }
    return <ITag[]>filteredTags;
  }


}
