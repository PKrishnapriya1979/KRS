import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { useLocation } from 'react-router-dom';
export  class  Split_task extends React.Component {
        state = {
        assign:[],
        task_name_list:[],
        pr_id:0,
        institution:"",
        task_name:"",
        subtaskname:"",
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
        this.fillInstitution();
        this.filltaskname();
        }
    fillInstitution(){
        axios.post("http://localhost:3001/getInstitution",{
            empid : this.userdata.empid    
        }).then((response)=>{
          this.setState({setinstitution:response.data})
        });
      }
    fillassignee(){
      axios.post("http://localhost:3001/getassignee",{
          institution:this.state.institution
      }).then((response)=>{
          this.setState({assign:response.data})
      });
    }
    filltaskname(){
        axios.post('http://localhost:3001/taskassigned',{empid:this.userdata.empid}).then((response)=>{
            this.setState({task_name_list:response.data});
    }); 
    }
    getInstitution=(Event)=>{
        this.setState({institution:Event.target.value});
    }
    getAssignee=(Event)=>{
        this.setState({assignee:Event.target.value});
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
        console.log("In drop down box to select the key and name");
        this.setState({pr_id:Event.target.value});
        //this.setState({pr_id:parseInt(Event.target.key)});
        //alert(Event.target.key +" " +this.state.pr_id);
        this.fillassignee();
    }
    getSubtaskname=(Event)=>{
        this.setState({subtaskname:Event.target.value});
     }
    addsubprocess = (Event) => {
        alert("In update the task" + this.state.pr_id);
        this.userdata = sessionStorage.getItem('userdata');
        this.userdata = JSON.parse(this.userdata);
        const pro_data = {institution : this.state.institution,
        pr_id : this.state.pr_id,
        task_name:this.state.subtaskname,
        assignee:this.state.assignee,
        ass_date : this.state.ass_date,
        tar_date : this.state.tar_date,
        pro_details: this.state.pro_details,
        pro_exp_outcome: this.state.pro_exp_outcome,
        empid : this.userdata.empid   
        }
        alert("Inside split process to split the task");
        axios.post("http://localhost:3001/addsubprocess",{institution:pro_data.institution,
        pr_id :pro_data.pr_id,
        subtask_name:pro_data.task_name,
        assignee:pro_data.assignee,
        ass_date : pro_data.ass_date,
        tar_date : pro_data.tar_date,
        pro_details: pro_data.pro_details,
        pro_exp_outcome: pro_data.pro_exp_outcome
        }).then((response)=>{
                console.log(response);
        });
        console.log("Subtask Name: "+ pro_data.task_name);
    }
render(){
    //this.setState({task_name:this.props.location.state});
    
    console.log(this.state.task_name_list);
    return(
        <div id = "root" className ="container border border-2 p-2 mt-5" > 
            <h4>Create a task</h4>
            <form>
                <h3>Insititution Name</h3>
                <div className ="row">
                    <div className ="col-md-6 mb-3 ">
                        <div className ="input-group">     
                            <label className ="frm_int input-group-text"  htmlFor="">Institution</label>
                            <select  name="Insititution Name" id="Insitution_name" className ="form-control form-select"
                             onChange = {this.getInstitution} >
                            {this.setIns_list = this.state.setinstitution.map((ins_list)=>
                            {
                                return (
                                  <option key = {ins_list.inst_id} data-id = {ins_list.inst_id} value = {ins_list.inst_id}>{ins_list.inst_name}
                                  </option> 
                                  ) 
                            })}
                            </select>        <br/>
                        </div>
                    </div>
                    <div className ="col-md-6 mb-3 ">
                        <div className ="input-group">     
                            <label className ="frm_int input-group-text"  htmlFor="">Task Name:</label>
                            <select className ="form-select " name="task_name" id="task_name" aria-label="Default select example"
                            onChange={this.getTaskname.bind(this)}>     
                            {this.assignee_list = this.state.task_name_list.map((tsn)=>
                                {
                                    console.log(tsn.pr_id)
                                    return (
                                        <option key = {tsn.pr_id} value = {tsn.pr_id} name = {tsn.task_name}>{tsn.task_name}
                                        </option> 
                                     ) 
                                  })} 
                                </select>
                        </div>
                    </div>
                </div>
                <div className ="row">
                    <div className ="col-md-6 mb-3">
                        <div className ="input-group ">
                            <label htmlFor="subtaskname" className ="input-group-text">Subtask Name:</label>
                            <input type = "text" className ="form-control "  placeholder="Sub task Name" 
                            onChange={this.getSubtaskname}></input>
                        </div>
                    </div>
                    <div className ="col-md-6 mb-3">
                        <div className ="input-group">
                            <label HtmlFor="Assign To" className ="input-group-text">Assigned To:</label>
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
                        <button className ="btn btn-primary p-2" onClick={this.addsubprocess}>submit</button>
                    </div>
           </div>   
    </form> 
        </div>
    )
  }
}