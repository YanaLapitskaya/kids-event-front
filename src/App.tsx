import * as React from 'react';
import Header from './views/partials/Header';
import AboutPage from './views/pages/AboutPage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <AboutPage/>
      </div>
    );
  }
}

export default App;
