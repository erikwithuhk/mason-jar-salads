import React from 'react';

const recipeCard = ({ name, userID }) => {
  return (
    <article className="recipes__recipe-card">
      <a href="#">
        <div className="recipes__recipe-card__image" style={{ backgroundImage: 'url(\'https://media1.popsugar-assets.com/files/thumbor/JGKtKFMeJL66e9S2fjQpLNR5X1w/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/12/12/730/n/1922729/c5008f3d8961ebbb_10843733_894977147188435_1798758311_n/i/5-Ingredient-Salad.jpg\')' }} />
        <div className="recipes__recipe-card__name-and-user">
          <h4 className="recipe-title">{name}</h4>
          <p className="username">erikwithuhk</p>
        </div>
      </a>
    </article>
  );
};

export default recipeCard;
