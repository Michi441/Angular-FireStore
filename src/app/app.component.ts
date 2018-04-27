import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


interface Post {
  title: string;
  content: string;
}

interface PostID extends Post{
  id: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  content: string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;


  postCollection: AngularFirestoreCollection<Post>;
  posts: any;
  constructor(private afs: AngularFirestore){

  }

  addPost(){
    this.afs.collection('posts').add({ 'title': this.title, 'content': this.content });
  }

  ngOnInit(){

    this.postCollection = this.afs.collection('posts');
    this.posts = this.postCollection.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        })
      })


  }

  getPost(id){
    this.postDoc = this.afs.doc('posts/'+id);
    this.post = this.postDoc.valueChanges();
  }

  deletePost(id){
    this.afs.doc('posts/'+id).delete();
  }
}
