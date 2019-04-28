import React, { Component } from 'react';
import CarousePics from './Images';
import { CarouselData } from '../../data';



export default class Carousel extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentIndex: 0,
      images: [],
      currentImage: ''
    }
  }
  componentDidMount(){
    this.setState(state => {
      const curr = CarousePics[state.currentIndex];
      return {
        images: CarousePics,
        currentImage: curr
      }
    })
  }

  leftClick = () => {
    if(this.state.currentIndex > 0) {
    this.setState({
      currentIndex: this.state.currentIndex-1,
      currentImage: this.state.images[this.state.currentIndex-1]
    })
    }
    else if (this.state.currentIndex === 0) {
      this.setState({
        currentIndex: this.state.images.length,
        currentImage: this.state.images[this.state.images.length-1]
      })
    }
    else {
      this.setState({
        currentIndex: 0,
        currentImage: this.state.images[0]
      })
    }
  }

  rightClick = () => {
    if(this.state.currentIndex < this.state.images.length - 1) {
    this.setState({
      currentIndex: this.state.currentIndex+1,
      currentImage: this.state.images[this.state.currentIndex+1]
    })
    }
    else if (this.state.currentIndex === this.state.images.length-1) {
      this.setState({
        currentIndex: 0,
        currentImage: this.state.images[0]
      })
    }
    else {
      this.setState({
        currentIndex: 0,
        currentImage: this.state.images[0]
      })
    }

  }

  selectedImage = () => {
    return <img src={this.state.currentImage} style={{display: 'block'}} alt='categorypic' />
  }

  render(){
    return (
      <div className="carousel">
          {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}