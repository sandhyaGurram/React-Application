import axios from "axios";
import React from "react";
import { Component } from "react";

export default class Basic extends Component{
    constructor(props){
        super(props)

        this.state={
            posts:[]
        }
    }   
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log("success")
            console.log(res.data);
            this.setState({
                posts:res.data
            })
        })
        .catch((err)=>{
            console.log("Error")
            console.log(err)
        })
    }
    render(){
        return (
            <div>
                <h1>Read data from APi</h1>
                <ul>
                    {this.state.posts.map((post)=>{
                        return <li>{post.title}</li>
                    })}
                </ul>
            </div>
        )
    }
}