import axios from "axios";
import React, { useEffect, useState } from "react";

export const BlogPost = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        setTitle(response.data.title);
        setBody(response.data.body);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <h2>BlogPost</h2>
      <p>Title: {title}</p>
      <p>Body: {body}</p>
    </div>
  );
};
