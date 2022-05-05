import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';
import Button from '@mui/material/Button';
import React, {location} from 'react';
import axios from 'axios';
import {DataGrid } from '@material-ui/data-grid'
import { Redirect,Link} from 'react-router-dom';
export class Taskaccepted extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      task_acc : [],
      task_name:""
    }  
   }
  componentDidMount(){
    this.getdata();
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
        axios.post('http://localhost:3001/taskassigned',{empid:this.empid}).then((response)=>{
                this.setState({loading:false,task_acc:response.data});
                   console.log(this.state.task_acc);
      });             
    }
    render() {
      const t_data = this.state.task_acc;        
      const task_acc_columns = [
        {
          headerName : 'ID',
          field  :'pr_id'
          /*width: 100*/
        },
        {
          headerName : 'Task Name',
          field  :"task_name",
          resizable:true,
          width: 230,
          renderCell: (cellValues) => {
            return (
              <Link to = "/SplitTask" params = {{state: cellValues.value}}>{cellValues.value}</Link>
            );
          }
        },
        {
          headerName : 'Assigned By',
          field :'empname',
          
          width: 160
        },
        {
          headerName : 'Assigned Date',
          field :'ass_date',
          width: 150
        },
        {
          headerName : 'Closing Date',
          field :'target_date',
          width: 150
        },
        {
          headerName : 'Status',
          field :'pr_status',
          width: 150
        },
        {
          headerName : 'Upload Report',
          field  :"ur",
          width: 170,
          renderCell:(cellValues)=>{          
            console.log(this.state.task_acc);
            return (
               <Link to = '/report'>Upload Report</Link>
               )}
        }  
       ]; 
    return(
      <div style = {{display: 'flex', height: '100%'}}>
        <div style={{ flexGrow: 1 }}>
        <DataGrid id = "task_display" 
        getRowId={rows => rows.pr_id}
        rows = {t_data}
        columns = {task_acc_columns}
      />
      </div>
      </div>
    );
  };   
}  
