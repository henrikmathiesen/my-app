import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

import { PostsService } from './posts.service';
import { IPost } from 'app/shared/models/post.interface';

interface IPaginationInstance extends PaginationInstance {
    selectableItemsPerPage:number[];
}

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
    paginationSettings: IPaginationInstance = {
        itemsPerPage: 5,
        currentPage: 1,
        selectableItemsPerPage: [
            5,
            10,
            20
        ]
    }

    constructor(
        private postsService: PostsService
    ) { }

    ngOnInit() { 
        this.postsService.get().then(data => {
            this.posts = data;
        });
    }
}
