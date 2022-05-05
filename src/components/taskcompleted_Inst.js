import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';
import Progress_bar from './Progressbar';
import {DataGrid } from '@material-ui/data-grid'
import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export class Taskcompletedinst extends React.Component { 
  state = {  
    task_report:[]    
  }
  componentDidMount(){  
    this.getdata();
  }
  getdata=()=>
    {
      var inst_id = localStorage.getItem("Inst_id");
      console.log("Task completed in the Institution");
      axios.post("http://localhost:3001/Inst_task_completed",{inst_id:inst_id}).then((response)=>{
      console.log(response.data)
      this.setState({task_report:response.data});
      }) 
    }
    render() 
    {
      
      const t_data = this.state.task_report;              
      const task_acc_columns = [
        {
          headerName : 'ID',
          field  :'pr_id',
          width: 95
        },
        {
          headerName : 'Task Name',
          field  :"task_name",
          width: 250 ,
          
        },
        {
            headerName : "Assigned to ",
            field:"empname",
            width:150
            
        },
        {
            headerName : "Assigned By",
            field:"assigned",
            width:150,
        },
      ];
    return(
        <div style={{ display: 'flex', height: '100%'}}>
            <div style={{ flexGrow: 1 }}>
                <DataGrid id = "task_display" 
                    getRowId={rows => rows.pr_id}
                    rows = {t_data}
                    columns = {task_acc_columns}
                  />
            </div>
      </div>

    )
  }
}

