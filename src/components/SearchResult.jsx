import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EverythingCard from "./EverythingCard";
import Loader from "./Loader";

function SearchResult() {
  const { searchQuery } = useParams(); // Get the searchQuery from the route params
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fallbackImage = "https://via.placeholder.com/400x300?text=No+Image+Available"; // Fallback image URL

  useEffect(() => {
    const fetchSearchResults = () => {
      setIsLoading(true);
      setError(null);

      const token = localStorage.getItem("token");
      fetch(`http://localhost:8000/api/articles/?=${searchQuery}`, {
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
          throw new Error("Failed to fetch search results.");
        })
        .then((myJson) => {
          if (myJson.results) {
            setData(myJson.results);
          } else {
            setError(myJson.message || "An error occurred.");
          }
        })
        .catch((error) => {
          console.error("Fetch error:", error);
          setError("Failed to fetch search results. Please try again later.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    fetchSearchResults();
  }, [searchQuery]); // Re-fetch when searchQuery changes

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
            <div className="text-center text-lg font-semibold">
              No results found for "{searchQuery}"
            </div>
          )
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default SearchResult;
    