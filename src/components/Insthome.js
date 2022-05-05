import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';
import {DataGrid } from '@material-ui/data-grid'
import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export class Insthome extends React.Component { 
  state = {  
    dept_report:[]    
  }
  componentDidMount(){
    this.getdata();
  }
  getdata=()=>
    {
      var inst_id = localStorage.getItem("Inst_id");
      console.log("Institution Id : "+ inst_id);
      axios.post("http://localhost:3001/dept_report",{inst_id:inst_id}).then((response)=>{
        console.log(response.data)
        this.setState({dept_report:response.data});
      }) 
    }
    getDept_id=(param)=>
    {
      localStorage.setItem("dept_id",param.dept_id);   
    }
    render() 
    {
      const t_data = this.state.dept_report;        
      console.log(t_data);
      const task_acc_columns = [
        {
          headerName : 'ID',
          field  :'dept_id',
          width: 95
        },
        {
          headerName : 'Department Name',
          field  :"dept_name",
          width: 250 ,
          renderCell: (cellValues) => {
            return (
              <Link to = "/Facultyhome">{cellValues.value}</Link>
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
           
        },
        {
            headerName : "Task Completed",
            field:"task_completed",
            width:150,
           
        },
        {
            headerName : "Task OverDue",
            field:"task_overdue",
            width:150,
           
        }  
      ];
    return(
        <div style={{ display: 'flex', height: '100%'}}>
            <div style={{ flexGrow: 1 }}>
                <DataGrid id = "task_display" 
                    getRowId={rows => rows.dept_id}
                    rows = {t_data}
                    columns = {task_acc_columns}
                    onRowClick = {(param) => this.getDept_id(param.row)}/>
 
            </div>
      </div>

    )
  }
}

