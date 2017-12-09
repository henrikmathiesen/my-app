import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { IPost } from 'app/shared/models/post.interface';

@Component({
    templateUrl: './paging.component.html',
    styleUrls: [
        './paging.component.scss'
    ],
    providers: [
        PostsService
    ]
})
export class PagingComponent implements OnInit {
    
    posts: IPost[];

    constructor(
        private postsService: PostsService
    ) { }

    ngOnInit() { 
        this.postsService.get().then(data => {
            this.posts = data;
        });
    }
}
