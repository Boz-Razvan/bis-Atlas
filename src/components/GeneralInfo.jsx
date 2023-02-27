import React from "react";
import './styles/GeneralInfo.css'

function GeneralInfo(props) {
  const { selectedCounty } = props;

  let countyInfo;

  switch (selectedCounty) {
    case "Alba":
      countyInfo = (
        <div className="countyInfo">
 &emsp;Județul Alba are peste 340.000 de locuitori. Acesta se află pe locul 16 la nivel național ca și nivel al PIB-ului total, arată datele de la Comisia Națională de Prognoză. Economia acestuia se bazează în principal doar pe câteva companii.
          <br/> &emsp;Cea mai mare investiţie din ultimii ani din judeţul Alba a fost cea a gigantului din industria auto Daimler, care a investit peste 300 mil. euro (peste 1,3 mld. lei) într-o fabrică la Sebeş. Unitatea Star Assembly este responsabilă de producţia transmisiilor 9G-Tronic, cutiile de viteze automate cu nouă trepte care echipează autoturisme Mercedes-Benz.
          După această investiție, Alba a intrat din anul 2017 în topul celor mai mari zece exportatori, dar a plusat și la nivelul întregului buisiness având în vedere că în 2016 cifra de afaceri la nivel de județ se se ridica la circa 16,7 miliarde de lei. Estimările Ziarului financiar arată că cifra de afaceri a  tuturor celor 10.000 plus de companii din Alba a sărit de 20 de miliarde.
      </div>
      );
      break;
    case "Arad":
      countyInfo = (
        <div className="countyInfo">
        <p>&emsp;Din punct de vedere economic, județul Arad reprezintă una din cele mai dezvoltate și mai bogate zone ale României. Datorită apropierii sale de graniță, județul atrage un număr mare de investitori străini.
        <br/>&emsp; Aradul este un județ dinamic, cu o forță de muncă bine calificată şi diversificată profesional. Este un județ care a demonstrat forță administrativă, atrăgând de-a lungul anilor fonduri europene în valoare de un miliard de euro, prin companiile private și administrația locală. Administrația județului Arad a proiectat dezvoltarea județului pe folosirea fondurilor europene.
        <br/>&emsp;Prin poziționarea sa strategică, Aradul este un punct nodal de transport rutier, feroviar şi aerian, situat pe culoarul IV paneuropean, în centrul unei regiuni cu peste 1,5 milioane de locuitori. O regiune care dispune de trei aeroporturi internaționale, de o autostradă conectată la rețeaua europeană de autostrăzi, de unul dintre cele mai importante parcuri logistice privind căile ferate, parte a Europei. 
        <br/>&emsp; Forța şi dimensiunea industriei arădene, oferită de companiile multinaționale, fac ca fiecare autoturism care rulează în Europa să aibă în componența sa cel puțin o piesă sau un cablu, „made in Arad”! Prin toate aceste oportunități, Județul Arad este interesant şi atractiv pentru investitori.
        </p>
        </div>
      );
      break;
  }

  return (
    <div className="GeneralPanel">
      <h1>{selectedCounty}</h1>
      <p>{countyInfo}</p>
    </div>
  );
}

export default GeneralInfo;
