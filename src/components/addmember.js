import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
var institution ="";
export  class Addmember extends React.Component {
  state = {
      manager :[],
      empname:"",
      empid:"",
      designation:"",
      addrole:"",
      phoneno:0,
      rep_manager : "",
      mailid:"",
      setdesign:[],
      setinstitution:[],
      role:[],
      role_id : 0,
      setdept : [],
      deptid:0
    };
  fillInstitution(){
    axios.post("http://localhost:3001/forInstitution").then((response)=>{
      console.log(response.data);
      this.setState({setinstitution:response.data})
    })
    
   
  }
  fillDesignation(){
        axios.post("http://localhost:3001/getDesignation").then((response)=>{
            console.log("Sucess" + response.data);
            this.setState({setdesign:response.data})
        });
      }
  fillDepartment(){
    alert("Fetching the department..."+ institution);
    axios.post("http://localhost:3001/forDepartment",{inst_name:institution}).then((response)=>{
      this.setState({setdept:response.data})
      console.log(response.data);
    })
  }
  fillmanager(){
    axios.post("http://localhost:3001/getmanager",{
            institution : institution
        }).then((response)=>{
            console.log("Success" + response.data);
            this.setState({manager:response.data})
        });
      }
    getName=(Event)=>{
            this.setState({empname:Event.target.value});
      }
    getEmpid=(Event)=>{
            this.setState({empid:Event.target.value});
            this.fillInstitution();
      }
    getDeptname=(Event)=>{
            this.setState({deptid:Event.target.value});
    }
    getDesignation=(Event)=>{
            this.setState({designation:Event.target.value});
            this.fillDesignation();
    }
    getInstitution=(Event)=>{
            institution=Event.target.value;
            institution = Event.target.value;
            this.fillDesignation();
            this.fillDepartment();
    }
    getres1=(Event)=>{
            this.fillmanager();
            this.setState({addrole:Event.target.value});
      }
    getPhoneno=(Event)=>{
            this.setState({phoneno:Event.target.value});
        
      }
    getrep_manager=(Event)=>{
            this.setState({rep_manager:Event.target.value});
      }
    getmail_id=(Event)=>{
            this.setState({mailid:Event.target.value});
    }
    savemember=(Event)=>{
      alert(this.state.empid);
        if(this.state.designation == "Managing Director" || this.state.designation == "CEO - KGiSL EDU")
              this.state.role_id = 1;
        if(this.state.designation == "Secretary" || this.state.designation == "Principal" || this.state.designation == "Vice - Principal (Academics)" || this.state.designation == "Vice - Principal (Admin)" || this.state.designation == "Vice - Principal")
              this.state.role_id = 2;
        if(this.state.designation == "Dean - Science" || this.state.designation == "Dean - Commerce" || this.state.designation == "Dean" || this.state.designation == "Vice - Principal (Admin)" || this.state.designation == "Dean - Research")
              this.state.role_id = 3;
        if(this.state.designation == "Head of the Department")
              this.state.role_id = 4;
      
      const temp_member = {empname : this.state.empname,
        empid:this.state.empid,
        designation:this.state.designation,
        institution:institution,
        addrole:this.state.addrole,
        phoneno:this.state.phoneno,
        mailid:this.state.mailid,
        rep_manager:this.state.rep_manager,
        role:this.state.role_id,
        deptid:this.state.deptid,
        };
        axios.post('http://localhost:3001/savemember',{
            empname:temp_member.empname,
            empid:temp_member.empid,
            designation:temp_member.designation,
            institution:temp_member.institution,
            addrole:temp_member.addrole,
            phoneno:temp_member.phoneno,
            mailid:temp_member.mailid,
            rep_manager:temp_member.rep_manager,
            role:temp_member.role,
            deptid:temp_member.deptid
      }).then((response)=>{
        alert("Sucessfully Added the new Member....");
      });
    }
    render() {
        return (
        <div id = 'root' className="container"> 
          <div   className="keyrole border border-2 mt-5 p-2 ">
            <h3>Add Member</h3>         
             <form name = "member">
                <div  className="row mb-3">
                  <div  className="col-md-6 mb-3">
                    <div  className="input-group">
                      <label  className="input-group-text" >Name of the member</label>
                      <input  className="form-control" type="text" name="name of the member" placeholder="Name Of the member" onChange={this.getName}/>
                    </div>              
                  </div>
                  <div  className="col-md-6 ">
                    <div  className="input-group">
                      <label  className="input-group-text" >Employee ID</label>
                      <input  className="form-control" type="alphanumeric" name="Emp_id" placeholder="Employee ID" onChange={this.getEmpid}/>
                    </div>
                  </div>
                </div>
                <div  className="row mb-3">
                  <div  className="col-md-6 mb-3">
                    <div  className="input-group">
                      <label  className="input-group-text" >Institution Name</label>
                      <select  name="Insititution Name" id="Insitution_name" className ="form-control form-select"
                          onChange = {this.getInstitution} >
                            {this.setIns_list = this.state.setinstitution.map((ins_list)=>
                            {
                                return (
                                  <option key = {ins_list.inst_id} value = {ins_list.inst_name}>{ins_list.inst_name}
                                  </option> 
                                  ) 
                            })}
                      </select>
                    </div>
                  </div> 
                  <div  className="col-md-6 mb-3">
                    <div  className="input-group">
                      <label  className="input-group-text" >Designation</label> 
                      <select className ="form-select" name="design" id="Assign To" aria-label="Default select example"
                        onChange = {this.getDesignation}>
                        {this.setde_list = this.state.setdesign.map((design)=>
                            {
                                return (
                                  <option key = {design.Designation} value = {design.Designation}>{design.Designation}
                                  </option> 
                                  ) 
                            })}
                          </select> 
                    </div>
                  </div> 
                </div>
            <div  className="row mb-3">
              <div  className="col-md-4 mb-3">
                    <div  className="input-group">
                      <label  className="input-group-text" >Department</label> 
                      <select className ="form-select" name="dept" id="dept" aria-label="Default select example"
                        onChange = {this.getDeptname}>
                          {this.setdept_list = this.state.setdept.map((dept)=>
                            {
                                return (
                                  <option key = {dept.id} value = {dept.id}>{dept.dept_name}
                                  </option> 
                                  ) 
                            })}  
                          </select> 
                          </div> 
              </div>
              <div  className="col-md-4 mb-3">
                  <div  className="input-group">
                    <label  className="input-group-text" >Responsibilities</label>
                    <input  className="form-control" type="text" placeholder="Responsibilities " name = "responsible" onChange={this.getres1}/>
                  </div>
              </div>
              <div  className="col-md-4 mb-3">
                  <div  className="input-group">
                    <label  className="input-group-text" >Reporting Manager</label>
                    <select className="form-control" name = "rep_manager" onChange={this.getrep_manager}>
                         {this.manager_list = this.state.manager.map((ass)=>
                            {
                               return (
                                   <option key = {ass.empid} value = {ass.empid}>{ass.empname}
                                   </option> 
                                  ) 
                               })}
                    </select> 
                  </div>
              </div>
            </div>
          <div  className="row mb-3">
            <div  className="col-md-6 mb-3">
              <div  className="input-group">
                <label  className="input-group-text" >Phone Number</label>
                <input  className="form-control" name="Phone_no" type="tel" placeholder="Phone Number" onChange={this.getPhoneno}/>
              </div>
            </div>
            <div  className="col-md-6 mb-3">
              <div  className="input-group">
                <label  className="input-group-text" >mail id</label>
                <input  className="form-control" name="mail_id" type="text" placeholder="mail id" onChange={this.getmail_id}/>
              </div>
            </div>
          </div>
          <div  className="row justify-content-center">
            <div  className="col-2">
              <input type="submit" value="Save"  className="btn btn-primary" onClick={this.savemember}/>
            </div>
            </div>
        </form> 
      </div>
    </div>
        );
   }
}
