import { IViewModel } from "aurelia";
import { LeafletMap } from "../../services/leaflet-map";

export class Home implements IViewModel {
  title = "A Map in a route";

  mapDescriptor = {
    id: "home-map-id",
    height: 400,
    location: { lat: 53.2734, long: -7.7783203 },
    zoom: 8,
    minZoom: 7,
    activeLayer: "",
  };

  map: LeafletMap;

  afterAttach() {
    //this.map = new LeafletMap(this.mapDescriptor);
  }
}
