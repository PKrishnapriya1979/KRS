import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';
import {DataGrid } from '@material-ui/data-grid'
import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export class Mrhome extends React.Component { 
  state = {  
    inst_report:[],
    data :[]
  }
  
  componentDidMount(){
    this.getdata();
  }
  getdata=()=>
    {
      axios.post("http://localhost:3001/inst_report").then((response)=>{
        console.log(response.data)
        this.setState({inst_report:response.data});
      }) 
    }
  getInst_id(rowData){
      localStorage.setItem("Inst_id",rowData.inst_id);   
  }
    render() 
    {
       const t_data = this.state.inst_report;        
      console.log(t_data);
      const task_acc_columns = [
        {
          headerName : 'ID',
          field  :'inst_id',
          width: 95
        },
        {
          headerName : 'Institution Name',
          field  :"inst_name",
          width: 250,
          renderCell: (cellValues) => {
            return (
              <Link to ={"/Insthome"}>  
                {cellValues.value}</Link> 
            );
          }
        },
        {
            headerName : "Members",
            field:"faculty_count",
            width:150
        },
        {
            headerName : "Task Assigned",
            field:"task_assigned",
            width:150,
            renderCell: (cellValues) => {
              return (
                <Link to = {"/Insttaskassigned"}>{cellValues.value}</Link>
              );
            }
        },
        {
            headerName : "Task Completed",
            field:"task_completed",
            width:150,
            renderCell: (cellValues) => {
              return (
                <Link to ={"/Taskcompletedinst"}>{cellValues.value}</Link>
              );
            }
        },
        {
            headerName : "Task OverDue",
            field:"task_overdue",
            width:150,
            renderCell: (cellValues) => {
              return (
                <Link to = "/Insttaskoverdue">{cellValues.value}</Link>
              );
            }
        }  
      ];
    return(
        <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flexGrow: 1 }}>
                <DataGrid id = "task_display" 
                    getRowId={rows => rows.inst_id}
                    rows = {t_data}
                    columns = {task_acc_columns}
                    onRowClick = {(param) => this.getInst_id(param.row)}/>
            </div>
      </div>

    )
  }
}

