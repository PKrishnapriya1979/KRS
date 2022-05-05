import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Redirect,Link} from 'react-router-dom'
import React from 'react';
export class NavBar extends React.Component {
    constructor(props) {
        super(props);
        const userdate = [];
        const empname = "";
        this.getuserdetails();
        } 
     logout(){
       this.count = 0;
       this.isUser=false;    
     }
     componentDidMount(){
       this.getuserdetails();
     }
     getuserdetails(){
      this.userdata = sessionStorage.getItem('userdata');
      if (sessionStorage.length == 0 )
          {this.empname = "";}       
      else{
          this.userdata = JSON.parse(this.userdata);
          this.empname= this.userdata.empname;}
     }
    render() {
      return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-2">
          <div class="container-fluid">
            <div class="navbar-brand fw-bold " >Welcome {this.empname}</div>
            <div className="navbar-text fw-bold text-end  text-white">
            </div>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class=" text-white">
              <i class="fas fa-bars"></i>
              </span>
            </button>
            <div class="collapse navbar-collapse justify-content-between" id="navigation">
              <ul class="navbar-nav p-1  ms-auto">
                <li class="nav-item px-5">
                  <Link to="/DB" class="nav-link fw-bold active" aria-current="page" >
                  <i class="fas fa-home"></i> Home</Link>
                </li>
                <li class="nav-item   px-5 fw-bold">
                  <Link to="/member"class="nav-link text-white" target="">Add Member
                  </Link>
                </li>
                <li class="nav-item   px-5 fw-bold">
                  <Link to="/Role" class="nav-link text-white" target="">Role Assign
                  </Link>
                </li>
                
                <li class="nav-item px-5 fw-bold">
                  <Link to="/task" class="nav-link text-white " target="" >Assign Task</Link>
                </li>
                <Link to="/"  onClick={this.logout()} >    <li class="nav-item px-5  fw-bold">
                   <div class="nav-link text-white " >
                    <i class="fas fa-power-off" ></i>Logout</div>
                </li></Link>
              </ul>
            </div>
          </div>
        </nav>
        );
    }
}