import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { useLocation } from 'react-router-dom';
var institution = "";
export  class  Addtask extends React.Component {
        state = {
        assign:[],        
        task_name:"",
        assignee:"",
        assigned:"",
        ass_date:"",
        tar_date:"",
        pro_details:"",
        pro_exp_outcome:"",
        setinstitution:[]
        };
    userdate =[];
    componentDidMount(){
        this.userdata = sessionStorage.getItem('userdata');
        this.userdata = JSON.parse(this.userdata);
        this.fillInstitution()
        }
    fillInstitution(){
        axios.post("http://localhost:3001/getInstitution",{
            empid : this.userdata.empid    
        }).then((response)=>{
          console.log(response.data);
          this.setState({setinstitution:response.data})
        });
      }
    fillassignee(){
      axios.post("http://localhost:3001/getassignee",{
          institution:institution
      }).then((response)=>{
          console.log("Success" + response.data);
          this.setState({assign:response.data})
      });
    }
    getInstitution=(Event)=>{
        institution = Event.target.value;
        console.log(Event.target.value);
    }
    getAssignee=(Event)=>{
        this.setState({assignee:Event.target.value});
        console.log(Event.target.value);
    }
    getAss_date=(Event)=>{
        this.setState({ass_date:Event.target.value});
        console.log(Event.target.value);
    }
    getTarget_date =(Event)=>{
        this.setState({tar_date:Event.target.value});
        console.log(Event.target.value);
    }
    getDetails =(Event)=>{
        this.setState({pro_details:Event.target.value});
        console.log(Event.target.value);
    }
    getExp_outcome =(Event)=>{
        this.setState({pro_exp_outcome:Event.target.value});
        console.log(Event.target.value);
    }
    getTaskname =(Event)=>{
        this.setState({task_name:Event.target.value});
        this.fillassignee();
        console.log(Event.target.value);
    }
    addprocess = (Event) => {
        alert("In update the task");
        this.userdata = sessionStorage.getItem('userdata');
        this.userdata = JSON.parse(this.userdata);
        const pro_data = {institution : institution,
        task_name:this.state.task_name,
        assignee:this.state.assignee,
        assigned : this.userdata.empid,
        ass_date : this.state.ass_date,
        tar_date : this.state.tar_date,
        pro_details: this.state.pro_details,
        pro_exp_outcome: this.state.pro_exp_outcome,
        empid : this.userdata.empid
        }
        axios.post("http://localhost:3001/addprocess",{institution:pro_data.institution,
        task_name:pro_data.task_name,
        assignee:pro_data.assignee,
        assigned:pro_data.assigned,
        ass_date : pro_data.ass_date,
        tar_date : pro_data.tar_date,
        pro_details: pro_data.pro_details,
        pro_exp_outcome: pro_data.pro_exp_outcome
        }).then((response)=>{
                console.log(response);
        });
    }
render(){
    //this.setState({task_name:this.props.location.state});
    
    console.log(this.state.task_name);
    return(
        <div id = "root" className ="container border border-2 p-2 mt-5" > 
            <h4>Create a task</h4>
            <form>
                <h3>Insititution Name</h3>
                <select  name="Insititution Name" id="Insitution_name" className ="form-control form-select"
                          onChange = {this.getInstitution} >
                            {this.setIns_list = this.state.setinstitution.map((ins_list)=>
                            {
                                return (
                                  <option key = {ins_list.inst_id} value = {ins_list.inst_id}>{ins_list.inst_name}
                                  </option> 
                                  ) 
                            })}
                      </select>        <br/>
                <div className ="row">
                    <div className ="col-md-6 mb-3 ">
                        <div className ="input-group">     
                            <label className ="frm_int input-group-text"  htmlFor="">Task Name:</label>
                            <input className ="form-control" type="text" placeholder="Task Name"  onChange={this.getTaskname} value = {this.state.task_name}></input>
                        </div>
                    </div>
                    <div className ="col-md-6 mb-3">
                        <div className ="input-group">
                            <label htmlFor="Assign To" className ="input-group-text">Assigned To:</label>
                            <select className ="form-select " name="assign   " id="Assign To" aria-label="Default select example"
                            onChange={this.getAssignee}>
                            {this.assignee_list = this.state.assign.map((ass)=>
                                  {
                                      return (
                                        <option key = {ass.empid} value = {ass.empid}>{ass.empname}
                                        </option> 
                                       ) 
                                    })}
                                </select>
                            <span className="input-group-text"> 
                                <a href="#"><i className="fas fa-plus"></i></a>
                           </span> 
                        </div>
                    </div>
                </div>
                <div className ="row">
                    <div className ="col-sm-6 mb-3">
                        <div className =" input-group">
                            <label htmlFor="Start Date" className ="input-group-text">Start Date:</label>
                            <input type="date" className ="form-control" id="Start Date" 
                            onChange={this.getAss_date}/> 
                        </div>
                    </div>
                    <div className ="col">
                        <div className ="col-sm-6 input-group">                 
                            <label htmlFor="End Date" className ="input-group-text">End Date:</label>
                            <input type="date"  className ="form-control mr-1" id="End Date" 
                            onChange={this.getTarget_date}/> 
                        </div>
                        <br/>
                    </div>
                </div>
                    <div className ="row">
                        <div className ="col-md-6 mb-3">
                             <div className ="input-group">
                                <span htmlFor="Activity" className ="input-group-text">Activity Description:</span>
                                <textarea className ="form-control" type="text" placeholder="Activity Description" 
                                onChange={this.getDetails}></textarea>
                        </div>
                    </div>
                    <div className ="col-md-6 mb-3">
                        <div className ="input-group ">
                            <label htmlFor="outcome"className ="input-group-text">Expected outcome:</label>
                            <textarea className ="form-control "  placeholder="Expected outcome" 
                            onChange={this.getExp_outcome}></textarea>
                        </div>
                    </div>
                </div>
                <div className ="row justify-content-end">
                    <div className ="col-2">
                        <button className ="btn btn-primary p-2" onClick={this.addprocess}>submit</button>
                    </div>
           </div>   
    </form> 
        </div>
    )
  }
}