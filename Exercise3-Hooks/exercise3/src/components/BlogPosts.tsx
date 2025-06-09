import React, { useState } from 'react'

export const BlogPosts = () => {
    const [body, setBody] = useState("This is body");
    const [title, setTitle] = useState("This is title");

    // FETCH DATA
    try{
        const fetchData = async () => {
            const response = await fetch ("https://jsonplaceholder.typicode.com/posts/1");
            const data = await response.json();
            console.log("BlogPost", data);
            setBody(data.body);
            setTitle(data.title);
        }

        fetchData()

    } catch(error){
        console.log(error);
    }

  return (
    <div>
        <p>Title: {title}</p>
        <p>Body: {body}</p>
        
        </div>
  )
}
