import React, { Component } from 'react'
import axios from 'axios';
export  class Research extends Component {
getscore()
{
    let proposal =0, funds =0,publication_article=0,guidence=0,participation =0, organized =0, awards_score =0;
    let nomination_score =0, certification_score=0,final_score=0,book_score;
    let Int_sem_participated = document.getElementById("Int_sem_participated").value;
    let Int_sem_organized = document.getElementById("Int_sem_organized").value;
    let nat_sem_participated = document.getElementById("nat_sem_participated").value;
    let nat_sem_organized = document.getElementById("nat_sem_organized").value;
    let Research_publication = document.getElementById("Research_publication").value;
    let book = document.getElementById("book_publication").value;
    let patent = document.getElementById("patent").value;
    let proposal_submitted = document.getElementById("proposal_submitted").value;
    let funds_received = document.getElementById("funds_received").value;
    let mphil = document.getElementById("mphil").value;
    let phd = document.getElementById("phd").value;
    let awards = document.getElementById("awards").value;
    let nomination = document.getElementById("nomination").value;
    let certification = document.getElementById("certification").value;
    let contribution = document.getElementById("contribution").value;
    if (proposal_submitted > 0)
        proposal = 2;
    if (funds_received > 0 && funds_received < 500000) 
        funds = 5;
    else if(funds_received > 500000)
        funds = 10; 
    funds = (proposal > funds)?proposal:funds;
    publication_article = Research_publication * 2;
    publication_article = (publication_article >= 10)?10:publication_article;
    book_score = (book>0?5:0)
    if(mphil+phd>0)
        guidence = 5;
    participation = ((Int_sem_participated+nat_sem_participated)*2)>10?10:(Int_sem_participated+nat_sem_participated)*2;
    organized = (Int_sem_organized+nat_sem_organized > 0) ? 5: 0;
    awards_score = (awards>0)?5:0;
    nomination_score = (nomination>0)?5:0;
    certification_score = (certification>0)?5:0;
    final_score = funds+publication_article+guidence+participation+organized+awards_score+nomination_score+certification_score+book_score;
    let p=document.getElementById("Score");
    p.textContent = final_score;
}
  render(){
      return(
          <div>
            <div class="container  ">
                <h3>Research</h3>
            <div  className="row mb-3">    
                <div className="justify-content-end p-3 d-flex">
                  <h3 className="p-1">Research Score(Max : 60)</h3>
                  <div className="border rounded p-2" style={{ width: '105px', height: "40px" }}>
                  <p id="Score"><h3>0</h3></p>
                </div>
            </div> </div>
            <div class="col-6 mb-3">
                <label class="form-label">No. of International seminars / conferences / symposia participated</label>
                <input type="text" class="form-control" id="Int_sem_participated" required/>
              </div>
            <div class="col-6 mb-3">
                <label class="form-label">No. of International seminars / conferences / symposia organized</label>
                <input type="text" class="form-control" id="Int_sem_organized" required/>
              </div>
            
            <div class="col-6 mb-3">
                <label class="form-label">No. of National seminars / conferences / symposia - Participated</label>
                <input type="text" class="form-control" id="nat_sem_participated" required/>
              </div>
            
            <div class="col-6 mb-3">
                <label class="form-label">No. of National seminars / conferences / symposia - Organized</label>
                <input type="text" class="form-control" id="nat_sem_organized" required/>
              </div>
            
            <div class="col-6 mb-3">
                <label class="form-label">No. of Research Article published(current Academic Year)</label>
                <input type="text" class="form-control" id="Research_publication" required></input>
              </div>
            <div class="col-6 mb-3">
                <label class="form-label">No. of Books/online Course published(current Academic Year)</label>
                <input type="text" class="form-control" id="book_publication" required></input>
            </div>
            
            <div class="col-6 mb-3">
                <label class="form-label">No. of patent Filled</label>
                <input type="text" class="form-control" id="patent" required></input>
              </div>
            <div class="col-6 mb-3">
                <label class="form-label">No. of Project Proposal Submitted</label>
                <input type="text" class="form-control" id="proposal_submitted" required></input>
              </div>
            <div class="col-6 mb-3">
                <label class="form-label">Funds received for Research</label>
                <input type="text" class="form-control" id="funds_received" required></input>
              </div>
            
            <div class="col-6 mb-3">
                <label class="form-label">No. of M.Phil scholars guided(current Academic year)</label>
                <input type="text" class="form-control" id="mphil" required/>
              </div>
            <div class="col-6 mb-3">
                <label class="form-label">No. of Ph.D scholars guided(current Academic year)</label>
                <input type="text" class="form-control" id="phd" required/>
              </div>
            
            <div class="col-6 mb-3">
                <label class="form-label">No. of awards received (June 2019 - May 2020).</label>
                <input type="text" class="form-control" id="awards" required></input>
              </div>
            <div class="col-6 mb-3">
                <label class="form-label">No. of boards represented as a Nominee/member in the committees like BoS, Academic Council   and resource person in various Institutions(June 2019 - May 2020).</label>
                <input type="text" class="form-control" id="nomination" required></input>
              </div>
            <div class="col-6 mb-3">
                <label class="form-label">No. of certification if any (NPTEL/ Course Era ....) </label>
                <input type="text" class="form-control" id="certification" required></input>
              </div>
            <div class="col-6 mb-3">
                <label class="form-label">Details of your contribution to the Institution </label>
                <input type="text" class="form-control" id="contribution" required/>
              </div>
              <div class="text-center p-3 mt-3">
                  <button class="btn btn-lg btn-primary" onClick={this.getscore}>
                      Score
                  </button>
              </div>
    </div>
          </div>
      )     
  }
}