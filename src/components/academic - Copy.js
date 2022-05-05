import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';

export class Academic extends React.Component {

    addRow = () => {
        var row = document.getElementById('tablecol');
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        var inpt = document.createElement('input');
        inpt.setAttribute('type', 'text');
        inpt.setAttribute('class', 'form-control');
        td.appendChild(inpt);
        tr.appendChild(td);
        row.appendChild(tr);

        var td = document.createElement('td');
        var inpt = document.createElement('input');
        inpt.setAttribute('type', 'text');
        inpt.setAttribute('class', 'form-control');
        inpt.setAttribute('id', 'sub_name');
        td.appendChild(inpt);
        tr.appendChild(td);
        row.appendChild(tr);

        var td = document.createElement('td');
        var inpt = document.createElement('input');
        inpt.setAttribute('type', 'text');
        inpt.setAttribute('class', 'form-control');
        inpt.setAttribute('id', 'class');
        td.appendChild(inpt);
        tr.appendChild(td);
        row.appendChild(tr);

        var td = document.createElement('td');
        var inpt = document.createElement('input');
        inpt.setAttribute('type', 'text');
        inpt.setAttribute('class', 'form-control');
        inpt.setAttribute('id', 'pass');
        td.appendChild(inpt);
        tr.appendChild(td);
        row.appendChild(tr);

        var td = document.createElement('td');
        var inpt = document.createElement('input');
        inpt.setAttribute('class', 'form-control');
        inpt.setAttribute('type', 'text');
        inpt.setAttribute('id', 'avg');
        td.appendChild(inpt);
        tr.appendChild(td);
        row.appendChild(tr);

        var td = document.createElement('td');
        var inpt = document.createElement('input');
        inpt.setAttribute('type', 'text');
        inpt.setAttribute('class', 'form-control');
        inpt.setAttribute('id', 'feedback');
        td.appendChild(inpt);
        tr.appendChild(td);
        row.appendChild(tr);
    }
    render() {
        return (
            <div className=" shadow mt-2 border" >
                <div className="justify-content-end p-3 d-flex">
                    <h3 className="p-1">Academic Score</h3>
                    <div className="border rounded p-2" style={{ width: '105px', height: "40px" }}>
                        <p id="Score">
                            40 / 50
                        </p>

                    </div>

                </div>
                <div className="">
                    <form>
                        <div className="  " style={{ marginLeft: "40px" }}>
                            <h4>Qualification</h4>
                            <div className="d-flex mb-3" style={{ marginLeft: "40px" }}>
                                <div class="form-check  ">
                                    <input class="form-check-input" type="checkbox" />
                                    <label class="form-check-label" >
                                        M.phill
                                    </label>
                                </div>
                                <div class="form-check " style={{ marginLeft: "40px" }}>

                                    <input class="form-check-input" type="checkbox" />
                                    <label class="form-check-label" >
                                        NET
                                    </label>
                                </div>
                                <div class="form-check " style={{ marginLeft: "40px" }}>

                                    <input class="form-check-input" type="checkbox" />
                                    <label class="form-check-label" >
                                        SLET
                                    </label>
                                </div>
                            </div>
                            <div className="mt-2">
                                <h4>Student Details</h4>
                            </div>


                            <div className="row  ">
                                <div className="col-10  p-3">
                                    <table className="table table-bordered  mt-4 table-striped" >
                                        <thead >
                                            <tr>
                                                <th scope="col">S.no</th>
                                                <th scope="col">Name of Subject</th>
                                                <th scope="col">Class</th>
                                                <th scope="col">pass %</th>
                                                <th scope="col">Average %</th>
                                                <th scope="col"> Feedback Mark</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tablecol">
                                            <tr>
                                                <td scope="row"><input type="text" class="form-control" ></input></td>
                                                <td><input type="text" class="form-control" ></input></td>
                                                <td><input type="text" class="form-control" ></input></td>
                                                <td><input type="text" class="form-control" ></input></td>
                                                <td><input type="text" class="form-control" ></input></td>
                                                <td><input type="text" class="form-control" ></input></td>
                                            </tr>

                                        </tbody>
                                    </table>

                                    <div className="text-end">
                                        <button type="button" class="btn btn-primary">Save</button>
                                    </div>

                                </div>
                                <div className="col-2 mt-5">
                                    <button type="button" className="btn btn-sm btn-primary" onClick={this.addRow}>Add more</button>
                                </div>
                            </div>
                        </div>

                        <div className=" mt-2 p-3 ">
                            <h3 className="mb-3">Teaching Skill</h3>
                            <h4>Subject Name</h4>
                            <div className="p-1 " >

                                <div className="row mb-3 ">
                                    <div className="col-3">
                                        <h6 >Content Expertise</h6>
                                    </div>
                                    <div className="col-2 p-1 d-flex">

                                     
                                            <lable>No Material</lable>  &nbsp; &nbsp;
                                            <span className="text-center" />
                                            <input class="form-check-input "  type="checkbox" />

                                     
                                        </div>

                                        <div className="col-2 d-flex p-1">
                                      
                                            <lable>Need Material</lable>&nbsp;
                                            <span className="text-center" />
                                            <input class="form-check-input " type="checkbox" />

                                       
                                        </div>

                                        <div className="col-2 d-flex p-1">
                                        
                                            <lable>Sufficient Material</lable>&nbsp;
                                            <span className="text-center" />
                                            <input class="form-check-input " type="checkbox" />

                                       
                                        </div>

                                        <div className="col-1 d-flex p-1">
                                       
                                            <lable>Good</lable>&nbsp;&nbsp; &nbsp; 
                                            <span className="text-center" />
                                            <input class="form-check-input " type="checkbox" />

                                        
                                        </div>


                                        <div className="col-2 d-flex p-1">
                                            <lable>Excellent</lable>&nbsp;
                                            <span className="text-center" />
                                            <input class="form-check-input " type="checkbox" />                                    
                                        </div>
                                </div> <hr />
                                <div className="row mb-3 ">
                                    <div className="col-3 p-2">
                                        <h6>Instructional Design Skill</h6>
                                    </div>
                                    <div className="col-2 d-flex p-1" >
                                            <lable>Macro Plan</lable> &nbsp; &nbsp;&nbsp;
                                            <span className="text-center" />
                                            <input class="form-check-input " type="checkbox" />
                                        </div>
                                        <div className="col-2 d-flex p-1" >
                                            <lable>Micro plan</lable> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                                            <span className="text-center" />
                                            <input class="form-check-input " type="checkbox" />
                                        </div>
                                        <div className="col-3 p-1 d-flex">
                                            <lable>Hours required</lable>&nbsp;&nbsp;
                                            <span className="text-center" />
                                            <input class="form-control " style={{ width: "50px",height: "30px"  }} type="text" />
                                        </div>
                                    </div>                               
                                <hr />




                                <div className="row mb-3">
                                    <div className="col-3 p-2">
                                        <h6>Instructional Delivery Skill</h6>
                                    </div>

                                    <div className="col-4 p-1 d-flex">

                                      
                                            <lable>Need More Improvement</lable> &nbsp; &nbsp;
                                            <span className="text-center" />
                                            <input class="form-check-input " type="checkbox" />

                                        </div>

                                        <div className="col-2 p-1 d-flex">
                                        
                                            <lable>Average</lable> &nbsp; &nbsp;
                                            <span className="text-center" />
                                            <input class="form-check-input " type="checkbox" />

                                        </div>

                                        <div className="col-1 p-1 d-flex">
                                            <lable>Good</lable>&nbsp; &nbsp;
                                            <span className="text-center" />
                                            <input class="form-check-input " type="checkbox" />

                                        </div>

                                         <div className="col-2 p-1 d-flex">
                                            <lable>Excellent</lable>&nbsp; &nbsp;
                                            <span className="text-center" />
                                            <input class="form-check-input " type="checkbox" />

                                        </div>

                                       

                                      

                                    </div>
                                    <hr />


                             
                             

                                <div className="row ">
                                    <div className="col-3 ">
                                        <h6>Instructional Assessment Skill</h6>
                                    </div>

                                    <div className="col-3 p-1 d-flex" style={{width:"190px"}}>
                                     <lable>No of Assignment</lable>&nbsp; 
                                            
                                            <input class="form-control " style={{ width: "50px " ,height: "30px" }}  type="text" />
                                            
                                        </div>

                                        <div className="col-2 p-1  d-flex" style={{width:"200px"}}>
                                            <lable>No of Class test</lable>&nbsp;
                                            <span className="text-center" />
                                            <input class="form-control  " style={{ width: "50px ",height: "30px" }} type="text" />

                                        </div>

                                        <div className="col-4 p-1 d-flex ">
                                            <lable>Student Completed Certifications</lable>&nbsp;
                                            <span className="text-center" />
                                            <input class="form-control" style={{ width: "50px ",height: "30px" }} type="text" />

                                        </div>

                                    </div>
                                    <hr />
                                
                                

                                <div className="row ">
                                    <div className="col-3">
                                        <h6> Managerial Skill</h6>
                                    </div>
                                    <div className="col-4 p-1" >
                                        <lable>No of Hours Conducted</lable>
                                        <span className="text-center">
                                            <input class="form-control " style={{ width: "50px " ,height: "30px" }}  type="text" />

                                        </span>
                                    </div>



                                </div><hr />

                            </div>
                        </div>
                        <div className="text-end">
                            <button type="button" className="btn btn-sm btn-primary p-2 mb-2">Submit</button>

                        </div>
                    </form>
                </div>


            </div>
        )
    }
}