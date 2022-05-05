import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
export class Login extends React.Component {
    state = {isUser:false,
            emailid:"" ,
            pwd:"",
            count: 0,
            empid : "",
            empname:""            
    };
    getEmailid=(Event)=>{
        this.setState({emailid:Event.target.value});
    }
    getPwd=(Event)=>{
        this.setState({pwd:Event.target.value});
    }
    validateuser(Event){
        const user = { emailid :this.state.emailid,
                       pwd:this.state.pwd,

            };        
        alert(user.emailid + ","+user.pwd);
        axios.post('http://localhost:3001/UserValid',{
        emailid :user.emailid, 
        pwd:user.pwd}).then((response)=>{
            var empid = 0;
            var ename = "";
        console.log(response.data[0]);
        var empid = response.data[0];
        var empname = response.data[1];

        this.setState({empname:empname});
        this.setState({empid:empid});
             
        let obj = {empname : empname, empid : empid}
        sessionStorage.setItem('userdata',JSON.stringify(obj));
        (empid !== 0) ? this.setState({isUser:true}) : this.setState({isUser:false});
        (this.state.isUser) ? this.setState({count:this.state.count=+1}) : alert("Try Again.....");
        console.log(this.state.count);
        });
    }
    render(){
        const user = this.state;
    return(
     (this.state.count<=0 && !this.state.isUser)? 
        <div id = "root" class="border w-50 mx-auto mt-5 border-2 justify-content-center rounded p-3" >
            <h3 class="mb-4" >Welcome!</h3>
            <form>
                <div class="row p-3 ">
                    <div class="col  mb-2 ">
                        <div class="input-group">
                            <label class="frm_int input-group-text"  for="">Mail ID:</label>
                            <input class="form-control" type="email" name = "emailid" placeholder="mail id"
                            onChange={this.getEmailid}/> 
                        </div>
                    </div>
                </div>           
                <div class="row p-3">
                    <div class="col  mb-2 ">
                        <div class="input-group">
                            <label class="frm_int input-group-text"  for=""> Password:</label>
                            <input class="form-control" type="password" placeholder="Password" name = "pwd" 
                            onChange={this.getPwd}/>
                        </div>
                    </div>
                </div>
                <div class="row p-1">
                    <div class="col ">
                        <Link to='/Registry'>Forgot Password</Link>                 
                    </div>
                </div>
                <div class="row justify-content-center ">
                    <div class="col-2 mt-3">
                        <input type="button" class="btn btn-primary" value= "Login" onClick={this.validateuser.bind(this)}/>                    
                    </div>
                </div>
                <div>              
                </div>
            </form>
        </div> : <Redirect to = '/DB' ></Redirect>
        );
    };
}