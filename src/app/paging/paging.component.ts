import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { IPost } from 'app/shared/models/post.interface';

@Component({
    templateUrl: './paging.component.html',
    providers: [
        PostsService
    ]
})
export class PagingComponent implements OnInit {
    
    posts: IPost[];

    constructor(
        postsService: PostsService
    ) { }

    ngOnInit() { 
        
    }
}
