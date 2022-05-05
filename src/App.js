import React from 'react';
import {Login } from "./components/login"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Register} from './components/register';
import { Dashboard,Academic,Research,Insttaskassigned } from './components/dashboard_';
import { NavBar } from './components/Navbar';
import { Addmember } from './components/addmember';
import {Addtask} from './components/add_task'
import {Mrhome} from './components/MRHome';
import {Report_upload } from './components/Report_upload';
import { Taskaccepted } from './components/task_accepted';
import { Taskcompleted } from './components/task_completed';
import { Taskassignedby } from './components/taskassigned';
import { Banner } from './components/banner';
import { Split_task } from './components/split_task';

export default class App extends React.Component {
  render(){
    return(
      <div>
       <BrowserRouter >
        <Banner/>
        <Route path ='/' exact><NavBar></NavBar><Login/> </Route>
        <Switch>
          <Route path = '/registry'> <NavBar></NavBar><Register/> </Route>
          <Route path = '/DB'> <NavBar></NavBar> <Dashboard/> </Route>
          <Route path = '/member'> <NavBar></NavBar><Addmember/> </Route>
          <Route path = '/task'> <NavBar> </NavBar><Addtask /></Route>
          <Route path = '/report'  ><NavBar></NavBar><Report_upload /></Route>
          <Route path="/taskaccepted"> <NavBar></NavBar><Dashboard/> </Route>
          <Route path="/taskcompleted"><NavBar></NavBar><Dashboard/>  </Route>
          <Route path="/tasktobecompleted"><NavBar></NavBar><Dashboard/> </Route>
          <Route path ="/Taskassignedby"><NavBar></NavBar><Dashboard/></Route>
          <Route path="/designation"><NavBar></NavBar><Dashboard/> </Route>
          <Route path="/Splittask"><NavBar></NavBar><Split_task/> </Route>
          <Route path = "/Mrhome"><NavBar></NavBar><Dashboard/></Route>   
          <Route path = "/Insthome"><NavBar></NavBar><Dashboard/></Route>   
          <Route path = "/Academic"><NavBar></NavBar><Dashboard/></Route>   
          <Route path = "/Research"><NavBar></NavBar><Dashboard/></Route>   
          <Route path = "/Insttaskassigned"><NavBar></NavBar><Dashboard/></Route> 
          <Route path = "/Taskcompletedinst"> <NavBar></NavBar><Dashboard/> </Route>     
          <Route path = "/Insttaskoverdue"> <NavBar></NavBar><Dashboard/> </Route>     
          <Route path = "/Facultyhome"> <NavBar></NavBar><Dashboard/> </Route>     

          
        </Switch>
      </BrowserRouter>  
      </div>
      )
    }
  }