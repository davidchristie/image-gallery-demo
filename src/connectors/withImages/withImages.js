import React, { Component } from 'react'

import getDisplayName from '../../utilities/getDisplayName'

function withImages (WrappedComponent) {
  class WithImages extends Component {
    constructor (props) {
      super(props)
      this.state = {
        images: null
      }
    }

    componentWillMount () {
      const { firebase } = window
      const database = firebase.database()
      database.ref('/images').once('value')
        .then(snapshot => {
          const value = snapshot.val()
          this.setState({
            images: Object.entries(value)
              .map(entry => ({
                key: entry[0],
                value: entry[1]
              }))
          })
        })
    }

    render () {
      const { ...passThroughProps } = this.props
      const { images } = this.state
      const data = {
        loading: images === null
      }
      if (images) {
        data.images = images
      }
      return (
        <WrappedComponent
          {...passThroughProps}
          data={data}
        />
      )
    }
  }
  WithImages.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`
  return WithImages
}

export default withImages
