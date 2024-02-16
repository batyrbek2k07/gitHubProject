import React from "react";
import "./Section.css";
import img2 from "../../img/2.png";

const BooksAll = () => {
  return (
    <section id="books">
      <div className="container">
        <div className="booksAll">
          <div className="booksAll-main">
            <h3>Books</h3>
            <h6>View all</h6>
          </div>
          <div className="booksAll-blocks">
            <div className="booksAll-block">
              <img src={img2} alt="" />
              <h4>
                The Climate Book: <br /> The Facts and the <br /> Solutions
              </h4>
              <h5>by Greta Thunberg</h5>
              
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksAll;
