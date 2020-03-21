import React, { PureComponent } from "react";
import Map from "pigeon-maps";
import Overlay from "pigeon-overlay";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      height: `${Math.round(Math.log(Number(text)) / Math.log(50)) * 25}px`,
      width: `${Math.round(Math.log(Number(text)) / Math.log(50)) * 25}px`,
      color: "white",
      background: Number(text) > 500 ? "red" : "green",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      opacity: "70%"
    }}
  >
    {text}
  </div>
);

const providers = {
  osm: (x, y, z) => {
    const s = String.fromCharCode(97 + ((x + y + z) % 3));
    return `https://${s}.tile.openstreetmap.org/${z}/${x}/${y}.png`;
  },
  stamenTerrain: (x, y, z, dpr) => {
    return `https://stamen-tiles.a.ssl.fastly.net/terrain/${z}/${x}/${y}${
      dpr >= 2 ? "@2x" : ""
    }.jpg`;
  },
  stamenToner: (x, y, z, dpr) => {
    return `https://stamen-tiles.a.ssl.fastly.net/toner/${z}/${x}/${y}${
      dpr >= 2 ? "@2x" : ""
    }.png`;
  }
};

class PigeonMaps extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      center: [12.9716, 77.5946],
      zoom: 6,
      provider: "osm",
      metaWheelZoom: false,
      twoFingerDrag: false,
      animate: true,
      animating: false,
      zoomSnap: true,
      mouseEvents: true,
      touchEvents: true,
      minZoom: 1,
      maxZoom: 18,
      dragAnchor: [48.8565, 2.3475]
    };
  }

  handleBoundsChange = ({ center, zoom, bounds, initial }) => {
    if (initial) {
      //  console.log("Got initial bounds: ", bounds);
    }
    this.setState({ center, zoom });
  };

  handleAnimationStart = () => {
    this.setState({ animating: true });
  };

  handleAnimationStop = () => {
    this.setState({ animating: false });
  };

  handleMarkerClick = ({ event, payload, anchor }) => {
    console.log(`Marker #${payload} clicked at: `, anchor);
  };
  render() {
    const {
      center,
      zoom,
      provider,
      animate,
      metaWheelZoom,
      twoFingerDrag,
      zoomSnap,
      mouseEvents,
      touchEvents,
      minZoom,
      maxZoom
    } = this.state;

    return (
      <div
        style={{
          maxWidth: 1200,
          maxHeight: 900,
          margin: "0 auto",
          borderRadius: "5px"
        }}
      >
        <Map
          limitBounds="edge"
          center={center}
          zoom={zoom}
          provider={providers[provider]}
          dprs={[1, 2]}
          onBoundsChanged={this.handleBoundsChange}
          onClick={this.handleClick}
          onAnimationStart={this.handleAnimationStart}
          onAnimationStop={this.handleAnimationStop}
          animate={animate}
          metaWheelZoom={metaWheelZoom}
          twoFingerDrag={twoFingerDrag}
          zoomSnap={zoomSnap}
          mouseEvents={mouseEvents}
          touchEvents={touchEvents}
          minZoom={minZoom}
          maxZoom={maxZoom}
          defaultWidth={600}
          height={600}
          boxClassname="pigeon-filters"
        >
          {this.props.cases.length !== 0 &&
            this.props.cases.locations.map((ele, i) => {
              return (
                <Overlay
                  key={String(i) + ele.province}
                  anchor={[
                    Number(ele.coordinates.lat),
                    Number(ele.coordinates.long)
                  ]}
                  offset={[120, 79]}
                >
                  {ele.latest !== 0 ? (
                    <AnyReactComponent
                      text={String(ele.latest)}
                    ></AnyReactComponent>
                  ) : (
                    <p></p>
                  )}
                </Overlay>
              );
            })}
        </Map>
      </div>
    );
  }
}

export default PigeonMaps;
