import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { IArticle } from '../interfaces/article.interface';
import { ITag } from '../interfaces/tag.interface';
import { IComment } from '../interfaces/comment.interface';
import { Observable } from 'rxjs/Observable';
import { AjaxService } from '../services/ajax.service';

@Component({
  templateUrl: 'app/article/article.component.html'
})
export class Article{
  private id: number;
  public article: IArticle;
  public comments: IComment[] = [];
  public articleTags: ITag[] = [];
  public edition: IArticle;
  public tags: ITag[] = [];
  public selectedTagId: number;
  public editableCommentText: string;
  public editableComment: number;
  public newComment: string;
  public editEnabled: boolean = true;

  constructor(private _ajaxService: AjaxService, private _routeParams: RouteParams){ }

  private ngOnInit(): void{
    const id: number = Number(this._routeParams.get('id'));
    if(!isNaN(id)){
      this.id = id;
      this.updateArticle();
      this.updateComments();
      this.updateArticleTags();
    }
    this._ajaxService.getTags().subscribe(tags => this.tags = tags);
  }

  private updateArticle(): void{
    this._ajaxService.getArticle(this.id).subscribe(article => this.article = this.edition = article);
  }

  private updateComments(): void{
    this._ajaxService.getComments(this.id).subscribe(comments => this.comments = comments);
  }

  private updateArticleTags(): void{
    this._ajaxService.getArticleTagList(this.id).subscribe(articleTags => this.articleTags = articleTags);
  }

  public setEditableComment(comment: IComment): void{
    this.editableComment = this.editableComment !== comment.id ? comment.id : null;
    this.editableCommentText = this.editableComment !== comment.id ? comment.text : null;
    console.log(this.editableComment, this.editableCommentText)
  }

  public filterTags(): ITag[]{
    let filteredTags: ITag[] = [];
    filteredTags = this.tags.filter(tag =>{
      for(let i=0; i<this.articleTags.length; i++){
        if(this.articleTags[i].id === tag.id){
          return false;
        }
      }
      return true;
    });
    return <ITag[]>filteredTags;
  }
}
