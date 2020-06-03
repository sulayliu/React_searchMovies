import React from 'react';
import Header from './Header';
import Movie from './Movie';

class App extends React.Component {
  state = {
    movieList: [],
    heartList: [],
  };

  searchMovies = (value) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=5758c30522d298a69bc6c6c5d464365c&query=${value}&page=1`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({movieList: data.results})
      })
  }

  // Toggle the heart when click on the heart icon.
  toggleHeart = (id) => {
    if (!this.state.heartList.includes(id)) {
      this.setState(prevSate =>({heartList: [...prevSate.heartList, id]}))
    } else {
      this.setState(prevSate =>({heartList: prevSate.heartList.filter((ele) => ele !== id)}))
    }
  }

  render = () => {
    return (
      <> 
        <Header searchMovies={this.searchMovies}/>
        {this.state.movieList.length > 0 && 
          (<div className="titleList">
            <div className="title">
              <h1>Movies</h1>
              <div className="titles-wrapper">
              {this.state.movieList.map(movie => (
                <Movie key={movie.id} 
                  movie={movie} 
                  heartList={this.state.heartList}
                  toggleHeart={this.toggleHeart}/>
                ))}
              </div>
            </div>
          </div>
        )}
        
      </>
    );
  }
}

export default App;
