import { React, useEffect, useState } from "react";
import "./MyProfile.css";

function MyProfile() {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const [bookmarks, setBookmarks] = useState([]); // State to hold bookmarks
  const [reviews, setReviews] = useState([]); // State to hold reviews
  const [loadingWordCloud, setLoadingWordCloud] = useState(false); // State for loading bookmarks and reviews
  const [activeSection, setActiveSection] = useState("profile"); // State to track the active section

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`http://localhost:8000/auth/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch profile data.");
        }
        return response.json();
      })
      .then((data) => {
        setProfileData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setError("Failed to load profile data.");
      });
  }, []);

  const getBookmark = () => {
    const token = localStorage.getItem("token");
    setLoadingWordCloud(true);

    fetch(`http://localhost:8000/api/bookmarks/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch bookmarks.");
        }
        return response.json();
      })
      .then((data) => {
        setBookmarks(data.results || []);
      })
      .catch((error) => {
        console.error("Bookmark fetch error:", error);
        setBookmarks([]);
      })
      .finally(() => {
        setLoadingWordCloud(false);
      });
  };

  const getReviews = () => {
    const token = localStorage.getItem("token");
    setLoadingWordCloud(true);

    fetch(`http://localhost:8000/api/reviews/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch reviews.");
        }
        return response.json();
      })
      .then((data) => {
        setReviews(data.results || []);
      })
      .catch((error) => {
        console.error("Reviews fetch error:", error);
        setReviews([]);
      })
      .finally(() => {
        setLoadingWordCloud(false);
      });
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-red-300">
      <div className="sidebar w-1/5 bg-white p-6 shadow-lg rounded-lg mt-[100px]">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Menu</h2>
        <button
          className={`block w-full text-left p-3 mb-2 text-gray-700 rounded-lg transition duration-200 ease-in-out hover:bg-gray-200 
            ${activeSection === "profile" ? "bg-gray-300 border border-gray-400" : ""}`}
          onClick={() => setActiveSection("profile")}
        >
          My Profile
        </button>
        <button
          className={`block w-full text-left p-3 mb-2 text-gray-700 rounded-lg transition duration-200 ease-in-out hover:bg-gray-200 
            ${activeSection === "bookmarks" ? "bg-gray-300 border border-gray-400" : ""}`}
          onClick={() => {
            setActiveSection("bookmarks");
            getBookmark(); // Fetch bookmarks when the button is clicked
          }}
        >
          My Bookmarks
        </button>
        <button
          className={`block w-full text-left p-3 mb-2 text-gray-700 rounded-lg transition duration-200 ease-in-out hover:bg-gray-200 
            ${activeSection === "reviews" ? "bg-gray-300 border border-gray-400" : ""}`}
          onClick={() => {
            setActiveSection("reviews");
            getReviews(); // Fetch reviews when the button is clicked
          }}
        >
          My Reviews
        </button>
      </div>

      <div className="content w-3/4 mx-auto mt-24 p-6">
        {error && <div className="text-red-500 font-semibold">{error}</div>}
        {!error && !profileData && (
          <div className="text-gray-600">Loading profile...</div>
        )}
        {activeSection === "profile" && profileData && (
          <div className="profile-card bg-white shadow-lg rounded-lg p-6">
            <div className="profile-header flex items-center mb-4">
              <div className="profile-info flex-1">
                <h2 className="text-3xl font-bold text-gray-800">
                  {profileData.first_name} {profileData.last_name}
                </h2>
                <p className="text-gray-600">{profileData.email}</p>
                <span className="text-sm text-gray-500">User ID: {profileData.id}</span>
              </div>
            </div>

            <div className="profile-details">
              <div className="form-group mb-4">
                <label className="font-semibold">Username</label>
                <input
                  type="text"
                  value={profileData.username}
                  readOnly
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>
              <div className="form-group mb-4">
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  value={profileData.email}
                  readOnly
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>
              <div className="form-group mb-4">
                <label className="font-semibold">First Name</label>
                <input
                  type="text"
                  value={profileData.first_name || ""}
                  readOnly
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>
              <div className="form-group mb-4">
                <label className="font-semibold">Last Name</label>
                <input
                  type="text"
                  value={profileData.last_name || ""}
                  readOnly
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>
            </div>
          </div>
        )}
        {activeSection === "bookmarks" && (
          <div className="bg-white shadow-lg rounded-lg p-6 mt-4">
            {loadingWordCloud && <div className="text-gray-600">Loading bookmarks...</div>}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Bookmarks</h3>
              {bookmarks.length > 0 ? (
                <ul className="list-disc list-inside mt-2">
                  {bookmarks.map((bookmark) => (
                    <li key={bookmark.id} className="text-gray-700">
                      <strong>Bookmark ID:</strong> {bookmark.id}, <strong>Article ID:</strong> {bookmark.article}, <strong>Title:</strong> {bookmark.title},
                      <a
                        href={bookmark.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline mt-2 block"
                      >
                        Read Full Article
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                !loadingWordCloud && <div>No bookmarks found.</div>
              )}
            </div>
          </div>
        )}
        {activeSection === "reviews" && (
          <div className="bg-white shadow-lg rounded-lg p-6 mt-4">
            {loadingWordCloud && <div className="text-gray-600">Loading reviews...</div>}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Reviews</h3>
              {reviews.length > 0 ? (
                <ul className="list-disc list-inside mt-2">
                  {reviews.map((review) => (
                    <li key={review.id} className="text-gray-700">
                      <strong>Review ID:</strong> {review.id}, <strong>Article ID:</strong> {review.article}, <strong>Rating:</strong> {review.rating},
                      <p className="text-gray-600">
                        <strong>Comment:</strong> {review.comment}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                !loadingWordCloud && <div>No reviews found.</div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyProfile;