import React from "react";
import "./ComBlock.css";
import img2 from "../../img/2.png";
import wor from "../../img/the.png";
import how from "../../img/How.png";
import rick from "../../img/rick.png";
import box from "../../img/box.png";
import book1 from "../../img/book-1.png";
import book2 from "../../img/book-2.png";
import book3 from "../../img/book-3.png";
import book4 from "../../img/book-4.png";
import book5 from "../../img/book-5.png";
import { Link } from "react-router-dom";

const BooksFilter = () => {
  return (
    <section id="booksFilter">
      <div className="container">
        <div className="booksFilter">
          <h1>All Books</h1>
          <p>Here you can find all the books you need</p>
          <div className="booksFilter-main">
            <h3>
              <h4>Filter</h4>
              <p>Clear filters</p>
            </h3>
            <div className="booksFilter-block">
              <h3>Sort By</h3>
              <select>
                <option>Popular</option>
                <option>Popular</option>
              </select>
            </div>
          </div>
          <h4 className="booksFilter_h4">Genres</h4>
          <div className="blockFilter-main">
            <div className="booksFilter1">
              <div className="booksFilter1-block">
                <input type="radio" />
                Autographed Books
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Autographed Books
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Sci-Fi
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                For kids
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                For teenagers
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Finance
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Detective
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Romantic
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Psychology
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Self-Improvement
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Educational
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Literature
              </div>
               <div className="booksFilter1-block">
                <input type="radio" />
                Religion
              </div>
            </div>

            <div className="booksFilter2">
              <div className="booksFilter2-block">
                <Link to="/book">
                  <img src={wor} alt="" />
                  <h4>
                    TTHE SUBTLE ART <br /> OF NOT GIVING A F*CK
                  </h4>
                  <h5>by Mark Manson</h5>
                </Link>
              </div>
              <div className="booksFilter2-block">
                <Link to="/book-2">
                  <img src={how} alt="" />
                  <h4>8 RULES OF LOVE</h4>
                  <h5>by Jay Shetty</h5>
                </Link>
              </div>
              <div className="booksFilter2-block">
                <Link to="/book-3">
                  <img src={rick} alt="" />
                  <h4>THE CREATIVE ACT</h4>
                  <h5>
                    by Rick Rubin with Neil <br />
                    Strauss
                  </h5>
                </Link>
              </div>
              <div className="booksFilter2-block">
                <Link to="/thunberg">
                  <img src={box} alt="" />
                  <h4>
                    THE BOY, THE MOLE, <br />
                    THE FOX AND THE HORSE
                  </h4>
                  <h5>by Greta Thunberg</h5>
                </Link>
              </div>
              <div className="booksFilter2-block">
                <Link to="/potter">
                  <img src={book1} alt="" />
                </Link>
              </div>
              <div className="booksFilter2-block">
                <Link to="/hoover">
                  <img src={book2} alt="" />
                  <h4>IT ENDS WITH US</h4>
                  <h5>by Colleen Hoover</h5>
                </Link>
              </div>
              <div className="booksFilter2-block">
                <Link to="/starts">
                  <img src={book3} alt="" />
                </Link>
              </div>

              <div className="booksFilter2-block">
                <Link to="/colleens">
                  <img src={book4} alt="" />
                  <h4>HEART BONES</h4>
                  <h5>by Colleen Hoover</h5>
                </Link>
              </div>
              <div className="booksFilter2-block">
                <Link to="/shoes">
                  <img src={book5} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksFilter;
