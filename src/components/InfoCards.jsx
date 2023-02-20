import React from "react";
import "./styles/InfoCards.css";

const countyData = [
  {
    name: "Alba",
    agriculture: 50.52,
    hoteluri: 12.83,
    informatii: 7.51,
    imobiliare: 2.87,
    servicii: 8.60,
    transport: 17.66
  },
  {
    name: "Arad",
    agriculture: 35.2,
    hoteluri: 15.9,
    informatii: 10.1,
    imobiliare: 5.2,
    servicii: 8.1,
    transport: 25.5
  },
];

function InfoCards({ selectedCounty }) {
    const countyInfo = countyData.find((county) => county.name === selectedCounty);
  
    if (!countyInfo) {
      return <div>No data available for selected county.</div>;
    }
  
    return (
      <div className="container">
      <div className="card1">
        <h1>{countyInfo.name}</h1>
        <br />
        <h1>Agricultură, Silvicultură și Pescuit</h1>
        <br />
        <p>{countyInfo.agriculture}%</p>
        <progress value={countyInfo.agriculture} max="100"></progress>
        <br />
        <h1>Hoteluri și Restaurante</h1>
        <br />
        <p>{countyInfo.hoteluri}%</p>
        <progress value={countyInfo.hoteluri} max="100"></progress>
        <br />
        <h1>Informații și Comunicații</h1>
        <br />
        <p>{countyInfo.informatii}%</p>
        <progress value={countyInfo.informatii} max="100"></progress>
        <br />
        <h1>Tranzacții Imobiliare</h1>
        <br />
        <p>{countyInfo.imobiliare}%</p>
        <progress value={countyInfo.imobiliare} max="100"></progress>
        <br />
        <h1>Activități de Servicii Administrative și Activități de Servicii de Suport</h1>
        <br />
        <p>{countyInfo.servicii}%</p>
        <progress value={countyInfo.servicii} max="100"></progress>
        <br />
        <h1>Transport și Depozitare</h1>
        <br />
        <p>{countyInfo.transport}%</p>
        <progress value={countyInfo.transport} max="100"></progress>
        <br />
      </div>
      
      <div className="card2">
        <h1>{countyInfo.name}</h1>
        <br />
        <h1>Agricultură, Silvicultură și Pescuit</h1>
        <br />
        <p>{countyInfo.agriculture}%</p>
        <progress value={countyInfo.agriculture} max="100"></progress>
        <br />
        <h1>Hoteluri și Restaurante</h1>
        <br />
        <p>{countyInfo.hoteluri}%</p>
        <progress value={countyInfo.hoteluri} max="100"></progress>
        <br />
        <h1>Informații și Comunicații</h1>
        <br />
        <p>{countyInfo.informatii}%</p>
        <progress value={countyInfo.informatii} max="100"></progress>
        <br />
        <h1>Tranzacții Imobiliare</h1>
        <br />
        <p>{countyInfo.imobiliare}%</p>
        <progress value={countyInfo.imobiliare} max="100"></progress>
        <br />
        <h1>Activități de Servicii Administrative și Activități de Servicii de Suport</h1>
        <br />
        <p>{countyInfo.servicii}%</p>
        <progress value={countyInfo.servicii} max="100"></progress>
        <br />
        <h1>Transport și Depozitare</h1>
        <br />
        <p>{countyInfo.transport}%</p>
        <progress value={countyInfo.transport} max="100"></progress>
        <br />
      </div>
    </div>
  );
}

export default InfoCards;
