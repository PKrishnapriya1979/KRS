import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import Progress_bar from './Progressbar';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
//import { ProgressBar } from 'react-bootstrap';

export default class Taskassignedby extends React.Component {
  
  state = {
    task_acc : [],
  } 
  componentDidMount(){
    this.getdata();
    //const {sel_task} = this.props.location.state;
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
           console.log(this.empid);
          }  
        axios.post('http://localhost:3001/taskassignedbyme',{empid:this.empid}).then((response)=>{
                this.setState({loading:false,task_acc:response.data});
                console.log(this.state.task_acc);
      });             
    }
    
    //k.pr_id, k.task_name, k.assignee, k.ass_date, t.rep_date, t.rep_outcome, t.rep_url
    render() {
      console.log("in task completed");
      const t_data = this.state.task_acc;
      console.log(t_data);        
      const task_acc_columns = [
        {
          headerName : 'ID',
          field  :'pr_id',
          width: 100
        },
        {
          headerName : 'Task Name',
          field  :'task_name',
          width: 170
        },
        {
          headerName : 'Sub Task Name',
          field  :'sub_name',
          width: 170
        },
        {
          headerName : 'Assigned to',
          field :'empname',
          width: 170
        },
        {
          headerName : 'Date of Assignement',
          field :'ass_date',
          width: 170
        },
        {
          headerName : 'Expected completion',
          field :'target_date',
          width: 170
        },
        {
          headerName : 'Status',
          field  :'pr_status',
          width: 120,
          renderCell:(cellValues)=>{          
            console.log(this.state.task_acc);
            return (
               <Progress_bar bgcolor="blue" progress={cellValues.value}  height={20}/>
               )}
         }      
       ]; 
    return(
      <div style = {{display: 'flex', height: '100%'}}>
        <div style={{ flexGrow: 1 }}>
        <DataGrid id = "task_assign" 
        getRowId={rows => rows.sub_name}
        rows = {t_data}
        columns = {task_acc_columns}
        pagesize = {10}
        />
     </div>
      </div>
    );
  };   
}   
