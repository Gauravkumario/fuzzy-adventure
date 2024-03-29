import React from "react";
import { BsStarFill } from "react-icons/bs";
import Rating from "../../assets/images/rating.png";

const Reviews = () => {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ];
  return (
    <div className="review-container">
      <div>
        <div className="host-review-transaction-section">
          <span className="host-review-header">Your reviews </span>
          <span>
            Last <span className="income-days">30 days</span>
          </span>
        </div>
        <img className="rating" src={Rating} alt="rating-graph" />
        <div className="host-review-transaction-section">
          <span className="host-review-review">Reviews (2) </span>
        </div>
        <div className="review-table">
          {reviewsData.map((review) => (
            <div key={review.id}>
              <div className="review">
                {[...Array(review.rating)].map((_, i) => (
                  <BsStarFill className="review-star" key={i} />
                ))}
                <div className="info">
                  <p className="name">{review.name} </p>
                  <p className="review-date">{review.date}</p>
                </div>
                <p className="review-text">{review.text}</p>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
