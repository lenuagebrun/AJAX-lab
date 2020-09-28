import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import getStarships from './services/sw-api';
import StarshipDetail from './pages/StarshipPage/StarshipPage';

class App extends Component {
  constructor() {
    super()
    this.state = {
      starships: []
    }
  }

  getStarship = (idx) => {
    return this.state.starships[idx];
  }

  async componentDidMount() {
    const starships = await getStarships();
    this.setState({ starships: starships.results });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">STAR WARS STARSHIPS</header>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() =>
              <section className='link-section'>
                {this.state.starships.map(starship =>
                  <Link
                    to={{
                      pathname: '/starships',
                      state: starship
                    }}
                    key={starship.name}
                  ><div className='link'>
                      {starship.name}<br />
                    </div>
                  </Link>
                )}
              </section>
            } />
            <Route path='/starships' render={({ location }) =>
              <StarshipDetail
                location={location}
              />
            } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
