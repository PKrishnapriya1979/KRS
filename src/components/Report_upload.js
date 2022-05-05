import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import {Redirect} from 'react-router-dom'
import axios from 'axios';
var pr_id = 0;
var sub_process_id = 0;
export class Report_upload extends React.Component 
{
    
        state = {
                task_acc : [],
                report_taskname : "",
                subtask:"",
                report_date : "",
                report_outcome : "",
                report_url : "",
                report_status : false,
                report_progress:'',
                subtask_acc : [],
                
        };         
        
    componentDidMount(){
        this.getdata();
    }
    reportsubmit=()=>{
        
        //alert(this.state.pr_id);
        axios.post("http://localhost:3001/getprogress",{
                rep_pr_id:pr_id
            }).then((resp)=>{
                console.log(resp);
                //this.setState({report_progress:JSON.stringify(resp.process)});
                //console.log("progress of the work " + this.state.report_progress);
              /*  if(this.report_status === true){
                    this.setState({report_progress : 100});    
                }
                else
                {
                let p = this.state.report_progress + 1;
                this.setState({report_progress:p});       }*/
        });
        
        axios.post("http://localhost:3001/addReport",{
            rep_pr_id:pr_id,
            rep_date:this.state.report_date,
            rep_url:this.state.report_url,
            rep_outcome:this.state.report_outcome,
            rep_progress :this.state.report_progress,
            rep_subprocessid : sub_process_id
        }).then((response)=>{
        console.log(response.data)}); 
    }
    getTaskname=(Event)=>{
        console.log(Event.target.value);
        pr_id = Event.target.value;
        this.getsubtask();
    }
    getSubtaskname=(Event)=>{
        //this.setState({sub_process_id:Event.target.value});
        sub_process_id = Event.target.value;
        console.log(Event.target.value);
    }
    getOutcome=(Event)=>{
        this.setState({report_outcome:Event.target.value});
    }
    getURL=(Event)=>{
        this.setState({report_url:Event.target.value});
    }
    getcompstatus=(Event)=>{
        this.setState({report_status:Event.target.value});
    }
    componentDidMount(){
        this.getdata();     
    }
    getsubtask=()=>{
        alert(pr_id);
        axios.post('http://localhost:3001/getSubtask',{pr_id:pr_id}).then((response)=>{
            console.log("subtask details " + response.data);
            this.setState({subtask_acc:response.data});
            console.log(this.state.subtask_acc);
            //this.setState({pr_id: response.data[0].sub_processpr_id});
            });             
    }
    getdata=()=>
    {   
      this.userdata = sessionStorage.getItem('userdata');
        if (sessionStorage.length === 0 )
           { this.empid = '';
             <Redirect to = '/'></Redirect>}
        else {
           this.userdata = JSON.parse(this.userdata);
           this.empid= this.userdata.empid;
          }  
        axios.post('http://localhost:3001/taskassigned',{empid:this.empid}).then((response)=>{
            this.setState({task_acc:response.data});
            console.log(this.state.task_acc);
            });             
        //this.getsubtask();
            
        }
    render(){       
     
        return(           
            <div id = "root" className="border w-50 mx-auto mt-5 border-2 justify-content-center rounded p-3"> 
                <h4><center>Report Uploading.... </center></h4>
                <form>
                    <div className="row p-3 ">
                        <div className="col  mb-2 ">
                            <div className="input-group">
                                <label className="frm_int input-group-text"  for="">Task Name :</label>
                                <select className="form-control" placeholder="Task Name" id = "t_name" name = "t_name" 
                                 onChange={this.getTaskname.bind(this)} value={this.state.pr_id}>
                                  {this.task_list = this.state.task_acc.map((task)=>
                                  { 
                                      console.log(this.state.task_acc)
                                      return (
                                        <option value = {task.pr_id}>{task.task_name} </option> 
                                       ) 
                                    })}
                                </select>
                            </div>
                        </div>
                </div>
                <div className="row p-3 ">
                        <div className="col  mb-2 ">
                            <div className="input-group">
                                <label className="frm_int input-group-text"  for="">Sub Task Name :</label>
                                <select className="form-control" placeholder="subTask Name" id = "st_name" name = "st_name" 
                                onChange={this.getSubtaskname}>
                                  {this.subtask_list = this.state.subtask_acc.map((subtask)=>
                                  { 
                                      return (
                                        <option value = {subtask.sub_process_id}>{subtask.sub_name} </option> 
                                       ) 
                                    })}
                                </select>
                            </div>
                        </div>
                </div>           
                <div className="row p-3">
                    <div className="col  mb-2 ">
                        <div className="input-group">
                            <label className="frm_int input-group-text"  for=""> Outcome :</label>
                            <input className="form-control" type="textarea" placeholder="Expected Outcome" name = "outcome" 
                            onChange={this.getOutcome}/>
                        </div>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col  mb-2 ">
                        <div className="input-group">
                            <label className="frm_int input-group-text"  for=""> Report - File URL(drive) :</label>
                            <input className="form-control" type="text" placeholder="File URL" name = "URL" 
                            onChange={this.getURL}/>
                        </div>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col  mb-2 ">
                        <div className="input-group form-control">                         
                            <input  type='checkbox' id="compstatus" name="status" value = "true" 
                            onChange={this.getcompstatus}/> Final Report  
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center ">
                    <div className="col-2 mt-3">
                        <input type="button" className="btn btn-primary" value= "Submit" onClick={this.reportsubmit.bind(this)}/>                    
                    </div>
                </div>        
            </form>  
          </div>
        )
}}