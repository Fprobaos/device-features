class Place {
  constructor(id, title, image, address, coords) {
    this.id = id.toString();
    this.title = title;
    this.image = image;
    this.coords = coords;
    this.address = address;
  }
}

export default Place;
