import React, { Component } from 'react';
import { Link } from 'react-router';
import firebase from '../../firebase.config.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userLoggedIn: false,
    };
    this.signOut = this.signOut.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      firebase.auth()
              .onAuthStateChanged((user) => {
                this.setState({
                  userLoggedIn: (user),
                });
              });
    }, 200);
  }
  signOut() {
    firebase.auth()
            .signOut()
            .then(() => {
              console.log('user signed out');
            });
  }
  render() {
    return (
      <div>
        <header>
          <nav className="top-nav">
            <h1 className="top-nav__brand">Mason Jar Salads</h1>
            <nav className="top-nav__sub-nav">
              <Link to="/welcome" onClick={this.signOut}>Sign out</Link>
            </nav>
          </nav>
        </header>
      {/* <main>
        <section class="my-recipes clearfix">
          <article class="my-recipes__recipe-card">
            <a href="#">
              <div class="my-recipes__recipe-card__image" style="background-image: url('https://media1.popsugar-assets.com/files/thumbor/JGKtKFMeJL66e9S2fjQpLNR5X1w/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/12/12/730/n/1922729/c5008f3d8961ebbb_10843733_894977147188435_1798758311_n/i/5-Ingredient-Salad.jpg');"></div>
              <div class="my-recipes__recipe-card__name-and-user">
                <h4 class="recipe-title">Chicken and mozzarella salad</h4>
                <p class="username">erikwithuhk</p>
              </div>
            </a>
          </article>
          <article class="my-recipes__recipe-card">
            <a href="#">
              <div class="my-recipes__recipe-card__image" style="background-image: url('https://media1.popsugar-assets.com/files/thumbor/JGKtKFMeJL66e9S2fjQpLNR5X1w/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/12/12/730/n/1922729/c5008f3d8961ebbb_10843733_894977147188435_1798758311_n/i/5-Ingredient-Salad.jpg');"></div>
              <div class="my-recipes__recipe-card__name-and-user">
                <h4 class="recipe-title">Chicken and mozzarella salad</h4>
                <p class="username">erikwithuhk</p>
              </div>
            </a>
          </article>
          <article class="my-recipes__recipe-card">
            <a href="#">
              <div class="my-recipes__recipe-card__image" style="background-image: url('https://media1.popsugar-assets.com/files/thumbor/JGKtKFMeJL66e9S2fjQpLNR5X1w/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/12/12/730/n/1922729/c5008f3d8961ebbb_10843733_894977147188435_1798758311_n/i/5-Ingredient-Salad.jpg');"></div>
              <div class="my-recipes__recipe-card__name-and-user">
                <h4 class="recipe-title">Chicken and mozzarella salad</h4>
                <p class="username">erikwithuhk</p>
              </div>
            </a>
          </article>
          <article class="my-recipes__recipe-card">
            <a href="#">
              <div class="my-recipes__recipe-card__image" style="background-image: url('https://media1.popsugar-assets.com/files/thumbor/JGKtKFMeJL66e9S2fjQpLNR5X1w/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/12/12/730/n/1922729/c5008f3d8961ebbb_10843733_894977147188435_1798758311_n/i/5-Ingredient-Salad.jpg');"></div>
              <div class="my-recipes__recipe-card__name-and-user">
                <h4 class="recipe-title">Chicken and mozzarella salad</h4>
                <p class="username">erikwithuhk</p>
              </div>
            </a>
          </article>
          <article class="my-recipes__recipe-card">
            <a href="#">
              <div class="my-recipes__recipe-card__image" style="background-image: url('https://media1.popsugar-assets.com/files/thumbor/JGKtKFMeJL66e9S2fjQpLNR5X1w/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/12/12/730/n/1922729/c5008f3d8961ebbb_10843733_894977147188435_1798758311_n/i/5-Ingredient-Salad.jpg');"></div>
              <div class="my-recipes__recipe-card__name-and-user">
                <h4 class="recipe-title">Chicken and mozzarella salad</h4>
                <p class="username">erikwithuhk</p>
              </div>
            </a>
          </article>
          <article class="my-recipes__recipe-card">
            <a href="#">
              <div class="my-recipes__recipe-card__image" style="background-image: url('https://media1.popsugar-assets.com/files/thumbor/JGKtKFMeJL66e9S2fjQpLNR5X1w/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/12/12/730/n/1922729/c5008f3d8961ebbb_10843733_894977147188435_1798758311_n/i/5-Ingredient-Salad.jpg');"></div>
              <div class="my-recipes__recipe-card__name-and-user">
                <h4 class="recipe-title">Chicken and mozzarella salad</h4>
                <p class="username">erikwithuhk</p>
              </div>
            </a>
          </article>
          <article class="my-recipes__recipe-card">
            <a href="#">
              <div class="my-recipes__recipe-card__image" style="background-image: url('https://media1.popsugar-assets.com/files/thumbor/JGKtKFMeJL66e9S2fjQpLNR5X1w/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/12/12/730/n/1922729/c5008f3d8961ebbb_10843733_894977147188435_1798758311_n/i/5-Ingredient-Salad.jpg');"></div>
              <div class="my-recipes__recipe-card__name-and-user">
                <h4 class="recipe-title">Chicken and mozzarella salad</h4>
                <p class="username">erikwithuhk</p>
              </div>
            </a>
          </article>
          <article class="my-recipes__recipe-card">
            <a href="#">
              <div class="my-recipes__recipe-card__image" style="background-image: url('https://media1.popsugar-assets.com/files/thumbor/JGKtKFMeJL66e9S2fjQpLNR5X1w/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/12/12/730/n/1922729/c5008f3d8961ebbb_10843733_894977147188435_1798758311_n/i/5-Ingredient-Salad.jpg');"></div>
              <div class="my-recipes__recipe-card__name-and-user">
                <h4 class="recipe-title">Chicken and mozzarella salad</h4>
                <p class="username">erikwithuhk</p>
              </div>
            </a>
          </article>
        </section>
      </main> */}
      </div>
    );
  }
}

export default App;
