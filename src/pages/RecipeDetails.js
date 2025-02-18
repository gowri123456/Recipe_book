import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipes = [
    { id: 1, title: 'Spaghetti Carbonara', ingredients: 'Pasta, Eggs, Bacon', cuisine: 'Italian', notes: 'Delicious classic recipe' },
    { id: 2, title: 'Chicken Curry', ingredients: 'Chicken, Spices, Onion', cuisine: 'Indian', notes: 'Rich and flavorful' }
  ];

  const recipe = recipes.find(r => r.id === Number(id));

  return (
    <div>
      <h1>{recipe?.title}</h1>
      <p><strong>Ingredients:</strong> {recipe?.ingredients}</p>
      <p><strong>Cuisine:</strong> {recipe?.cuisine}</p>
      <p><strong>Notes:</strong> {recipe?.notes}</p>
    </div>
  );
};

export default RecipeDetails;
