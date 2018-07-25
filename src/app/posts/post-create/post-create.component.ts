import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return ;
    }
  }

}
