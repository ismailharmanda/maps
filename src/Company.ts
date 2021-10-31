import faker from "faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }
  markerContent(): string {
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h1>
      <h3>Catchphrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
