import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})


export class BlogEditComponent implements OnInit {
  public currentBlog: object;
  public isLoaded: boolean;

  public postStatus = false;
  public postStatusError = false;

  public blogTitle: string;
  public blogBody: string;
  public blogDesc: string;
  public blogCat: string;
  public blogId: string;

  public possibleCategories = ["Comedy", "Drama", "Action", "Technology"];

  constructor(private _route: ActivatedRoute, private router: Router, private BlogHttpService: BlogHttpService) { }

  async ngOnInit() {
    this.isLoaded = false;
    this.postStatus = false;
    this.postStatusError = false;

    await this.BlogHttpService.constructorBlogFunction();

    this.currentBlog = await this.getCurrentBlog();

    console.log(this.currentBlog)
    // @ts-ignore
    this.blogTitle = this.currentBlog.title;
    // @ts-ignore
    this.blogDesc = this.currentBlog.description;
    // @ts-ignore
    this.blogBody = this.currentBlog.bodyHtml;
    // @ts-ignore
    this.blogCat = this.currentBlog.category;
    // @ts-ignore
    this.blogId = this.currentBlog.blogId;

    this.isLoaded = true;
  }

  async getCurrentBlog() {
    let tempCurrentBlog;

    await this.BlogHttpService.requestApiData().toPromise().then(data => {
      tempCurrentBlog = data['data'];
    })

    return await tempCurrentBlog;
  }

  editThisBlog() {

    let blogData = {
      
      title: this.blogTitle,
      description: this.blogDesc,
      bodyHtml: this.blogBody,
      category: this.blogCat
      
    }

    this.BlogHttpService.editBlog(blogData, this.blogId).subscribe(

      data => {
        if (data.error === true || data.data.nModified === 0) {
          this.postStatusError = true;
          this.postStatus = false;
          console.log(data)
        }

        else {
          this.postStatus = true;
          this.postStatusError = false;
          setTimeout(() => {
            this.router.navigate(['/blog', this.blogId])
          }, 1000);
        }
      },

      error => {
        this.postStatusError = true;
      }
    )
  }

}
