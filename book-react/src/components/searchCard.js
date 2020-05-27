import React from 'react'

function results(props){
  
    return(
        <div className='container'>
        <div className='row'>
        <div className='col'>
        <div class="card">
  <div className="card-header">
    Book results
  </div>
  <div className="card-body">
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">{props.bookInfo.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  </div>
</div>
</div>
</div>
</div>
    )
}

export default results