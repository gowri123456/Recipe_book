import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetails.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipes = [
    { id: 1, title: 'Spaghetti Carbonara', ingredients: 'Pasta, Eggs, Bacon', cuisine: 'Italian', notes: 'Delicious classic recipe' },
    { id: 2, title: 'Chicken Curry', ingredients: 'Chicken, Spices, Onion', cuisine: 'Indian', notes: 'Rich and flavorful' },
    { id: 3, title: 'Spaghetti Carbonara', ingredients: 'Pasta, Eggs, Bacon', cuisine: 'Italian', notes: 'Delicious classic recipe' },
    { id: 4, title: 'Chicken Curry', ingredients: 'Chicken, Spices, Onion', cuisine: 'Indian', notes: 'Rich and flavorful' },
    { id: 5, title: 'Chicken Curry', ingredients: 'Chicken, Spices, Onion', cuisine: 'Indian', notes: 'Rich and flavorful' }

  ];

  // Display all recipes if no specific recipe is selected
  if (!id) {
    return (
      <div className="recipe-details">
        <h1>All Recipes</h1>
        <div className="recipe-list">
          {recipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <h2>{recipe.title}</h2>
              <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
              <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
              <p><strong>Notes:</strong> {recipe.notes}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Show a specific recipe when id is present
  const recipe = recipes.find(r => r.id === Number(id));

  if (!recipe) {
    return <div><h2>Recipe not found</h2></div>;
  }

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Notes:</strong> {recipe.notes}</p>
    </div>
  );
};

export default RecipeDetails;
