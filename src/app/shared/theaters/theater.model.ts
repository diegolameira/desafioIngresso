export class Theater {
  id: string;
  images: Image[];
  siteURL: string;
  name: string;
  address: string;
  number: string;
  cityId: string;
  cityName: string;
  state: string;
  uf: string;
  neighborhood: string;
  properties: any;
  telephones: string[];
  geolocation: Geolocation;
  deliveryType: string[];
  corporation: string;
  corporationId: string;


  constructor( fields?: any ) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}


interface Image {
  url: string;
  type: string;
}

interface Geolocation {
  lat: number;
  lng: number;
}
