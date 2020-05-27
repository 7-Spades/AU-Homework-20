import React from 'react'
import axios from 'axios'
import Results from './searchCard'

class Searchbar extends React.Component{
  state = {
    bookInfo: {
      searcher: '',
      title: '',
      subtitle: '',
      author: '',
      description: '',
      image: '',
      link: ''
    }
  }

  inputHandler = (event) => {

    this.setState({
      searcher: event.target.value
    })
  }

  submitHandler= (event) => {
    event.preventDefault();
    let apikey= 'AIzaSyCJvBEYRG0k6yjCp3U7dJNpFsFDmEbaCSc'
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.bookInfo.searcher}key=${apikey}`)
    .then(res => {
      console.log(res.data)
      let bookData = res.data.items
      let i
      this.setState({
      title: bookData[i].volumeInfo.title,
      subtitle: bookData[i].volumeInfo.subtitle,
      author:bookData[i].volumeInfo.authors[0],
      description: bookData[i].volumeInfo.description,
      image: bookData[i].volumeInfo.imageLinks.thumbnail,
      link: bookData[i].volumeInfo.canonicalVolumeLink
    })})
    .catch(err => {console.log(err)})
  }

  render(){
    return(
      <div>
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
    <Results bookInfo = {this.state.bookInfo} />
    </div>
    )
  }
}

export default Searchbar