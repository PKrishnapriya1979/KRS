import React from "react";
import axios from "axios";
import {Redirect} from "react-router-dom"

export class Register extends React.Component{
state = {
    emailid : "",
    pwd : "",
    repwd : ""
}    

getemailid=(Event)=>{
    this.setState({emailid:Event.target.value});
    console.log(this.state.emailid);
}
getnewpwd=(Event)=>{
    this.setState({pwd:Event.target.value});
}
getreppwd=(Event)=>{
    this.setState({repwd:Event.target.value});
}
pwdreset(){
    if(this.state.pwd === this.state.repwd){
        console.log(this.state.emailid);
        console.log(this.state.pwd);
        alert(this.state.emailid);
        axios.post('http://localhost:3001/resetpwd',{
            reset_emailid : this.state.emailid,
            reset_pwd : this.state.pwd
            }).then((response)=>{
                alert(response);
        });
     <Redirect to = "/"></Redirect>
    }
    else
    {
        alert("Password Mismatch ");
    }

  }
    render(){
        return(
            <div class="border w-50 mt-5 mx-auto border-2 justify-content-center rounded p-3" >
            <h3 class="mb-4" >Hello user name</h3>
            <form action="/login.jsx">
                <div class="row ">
                    <div class="col  mb-3 ">
                        <div class="input-group">
                      <label class="frm_int input-group-text"  for="">Mail ID:</label>
                      <input class="form-control" type="email" placeholder="mail id" onChange={this.getemailid} />
                        </div>
                    </div>
                    </div>
                <div class="row">
                    <div class="col  mb-3 ">
                        <div class="input-group">
                           
                      <label class="frm_int input-group-text"  for="">New Password:</label>
                      <input class="form-control" type="password" placeholder="New Password" onChange={this.getnewpwd}/>
                        </div>
                        </div>
                    </div>
                <div class="row">
                    <div class="col  mb-3 ">
                        <div class="input-group">
                           
                      <label class="frm_int input-group-text"  for="">Confirm Password:</label>
                      <input class="form-control" type="password" placeholder="confirm Password" onChange={this.getreppwd}/>
                        </div>
                    </div>
                    </div>
                    <div class="row justify-content-end">
                        <div class="col-2 mt-3">
                            <button class="btn btn-primary" onClick={this.pwdreset.bind(this)}>Reset Password</button>
                        </div>
                    </div>
            </form>
    </div>
        )
    }
}