import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import React from 'react';
import ListBox from 'react-listbox';
import 'react-listbox/dist/react-listbox.css';
var Inst_name = "";
var option = [];

export class Role_assign extends React.Component {      
    state = {
        setinstitution : [],
        setmembers : [],
    }
    
    fillInstitution(){
        console.log("Role assignment");
        axios.post("http://localhost:3001/forInstitution").then((response)=>{
          console.log(response.data);
          this.setState({setinstitution:response.data});
          
        })
        console.log(this.state.setinstitution);
    };
    fillmembers()
    {
        axios.post("http://localhost:3001/getmembers",{inst_name : Inst_name}).then((response)=>{
          console.log(response.data);
          this.setState({setmembers:response.data});
           })
            console.log(this.state.setmembers);
        };
    componentDidMount(){
        this.fillInstitution();
    }
    getInstitutionName=(Event)=>{
        console.log(Event.target.value);
        Inst_name = Event.target.value;
        this.fillmembers();
    }
    
    render() {
        return (
            <div className="container">
                <h1> Assigning Roles</h1>
                <div className="row mt-4 w-md-75 mx-auto p-4 shadow justify-content-center">
                    <div className="col-4">
                        <select  name="Insititution Name" id="Insitution_name" className ="form-control form-select"
                              onChange = {this.getInstitutionName} >
                                
                                {this.setIns_list = this.state.setinstitution.map((ins_list)=>
                                {
                                    console.log(this.state.setinstitution)      
                                    return (
                                        <option key = {ins_list.inst_id} value = {ins_list.inst_name}>{ins_list.inst_name}
                                        </option> 
                                        ) 
                                    })}
                            </select> 
                        <div className="col-4">
                    </div>
                    </div>
                
                </div>

            </div>
        )
    }
}