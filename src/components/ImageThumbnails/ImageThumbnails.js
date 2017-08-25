import React, { Component } from 'react'

import withImages from '../../connectors/withImages'

class ImageThumbnails extends Component {
  render () {
    const { data } = this.props
    return (
      <div className='ImageThumbnails'>
        <h2>Image Thumbnails</h2>
        {
          data.loading
            ? <div>Loading</div>
            : (
              <div>
                {
                  data.images.map(image => {
                    return (
                      <div key={image.key}>
                        <img
                          src={image.value}
                          width='100%'
                        />
                      </div>
                    )
                  })
                }
              </div>
            )
        }
      </div>
    )
  }
}

export default withImages(ImageThumbnails)
