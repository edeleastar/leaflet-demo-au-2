import * as L from "leaflet";

export class LeafletMap {
  map: L.Map;

  constructor() {
    console.log("create LeafletMap");
  }

  async afterAttach() {
    let el = document.getElementById("mapid");
    console.log("LeaftletMap", el);

    this.map = L.map("mapid").setView([0, 0], 2);

    L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
    }).addTo(this.map);
  }
}
