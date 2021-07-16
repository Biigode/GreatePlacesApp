export default class Place {
  id: string;
  title: string;
  imageUrl: string;
  constructor(id: string, title: string, imageUrl: string) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
  }
}
