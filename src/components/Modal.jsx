// // import React, { useState } from 'react';
// // import './Modal.css';

// // const Modal = ({ show, onClose, children }) => {
// //   if (!show) return null;

// //   // State for bookmark and rating
// //   const [bookmark, setBookMark] = useState(0);
// //   const [rating, setRating] = useState(0);
// //   const token = localStorage.getItem('token');
// //   // Function to handle like button click
// //   const handleBookmark = () => {
// //     fetch('http://localhost:8000/api/bookmarks/', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         Authorization: `Bearer ${token}`,
// //       },
// //       body: JSON.stringify({
// //         article: article, // assuming articleId is the ID of the article you want to bookmark
// //       }),
// //     })
// //       .then((response) => {
// //         if (response.ok) {
// //           return response.json();
// //         }
// //         throw new Error('Failed to bookmark the article.');
// //       })
// //       .then((data) => {
// //         console.log('Bookmark created:', data);
// //         setBookmarkStatus(true); // Set status to bookmarked
// //       })
// //       .catch((error) => {
// //         console.error('Error bookmarking:', error);
// //       });
// //   };

// //   // Function to handle rating click
// //   const handleRating = (newRating) => {
// //     setRating(newRating);
// //   };

// //   return (
// //     <div className="modal-overlay">
// //       <div className="modal-content">
// //         <button className="close-button" onClick={onClose}>X</button>
// //         {children}
// //         <div className="flex items-center gap-4 mt-4">
// //           {/* Bookmark Button with Star Icon */}
// //           <button
// //             onClick={handleBookmark}
// //             className="like-btn px-3 py-2 bg-blue-500 text-white rounded flex items-center"
// //           >
// //             <span className="mr-1">★</span> BookMark
// //           </button>

// //           {/* Rating System */}
// //           <div className="rating flex gap-1">
// //             {[1, 2, 3, 4, 5].map((star) => (
// //               <span
// //                 key={star}
// //                 onClick={() => handleRating(star)}
// //                 className={`cursor-pointer ${rating >= star ? "text-yellow-500" : "text-gray-400"}`}
// //               >
// //                 ★
// //               </span>
// //             ))}
// //           </div>
// //           <span className="text-sm">Rating: {rating}/5</span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Modal;
// // Modal.js
// import React, { useState } from "react";
// import "./Modal.css";

// const Modal = ({ show, onClose, article, children }) => {
//   if (!show) return null;

//   const [bookmark, setBookmark] = useState(0);
//   const [rating, setRating] = useState(0);
//   const token = localStorage.getItem("token");
//   const [inputValue, setInputValue] = useState("");

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };
//   // Function to handle bookmark button click
//   const handleBookmark = () => {
//     fetch("http://localhost:8000/api/bookmarks/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         article: article.id, // Use the passed article's ID for the bookmark request
//       }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Failed to bookmark the article.");
//       })
//       .then((data) => {
//         console.log("Bookmark created:", data);
//         setBookmark(1); // Set bookmark state (you can also use a boolean flag)
//       })
//       .catch((error) => {
//         console.error("Error bookmarking:", error);
//       });
//   };

//   // Function to handle rating click
//   const handleRating = (newRating) => {
//     setRating(newRating);
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <button className="close-button" onClick={onClose}>
//           X
//         </button>
//         {children}
//         <div className="flex items-center gap-4 mt-4">
//           {/* Bookmark Button */}
//           <button
//             onClick={handleBookmark}
//             className="like-btn px-3 py-2 bg-blue-500 text-white rounded flex items-center"
//           >
//             <span className="mr-1">★</span> Bookmark
//           </button>

//           {/* Rating System */}
//           <div className="rating flex gap-1">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <span
//                 key={star}
//                 onClick={() => handleRating(star)}
//                 className={`cursor-pointer ${
//                   rating >= star ? "text-yellow-500" : "text-gray-400"
//                 }`}
//               >
//                 ★
//               </span>
//             ))}
//           </div>
//           <span className="text-sm">Rating: {rating}/5</span>
//           <input
//             type="text"
//             value={inputValue}
//             onChange={handleChange}
//             placeholder="Enter text here"
//           />
//           <button onClick={() => console.log(inputValue)}>FeedBack</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;
// Modal.js












// import React, { useState } from "react";
// import "./Modal.css";

// const Modal = ({ show, onClose, article, children }) => {
//   if (!show) return null;

//   const [bookmark, setBookmark] = useState(0);
//   const [rating, setRating] = useState(0);
//   const [inputValue, setInputValue] = useState("");
//   const token = localStorage.getItem("token");

//   const handleChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   // Function to handle bookmark button click
//   const handleBookmark = () => {
//     fetch("http://localhost:8000/api/bookmarks/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         article: article.id, // Use the passed article's ID for the bookmark request
//       }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Failed to bookmark the article.");
//       })
//       .then((data) => {
//         console.log("Bookmark created:", data);
//         setBookmark(1); // Set bookmark state (you can also use a boolean flag)
//       })
//       .catch((error) => {
//         console.error("Error bookmarking:", error);
//       });
//   };

//   // Function to handle rating click
//   const handleRating = (newRating) => {
//     setRating(newRating);
//   };

//   // Function to submit feedback
//   const handleSubmitFeedback = () => {
//     fetch("http://localhost:8000/api/reviews/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         feedback: inputValue,
//         rating: rating,
//         article: article.id, // Use the article ID passed as a prop
//       }),
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error("Failed to submit feedback.");
//       })
//       .then((data) => {
//         console.log("Feedback submitted:", data);
//         setInputValue(""); // Clear the input field after submission
//       })
//       .catch((error) => {
//         console.error("Error submitting feedback:", error);
//       });
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <button className="close-button" onClick={onClose}>
//           X
//         </button>
//         {children}
//         <div className="flex items-center gap-4 mt-4">
//           {/* Bookmark Button */}
//           <button
//             onClick={handleBookmark}
//             className="like-btn px-3 py-2 bg-blue-500 text-white rounded flex items-center"
//           >
//             <span className="mr-1">★</span> Bookmark
//           </button>

//           {/* Rating System */}
//           <div className="rating flex gap-1">
//             {[1, 2, 3, 4, 5].map((star) => (
//               <span
//                 key={star}
//                 onClick={() => handleRating(star)}
//                 className={`cursor-pointer ${
//                   rating >= star ? "text-yellow-500" : "text-gray-400"
//                 }`}
//               >
//                 ★
//               </span>
//             ))}
//           </div>
//           <span className="text-sm">Rating: {rating}/5</span>

//           {/* Feedback Input */}
//           <input
//             type="text"
//             value={inputValue}
//             onChange={handleChange}
//             placeholder="Enter text here"
//           />
//           <button onClick={handleSubmitFeedback}>Submit Feedback</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;












import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ show, onClose, article, children }) => {
  if (!show) return null;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [rating, setRating] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const token = localStorage.getItem("token");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleBookmark = () => {
    fetch("http://localhost:8000/api/bookmarks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        article: article.id,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to bookmark the article.");
      })
      .then((data) => {
        console.log("Bookmark created:", data);
        setIsBookmarked(true);
        alert("Article bookmarked successfully!"); // Alert on successful bookmark
      })
      .catch((error) => {
        console.error("Error bookmarking:", error);
        alert("Error bookmarking the article. Please try again."); // Alert on error
      });
  };

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleSubmitFeedback = () => {
    fetch("http://localhost:8000/api/reviews/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        feedback: inputValue,
        rating: rating,
        article: article.id,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to submit feedback.");
      })
      .then((data) => {
        console.log("Feedback submitted:", data);
        setInputValue("");
        setRating(0); // Reset the rating after submission if needed
      })
      .catch((error) => {
        console.error("Error submitting feedback:", error);
      });
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="modal-content bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full relative">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-lg"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
        <div className="flex flex-col items-center mt-4">
          {/* Bookmark Button */}
          <button
            onClick={handleBookmark}
            className="like-btn font-bold py-2 px-4 rounded-full shadow-md bg-blue-500 hover:bg-blue-600"
          >
            ★ Bookmark
          </button>

          {/* Rating System */}
          <div className="rating mt-4 flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRating(star)}
                className={`cursor-pointer text-3xl transition duration-300 ease-in-out ${
                  rating >= star ? "text-yellow-400" : "text-gray-400"
                }`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-sm mt-2 text-gray-500">Rating: {rating}/5</span>

          {/* Feedback Input */}
          <div className="mt-4 w-full">
            <textarea
              value={inputValue}
              onChange={handleChange}
              placeholder="Enter your feedback"
              className="w-full border border-gray-300 rounded-lg p-4 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
              rows="4"
            />
            <button
              onClick={handleSubmitFeedback}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
