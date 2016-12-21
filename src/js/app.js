import 'aframe';
import Extras from 'aframe-extras';
import 'aframe-animation-component';
//import 'babel-polyfill';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Text from './components/Text';
import Sky from './components/Sky';

//const src = require('../../point.jpg');

// Register a single component.
//AFRAME.registerComponent('a-grid', Extras.primitives);
// Register Extra Components
Extras.registerAll();

class VRScene extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {color: 'red'};
    // Register all add ons
  }

  // changeColor() {
  //   const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
  //   this.setState({
  //     color: colors[Math.floor(Math.random() * colors.length)]
  //   });
  // }

// {/*<Camera>*/}
// {/*<a-cursor*/}
// {/*animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"*/}
// {/*>*/}
// {/*</a-cursor>*/}
// {/*</Camera>*/}
//
// {/*Terrain*/}
// {/*<a-grid></a-grid>*/}
//
// {/*<Sky src="url(https://rawgit.com/aframevr/assets/gh-pages/360-image-gallery-boilerplate/img/sechelt.jpg)"/>*/}
//  {/*<a-assets>*/}
// {/*<a-asset-item id="myModelObj" src="myModel.obj"></a-asset-item>*/}
// {/*<a-asset-item id="myModelMtl" src="myModel.mtl"></a-asset-item>*/}
// {/*</a-assets>*/}
// {/*<a-entity obj-model="obj: #myModelObj; mtl: #myModelMtl"></a-entity>*/}

  render() {
    return (
        <Scene>
          <a-assets>
            <a-asset-item id="myModelObj" src="./assets/models/obj/lab_table/lab_table.obj"></a-asset-item>
            <a-asset-item id="myModelMtl" src="./assets/models/obj/lab_table/lab_table.mtl"></a-asset-item>
          </a-assets>
          <a-entity obj-model="obj: #myModelObj; mtl: #myModelMtl">
          
          </a-entity>
  
          <a-entity camera="userHeight: 1.6" position="100 80 -50" rotation="-20 120 0" look-controls wasd-controls></a-entity>
          
          <a-entity vive-controls="hand: left"></a-entity>
          <a-entity vive-controls="hand: right"></a-entity>
        </Scene>
    );
  }
}

ReactDOM.render(<VRScene/>, document.querySelector('.scene-container'));
