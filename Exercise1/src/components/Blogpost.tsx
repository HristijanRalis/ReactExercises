import React, { cache, Component } from 'react'

type BlogPostPropsI = object;

interface BlogPostsStateI  {
    title: string;
    body: string;
}


export class BlogPost extends Component<BlogPostPropsI, BlogPostsStateI> {
    constructor(props: BlogPostPropsI) {
        super(props);
        this.state = {
            title: "This is blog post title", 
            body: "This is body"}
    }

    componentDidMount(): void {
        try{
            const fetchData = async () => {
                const resposne = await fetch("https://jsonplaceholder.typicode.com/posts/1");
                const data = await resposne.json();
                this.setState({
                    title: data.title,
                    body: data.body,
                })
               
            }
             fetchData()
        }catch(e) {
            console.log(e)
        }
    }

    render(){
        return (
            <div>
                <h1>Title: {this.state.title}</h1>
                <p>Body: {this.state.body} </p>
            </div>
        )
    }
}
