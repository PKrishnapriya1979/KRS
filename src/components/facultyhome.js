import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';
import {DataGrid } from '@material-ui/data-grid'
import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
export class Facultyhome extends React.Component { 
  state = {  
    Faculty_report:[]
  }
  componentDidMount(){
    this.getdata();
  }
  getdata=()=>
    {
      var dept_id = localStorage.getItem("dept_id");
      axios.post("http://localhost:3001/faculty_list",{dept_id:dept_id}).then((response)=>{
        console.log(response.data)
        this.setState({Faculty_report:response.data});
      }) 
    }
    render() 
    {
      const t_data = this.state.Faculty_report;        
      console.log(t_data);
      const task_acc_columns = [
        {
          headerName : 'ID',
          field  :'emp_id',
          width: 95
        },
        {
          headerName : 'Faculty Name',
          field  :"empname",
          width: 250 
        },
        
        {
            headerName : "Task Assigned",
            field:"task_assigned",
            width:150,
            renderCell: (cellValues) => {
              return (
                <Link to = "/faculty_task_assigned">{cellValues.value}</Link>
              ); }
        },
        {
            headerName : "Task Completed",
            field:"task_completed",
            width:150,
            renderCell: (cellValues) => {
              return (
                <Link to = "/faculty_task_completed">{cellValues.value}</Link>
              ); }
        },
        {
            headerName : "Task OverDue",
            field:"task_overdue",
            width:150,
            renderCell: (cellValues) => {
              return (
                <Link to = "/faculty_task_overdue">{cellValues.value}</Link>
              );
        }  }
      ];
    return(
        <div style={{ display: 'flex', height: '100%'}}>
            <div style={{ flexGrow: 1 }}>
                <DataGrid id = "task_display" 
                    getRowId={rows => rows.emp_id}
                    rows = {t_data}
                    columns = {task_acc_columns}
                  />
            </div>
      </div>
    )
  }
}