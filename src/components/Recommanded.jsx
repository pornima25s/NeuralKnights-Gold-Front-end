import React, { useState, useEffect } from "react";
import EverythingCard from "./EverythingCard";
import Loader from "./Loader";

function Recommended() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const fallbackImage = "https://via.placeholder.com/400x300?text=No+Image+Available"; // Fallback image URL

  // Fetch recommended articles
  const fetchRecommendedArticles = () => {
    const token = localStorage.getItem("token");
    setIsLoading(true);
    setError(null);

    fetch("http://localhost:8000/api/recommendation", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch recommended articles.");
        }
        return response.json();
      })
      .then((myJson) => {
        setData(myJson.results || []);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError("Failed to fetch recommended articles. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Fetch articles when component mounts
  useEffect(() => {
    fetchRecommendedArticles();
  }, []);

  return (
    <>
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className="my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3">
        {!isLoading ? (
          data.length > 0 ? (
            data.map((element, index) => (
              <EverythingCard
                key={index}
                title={element.title}
                description={element.description}
                imgUrl={element.url_to_image || fallbackImage}
                publishedAt={element.published_at}
                url={element.url}
                author={element.author}
                source={element.source}
              />
            ))
          ) : (
            <div className="text-gray-600">No recommended articles available.</div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default Recommended;
