import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Taskaccepted , Taskcompleted , Mrhome,Insthome,Academic,Research,Task_Institution,Taskcompletedinst,Insttaskoverdue,Facultyhome} from './dashboard_'
import { Switch,Route, Link} from 'react-router-dom'
import Taskassignedby from './taskassigned'
import React from 'react';

export class Dashboard extends React.Component {
  render() {
        return (
            <div class="container-fluid">
            <div className="row p-2 ">        
            <div className=" fw-bold text-uppercase col-3 p-2 shadow shadow-lg rounded"
                 style={{width: '240px', height: window.innerHeight,background: "linear-gradient(to top left, #3399ff 0%, #00ffff 105%)"}}>
            <div className="rounded p-2  mt-4 d-grid gap-4 shadow  shadow-lg" 
                 style={{   background: "linear-gradient(to top right, #3399ff 0%, #00ffff %)", }}>
            <Link to="/Mrhome" className="text-decoration-none text-dark border border-2 rounded  rounded-pill p-2">Dashboard </Link>
            <Link to="/taskaccepted" 
                 className="text-decoration-none text-dark border border-2 rounded-pill rounded p-2">Task Inprogress...</Link>
            <Link to="/taskcompleted" className="text-decoration-none text-dark border border-2  rounded-pill rounded p-2 ">Task Completed</Link> 
            <Link to="/taskassignedby" className="text-decoration-none text-dark border border-2 rounded  rounded-pill p-2">Task Assigned </Link>
            <Link to="/Academic" className="text-decoration-none text-dark border border-2 rounded  rounded-pill p-2">Appraisal - Academics </Link>
            <Link to="/Research" className="text-decoration-none text-dark border border-2 rounded  rounded-pill p-2">Appraisal - Research </Link>
             </div>
           </div>
           <div className="col-9">
            <Switch>
              <Route path = "/Mrhome"><Mrhome ></Mrhome></Route>
              <Route path = "/Insthome"><Insthome></Insthome></Route>
              <Route path = "/taskaccepted"> <Taskaccepted/> </Route>
              <Route path = "/taskcompleted"><Taskcompleted/></Route>
              <Route path = "/Taskassignedby"> <Taskassignedby/> </Route>   
              <Route path = "/Academic"> <Academic/> </Route>   
              <Route path = "/Research"> <Research/> </Route>   
              <Route path = "/Insttaskassigned"> <Task_Institution/> </Route>   
              <Route path = "/Taskcompletedinst"> <Taskcompletedinst/> </Route>   
              <Route path = "/Insttaskoverdue"> <Insttaskoverdue/> </Route>   
              <Route path = "/Facultyhome"> <Facultyhome/> </Route>   
            </Switch>
            </div>
          </div>
        </div>
        );
    }
}