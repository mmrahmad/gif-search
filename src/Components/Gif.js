import React, { Component } from 'react';
import ImagePlaceHolder from './ImagePlaceHolder'

export default class Gif extends Component{
  state={
    loaded: false
  }
  onLoadHandeler = () => {
    this.setState({
      loaded: true
    })
  }
  render(){
    const {url} = this.props;
    const {loaded} = this.state;
    return(
      <li className="gif-wrap">
        {!loaded && <ImagePlaceHolder /> }
        <img src={url} onLoad={this.onLoadHandeler} alt=""/>
      </li>
    )
  }
}