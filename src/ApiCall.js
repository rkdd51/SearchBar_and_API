import React, { useState, useEffect } from "react";
import axios from "axios";

function ApiCall() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <ul>
        {posts
          .filter((post) => {
            if (search == "") {
              return post;
            } else if (
              post.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return post;
            }
          })
          .map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
      </ul>
    </div>
  );
}

export default ApiCall;
