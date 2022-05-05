import React, { Component } from 'react'
import axios from 'axios';
let total_pass = 0;
let score = 0;
let count=0;
let total_avg =0;
let count_avg =0;
let score_avg =0;
let sub_count =0;
let final_score=0;
let ce = 0, ids =0, delivery =0, hrs = 0,assign =0, test = 0,cert =0;
export  class Academic extends Component {
    addRow=()=>{
        sub_count = sub_count+1;        
        var row = document.getElementById('teachingSkill');
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
        inpt.setAttribute('id', 'sub_name'+sub_count);
        td.appendChild(inpt);
        tr.appendChild(td);
        row.appendChild(tr);

        var td = document.createElement('td');
        var inpt = document.createElement('input');
        inpt.setAttribute('type', 'text');
        inpt.setAttribute('class', 'form-control');
        inpt.setAttribute('id', 'class1'+sub_count);
        td.appendChild(inpt);
        tr.appendChild(td);
        row.appendChild(tr);

        var td = document.createElement('td');
        var inpt = document.createElement('input');
        inpt.setAttribute('type', 'text');
        inpt.setAttribute('class', 'form-control');
        inpt.setAttribute('id', 'pass'+sub_count);
        td.appendChild(inpt);
        tr.appendChild(td);
        row.appendChild(tr);

        var td = document.createElement('td');
        var inpt = document.createElement('input');
        inpt.setAttribute('class', 'form-control');
        inpt.setAttribute('type', 'text');
        inpt.setAttribute('id', 'avg'+sub_count);
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


        var row = document.getElementById('teachingSkill');
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        var inpt = document.createElement('h6');
        inpt.innerHTML='Content Expertise';
        td.appendChild(inpt);
        tr.appendChild(td);
        row.appendChild(tr);

        var td = document.createElement('td');
        var h6 = document.createElement('span');
        var inpt = document.createElement('input');
        h6.innerHTML='No Material  ';
        inpt.setAttribute('type', 'radio');
        inpt.setAttribute('id', 'material'+count);
        td.appendChild(h6);
        td.appendChild(inpt);
        tr.appendChild(td);
        row.appendChild(tr);

        var td = document.createElement('td');
        var h6 = document.createElement('span');
        var inpt = document.createElement('input');
        h6.innerHTML='Sufficient Material  ';
        inpt.setAttribute('type', 'radio');
        inpt.setAttribute('id', 'material'+count);
        td.appendChild(h6);
        td.appendChild(inpt);
        tr.appendChild(td);
        row.appendChild(tr);

        var td = document.createElement('td');
        var h6 = document.createElement('span');
        var inpt = document.createElement('input');
        h6.innerHTML='Good  ';
        inpt.setAttribute('type', 'radio');
        inpt.setAttribute('id', 'material'+count);
        td.appendChild(h6);
        td.appendChild(inpt);
        tr.appendChild(td);
        row.appendChild(tr);

        var td = document.createElement('td');
        var h6 = document.createElement('span');
        var inpt = document.createElement('input');
        h6.innerHTML='Execellent';
        inpt.setAttribute('type', 'radio');
        inpt.setAttribute('id', 'material'+count);
        td.appendChild(h6);
        td.appendChild(inpt);
        tr.appendChild(td);
        row.appendChild(tr);


        //second row

        var row = document.getElementById('teachingSkill');
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        var inpt = document.createElement('h6');
        inpt.innerHTML='Instructional Design Skil  ';
        td.appendChild(inpt);
        tr.appendChild(td);
        row.appendChild(tr);

        var td = document.createElement('td');
        var h6 = document.createElement('span');
        var inpt = document.createElement('input');
        h6.innerHTML='Macro Plan  ';
        inpt.setAttribute('type', 'radio');
        inpt.setAttribute('id', 'IDS'+count);
        td.appendChild(h6);
        td.appendChild(inpt);
        tr.appendChild(td);
        row.appendChild(tr);

        var td = document.createElement('td');
        var h6 = document.createElement('span');
        var inpt = document.createElement('input');
        h6.innerHTML='Micro plan  ';
        inpt.setAttribute('type', 'radio');
        inpt.setAttribute('id', 'IDS'+count);
        td.appendChild(h6);
        td.appendChild(inpt);
        tr.appendChild(td);
        row.appendChild(tr);

        var td = document.createElement('td');
        var h6 = document.createElement('span');
        var inpt = document.createElement('input');
        h6.innerHTML='Hours required  ';
        inpt.setAttribute('type', 'text');
        td.appendChild(h6);
        td.appendChild(inpt);
        tr.appendChild(td);
        row.appendChild(tr);

       //3rd row

       var row = document.getElementById('teachingSkill');
       var tr = document.createElement('tr');
       var td = document.createElement('td');
       var inpt = document.createElement('h6');
       inpt.innerHTML='Instructional Delivery Skill';
       td.appendChild(inpt);
       tr.appendChild(td);
       row.appendChild(tr);

       var td = document.createElement('td');
       var h6 = document.createElement('span');
       var inpt = document.createElement('input');
       h6.innerHTML='Need More Improvement  ';
       inpt.setAttribute('type', 'radio');
       inpt.setAttribute('name', 'delivery'+count);
       td.appendChild(h6);
       td.appendChild(inpt);
       tr.appendChild(td);
       row.appendChild(tr);

       var td = document.createElement('td');
       var h6 = document.createElement('span');
       var inpt = document.createElement('input');
       h6.innerHTML='Average  ';
       inpt.setAttribute('type', 'radio');
       inpt.setAttribute('name', 'delivery'+count);
       td.appendChild(h6);
       td.appendChild(inpt);
       tr.appendChild(td);
       row.appendChild(tr);

       var td = document.createElement('td');
       var h6 = document.createElement('span');
       var inpt = document.createElement('input');
       h6.innerHTML='Good  ';
       inpt.setAttribute('type', 'radio');
       inpt.setAttribute('name', 'delivery'+count);
       td.appendChild(h6);
       td.appendChild(inpt);
       tr.appendChild(td);
       row.appendChild(tr);

       var td = document.createElement('td');
       var h6 = document.createElement('span');
       var inpt = document.createElement('input');
       h6.innerHTML='Execellent';
       inpt.setAttribute('type', 'radio');
       inpt.setAttribute('name', 'delivery'+count);
       td.appendChild(h6);
       td.appendChild(inpt);
       tr.appendChild(td);
       row.appendChild(tr);

       //4th row

       var row = document.getElementById('teachingSkill');
       var tr = document.createElement('tr');
       var td = document.createElement('td');
       var inpt = document.createElement('h6');
       inpt.innerHTML='Instructional Assessment Skill';
       td.appendChild(inpt);
       tr.appendChild(td);
       row.appendChild(tr);

       var td = document.createElement('td');
       var h6 = document.createElement('span');
       var inpt = document.createElement('input');
       h6.innerHTML='No of Assignment  ';
       inpt.setAttribute('type', 'text');
       inpt.setAttribute('class', 'form-control');
       inpt.setAttribute('id', 'assignment'+count);
       
       td.appendChild(h6);
       td.appendChild(inpt);
       tr.appendChild(td);
       row.appendChild(tr);

       var td = document.createElement('td');
       var h6 = document.createElement('span');
       var inpt = document.createElement('input');
       h6.innerHTML='No of Class test  ';
       inpt.setAttribute('type', 'text');
       inpt.setAttribute('class', 'form-control');
       inpt.setAttribute('type', 'radio');
       
       
       td.appendChild(h6);
       td.appendChild(inpt);
       tr.appendChild(td);
       row.appendChild(tr);

       var td = document.createElement('td');
       var h6 = document.createElement('span');
       var inpt = document.createElement('input');
       h6.innerHTML='Student Completed Certifications  ';
       inpt.setAttribute('type', 'text');
       inpt.setAttribute('class', 'form-control');
       inpt.setAttribute('id', 'certificate'+count);
       td.appendChild(h6);
       td.appendChild(inpt);
       tr.appendChild(td);
       row.appendChild(tr);

      //5th row
      var row = document.getElementById('teachingSkill');
      var tr = document.createElement('tr');
      var td = document.createElement('td');
      var inpt = document.createElement('h6');
      inpt.innerHTML='Managerial Skill';
      td.appendChild(inpt);
      tr.appendChild(td);
      row.appendChild(tr);

      var td = document.createElement('td');
      var h6 = document.createElement('span');
      var inpt = document.createElement('input');
      h6.innerHTML='No of Hours Conducted ';
      inpt.setAttribute('type', 'text');
      inpt.setAttribute('id', 'hrs_conducted'+count);
      inpt.setAttribute('class', 'form-control');
      td.appendChild(h6);
      td.appendChild(inpt);
      tr.appendChild(td);
      row.appendChild(tr);

      var td = document.createElement('td');
      var inpt = document.createElement('button');
      inpt.setAttribute('type', 'button');
      inpt.setAttribute('class', 'btn btn-primary mt-3');
      inpt.setAttribute('id', 'remove'+count);
      inpt.innerHTML='Remove';

      td.appendChild(inpt);
      tr.appendChild(td);
      row.appendChild(tr);   
  }
  reset(event){
    total_pass = 0;
    score = 0;
    total_avg =0;
    score_avg =0;
    sub_count =0;
    final_score=0;
    ce = 0; ids =0; delivery =0; hrs = 0;assign =0; test = 0;cert =0;  
    document.getElementById("pass0").value = 0;
    document.getElementById("avg0").value = 0;
    document.getElementById("ce1").checked = false;
    document.getElementById("ce2").checked = false;
    document.getElementById("ce3").checked = false;
    document.getElementById("ce4").checked = false;
    document.getElementById("IDS1").checked = false;
    document.getElementById("IDS2").checked = false;
    document.getElementById("d1").checked = false;
    document.getElementById("d2").checked = false;
    document.getElementById("d3").checked = false;
    document.getElementById("d4").checked = false;
    document.getElementById("assignment").value = 0;
    document.getElementById("test").value = 0;
    document.getElementById("certificate").value = 0;
    document.getElementById("hrs_required").value = 0;
    document.getElementById("hrs_conducted").value = 0;
  }
  getScore(event){
        count = count+1;
      let pass = document.getElementById("pass0");
      total_pass = pass.value;      
      
      score = 0; score_avg =0;
      if (total_pass >= 95)
          score = 25;
      else if (total_pass < 95 && total_pass >= 90)
          score = 20;
      else if (total_pass < 90 && total_pass >= 85)
          score = 15;
      else if (total_pass < 85 && total_pass >= 80)
          score = 10;
     else if (total_pass < 80 && total_pass >= 75)
          score = 5;
    let avg = document.getElementById("avg0");
    total_avg = avg.value;
    if (total_avg >= 75) 
      score_avg = 25;
    else if (total_avg < 75 && total_avg >= 72)
      score_avg = 20;
    else if (total_avg < 72 && total_avg >= 69)
      score_avg = 15;
    else if (total_avg < 69 && total_avg >= 66)
      score_avg = 10;
    else if (total_avg < 60 && total_avg >= 63)
      score_avg = 5;
    
    let ce1 = document.getElementById("ce1");
    let ce2 = document.getElementById("ce2");
    let ce3 = document.getElementById("ce3");
    let ce4 = document.getElementById("ce4");
    let ids1 = document.getElementById("IDS1");
    let ids2 = document.getElementById("IDS2");
    let d1 = document.getElementById("d1");
    let d2 = document.getElementById("d2");
    let d3 = document.getElementById("d3");
    let d4 = document.getElementById("d4");
    let assignment = document.getElementById("assignment");
    let test1 = document.getElementById("test");
    let certificate = document.getElementById("certificate");
    let hrs_required = document.getElementById("hrs_required");
    let hrs_conducted = document.getElementById("hrs_conducted");
    
    if (ce1.checked) 
        ce = parseInt(ce1.value);
    if (ce2.checked) 
        ce = parseInt(ce2.value);
    if (ce3.checked) 
        ce = parseInt(ce3.value);
    if (ce4.checked)
        ce = parseInt(ce4.value);
    
    if (ids1.checked)
        ids = parseInt(ids1.value);
    if (ids2.checked)
        ids = parseInt(ids2.value);
    
    if (d1.checked)
        delivery = parseInt(d1.value);
    if (d2.checked)
        delivery = parseInt(d2.value);
    if (d3.checked)
        delivery = parseInt(d3.value);
    if (d4.checked)
        delivery = parseInt(d4.value);
    
    if(assignment.value>=2)
        assign = 0.5;
    
    if(test1.value>=3)
      test = 0.5
    
    if(certificate.value > 80)
      cert = 1;
    
    if((hrs_conducted.value/hrs_required.value) > 0.8)
      hrs = 1;     
    let delivery_skill = ce+ids+delivery+assign+test+cert+hrs;
    final_score = score+score_avg+final_score+delivery_skill;
    let p=document.getElementById("Score");
    final_score = (parseInt(p.textContent)+final_score)/count;
    p.textContent = final_score;

  }
render() {
      return(
        <div id = "root" className ="container border border-2 p-2 mt-5" > 
            <div  className="row mb-3">    
                    <div className="justify-content-end p-3 d-flex">
                    <h3 className="p-1">Academic Score(Max : 60)</h3>
                    <div className="border rounded p-2" style={{ width: '105px', height: "40px" }}>
                        <p id="Score"><h3>
                            0</h3>
                        </p>
                    </div>
                </div> </div>
                <div  className="input-group">
                      <label  className="input-group-text" >Academic Qualification </label>
                    </div>
                    
                  <div class="row">
                    <div class="col-sm-2">
                       <input class="form-check-input" type="checkbox" id="Ph.D" value="Ph.D"/>
                       <label class="form-check-label" >Ph.D</label>  
                    </div>
                    <div class="col-sm-4">
                        <input class="form-check-input" type="checkbox" id="PG"  value="PG"/>
                        <label class="form-check-label">M.Sc / M.Com / MBA / MCA / MA</label>
                    </div>

                    <div class="col-sm-3">
                        <input class="form-check-input" type="checkbox" id="NET"  value="NET"/>
                        <label class="form-check-label">NET</label>
                    </div>
                    <div class="col-sm-3">
                        <input class="form-check-input" type="checkbox" id="SLET" name="severity[]" value="SLET"/>
                        <label class="form-check-label">SLET</label>
                    </div>
            </div>
            <div className="mt-2">
               <h4>Academic Achievement</h4>
            </div>
                <div className="row  ">
                    <div className="col-10  p-3">
                        <table className="table table-bordered  mt-4 table-striped" >
                            <thead >
                              <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Name of the Subject</th>
                                <th scope="col">Class</th>
                                <th scope="col">Pass Percentage</th>
                                <th scope="col">Average Mark </th>
                                </tr>
                                    </thead>
                                      <tbody id="teachingSkill">
                                        <tr>
                                          <td scope="row"><input type="text" class="form-control" ></input></td>
                                          <td><input id = "sub_name0" type="text" class="form-control" ></input></td>
                                          <td><input id = "class10" type="text" class="form-control" ></input></td>
                                          <td><input id = "pass0" type="text" class="form-control" ></input></td>
                                          <td><input id = "avg0" type="text" class="form-control" ></input></td>
                                        </tr>
                                        <tr >
                                        <td><h6>Content Expertise</h6></td>
                                        <td >No Material <input type="radio" name = "ce"  id="ce1" value = "0" ></input></td>
                                        <td style={{width:"280px"}}>Sufficient Material  <input type="radio" id="ce2" name = "ce" value = "0.5"></input></td>
                                        <td>Good <input type="radio" id="ce3" name = "ce" value = "1.5"></input></td>
                                        <td style={{width:"130px"}}>Execllent <input type="radio" id="ce4" name = "ce" value ="2" ></input></td>
                                    </tr>
                                    <tr>
                                        <td><h6>Instructional Design Skil</h6></td>
                                        <td>Macro Plan<input type="radio" name = "ID1" id ="IDS1" value = "1"></input></td>
                                        <td>Micro plan<input type="radio" name = "ID2" id ="IDS2" value = "2"></input></td>
                                        <td>Hours required<input type="text" name = "ID3" id = "hrs_required"></input></td>
                                    </tr>
                                    <tr>
                                        <td><h6>Instructional Delivery Skill</h6></td>
                                        <td style={{width:"370px"}}>Need More Improvement<input type="radio" name = "delivery" value = "0" id = "d1"></input></td>
                                        <td>Average<input type="radio" name = "delivery" id = "d2" value = "0.5"></input></td>
                                        <td>Good <input type="radio" name = "delivery" id = "d3" value = "1"></input></td>
                                        <td>Execllent <input type="radio" name = "delivery" id = "d4" value = "2"></input></td>
                                    </tr>
                                        <tr> 
                                            <td style={{width:"350px"}}><h6>Instructional Assessment Skill</h6></td>
                                        <td>No of Assignment<input class="form-control" type="text" id = "assignment"></input></td>
                                        <td>No of Class test<input class="form-control" type="text" id = "test"></input></td>
                                        <td style={{width:"250px"}}>Student Completed Certifications<input
                                         class="form-control w-50" type="text" id = "certificate"></input></td>
                                        </tr>
                                        <tr>
                                            <td>
                                          <h6>  Managerial Skill</h6>
                                            </td>
                                            <td>No of Hours Conducted<input className="form-control" type="text" id = "hrs_conducted"></input>
                                            </td>
                                            <td>
                                                <button className="btn btn-primary mt-3" onClick = {this.getScore}>Score</button>
                                            </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                <div className="col-2 mt-5">
                                    <button type="button" className="btn btn-sm btn-primary" onClick={this.reset}>Add more</button>
                                </div>
                            </div>
                        </div>                
      )
    };
}

