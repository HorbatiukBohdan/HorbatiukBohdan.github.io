import React, { useImperativeHandle } from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';



const addPostActionCreator = () => {
  return{
    type: 'ADD-POST'
  }
}
const updateNewPostTextActionCreator = (text) => {
  return { type: 'UPDATE-NEW-POST-TEXT' , newText: text }
  }

const MyPosts = (props) => {
  let postsElements =
    props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action= updateNewPostTextActionCreator(text);
    props.dispatch(action);
  }
  return (
    <div>
      <div className={s.postsBlock}>
        <h3>My posts</h3>
      </div>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add posts</button>
        </div>

      </div>
      <div>
        New posts
      </div>
      <div className={s.posts}>
        {postsElements}

      </div>

    </div>
  )
}
export default MyPosts;