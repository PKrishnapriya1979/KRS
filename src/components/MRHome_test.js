import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';
import React, {location} from 'react';
import axios from 'axios';
import {DataGrid,gridCheckboxSelectionColDef } from '@material-ui/data-grid'


//var institution = [];
//var total_fac = [];
var total_task_assigned = [];
var total_task_completed = [];
var total_task_overdue =[];
export class Mrhome extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      institution : [],
      total_fac :[],
      
    }  
   }
    componentDidMount(){
       this.getdata();
    }
    getdata(){
      axios.post("http://localhost:3001/forInstitution").then((response)=>{
          console.log(response.data);
          this.setState({institution:response.data})
          //institution=response.data
        })    
        axios.post("http://localhost:3001/total_faculty").then((response)=>{
          console.log(response.data);
          this.setState({total_fac:response.data})
         // total_fac=response.data
        })    
      axios.post("http://localhost:3001/total_task_assigned").then((response)=>{
          //console.log(response.data);
          total_task_assigned=response.data
        })    
        axios.post("http://localhost:3001/total_task_completed").then((response)=>{
          //console.log(response.data);
          total_task_completed=response.data;
        })    
        axios.post("http://localhost:3001/total_task_overdue").then((response)=>{
          //console.log(response.data);
          total_task_overdue = response.data
        })    
    }
    render() {
      const t_data = this.state.total_fac;        
      console.log(t_data);
      const report_columns = [
        {
          headerName : 'Institution ID',
          field  :'inst_id',
          
          width: 200
        } , 
      
        {
          headerName : 'Institution Name',
          field  :'institution',
          
          width: 200
        }  
       ];
      return(
        <div style = {{ height: '100%', width :'100%'}}>
            
            <DataGrid id = "task_display" 
              getRowId={rows => rows.inst_id}
              rows = {t_data}
              columns = {report_columns}
              />
            
            </div>
      );
    };
}