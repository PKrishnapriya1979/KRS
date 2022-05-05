import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';

export class Taskcompleted extends React.Component {
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
        axios.post('http://localhost:3001/taskcompleted',{empid:this.empid}).then((response)=>{
                this.setState({task_acc:response.data});
      });  
      /*axios.post('http://localhost:3001/subtaskcompleted',{empid:this.empid}).then((response)=>{
        this.setState({loading:false,sub_task_acc:response.data});
      });*/    
      }
    //k.pr_id, k.task_name, k.assignee, k.ass_date, t.rep_date, t.rep_outcome, t.rep_url
    render() {
     
      console.log("in task completed");
      const t_data = this.state.task_acc;
      //console.log(t_data[0])
      const task_acc_columns = [
        {
          headerName : 'ID',
          field  :'pr_id',
          width: 100,
        },
        {
          headerName : 'Task Name',
          field  :'task_name',
          width: 250
        },
        {
          headerName : 'Assigned By',
          field :'assignee',
          width: 170
        },
        {
          headerName : 'Date of Assignement',
          field :'ass_date',
          width: 170
        },
        {
          headerName : 'Date of Completion',
          field :'r_date',
          width: 170
        },
        {
          headerName : 'Outcome',
          field :'rep_outcome',
          width: 150
        },
        {
          headerName : 'Report',
          field  :"rep_url",
          width: 170,
          renderCell:(cellValues)=>{          
            console.log(t_data[0]['rep_url']);
            return <button  value = {t_data[0]['rep_url']}>
            <a href = {t_data[0]['rep_url']} target="_blank">  <img src = "./pdflogo.jpg" href height = '30px' width = "auto"/></a></button>
          }
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