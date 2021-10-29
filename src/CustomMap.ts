export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.querySelector(`#${divId}`), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
