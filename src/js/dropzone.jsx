import React from 'react'

export default class PreviewZone extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ImageList data={this.props.data} />
    )
  }
}

export class ImageList extends React.Component {
  render() {
    var imageNodes = this.props.data.map((image)=> {
      return(<Image src={image.src}>{image.title}</Image>)
    })
    return(
      <div className='imageList'>
        {imageNodes}
      </div>
    )
  }
}

export class Image extends React.Component {
  render() {
    return(
      <img src={this.props.src} title={this.props.title} />
    )
  }
}
