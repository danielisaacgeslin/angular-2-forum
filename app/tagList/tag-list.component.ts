import { Component } from 'angular2/core';
import { ITag } from '../interfaces/tag.interface';
import { AjaxService } from '../services/ajax.service';

@Component({
  templateUrl: 'app/tagList/tag-list.component.html'
})
export class TagList{
  tags: ITag[];

  constructor(private _ajaxService: AjaxService){}

  ngOnInit(): void{
    this._ajaxService.getTags().subscribe(
      tags => this.tags = tags
    );
  }
}
