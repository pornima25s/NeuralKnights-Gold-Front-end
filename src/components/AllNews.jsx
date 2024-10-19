// // // import { React, useState, useEffect } from 'react';
// // // import EverythingCard from './EverythingCard';
// // // import Loader from './Loader';
// // // import Modal from './Modal';

// // // function AllNews() {
// // //   const [data, setData] = useState([]);
// // //   const [page, setPage] = useState(1);
// // //   const [totalResults, setTotalResults] = useState(0);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [selectedArticle, setSelectedArticle] = useState(null);
// // //   const [sentimentData, setSentimentData] = useState(null);
// // //   const [wordCloudData, setWordCloudData] = useState(null);
// // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // //   const [loadingSentiment, setLoadingSentiment] = useState(false);
// // //   const [loadingWordCloud, setLoadingWordCloud] = useState(false);

// // //   const pageSize = 12;

// // //   const handleArticleClick = (articleId) => {
// // //     setIsModalOpen(true);
// // //     setSelectedArticle(articleId);

// // //     // Fetch sentiment analysis
// // //     fetchSentimentData(articleId);

// // //     // Fetch word cloud data
// // //     fetchWordCloudData(articleId);
// // //   };

// // //   const fetchSentimentData = (articleId) => {
// // //     const token = localStorage.getItem('token');
// // //     setLoadingSentiment(true);

// // //     fetch(`http://localhost:8000/api/sentiment-analysis/${articleId}/`, {
// // //       method: 'GET',
// // //       headers: {
// // //         Authorization: `Bearer ${token}`,
// // //         'Content-Type': 'application/json',
// // //       },
// // //     })
// // //       .then((response) => {
// // //         if (response.ok) {
// // //           return response.json();
// // //         }
// // //         throw new Error('Failed to fetch sentiment data.');
// // //       })
// // //       .then((data) => {
// // //         setSentimentData(data.sentiment);
// // //       })
// // //       .catch((error) => {
// // //         console.error('Sentiment fetch error:', error);
// // //         setSentimentData('Error fetching sentiment data.'); // Display a user-friendly error message
// // //       })
// // //       .finally(() => {
// // //         setLoadingSentiment(false);
// // //       });
// // //   };

// // //   const fetchWordCloudData = (articleId) => {
// // //     const token = localStorage.getItem('token');
// // //     setLoadingWordCloud(true);

// // //     fetch(`http://localhost:8000/api/wordcloud/${articleId}/`, {
// // //       method: 'GET',
// // //       headers: {
// // //         Authorization: `Bearer ${token}`,
// // //         'Content-Type': 'application/json',
// // //       },
// // //     })
// // //       .then((response) => {
// // //         if (!response.ok) {
// // //           throw new Error('Failed to fetch word cloud data.');
// // //         }
// // //         return response.blob(); // Change to blob if the response is an image
// // //       })
// // //       .then((blob) => {
// // //         const imageUrl = URL.createObjectURL(blob);
// // //         setWordCloudData(imageUrl); // Now imageUrl can be used in an <img> tag
// // //       })
// // //       .catch((error) => {
// // //         console.error('Word Cloud fetch error:', error);
// // //         setWordCloudData('Error fetching word cloud data.'); // Display a user-friendly error message
// // //       })
// // //       .finally(() => {
// // //         setLoadingWordCloud(false);
// // //       });
// // //   };

// // //   const handlePrev = () => {
// // //     if (page > 1) setPage(page - 1);
// // //   };

// // //   const handleNext = () => {
// // //     if (page < Math.ceil(totalResults / pageSize)) setPage(page + 1);
// // //   };

// // //   const handleCloseModal = () => {
// // //     setIsModalOpen(false);
// // //     setSelectedArticle(null);
// // //     setSentimentData(null);
// // //     setWordCloudData(null);
// // //   };

// // //   useEffect(() => {
// // //     setIsLoading(true);
// // //     setError(null);

// // //     const token = localStorage.getItem('token');

// // //     fetch(`http://localhost:8000/api/articles/?page=${page}&pageSize=${pageSize}`, {
// // //       method: 'GET',
// // //       headers: {
// // //         Authorization: `Bearer ${token}`,
// // //         'Content-Type': 'application/json',
// // //       },
// // //     })
// // //       .then((response) => {
// // //         if (response.ok) {
// // //           return response.json();
// // //         }
// // //         throw new Error('Network response was not ok');
// // //       })
// // //       .then((myJson) => {
// // //         if (myJson.results) {
// // //           setTotalResults(myJson.count); // API provides total results in `count`
// // //           setData(myJson.results); // API results are in `results` key
// // //         } else {
// // //           setError(myJson.message || 'An error occurred');
// // //         }
// // //       })
// // //       .catch((error) => {
// // //         console.error('Fetch error:', error);
// // //         setError('Failed to fetch news. Please try again later.');
// // //       })
// // //       .finally(() => {
// // //         setIsLoading(false);
// // //       });
// // //   }, [page]);

// // //   return (
// // //     <>
// // //       {error && <div className="text-red-500 mb-4">{error}</div>}

// // //       <div className="my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3">
// // //         {!isLoading ? (
// // //           data.map((element, index) => (
// // //             <EverythingCard
// // //               key={index}
// // //               title={element.title}
// // //               description={element.description}
// // //               imgUrl={element.url_to_image}
// // //               publishedAt={element.published_at}
// // //               url={element.url}
// // //               author={element.author}
// // //               source={element.source}
// // //               onClick={() => handleArticleClick(element.id)} // Pass article ID when clicked
// // //             />
// // //           ))
// // //         ) : (
// // //           <Loader />
// // //         )}
// // //       </div>

// // //       {isModalOpen && (
// // //         <Modal show={isModalOpen} onClose={handleCloseModal}>
// // //           <h2>Article ID: {selectedArticle}</h2>
// // //           {loadingSentiment ? (
// // //             <div>Loading sentiment analysis...</div>
// // //           ) : (
// // //             <div>
// // //               {sentimentData ? (
// // //                 <div>Sentiment Analysis: {sentimentData}</div>
// // //               ) : (
// // //                 <div>No sentiment data available.</div>
// // //               )}
// // //             </div>
// // //           )}
// // //           {loadingWordCloud ? (
// // //             <div>Loading word cloud...</div>
// // //           ) : (
// // //             <div>
// // //               {wordCloudData ? (
// // //                 <img src={wordCloudData} alt="Word Cloud" />
// // //               ) : (
// // //                 <div>No word cloud data available.</div>
// // //               )}
// // //             </div>
// // //           )}
// // //         </Modal>
// // //       )}

// // //       {!isLoading && data.length > 0 && (
// // //         <div className="pagination flex justify-center gap-14 my-10 items-center">
// // //           <button
// // //             disabled={page <= 1}
// // //             className="pagination-btn text-center"
// // //             onClick={handlePrev}
// // //           >
// // //             &larr; Prev
// // //           </button>
// // //           <p className="font-semibold opacity-80">
// // //             {page} of {Math.ceil(totalResults / pageSize)}
// // //           </p>
// // //           <button
// // //             className="pagination-btn text-center"
// // //             disabled={page >= Math.ceil(totalResults / pageSize)}
// // //             onClick={handleNext}
// // //           >
// // //             Next &rarr;
// // //           </button>
// // //         </div>
// // //       )}
// // //     </>
// // //   );
// // // }

// // // export default AllNews;

// // import { React, useState, useEffect } from "react";
// // import EverythingCard from "./EverythingCard";
// // import Loader from "./Loader";
// // import Modal from "./Modal";

// // function AllNews() {
// //   const [data, setData] = useState([]);
// //   const [page, setPage] = useState(1);
// //   const [totalResults, setTotalResults] = useState(0);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [selectedArticle, setSelectedArticle] = useState(null);
// //   const [sentimentData, setSentimentData] = useState(null);
// //   const [wordCloudData, setWordCloudData] = useState(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [loadingSentiment, setLoadingSentiment] = useState(false);
// //   const [loadingWordCloud, setLoadingWordCloud] = useState(false);
// //   const [articleContent, setArticleContent] = useState(null); // New state for article content

// //   const pageSize = 12;

// //   const handleArticleClick = (article) => {
// //     setIsModalOpen(true);
// //     setSelectedArticle(article.id);

// //     // Store the article content
// //     setArticleContent(article);
// //     console.log(article);
// //     // Fetch sentiment analysis
// //     fetchSentimentData(article.id);

// //     // Fetch word cloud data
// //     fetchWordCloudData(article.id);
// //   };

// //   const fetchSentimentData = (articleId) => {
// //     const token = localStorage.getItem("token");
// //     setLoadingSentiment(true);

// //     fetch(`http://localhost:8000/api/sentiment-analysis/${articleId}/`, {
// //       method: "GET",
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //         "Content-Type": "application/json",
// //       },
// //     })
// //       .then((response) => {
// //         if (response.ok) {
// //           return response.json();
// //         }
// //         throw new Error("Failed to fetch sentiment data.");
// //       })
// //       .then((data) => {
// //         setSentimentData(data.sentiment);
// //       })
// //       .catch((error) => {
// //         console.error("Sentiment fetch error:", error);
// //         setSentimentData("Error fetching sentiment data.");
// //       })
// //       .finally(() => {
// //         setLoadingSentiment(false);
// //       });
// //   };

// //   const fetchWordCloudData = (articleId) => {
// //     const token = localStorage.getItem("token");
// //     setLoadingWordCloud(true);

// //     fetch(`http://localhost:8000/api/wordcloud/${articleId}/`, {
// //       method: "GET",
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //         "Content-Type": "application/json",
// //       },
// //     })
// //       .then((response) => {
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch word cloud data.");
// //         }
// //         return response.blob();
// //       })
// //       .then((blob) => {
// //         const imageUrl = URL.createObjectURL(blob);
// //         setWordCloudData(imageUrl);
// //       })
// //       .catch((error) => {
// //         console.error("Word Cloud fetch error:", error);
// //         setWordCloudData("Error fetching word cloud data.");
// //       })
// //       .finally(() => {
// //         setLoadingWordCloud(false);
// //       });
// //   };

// //   const handlePrev = () => {
// //     if (page > 1) setPage(page - 1);
// //   };

// //   const handleNext = () => {
// //     if (page < Math.ceil(totalResults / pageSize)) setPage(page + 1);
// //   };

// //   const handleCloseModal = () => {
// //     setIsModalOpen(false);
// //     setSelectedArticle(null);
// //     setSentimentData(null);
// //     setWordCloudData(null);
// //     setArticleContent(null); // Clear the article content
// //   };

// //   useEffect(() => {
// //     setIsLoading(true);
// //     setError(null);

// //     const token = localStorage.getItem("token");

// //     fetch(
// //       `http://localhost:8000/api/articles/?page=${page}&pageSize=${pageSize}`,
// //       {
// //         method: "GET",
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //           "Content-Type": "application/json",
// //         },
// //       }
// //     )
// //       .then((response) => {
// //         if (response.ok) {
// //           return response.json();
// //         }
// //         throw new Error("Network response was not ok");
// //       })
// //       .then((myJson) => {
// //         if (myJson.results) {
// //           setTotalResults(myJson.count);
// //           setData(myJson.results);
// //         } else {
// //           setError(myJson.message || "An error occurred");
// //         }
// //       })
// //       .catch((error) => {
// //         console.error("Fetch error:", error);
// //         setError("Failed to fetch news. Please try again later.");
// //       })
// //       .finally(() => {
// //         setIsLoading(false);
// //       });
// //   }, [page]);

// //   return (
// //     <>
// //       {error && <div className="text-red-500 mb-4">{error}</div>}

// //       <div className="my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3">
// //         {!isLoading ? (
// //           data.map((element, index) => (
// //             <EverythingCard
// //               key={index}
// //               title={element.title}
// //               description={element.description}
// //               imgUrl={element.url_to_image}
// //               publishedAt={element.published_at}
// //               url={element.url}
// //               author={element.author}
// //               source={element.source}
// //               onClick={() => handleArticleClick(element)} // Pass the entire article object
// //             />
// //           ))
// //         ) : (
// //           <Loader />
// //         )}
// //       </div>

// //       {isModalOpen && (
// //         <Modal show={isModalOpen} onClose={handleCloseModal}>
// //           {articleContent && (
// //             <>
// //               <h2>{articleContent.title}</h2>
// //               <img
// //                 src={articleContent.url_to_image}
// //                 alt={articleContent.title}
// //                 className="w-full h-auto mt-4"
// //               />
// //               <p>{articleContent.description}</p>
// //               <p>
// //                 Published on:{" "}
// //                 {new Date(articleContent.published_at).toLocaleDateString()}
// //               </p>
// //               <p>Author: {articleContent.author}</p>
// //               <p>Source: {articleContent.source}</p>
// //               <a
// //                 href={articleContent.url}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="text-blue-500"
// //               >
// //                 Read Full Article
// //               </a>
// //             </>
// //           )}

// //           {/* Sentiment Analysis Section */}
// //           <h3 className="mt-6">Sentiment Analysis</h3>
// //           {loadingSentiment ? (
// //             <div>Loading sentiment analysis...</div>
// //           ) : (
// //             <div>
// //               {sentimentData ? sentimentData : "No sentiment data available."}
// //             </div>
// //           )}

// //           {/* Word Cloud Section */}
// //           <h3 className="mt-6">Word Cloud</h3>
// //           {loadingWordCloud ? (
// //             <div>Loading word cloud...</div>
// //           ) : (
// //             <div>
// //               {wordCloudData ? (
// //                 <img src={wordCloudData} alt="Word Cloud" />
// //               ) : (
// //                 "No word cloud data available."
// //               )}
// //             </div>
// //           )}
// //         </Modal>
// //       )}

// //       {!isLoading && data.length > 0 && (
// //         <div className="pagination flex justify-center gap-14 my-10 items-center">
// //           <button
// //             disabled={page <= 1}
// //             className="pagination-btn text-center"
// //             onClick={handlePrev}
// //           >
// //             &larr; Prev
// //           </button>
// //           <p className="font-semibold opacity-80">
// //             {page} of {Math.ceil(totalResults / pageSize)}
// //           </p>
// //           <button
// //             className="pagination-btn text-center"
// //             disabled={page >= Math.ceil(totalResults / pageSize)}
// //             onClick={handleNext}
// //           >
// //             Next &rarr;
// //           </button>
// //         </div>
// //       )}
// //     </>
// //   );
// // }

// // export default AllNews;

// // import { React, useState, useEffect } from 'react';
// // import EverythingCard from './EverythingCard';
// // import Loader from './Loader';
// // import Modal from './Modal';

// // function AllNews() {
// //   const [data, setData] = useState([]);
// //   const [page, setPage] = useState(1);
// //   const [totalResults, setTotalResults] = useState(0);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [selectedArticle, setSelectedArticle] = useState(null);
// //   const [selectedArticles, setSelectedArticles] = useState(null);
// //   const [sentimentPData, setSentimentPData] = useState(null);
// //   const [sentimentNData, setSentimentNData] = useState(null);
// //   const [wordCloudData, setWordCloudData] = useState(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [loadingSentiment, setLoadingSentiment] = useState(false);
// //   const [loadingWordCloud, setLoadingWordCloud] = useState(false);
// //   const [articleContent, setArticleContent] = useState(null);
// //   const [searchQuery, setSearchQuery] = useState('');

// //   const pageSize = 12;
// //   const fallbackImage = "https://via.placeholder.com/400x300?text=No+Image+Available"; // Fallback image URL

// //   const handleArticleClick = (article) => {
// //     setIsModalOpen(true);
// //     setSelectedArticle(article.id);
// //     setSelectedArticles(article);
// //     // Store the article content
// //     setArticleContent(article);

// //     // Fetch sentiment analysis
// //     fetchSentimentData(article.id);

// //     // Fetch word cloud data
// //     fetchWordCloudData(article.id);
// //   };

// //   // const fetchSentimentData = (articleId) => {
// //   //   const token = localStorage.getItem('token');
// //   //   setLoadingSentiment(true);

// //   //   fetch(`http://localhost:8000/api/sentiment-analysis/${articleId}/`, {
// //   //     method: 'GET',
// //   //     headers: {
// //   //       Authorization: `Bearer ${token}`,
// //   //       'Content-Type': 'application/json',
// //   //     },
// //   //   })
// //   //     .then((response) => {
// //   //       if (response.ok) {
// //   //         return response;
// //   //       }
// //   //       throw new Error('Failed to fetch sentiment data.');
// //   //     })
// //   //     .then((data) => {
// //   //       setSentimentData(data.positive);
// //   //       // console.log(sentiment);
// //   //     })
// //   //     .catch((error) => {
// //   //       console.error('Sentiment fetch error:', error);
// //   //       setSentimentData('Error fetching sentiment data.');
// //   //     })
// //   //     .finally(() => {
// //   //       setLoadingSentiment(false);
// //   //     });
// //   // };
// //   const fetchSentimentData = (articleId) => {
// //     const token = localStorage.getItem('token');
// //     setLoadingSentiment(true);

// //     fetch(`http://localhost:8000/api/sentiment-analysis/${articleId}/`, {
// //       method: 'GET',
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //         'Content-Type': 'application/json',
// //       },
// //     })
// //       .then((response) => {
// //         if (response.ok) {
// //           return response.json(); // Parse the response as JSON
// //         }
// //         throw new Error('Failed to fetch sentiment data.');
// //       })
// //       .then((data) => {
// //         // Access the parsed JSON data correctly
// //         setSentimentPData(data.positive*100); // You can display other parts as needed
// //         setSentimentNData(data.negative*100);
// //       })
// //       .catch((error) => {
// //         console.error('Sentiment fetch error:', error);
// //         setSentimentData('Error fetching sentiment data.');
// //       })
// //       .finally(() => {
// //         setLoadingSentiment(false);
// //       });
// //   };

// //   const fetchWordCloudData = (articleId) => {
// //     const token = localStorage.getItem('token');
// //     setLoadingWordCloud(true);

// //     fetch(`http://localhost:8000/api/wordcloud/${articleId}/`, {
// //       method: 'GET',
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //         'Content-Type': 'application/json',
// //       },
// //     })
// //       .then((response) => {
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch word cloud data.');
// //         }
// //         return response.blob();
// //       })
// //       .then((blob) => {
// //         const imageUrl = URL.createObjectURL(blob);
// //         setWordCloudData(imageUrl);
// //       })
// //       .catch((error) => {
// //         console.error('Word Cloud fetch error:', error);
// //         setWordCloudData('Error fetching word cloud data.');
// //       })
// //       .finally(() => {
// //         setLoadingWordCloud(false);
// //       });
// //   };

// //   const handlePrev = () => {
// //     if (page > 1) setPage(page - 1);
// //   };

// //   const handleNext = () => {
// //     if (page < Math.ceil(totalResults / pageSize)) setPage(page + 1);
// //   };

// //   const handleCloseModal = () => {
// //     setIsModalOpen(false);
// //     setSelectedArticle(null);
// //     setSelectedArticles(null);
// //     setWordCloudData(null);
// //     setArticleContent(null);
// //   };

// //   useEffect(() => {
// //     const fetchArticles = () => {
// //       setIsLoading(true);
// //       setError(null);

// //       const token = localStorage.getItem('token');
// //       fetch(
// //         // `http://localhost:8000/api/articles/?page=${page}&pageSize=${pageSize}${searchQuery}`,
// //         `http://localhost:8000/api/articles/`,
// //         {
// //           method: 'GET',
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //             'Content-Type': 'application/json',
// //           },
// //         }
// //       )
// //         .then((response) => {
// //           if (response.ok) {
// //             return response.json();
// //           }
// //           throw new Error('Network response was not ok');
// //         })
// //         .then((myJson) => {
// //           if (myJson.results) {
// //             setTotalResults(myJson.count);
// //             setData(myJson.results);
// //           } else {
// //             setError(myJson.message || 'An error occurred');
// //           }
// //         })
// //         .catch((error) => {
// //           console.error('Fetch error:', error);
// //           setError('Failed to fetch news. Please try again later.');
// //         })
// //         .finally(() => {
// //           setIsLoading(false);
// //         });
// //     };

// //     const debounceFetch = setTimeout(fetchArticles, 300); // Debounce the API call

// //     return () => clearTimeout(debounceFetch); // Cleanup the timeout on unmount
// //   }, [page, searchQuery]); // Trigger on page or search query change

// //   return (
// //     <>
// //       {error && <div className="text-red-500 mb-4">{error}</div>}

// //       <input
// //         type="text"
// //         placeholder="Search articles..."
// //         value={searchQuery}
// //         onChange={(e) => setSearchQuery(e.target.value)}
// //         className="border p-2 rounded mb-4 w-full"
// //       />

// //       <div className="my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3">
// //         {!isLoading ? (
// //           data.map((element, index) => (
// //             <EverythingCard
// //               key={index}
// //               title={element.title}
// //               description={element.description}
// //               imgUrl={element.url_to_image}
// //               publishedAt={element.published_at}
// //               url={element.url}
// //               author={element.author}
// //               source={element.source}
// //               onClick={() => handleArticleClick(element)}
// //             />
// //           ))
// //         ) : (
// //           <Loader />
// //         )}
// //       </div>

// //       {isModalOpen && (
// //         <Modal
// //         show={isModalOpen}
// //         onClose={handleCloseModal}
// //         article={selectedArticles} // Pass the selected article to Modal
// //       >
// //           {articleContent && (
// //             <>
// //               <h2  className="text-2xl font-bold mb-4 ">{articleContent.title}</h2>
// //               <img
// //                 src={articleContent.url_to_image || fallbackImage}
// //                 alt={articleContent.title}
// //                 className="w-full h-auto mt-4 border rounded-2xl"
// //               />
// //               <p>{articleContent.description}</p>
// //               <p>Published on: {new Date(articleContent.publishedAt).toLocaleDateString()}</p>
// //               <p>Author: {articleContent.author}</p>
// //               <p>Source: {articleContent.source}</p>
// //               <a href={articleContent.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
// //                 Read Full Article
// //               </a>
// //             </>
// //           )}

// //           <h3 className="mt-6">Sentiment Analysis</h3>
// //           {loadingSentiment ? (
// //             <div>Loading sentiment analysis...</div>
// //           ) : (
// //             <><div>{sentimentPData ? sentimentPData : 'No sentiment data available.'}</div><div>{sentimentNData ? sentimentNData : 'No sentiment data available.'}</div></>
// //           )}

// //           <h3 className="mt-6">Word Cloud</h3>
// //           {loadingWordCloud ? (
// //             <div>Loading word cloud...</div>
// //           ) : (
// //             <div>{wordCloudData ? <img src={wordCloudData} alt="Word Cloud" /> : 'No word cloud data available.'}</div>
// //           )}
// //         </Modal>
// //       )}

// //       {!isLoading && data.length > 0 && (
// //         <div className="pagination flex justify-center gap-14 my-10 items-center">
// //           <button
// //             disabled={page <= 1}
// //             className="pagination-btn text-center"
// //             onClick={handlePrev}
// //           >
// //             &larr; Prev
// //           </button>
// //           <p className="font-semibold opacity-80">
// //             {page} of {Math.ceil(totalResults / pageSize)}
// //           </p>
// //           <button
// //             className="pagination-btn text-center"
// //             disabled={page >= Math.ceil(totalResults / pageSize)}
// //             onClick={handleNext}
// //           >
// //             Next &rarr;
// //           </button>
// //         </div>
// //       )}
// //     </>
// //   );
// // }

// // export default AllNews;

// import { React, useState, useEffect } from 'react';
// import EverythingCard from './EverythingCard';
// import Loader from './Loader';
// import Modal from './Modal';

// function AllNews() {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalResults, setTotalResults] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedArticle, setSelectedArticle] = useState(null);
//   const [selectedArticles, setSelectedArticles] = useState(null);
//   const [sentimentPData, setSentimentPData] = useState(null);
//   const [sentimentNData, setSentimentNData] = useState(null);
//   const [wordCloudData, setWordCloudData] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [loadingSentiment, setLoadingSentiment] = useState(false);
//   const [loadingWordCloud, setLoadingWordCloud] = useState(false);
//   const [articleContent, setArticleContent] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');

//   const pageSize = 12;
//   const fallbackImage = "https://via.placeholder.com/400x300?text=No+Image+Available"; // Fallback image URL

//   const handleArticleClick = (article) => {
//     setIsModalOpen(true);
//     setSelectedArticle(article.id);
//     setSelectedArticles(article);
//     setArticleContent(article);

//     fetchSentimentData(article.id);
//     fetchWordCloudData(article.id);
//   };

//   const fetchSentimentData = (articleId) => {
//     const token = localStorage.getItem('token');
//     setLoadingSentiment(true);

//     fetch(`http://localhost:8000/api/sentiment-analysis/${articleId}/`, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error('Failed to fetch sentiment data.');
//       })
//       .then((data) => {
//         setSentimentPData(data.positive * 100); // Converted to percentage
//         setSentimentNData(data.negative * 100);
//       })
//       .catch((error) => {
//         console.error('Sentiment fetch error:', error);
//         setSentimentPData('Error fetching sentiment data.');
//         setSentimentNData('Error fetching sentiment data.');
//       })
//       .finally(() => {
//         setLoadingSentiment(false);
//       });
//   };

//   const fetchWordCloudData = (articleId) => {
//     const token = localStorage.getItem('token');
//     setLoadingWordCloud(true);

//     fetch(`http://localhost:8000/api/wordcloud/${articleId}/`, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`,
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch word cloud data.');
//         }
//         return response.blob();
//       })
//       .then((blob) => {
//         const imageUrl = URL.createObjectURL(blob);
//         setWordCloudData(imageUrl);
//       })
//       .catch((error) => {
//         console.error('Word Cloud fetch error:', error);
//         setWordCloudData('Error fetching word cloud data.');
//       })
//       .finally(() => {
//         setLoadingWordCloud(false);
//       });
//   };

//   const fetchFakeNews = (articleId) =>{

//   };
//   const handlePrev = () => {
//     if (page > 1) setPage(page - 1);
//   };

//   const handleNext = () => {
//     if (page < Math.ceil(totalResults / pageSize)) setPage(page + 1);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedArticle(null);
//     setSelectedArticles(null);
//     setWordCloudData(null);
//     setArticleContent(null);
//   };

//   useEffect(() => {
//     const fetchArticles = () => {
//       setIsLoading(true);
//       setError(null);

//       const token = localStorage.getItem('token');
//       fetch(
//         `http://localhost:8000/api/articles/`,
//         {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       )
//         .then((response) => {
//           if (response.ok) {
//             return response.json();
//           }
//           throw new Error('Network response was not ok');
//         })
//         .then((myJson) => {
//           if (myJson.results) {
//             setTotalResults(myJson.count);
//             setData(myJson.results);
//           } else {
//             setError(myJson.message || 'An error occurred');
//           }
//         })
//         .catch((error) => {
//           console.error('Fetch error:', error);
//           setError('Failed to fetch news. Please try again later.');
//         })
//         .finally(() => {
//           setIsLoading(false);
//         });
//     };

//     const debounceFetch = setTimeout(fetchArticles, 300);

//     return () => clearTimeout(debounceFetch);
//   }, [page, searchQuery]);

//   return (
//     <>
//       {error && <div className="text-red-500 mb-4">{error}</div>}

//       <input
//         type="text"
//         placeholder="Search articles..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         className="border p-2 rounded mb-4 w-full"
//       />

//       <div className="my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3">
//         {!isLoading ? (
//           data.map((element, index) => (
//             <EverythingCard
//               key={index}
//               title={element.title}
//               description={element.description}
//               imgUrl={element.url_to_image}
//               publishedAt={element.published_at}
//               url={element.url}
//               author={element.author}
//               source={element.source}
//               onClick={() => handleArticleClick(element)}
//             />
//           ))
//         ) : (
//           <Loader />
//         )}
//       </div>

//       {isModalOpen && (
//         <Modal show={isModalOpen} onClose={handleCloseModal} article={selectedArticles}>
//           {articleContent && (
//             <>
//               <h2 className="text-3xl font-extrabold text-center mb-4">{articleContent.title}</h2>
//               <img
//                 src={articleContent.url_to_image || fallbackImage}
//                 alt={articleContent.title}
//                 className="w-full h-auto mt-4 border rounded-2xl"
//               />
//               <div className="text-center mt-4">
//                 <p className="text-gray-600 italic text-xl mb-4 font-serif">{articleContent.description}</p>
//                 <p className="font-semibold text-lg">Published on: {new Date(articleContent.publishedAt).toLocaleDateString()}</p>
//                 <p className="font-semibold text-lg">Author: {articleContent.author}</p>
//                 <p className="font-semibold text-lg">Source: {articleContent.source}</p>
//                 <a
//                   href={articleContent.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-600 hover:underline mt-2 block"
//                 >
//                   Read Full Article
//                 </a>
//               </div>
//             </>
//           )}

//           <h3 className="mt-8 font-bold text-xl">Sentiment Analysis</h3>
//           {loadingSentiment ? (
//             <div>Loading sentiment analysis...</div>
//           ) : (
//             <div className="mt-4 flex justify-center space-x-6">
//               <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg shadow-lg">
//                 <p className="font-bold text-lg">Positive</p>
//                 <p className="text-2xl font-semibold">{sentimentPData}%</p>
//               </div>
//               <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg shadow-lg">
//                 <p className="font-bold text-lg">Negative</p>
//                 <p className="text-2xl font-semibold">{sentimentNData}%</p>
//               </div>
//             </div>
//           )}

//           <h3 className="mt-8 font-bold text-xl">Word Cloud</h3>
//           {loadingWordCloud ? (
//             <div>Loading word cloud...</div>
//           ) : (
//             <div className="mt-4 text-center">
//               {wordCloudData ? <img src={wordCloudData} alt="Word Cloud" className="w-full h-auto mx-auto" /> : 'No word cloud data available.'}
//             </div>
//           )}
//         </Modal>
//       )}

//       {!isLoading && data.length > 0 && (
//         <div className="pagination flex justify-center gap-14 my-10 items-center">
//           <button
//             disabled={page <= 1}
//             onClick={handlePrev}
//             className="disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 text-white py-2 px-4 rounded-full"
//           >
//             &larr; Previous
//           </button>

//           <p className="text-lg text-gray-700 font-bold">
//             Page {page} of {Math.ceil(totalResults / pageSize)}
//           </p>

//           <button
//             disabled={page + 1 > Math.ceil(totalResults / pageSize)}
//             onClick={handleNext}
//             className="disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 text-white py-2 px-4 rounded-full"
//           >
//             Next &rarr;
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

// export default AllNews;










import { React, useState, useEffect } from "react";
import EverythingCard from "./EverythingCard";
import Loader from "./Loader";
import Modal from "./Modal";

function AllNews() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedArticles, setSelectedArticles] = useState(null);
  const [sentimentPData, setSentimentPData] = useState(null);
  const [sentimentNData, setSentimentNData] = useState(null);
  const [wordCloudData, setWordCloudData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loadingSentiment, setLoadingSentiment] = useState(false);
  const [loadingWordCloud, setLoadingWordCloud] = useState(false);
  const [articleContent, setArticleContent] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [fakeNewsData, setFakeNewsData] = useState(null);
  const [loadingFakeNews, setLoadingFakeNews] = useState(false); // New loading state for fake news

  const pageSize = 12;
  const fallbackImage =
    "https://via.placeholder.com/400x300?text=No+Image+Available"; // Fallback image URL

  const handleArticleClick = (article) => {
    setIsModalOpen(true);
    setSelectedArticle(article.id);
    setSelectedArticles(article);
    setArticleContent(article);

    fetchSentimentData(article.id);
    fetchWordCloudData(article.id);
    fetchFakeNews(article.id); // Fetch fake news when article is clicked
  };

  const fetchSentimentData = (articleId) => {
    const token = localStorage.getItem("token");
    setLoadingSentiment(true);

    fetch(`http://localhost:8000/api/sentiment-analysis/${articleId}/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Failed to fetch sentiment data.");
      })
      .then((data) => {
        setSentimentPData(data.positive * 100); // Converted to percentage
        setSentimentNData(data.negative * 100);
      })
      .catch((error) => {
        console.error("Sentiment fetch error:", error);
        setSentimentPData("Error fetching sentiment data.");
        setSentimentNData("Error fetching sentiment data.");
      })
      .finally(() => {
        setLoadingSentiment(false);
      });
  };

  const fetchWordCloudData = (articleId) => {
    const token = localStorage.getItem("token");
    setLoadingWordCloud(true);

    fetch(`http://localhost:8000/api/wordcloud/${articleId}/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch word cloud data.");
        }
        return response.blob();
      })
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        setWordCloudData(imageUrl);
      })
      .catch((error) => {
        console.error("Word Cloud fetch error:", error);
        setWordCloudData("Error fetching word cloud data.");
      })
      .finally(() => {
        setLoadingWordCloud(false);
      });
  };

  // New fetchFakeNews function
  // const fetchFakeNews = (articleId) => {
  //   const token = localStorage.getItem('token');
  //   setLoadingFakeNews(true);

  //   fetch(`http://localhost:8000/api/fake-news/${articleId}/`, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch fake news data.');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data); // Log the response data
  //       setFakeNewsData(data); // Set fetched fake news data
  //     })
  //     .catch((error) => {
  //       console.error('Fake News fetch error:', error);
  //       setFakeNewsData('Error fetching fake news data.');
  //     })
  //     .finally(() => {
  //       setLoadingFakeNews(false);
  //     });
  // };
  const fetchFakeNews = (articleId) => {
    const token = localStorage.getItem("token");
    setLoadingFakeNews(true);

    fetch(`http://localhost:8000/api/fake-news/${articleId}/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch fake news data.");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the response data
        setFakeNewsData(data["Fake News"]); // Set fetched fake news data
      })
      .catch((error) => {
        console.error("Fake News fetch error:", error);
        setFakeNewsData("Error fetching fake news data.");
      })
      .finally(() => {
        setLoadingFakeNews(false);
      });
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < Math.ceil(totalResults / pageSize)) setPage(page + 1);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
    setSelectedArticles(null);
    setWordCloudData(null);
    setArticleContent(null);
    setFakeNewsData(null); // Reset fake news data when modal closes
  };

  useEffect(() => {
    const fetchArticles = () => {
      setIsLoading(true);
      setError(null);

      const token = localStorage.getItem("token");
      fetch(`http://localhost:8000/api/articles/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          // throw new Error("Network response was not ok");
        })
        .then((myJson) => {
          if (myJson.results) {
            setTotalResults(myJson.count);
            setData(myJson.results);
          } else {
            setError(myJson.message || "An error occurred");
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error);
          setError("Failed to fetch news. Please try again later.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    const debounceFetch = setTimeout(fetchArticles, 300);

    return () => clearTimeout(debounceFetch);
  }, [page, searchQuery]);

  return (
    <>
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3">
        {!isLoading ? (
          data.map((element, index) => (
            <EverythingCard
              key={index}
              title={element.title}
              description={element.description}
              imgUrl={element.url_to_image}
              publishedAt={element.published_at}
              url={element.url}
              author={element.author}
              source={element.source}
              onClick={() => handleArticleClick(element)}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>

      {isModalOpen && (
        <Modal
          show={isModalOpen}
          onClose={handleCloseModal}
          article={selectedArticles}
        >
          {articleContent && (
            <>
              <h2 className="text-3xl font-extrabold text-center mb-4">
                {articleContent.title}
              </h2>
              <img
                src={articleContent.url_to_image || fallbackImage}
                alt={articleContent.title}
                className="w-full h-auto mt-4 border rounded-2xl"
              />
              <div className="text-center mt-4">
                <p className="text-gray-600 italic text-xl mb-4 font-serif">
                  {articleContent.description}
                </p>
                <p className="font-semibold text-lg">
                  Published on:{" "}
                  {new Date(articleContent.publishedAt).toLocaleDateString()}
                </p>
                <p className="font-semibold text-lg">
                  Author: {articleContent.author}
                </p>
                <p className="font-semibold text-lg">
                  Source: {articleContent.source}
                </p>
                <a
                  href={articleContent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-2 block"
                >
                  Read Full Article
                </a>
              </div>
            </>
          )}

          {loadingSentiment ? (
            <Loader />
          ) : (
            <div className="mt-4">
              <h3 className="text-xl font-bold">Sentiment Analysis</h3>
              {sentimentPData !== null && (
                <p>Positive Sentiment: {sentimentPData}%</p>
              )}
              {sentimentNData !== null && (
                <p>Negative Sentiment: {sentimentNData}%</p>
              )}
            </div>
          )}

          {loadingWordCloud ? (
            <Loader />
          ) : (
            <div className="mt-4">
              {wordCloudData ? (
                <img
                  src={wordCloudData}
                  alt="Word Cloud"
                  className="w-full h-auto"
                />
              ) : (
                <p>No word cloud data available.</p>
              )}
            </div>
          )}
          {loadingFakeNews ? (
            <Loader />
          ) : (
            <div className="mt-4">
              {fakeNewsData ? (
                <div>
                  <h3 className="text-xl font-bold">Fake News Data</h3>
                  <p>
                    Probability of Not Fake News: {fakeNewsData.toFixed(2)}%
                  </p>{" "}
                  {/* Display probability as percentage */}
                </div>
              ) : (
                <p>No fake news data available.</p>
              )}
            </div>
          )}
        </Modal>
      )}

      <div className="flex justify-between my-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={page >= Math.ceil(totalResults / pageSize)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default AllNews;
