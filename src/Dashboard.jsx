import React, { useEffect, useState } from 'react';
import './Dashboard.css'

export default function Dashboard() {
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");
  const [result4, setResult4] = useState("");
  const [result5, setResult5] = useState("");
  const [afficherDetails, setAfficherDetails] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {

    const fetchCitation = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setResult1(data.slip.advice);
      } catch (error) {
        console.error("Erreur lors de la récupération des données pour data1", error);
      }
    };
    const fetchBlague = async () => {
      try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        setResult2(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données pour data1", error);
      }
    };
    const fetchHistoires = async () => {
      try {
        const response = await fetch('https://history.muffinlabs.com/date');
        const data = await response.json();
        setResult3(data.data.Events);
      } catch (error) {
        console.error("Erreur lors de la récupération des données pour data1", error);
      }
    };
    const fetchMocktail = async () => {
      try {
        const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic');
        const data = await response.json();
        const randomNum = Math.floor(Math.random() * (data.drinks.length + 1));
        setResult4(data.drinks[randomNum]);
      } catch (error) {
        console.error("Erreur lors de la récupération des données pour data1", error);
      }
    };
    const fetchRecette = async () => {
      try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
        const data = await response.json();
        setResult5(data.meals[0]);
      } catch (error) {
        console.error("Erreur lors de la récupération des données pour data1", error);
      }
    };
    fetchCitation();
    fetchBlague();
    fetchHistoires();
    fetchMocktail();
    fetchRecette();
    const dateInterval = setInterval(() => setCurrentDateTime(new Date()), 60000);
    return () => clearInterval(dateInterval);
  }, []);

  const toggleAfficherDetails = () => setAfficherDetails(!afficherDetails);

  const formattedDate = currentDateTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const formattedTime = currentDateTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

  return (
    <div id=''>
      <div id='divDateHeure'>{formattedDate} - {formattedTime}</div>
      <div id="contenurApiInutile">
        <div className='divData'>
          <h2 className='titleDivData'>Citation du jour :</h2>
          {result1 ? (
            <p>{result1}</p>
          ) : (
            <p>Chargement...</p>
          )}
        </div>
        <div className='divData'>
        <h2 className='titleDivData'>Blague du jour :</h2>
          {result2 ? (
            <p>
              {result2.setup}<br/>{result2.punchline}
            </p>
          ) : (
            <p>Chargement...</p>
          )}
        </div>
        <div className='divData'>
        <h2 className='titleDivData'>Evenement du jour :</h2>
          {result3 ? (
            <ul>
              <li dangerouslySetInnerHTML={{ __html: result3[0].html }}/>
              <li dangerouslySetInnerHTML={{ __html: result3[1].html }}/>
              <li dangerouslySetInnerHTML={{ __html: result3[2].html }}/>
            </ul>
          ) : (
            <p>Chargement...</p>
          )}
        </div>
        <div className='divData'>
        <h2 className='titleDivData'>Mocktail du jour :</h2>
          {result4 ? (
            <div>
              <p>{result4.strDrink}</p>
              <img src={result4.strDrinkThumb} id='imgMocktail' />
            </div>
          ) : (
            <p>Chargement...</p>
          )}
        </div>
        <div className='divData'>
        <h2 className='titleDivData'>Recette du jour :</h2>
          {result5 ? (
            <div>
              <h4>{result5.strMeal}</h4>
              <button onClick={toggleAfficherDetails}>
                  {afficherDetails ? "Masquer les détails" : "Afficher les détails"}
              </button>
              
              {afficherDetails ? (
                <dialog id='dialogRecette' open={afficherDetails}>
                  <p>{result5.strInstructions}</p>
                </dialog>
              ): (
                <p></p>
              )}
            </div>
          ) : (
            <p>Chargement...</p>
          )}
        </div>
      </div>
    </div>
  )
}

