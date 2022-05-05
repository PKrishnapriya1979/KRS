import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
export default class Designation extends Component {
  state = {
    Institution:"",
    Designation : ""
  }
  getInstitution=(Event)=>{
    this.setState({Institution:Event.target.value});
    console.log(this.state.Institution);
  }
  getDesignation=(Event)=>{
    this.setState({Designation:Event.target.value});
    
  }
  savedesignation=(Event)=>{     
    console.log(this.state.Institution);
    axios.post("http://localhost:3001/savedesignation",{
      Inst:this.state.Institution,
      Desig:this.state.Designation
      }).then((response)=>{
        console.log(response);
      });
      }
  
  render() {
    return (
      <div id = "root" class="border w-50 mx-auto mt-5 border-2 justify-content-center rounded p-3" >
            <h3 class="mb-4" >Creation of Role </h3>
        <form>
            <div class="row p-2 "> 
              <div class="col  mb-2 "> 
                <div class="input-group"> 
                    <label class="frm_int input-group-text"  for="">Name of the Institution:</label>
                    <select  name="Insititution Name" id="Insitution-name" value = {this.state.Institution} className ="form-control form-select"
                        onChange = {this.getInstitution} >
                        <option value="KGCAS">KG College of Arts and Science</option>
                        <option value="KiTE">KGiSL INSTITUTE OF TECHNOLOGY</option>
                        <option value="IIM">KGISL Institute of Information Management</option>
                        <option value="KGM">KG Micro College</option>
                    </select>
                </div>
              </div>
            </div>           
                  <div class="row p-3">
                    <div class="col  mb-2 ">
                        <div class="input-group">
                            <label class="frm_int input-group-text"  for=""> Designation</label>
                            <input class="form-control" type="text" placeholder="Designation" name = "design" 
                            onChange={this.getDesignation}/>
                        </div>
                    </div>
                </div> 
                <div class="row justify-content-center ">
                    <div class="col-2 mt-3">
                        <input type="button" class="btn btn-primary" value= "Save" onClick={this.savedesignation.bind(this)}/>                    
                    </div>
                </div>
              <div>              
           </div>
    </form> 
        </div>
    )
  }
}
