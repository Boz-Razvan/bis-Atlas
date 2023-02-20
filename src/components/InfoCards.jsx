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
    transport: 17.66,
    cifraAfaceri:["Star Assembly SRL", "Str. AUGUSTIN BENA, nr. 106", "7,1 Miliarde Lei (1,6 Miliarde Euro)"],
    numarAngajati:["Boch Automotive SRL", "Str. AUREL VLAICU 2, Blaj, Judetul Alba", "3040 Angajati"],
    profit:["Star Assembly SRL", "Str. AUGUSTIN BENA, nr. 106", "7,1 Milioane Lei (74,1 Milioane Euro)"],
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Agricultură, Silvicultură și Pescuit</h1>
        <br />
        <br />
        <p>{countyInfo.agriculture}%</p>
        <progress value={countyInfo.agriculture} max="100"></progress>
        <br />
        <br />
        <h1>Hoteluri și Restaurante</h1>
        <br />
        <br />
        <p>{countyInfo.hoteluri}%</p>
        <progress value={countyInfo.hoteluri} max="100"></progress>
        <br />
        <br />
        <h1>Informații și Comunicații</h1>
        <br />
        <br />
        <p>{countyInfo.informatii}%</p>
        <progress value={countyInfo.informatii} max="100"></progress>
        <br />
        <br />
        <h1>Tranzacții Imobiliare</h1>
        <br />
        <br />
        <p>{countyInfo.imobiliare}%</p>
        <progress value={countyInfo.imobiliare} max="100"></progress>
        <br />
        <br />
        <h1>Activități de Servicii Administrative și Activități de Servicii de Suport</h1>
        <br />
        <br />
        <p>{countyInfo.servicii}%</p>
        <progress value={countyInfo.servicii} max="100"></progress>
        <br />
        <br />
        <h1>Transport și Depozitare</h1>
        <br />
        <br />
        <p>{countyInfo.transport}%</p>
        <progress value={countyInfo.transport} max="100"></progress>
        <br />
        <br />
      </div>




      <div className="card2">
        <h1>{countyInfo.name}</h1>
        <br />
        <h1>Prima firma dupa cifra de afaceri</h1>
        <br />
        <h3>Nume:</h3>
        <h2>{countyInfo.cifraAfaceri[0]}</h2>
        <h3>Locatie:</h3>
        <h2>{countyInfo.cifraAfaceri[1]}</h2>
        <h3>Cifra de afaceri:</h3>
        <h2>{countyInfo.cifraAfaceri[2]}</h2>
        <br />
        <h1>Prima firma dupa numarul de angajati</h1>
        <br />
        <h3>Nume:</h3>
        <h2>{countyInfo.numarAngajati[0]}</h2>
        <h3>Locatie:</h3>
        <h2>{countyInfo.numarAngajati[1]}</h2>
        <h3>Numar angajati:</h3>
        <h2>{countyInfo.numarAngajati[2]}</h2>
        <br />
        <h1>Prima firma dupa cifra de afaceri</h1>
        <br />
        <h3>Nume:</h3>
        <h2>{countyInfo.cifraAfaceri[0]}</h2>
        <h3>Locatie:</h3>
        <h2>{countyInfo.cifraAfaceri[1]}</h2>
        <h3>Profit:</h3>
        <h2>{countyInfo.cifraAfaceri[2]}</h2>
        <br />
      </div>
    </div>
  );
}

export default InfoCards;
