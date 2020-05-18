import React from 'react';
import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'


class App extends React.Component {
  
  state = {
    data: null
  }

  updateState = (newData) => {
    this.setState({
      data: newData
    })
  }


  render() {
  return (
    <main className='App'>
      <Header/>
      <Search 
        state={this.state}
        onSearch={this.updateState}
      />
      <List data={this.state.data}/>
    </main>
  )
  }
}

export default App;