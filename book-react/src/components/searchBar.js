import React from 'react'

function searchbar(){
    return(
        <div className='container'>
        <div className='row'>
        <div className='col'>
        <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="What book are you looking for?" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" id="submit-button">Search</button>
        </div>
      </div>
    </div>
    </div>
    </div>
    )
}

export default searchbar