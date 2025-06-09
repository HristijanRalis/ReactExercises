import React, { Component } from 'react'
import "../styles/dummyPosts.css";


type DummyPostsPropsI = {};

interface Post{
    id: number;
    title: string;
    body: string;
}

interface DummyPostsState{
    posts: Post[];
}

export default class DummyPosts extends Component<DummyPostsPropsI, DummyPostsState> {
    constructor(props: DummyPostsPropsI){
        super(props);
        this.state = {
          posts: [],
        };
    }


    // Fetching Data 

    componentDidMount(): void {
        try{
            const fetchData = async () =>{
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                const data =await response.json();
               
                this.setState({
                posts: data,
                })
                 console.log("Fetched data", data);
            }
            fetchData()
        } catch (e){
            console.log(e);
        }
    
    }
  render() {


    return (
      <div className='dummy'>
        
         {/* Here are DummyPosts  */}
         <h1>Dummy Posts</h1>

         {this.state.posts.map((post) => (
              <div className='dummyPost' key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
         </div>
         ))}

       
      </div>
    )
  }
}
