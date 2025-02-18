import React, { useState } from 'react';

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({ title: '', ingredients: '', cuisine: '', notes: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Recipe Added Successfully!');
  };

  return (
    <div>
      <h2>Add a Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={recipe.title} onChange={(e) => setRecipe({ ...recipe, title: e.target.value })} />
        <textarea placeholder="Ingredients" value={recipe.ingredients} onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}></textarea>
        <input type="text" placeholder="Cuisine" value={recipe.cuisine} onChange={(e) => setRecipe({ ...recipe, cuisine: e.target.value })} />
        <textarea placeholder="Preparation Notes" value={recipe.notes} onChange={(e) => setRecipe({ ...recipe, notes: e.target.value })}></textarea>
        <button type="submit">Done</button>
      </form>
    </div>
  );
};

export default AddRecipe;
