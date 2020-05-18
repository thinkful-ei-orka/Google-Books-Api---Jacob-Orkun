import React from 'react';
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'


class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    search : null,
    printType : 'test',
    bookType : null
  }
}


  render() {
  return (
    <main className='App'>
      <Header/>
      <Search state={this.state}/>
      <List/>
    </main>
  )
  }
}

export default App;