import React, { Component } from 'react'

import ImageThumbnails from '../ImageThumbnails'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <h1>Image Gallery Demo</h1>
        <ImageThumbnails />
      </div>
    )
  }
}

export default App
