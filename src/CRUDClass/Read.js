import axios from "axios";
import React from "react";
import { Component } from "react";

export default class Read extends Component{
    constructor(props){
        super(props)

        this.state={
            users:[]
        }   
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res.data)
            this.setState({
                users:res.data 
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }   
    render(){
        return(
            <div>
                <h1>All posts</h1>
                <table className="table table-bordered table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Id</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((user)=>{
                            return <tr>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}