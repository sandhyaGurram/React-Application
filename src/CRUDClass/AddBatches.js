import axios from "axios";
import React from "react";
import { Component } from "react";

export default class AddBatches extends Component{
    constructor(props){
        super(props)

        this.state={
            course:"",
            date:"",
            duration:"",
            timings:"",
            trainer:""
        }   
    }
    changeData=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(e.target.value)
    }
    postBatch=(e)=>{
        e.preventDefault()
        const {course, date, timings, trainer,duration}=this.state
        axios.post("http://localhost:4000/batches",{course,date, duration,timings,trainer})
        .then(()=>{
            alert("Batches added")
            this.setState({
                course:"",
                date:"",
                duration:"",
                timings:"",
                trainer:""
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        const {course, date, duration, timings, trainer}=this.state
        return(
            <div className="container p-5">
                <div className="col-8 col-lg-4 mx-auto">
                    <h1>Add Batches</h1>
                <form onSubmit={this.postBatch}>
                    <input type="text" name="course" className="form-control mb-3" placeholder="Enter Course Name" value={course} onChange={this.changeData} />
                    <input type="date" name="date" className="form-control mb-3" value={date} onChange={this.changeData}/>
                    <input type="text" name="duration" className="form-control mb-3" placeholder="Course duration" value={duration} onChange={this.changeData}/>
                    <input type="text" name="timings" className="form-control mb-3" placeholder="Batch Timings" value={timings} onChange={this.changeData}/>
                    <input type="text" name="trainer" className="form-control mb-3" placeholder="Name of the Trainer" value={trainer} onChange={this.changeData}/>
                    <input type="submit" value="Add Batch" className="btn btn-success"/>
                </form>
                </div>
            </div>
        )
    }
}