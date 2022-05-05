import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';

import React from 'react';
  export class Banner extends React.Component {
     render() {
         return (
                <div style={{height:"170px"}} className="row shadow shadow-lg p-3  ">
                    <div className="col-3">
                         <img className="img-responsive img-fluid" style={{overflow:"hidden" ,height:"150px",width:"auto"}} src="./kglogo.png" alt="logo" />
                    </div>
                    <div className="col-6 d-flex  align-items-center justify-content-center">
                        <h3 className="text-center fw-bold ">PROGRESS TRACKING</h3>
                    </div>
                </div>
         );
     }
 }
 