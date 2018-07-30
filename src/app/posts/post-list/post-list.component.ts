import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

import { Post } from "../post.model"
import { PostsService } from "../posts.service";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit, OnDestroy {
    public uploadedPostImage: string;
    public username: string;
    posts: Post[] = [];
    private postsSub: Subscription;

    constructor(public postsService: PostsService) {

    }

    ngOnInit() {
        this.postsService.getPosts();
        this.postsSub = this.postsService.getPostUpdateListener()
            .subscribe((posts: Post[]) => {
                this.posts = posts;
            });

        this.uploadedPostImage = "../../../assets/images/tloz-botw-world.jpg";
        this.username = "Zelda Fan"
    }

    onDelete(postId: string) {
        this.postsService.deletePost(postId);
    }

    ngOnDestroy() {
        this.postsSub.unsubscribe();
    }
}
