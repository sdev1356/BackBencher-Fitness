import React, { useState } from "react";
import MealList from "./MealList";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './meal.css';
import vid from './180419_Boxing_A1_04.mp4';
function Meal1() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
   fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=c0082a84d8414e3094c91909ac099d23&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
   
    <div className="App">
           <Navbar/>
           <video autoPlay playsInline muted loop className="about-page-hero">
                    <source src={vid} type="video/mp4"/>
                </video>
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
      <Footer/>
    </div>
  );
}
export default Meal1;
