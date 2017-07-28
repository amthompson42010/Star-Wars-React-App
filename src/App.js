import React, { Component } from 'react'
import Header from './Header';
import Nav from './Nav';
import Cities from './Cities';
import AddCity from './AddCity';
import City from './City';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


class App extends Component {
  
  // state = { 
  //   values: [],
  // }

  // componentDidMount() {
  //   fetch('https://swapi.co/api/people/')
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({ values: json.results})
  //     })
  //     .catch(() => console.log('error....'));
  // }
  // onChange = (event) => {
  //   console.log('target: ', event.target.value)
  //   console.log('value: ', this.emailAddressRef.value)
  // }

  render() {
    
    return (
      <Router>
        <div style={styles.container}>
          <Header />
          <div style={styles.mainContent}>
            <Nav />
            <div>
              <Route
                path="/city/:cityName"
                component={City}
              />
              <Route
                exact
                path='/'
                component={Cities}
              />
              <Route
                path='/addcity'
                component={AddCity}
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }

}

const styles = {
  mainContent: {
    display: 'flex',
    height: '100%'
  },
  container: {
    height: '100vh'
  }
}

export default App
