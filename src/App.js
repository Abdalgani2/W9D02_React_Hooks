import React, { useState, useEffect  } from 'react';
import axios from "axios";

// jsx
const App = () => {

  const [posts, setPosts] = useState([{ userId: 5, id: 1030, title: "alddd", body: "the body object 1" }, { userId: 8, id: 201090, title: "ald", body: "the body object 2" }])
  const [userId, setUserId] = useState('0');
  const [id, setId] = useState('0');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const addPost = () => {
    setPosts([...posts,{ userId, id, title, body }])
  }
  console.log(posts)
   useEffect(() => {
       axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      setPosts(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Blog App</h1>
      {posts &&
        posts.map((post) => {
          return (<dev><p>{post.title}</p><p>{post.body}</p></dev>)
        })}
      <button onClick={addPost} ></button>
      <input type="number"
        placeHolder="UserId"
        onChange={(e) => {
          setId(e.target.value);
        }} ></input>
      <input type="number"
        placeHolder="Id"
        onChange={(e) => {
          setUserId(e.target.value);
        }} ></input>
      <input type="text"
        placeHolder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}></input>
      <input type="text" placeHolder="Body"
        onChange={(e) => {
          setBody(e.target.value);
        }} ></input>
    </div>)
};
export default App