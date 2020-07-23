# leaflet-au-2

Illustration of Leaflet map issue in Au 2 - within a component loaded by the new router.

The map displays fine in the my-app component. However, the identical code in routes/home fails.

This is currently commented out:
~~~
export class Home implements IViewModel {
  ...
  map: LeafletMap;

  afterAttach() {
    //this.map = new LeafletMap(this.mapDescriptor);
  }
~~~

But when included, container not found exception thrown from leaflet

~~~
Uncaught (in promise) Error: Map container not found.
    at NewClass._initContainer (entry-bundle.js:39606)
    at NewClass.initialize (entry-bundle.js:38640)
    ...
~~~