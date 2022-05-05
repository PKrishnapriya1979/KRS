import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';

export class TaskToBeCompleted extends React.Component {
   render() {
        return (
        
  <div class="container">
                 <h4 class="mt-3">Task to be accepted</h4>
                
                <table class="table table-responsive">
                    <thead>
                      <tr> 
                        <th scope="col-3">Task name</th> 
                        <th scope="col-3">Assigned By</th> 
                        <th scope="col-3">Assigned To</th>
                     <th scope="col-3">start date</th>
                     <th scope="col-3">end date</th>   
                     <th scope="col-3">Status</th> 
                      </tr>
                    </thead>
                    <tbody>
                      <tr>  
                        <td scope="row">
                            <a data-bs-toggle="modal" data-bs-target="#exampleModal">IIC</a>
                          
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Task Description</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         
        </div>
      </div>
    </div>
  </div>
                        </td>
                        <td>Assigner Name</td>
                      <td>Assigned Person</td>
                        <td>02/12/2015</td>
                        <td>02/12/2015</td>
                     
                        <td>
                         
   <button type="button"  class="btn btn-sm btn-success" data-bs-toggle="modal" data-bs-target="#task">
    <i className="fas fa-check"></i>
  </button>
  
  <div class="modal fade" id="task" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Task name</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          
      <form action="/dashboard.html">
        <div class="row mb-2 p-1">
          <div class="col mb-2">
            <div class="input-group">
              <label class="input-group-text" for="Name">Is deadline sufficient</label>
                <select class="form-select " name="datew   " id="end_date" aria-label="Default select example">
                    <option value="yes">yes</option>
                  <option value="no">No</option>
                 
                  </select>
                        </div>
                    </div>
                    </div>
                    <div class="row mb-2 p-1">
                    <div class="col">
                        <div class="input-group">
                            
                  <label class="input-group-text" for="Name">Extented Date</label>
                  <input class="form-control" type="date" placeholder="Name Of the Activity done" />
                        </div>
                    </div>
                </div>
             
                
              <div class="row text-center">
                  <div class="col">
                    <button class="btn btn-primary">Submit</button>
                  </div>
              </div>
        
                 
            </form>
        </div>
       
      </div>
    </div>
  </div>
                        </td>
                      </tr>
                     
                     
                    </tbody>
                  </table>
            </div>
        )
 }
}