import { Component } from '@angular/core';

// import Map = require('esri/map');
// import Graphic = require('esri/graphic');
// import GraphicsLayer = require('esri/layers/GraphicsLayer');
// import AGSPoint = require("esri/geometry/Point");

// import GraphicsLayer from 'esri/layers/GraphicsLayer';

@Component({
    selector: 'my-esri',
    templateUrl: './my-esri.component.html'
})
export class EsriComponent {
    //map: Map;
    //graphic: Graphic;
    //pointsLayer: GraphicsLayer;
    //point: AGSPoint;

    constructor() {
        //this.point = new AGSPoint(null, null, null);
        
       // this.pointsLayer = new GraphicsLayer();
    }
}

// class Point extends AGSPoint {

//     //  constructor(public x: number, public y: number) {
//     //    super(x, y);
//     //  }

//     log() {
//         console.log(this.type, this.x, this.y);
//     }
// }
