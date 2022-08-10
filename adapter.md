# Adapter

![This is an image](/assets/adapter.jpg)

```mermaid
flowchart LR
  A[Client] -- "get(a)" --> B[Adapter]
  B -- "getLibMethod(a)" --> C[Library]
```

For example, we have a class that works with some maps service to calc shipping price:

```js
interface ILocation {
  lat: number;
  lng: number;
}

interface IMapService {
  getLocation: (address: string) => ILocation;
  getDistance: (from: ILocation, to: ILocation) => number;
}

class ShippingCalculator {
  protected mapService: IMapService;

  constructor(mapService: IMapService) {
    this.mapService = mapService;
  }

  getPrice(from: string, to: string, volumeWeight: number) {
    const startLocation = this.mapService.getLocation(from);
    const finishLocation = this.mapService.getLocation(to);
    const distance = this.mapService.getDistance(startLocation, finishLocation);

    return (distance * volumeWeight) / 100;
  }
}
```
And it worked well, untill we decided to use the new maps service with incompatible interface, for example Google Maps:

```js
type TCoordinates = [number, number];

interface GoogleMapsService {
  coordsByAddress: (address: string) => TCoordinates;
  calcDistance: (from: TCoordinates, to: TCoordinates) => number;
}

class GoogleMaps implements GoogleMapsService {
  coordsByAddress(address: string): TCoordinates {
    return [55.92312, -12.13123];
  }

  calcDistance(from: TCoordinates, to: TCoordinates): number {
    return 378;
  }
}
```
And, as you can see, the `GoogleMaps` class does't implement `IMapService`, so `ShippingCalculator` class doesn't know how to work with `GoogleMaps`. To fix it we need to create a adapter.

```js
class GoogleMapsShippingAdapter implements IMapService {
  protected map: GoogleMapsService;

  constructor() {
    this.map = new GoogleMaps();
  }

  getLocation(address: string) {
    const coords = this.map.coordsByAddress(address);

    return {
      lat: coords[0],
      lng: coords[1]
    };
  }

  getDistance(from: ILocation, to: ILocation) {
    const distance = this.map.calcDistance(
      [from.lat, from.lng],
      [to.lat, to.lng]
    );

    return distance;
  }
}
```
And here we go, we can use the `GoogleMapsShippingAdapter` as maps service for the `ShippingCalculator`

```js
const shipping = new ShippingCalculator(new GoogleMapsShippingAdapter());
```