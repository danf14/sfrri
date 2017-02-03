/* global google */
import {default as React, Component,} from "react";

import {withGoogleMap, GoogleMap, InfoWindow, Marker,} from "react-google-maps/lib";

import mapStyle from "./mapStyle.json";
import Progress from './Progress';

/*
 * Sample From: https://developers.google.com/maps/documentation/javascript/examples/map-simple
 */
const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={1}
    defaultCenter={{ lat: 41, lng: 12 }}
    defaultOptions={{ zoomControl: false, mapTypeControl: false, streetViewControl: false, overviewMapControl: false, styles: [{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#3d6fb4"}]},{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"color":"#cccccc"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.airport","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"transit.station.airport","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}] }}
  >
  	{props.markers.map((marker, index) => (
      <Marker
        key={index}
        position={marker.position}
        onClick={() => props.onMarkerClick(marker)}
        icon={'assets/img/SFRRIMApMarker.png'}
      >
        {/*
          Show info window only if the 'showInfo' key of the marker is true.
          That is, when the Marker pin has been clicked and 'onCloseClick' has been
          Successfully fired.
        */}
        {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <div>{marker.infoContent}</div>
          </InfoWindow>
        )}
      </Marker>
    ))}
  </GoogleMap>
));

/*
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class SimpleMapExample extends Component {

state = {

    // array of objects of markers
    markers: [
      {
        position: new google.maps.LatLng(19.973348786110602, -69.609375),
        showInfo: false,
        infoContent: (
          <div style={{fontWeight:'400'}}>
          	<a href="http://sfrbm.org/" target="_blank">
          		<img style={{width:'90px',float:'left',marginRight:'10px'}} src="assets/img/societyLogos/SFRBM-logo.png" />
          	</a>
          	<div>
          		Society for Redox Biology and Medicine<br />
          		<a style={{color:'#447ac7',fontWeight:'500'}} href="http://sfrbm.org/" target="_blank">sfrbm.org</a>
          	</div>
          </div>
        ),
      },
      {
        position: new google.maps.LatLng(-8.466939, 33.574219),
        showInfo: false,
        infoContent: (
          <div style={{fontWeight:'400'}}>
          	<a href="http://vcilt.uom.ac.mu/sfrr/" target="_blank">
          		<img style={{width:'90px',float:'left',marginRight:'10px'}} src="assets/img/societyLogos/SFRR-Africa-logo.png" />
          	</a>
          	<div>
	          	Society for Free Radical Research Africa<br />
	          	<a style={{color:'#447ac7',fontWeight:'500'}} href="http://vcilt.uom.ac.mu/sfrr/" target="_blank">vcilt.uom.ac.mu/sfrr/</a>
	          </div>
          </div>
        ),
      },
      {
        position: new google.maps.LatLng(19.973348786110602, 133.59375),
        showInfo: false,
        infoContent: (
          <div style={{fontWeight:'400'}}>
          	<a href="http://sfrrj.umin.jp/asia/" target="_blank">
          		<img style={{width:'90px',float:'left',marginRight:'10px'}} src="assets/img/societyLogos/SFRR-Asia-logo.png" />
          	</a>
          	<div>
	          	Society for Free Radical Research Asia<br />
	          	<a style={{color:'#447ac7',fontWeight:'500'}} href="http://sfrrj.umin.jp/asia/" target="_blank">sfrrj.umin.jp/asia</a>
	          </div>
          </div>
        ),
      },
      {
        position: new google.maps.LatLng(-26.431228064506424, 134.296875),
        showInfo: false,
        infoContent: (
          <div style={{fontWeight:'400'}}>
          	<a href="http://sfrra.org" target="_blank">
          		<img style={{width:'90px',float:'left',marginRight:'10px'}} src="assets/img/societyLogos/SFRR-Australasia-logo.png" />
          	</a>
          	<div>
	          	Society for Free Radical Research Australasia<br />
	          	<a style={{color:'#447ac7',fontWeight:'500'}} href="http://sfrra.org" target="_blank">sfrra.org</a>
	          </div>
          </div>
        ),
      },
      {
        position: new google.maps.LatLng(39.90973623453719, 18.984375),
        showInfo: false,
        infoContent: (
          <div style={{fontWeight:'400'}}>
          	<a href="http://sfrr-europe.org" target="_blank">
          		<img style={{width:'90px',float:'left',marginRight:'10px'}} src="assets/img/societyLogos/SFRR-Europe-logo.png" />
          	</a>
          	<div>
	          	Society for Free Radical Research Europe<br />
	          	<a style={{color:'#447ac7',fontWeight:'500'}} href="http://sfrr-europe.org" target="_blank">sfrr-europe.org</a>
	          </div>
          </div>
        ),
      },
    ],
  };

  handleMarkerClick = this.handleMarkerClick.bind(this);
  handleMarkerClose = this.handleMarkerClose.bind(this);

  // Toggle to 'true' to show InfoWindow and re-renders component
  handleMarkerClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
          };
        }
        return marker;
      }),
    });
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
          };
        }
        return marker;
      }),
    });
  }

  render() {
    return (
      <div>
        {/*<Progress value={this.state.completed} />*/}
        <SimpleMapExampleGoogleMap
          containerElement={
            <div style={{ width: '513px', height: '350px', position:'relative' }} />
          }
          mapElement={
            <div className="googleMap" style={{ width: '513px', height: '350px' }} />
          }
          markers={this.state.markers}
	        onMarkerClick={this.handleMarkerClick}
	        onMarkerClose={this.handleMarkerClose}
        />
      </div>
    );
  }
}

module.exports = SimpleMapExample;