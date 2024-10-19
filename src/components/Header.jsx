// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import countries from "./countries";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

// function Header() {
//   const [active, setActive] = useState(false);
//   const [showCountryDropdown, setShowCountryDropdown] = useState(false);
//   const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
//   const [theme, setTheme] = useState("light-theme");
//   const [isChecked, setIsChecked] = useState(false); // New state for checkbox
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const category = [
//     "business",
//     "entertainment",
//     "general",
//     "health",
//     "science",
//     "sports",
//     "technology",
//     "politics",
//   ];

//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme]);

//   // function handleSearch(e) {
//   //   e.preventDefault();
//   //   navigate(`/search/${searchTerm}`);  // Navigate to the search results page
//   // }

//   <li className="flex items-center">
//     <form onSubmit={handleSearch} className="flex items-center">
//       <input
//         type="text"
//         placeholder="Search News..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
//         className="py-2 px-4 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       />
//       <button
//         type="submit"
//         className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600 transition duration-200"
//       >
//         <FontAwesomeIcon icon={faCircleArrowDown} />
//       </button>
//     </form>
//   </li>;

//   function toggleTheme() {
//     if (theme === "light-theme") {
//       setTheme("dark-theme");
//     } else {
//       setTheme("light-theme");
//     }
//   }

//   function handleCheckboxChange() {
//     setIsChecked(!isChecked); // Toggle the checked state
//     toggleTheme(); // Call the theme toggle function when checkbox changes
//   }

//   return (
//     <header className="">
//       <nav className="fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-around">
//         <h3 className="relative heading font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50 mb-5 mt-5">
//           <img src="../public/img/logo.png" height={50} width={50} />
//         </h3>

//         <ul
//           className={
//             active
//               ? "nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active"
//               : "nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"
//           }
//         >
//           <li className="flex items-center">
//             <form onSubmit={handleSearch}>
//               <input
//                 type="text"
//                 placeholder="Search News..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
//                 className="search-input"
//               />
//               <button type="submit" className="search-button">
//                 Search
//               </button>
//             </form>
//           </li>
//           <li>
//             <Link
//               className="no-underline font-semibold"
//               to="/"
//               onClick={() => {
//                 setActive(!active);
//               }}
//             >
//               All News
//             </Link>
//           </li>
//           <li className="dropdown-li">
//             <Link
//               className="no-underline font-semibold flex items-center gap-2"
//               onClick={() => {
//                 setShowCategoryDropdown(!showCategoryDropdown);
//                 setShowCountryDropdown(false);
//               }}
//             >
//               Top-Headlines{" "}
//               <FontAwesomeIcon
//                 className={
//                   showCategoryDropdown
//                     ? "down-arrow-icon down-arrow-icon-active"
//                     : "down-arrow-icon"
//                 }
//                 icon={faCircleArrowDown}
//               />
//             </Link>

//             <ul
//               className={
//                 showCategoryDropdown
//                   ? "dropdown p-2 show-dropdown"
//                   : "dropdown p-2"
//               }
//             >
//               {category.map((element, index) => {
//                 return (
//                   <li
//                     key={index}
//                     onClick={() => {
//                       setShowCategoryDropdown(!showCategoryDropdown);
//                     }}
//                   >
//                     <Link
//                       to={"/top-headlines/" + element}
//                       className="flex gap-3 capitalize"
//                       onClick={() => {
//                         setActive(!active);
//                       }}
//                     >
//                       {element}
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </li>
//           <li className="dropdown-li">
//             <Link
//               className="no-underline font-semibold flex items-center gap-2"
//               onClick={() => {
//                 setShowCountryDropdown(!showCountryDropdown);
//                 setShowCategoryDropdown(false);
//               }}
//             >
//               Country{" "}
//               <FontAwesomeIcon
//                 className={
//                   showCountryDropdown
//                     ? "down-arrow-icon down-arrow-icon-active"
//                     : "down-arrow-icon"
//                 }
//                 icon={faCircleArrowDown}
//               />
//             </Link>
//             <ul
//               className={
//                 showCountryDropdown
//                   ? "dropdown p-2 show-dropdown"
//                   : "dropdown p-2"
//               }
//             >
//               {countries.map((element, index) => {
//                 return (
//                   <li
//                     key={index}
//                     onClick={() => {
//                       setShowCountryDropdown(!showCountryDropdown);
//                     }}
//                   >
//                     <Link
//                       to={"/country/" + element?.iso_2_alpha}
//                       className="flex gap-3"
//                       onClick={() => {
//                         setActive(!active);
//                       }}
//                     >
//                       <img
//                         src={element?.png}
//                         srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`}
//                         alt={element?.countryName}
//                       />
//                       <span>{element?.countryName}</span>
//                     </Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </li>
//           <li>
//             <input
//               type="checkbox"
//               className="checkbox"
//               id="checkbox"
//               checked={isChecked} // Bind the checkbox to the state
//               onChange={handleCheckboxChange} // Update the state on change
//             />
//             <label htmlFor="checkbox" className="checkbox-label">
//               <i className="fas fa-moon"></i>
//               <i className="fas fa-sun"></i>
//               <span className="ball"></span>
//             </label>
//           </li>

//           <li>
//             <Link
//               className="no-underline font-semibold sign-in-btn"
//               to="/login"
//             >
//               <button className="sign-in-button">Sign In</button>
//             </Link>
//           </li>
//           <li>
//             <Link
//               className="no-underline font-semibold sign-in-btn"
//               to="/profile"
//             >
//               <button className="sign-in-button">My profile</button>
//             </Link>
//           </li>
//         </ul>
//         <div
//           className={
//             active
//               ? "ham-burger z-index-100 ham-open"
//               : "ham-burger z-index-100"
//           }
//           onClick={() => {
//             setActive(!active);
//           }}
//         >
//           <span className="lines line-1"></span>
//           <span className="lines line-2"></span>
//           <span className="lines line-3"></span>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;

// // import React, { useState, useEffect } from "react";
// // import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate for programmatic navigation
// // import countries from "./countries";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';

// // function Header() {
// //   const [active, setActive] = useState(false);
// //   const [showCountryDropdown, setShowCountryDropdown] = useState(false);
// //   const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
// //   const [theme, setTheme] = useState("light-theme");
// //   const [isChecked, setIsChecked] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");  // New state for search term
// //   const navigate = useNavigate();  // Hook for programmatic navigation

// //   const category = ["business", "entertainment", "general", "health", "science", "sports", "technology", "politics"];

// //   useEffect(() => {
// //     document.body.className = theme;
// //   }, [theme]);

// //   function toggleTheme() {
// //     setTheme(theme === "light-theme" ? "dark-theme" : "light-theme");
// //   }

// //   function handleCheckboxChange() {
// //     setIsChecked(!isChecked);
// //     toggleTheme();
// //   }

// //   function handleSearch(e) {
// //     e.preventDefault();
// //     navigate(`/search/${searchTerm}`);  // Navigate to the search results page
// //   }

// //   return (
// //     <header>
// //       <nav className="fixed top-0 left-0 w-full h-auto bg-gray-800 z-10 flex items-center justify-around">
// //         <h3 className="relative heading font-bold md:basis-1/6 text-2xl xs:basis-4/12 z-50 mb-5 mt-5">
// //           <img src="../public/img/logo.png" height={50} width={50} />
// //         </h3>

// //         <ul className={active ? "nav-ul flex gap-11 active" : "nav-ul flex gap-14"}>
// //           {/* Search bar */}
// //           <li className="flex items-center">
// //             <form onSubmit={handleSearch}>
// //               <input
// //                 type="text"
// //                 placeholder="Search News..."
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}  // Update search term on change
// //                 className="search-input"
// //               />
// //               <button type="submit" className="search-button">Search</button>
// //             </form>
// //           </li>

// //           <li><Link to="/" onClick={() => setActive(!active)}>All News</Link></li>
// //           {/* Other nav links and dropdowns */}
// //           {/* ... */}
// //         </ul>

// //         <div className={active ? "ham-burger ham-open" : "ham-burger"} onClick={() => setActive(!active)}>
// //           <span className="lines line-1"></span>
// //           <span className="lines line-2"></span>
// //           <span className="lines line-3"></span>
// //         </div>
// //       </nav>
// //     </header>
// //   );
// // }

// // export default Header;





















import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import countries from "./countries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [active, setActive] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [theme, setTheme] = useState("light-theme");
  const [isChecked, setIsChecked] = useState(false); // New state for checkbox
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const category = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
    "politics",
  ];

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Handle search and navigation
  function handleSearch(e) {
    e.preventDefault();
    if (searchTerm.trim()) {  // Check if search term is not empty
      navigate(`/search/${searchTerm}`);  // Navigate to the search results page
      // http://localhost:8000/api/articles/?search=india
    }
  }

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light-theme" ? "dark-theme" : "light-theme"));
  }

  function handleCheckboxChange() {
    setIsChecked((prev) => !prev); // Toggle the checked state
    toggleTheme(); // Call the theme toggle function when checkbox changes
  }

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full bg-gray-800 z-10 flex items-center justify-between p-4 shadow-md">
        <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-500 to-pink-500 drop-shadow-lg tracking-wide">
          Tactical Trends
        </h3>
        <div className="flex-grow flex justify-center md:justify-end">
          <ul className={`nav-ul flex flex-wrap gap-6 justify-end`}>
            <li className="flex items-center">
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  placeholder="Search News..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
                  className="py-2 px-4 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600 transition duration-200"
                >
                  <FontAwesomeIcon  
                    className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"}
                    icon={faCircleArrowDown}
                  />
                </button>
              </form>
            </li>

            <li>
              <Link
                className="no-underline font-semibold text-white"
                to="/"
                onClick={() => setActive(!active)}
              >
                All News
              </Link>
            </li>
            
            <li className="dropdown-li">
              <Link
                className="no-underline font-semibold flex items-center gap-2 text-white"
                onClick={() => {
                  setShowCategoryDropdown(!showCategoryDropdown);
                  setShowCountryDropdown(false);
                }}
              >
                Top-Headlines{" "}
                <FontAwesomeIcon
                  className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"}
                  icon={faCircleArrowDown}
                />
              </Link>
              <ul className={showCategoryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
                {category.map((element, index) => (
                  <li key={index} onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}>
                    <Link
                      to={`/top-headlines/${element}`}
                      className="flex gap-3 capitalize text-gray-800"
                      onClick={() => setActive(!active)}
                    >
                      {element}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* <li className="dropdown-li">
              <Link
                className="no-underline font-semibold flex items-center gap-2 text-white"
                onClick={() => {
                  setShowCountryDropdown(!showCountryDropdown);
                  setShowCategoryDropdown(false);
                }}
              >
                Country{" "}
                <FontAwesomeIcon
                  className={showCountryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"}
                  icon={faCircleArrowDown}
                />
              </Link>
              <ul className={showCountryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
                {countries.map((element, index) => (
                  <li key={index} onClick={() => setShowCountryDropdown(!showCountryDropdown)}>
                    <Link
                      to={`/country/${element.iso_2_alpha}`}
                      className="flex gap-3"
                      onClick={() => setActive(!active)}
                    >
                      <img
                        src={element.png}
                        srcSet={`https://flagcdn.com/32x24/${element.iso_2_alpha}.png 2x`}
                        alt={element.countryName}
                      />
                      <span>{element.countryName}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li> */}
            <li>
              <Link className="no-underline font-semibold sign-in-btn" to="./Recommended">
                <button className="sign-in-button">Recommendation</button>
              </Link>
            </li>

            {/* <li className="flex items-center">
              <input
                type="checkbox"
                className="checkbox hidden"
                id="checkbox"
                checked={isChecked} // Bind the checkbox to the state
                onChange={handleCheckboxChange} // Update the state on change
              />
              <label htmlFor="checkbox" className="checkbox-label cursor-pointer flex items-center">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <span className="ball"></span>
              </label>
            </li> */}

            <li>
              <Link className="no-underline font-semibold sign-in-btn" to="/login">
                <button className="sign-in-button">Sign In</button>
              </Link>
            </li>
            <li>
              <Link className="no-underline font-semibold sign-in-btn" to="/profile">
                <button className="sign-in-button">My profile</button>
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={active ? "ham-burger z-index-100 ham-open" : "ham-burger z-index-100"}
          onClick={() => setActive(!active)}
        >
          <span className="lines line-1"></span>
          <span className="lines line-2"></span>
          <span className="lines line-3"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
