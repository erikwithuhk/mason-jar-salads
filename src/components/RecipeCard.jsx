import React from 'react';
import { Link } from 'react-router';

const recipeCard = ({ id, recipeName, authorName }) => {
  return (
    <article className="recipes__recipe-card">
      <Link to={`/recipes/${id}`}>
        <div className="recipes__recipe-card__image" />
        <div className="recipes__recipe-card__name-and-user">
          <h4 className="recipe-title">{recipeName}</h4>
          <p className="username">{authorName}</p>
        </div>
      </Link>
    </article>
  );
};

export default recipeCard;
