import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import YTSearch from 'youtube-api-search';
// import SearchBar from './components/search_bar';
// import VideoList from './components/video_list';
// import VideoDetail from './components/video_details';
// import ICard from './components/ICard';
// import RCard from './components/RCard';
import IngredientList from './components/ingredient_list'
import RecipeList from './components/recipe_list'

// const API_KEY = 'AIzaSyAjYG1P3x_b7ehNSahfdCMHUoYFHjr_MYk';

// Create a new component. This component sould produce some HTML.
// const permet de déclarer une constante qui ne changera pas dans le temps, comme App ci-dessous.

class App extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { videos: [] };
  //
  //   YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
  //     this.setState({ videos });
  //   });
  // }

  render() {
    return (
      // <div>
      //   <SearchBar />
      //   <VideoDetail />
      //   <VideoList videos={this.state.videos} />
      // </div>
      <div>
        <div className="col-md-8">
          <IngredientList />
        </div>
        <div className="col-md-4">
          <RecipeList />
        </div>
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
