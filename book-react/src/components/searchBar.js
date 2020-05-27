import React from 'react'
import axios from 'axios'

class Searchbar extends React.Component{
  state = {
    searcher: ''
  }

  inputHandler = (event) => {

    this.setState({
      searcher: event.target.value
    })
  }

  submitHandler= (event) => {
    event.preventDefault();
    let apikey= 'AIzaSyCJvBEYRG0k6yjCp3U7dJNpFsFDmEbaCSc'
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searcher}key=${apikey}`)
    .then(res => {console.log(res.data)})
    .catch(err => {console.log(err)})
  }

  render(){
    return(
        <div className='container'>
        <div className='row'>
        <div className='col'>
        <div class="input-group mb-3">
        <input onChange= {this.inputHandler} value={this.state.searcher} type="text" class="form-control" placeholder="What book are you looking for?" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" onClick={this.submitHandler} type="button" id="submit-button">Search</button>
        </div>
      </div>
    </div>
    </div>
    </div>
    )
  }
}

export default Searchbar