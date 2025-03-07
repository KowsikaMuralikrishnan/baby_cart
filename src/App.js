import React, { useState, useEffect } from "react";
import "./Index.css";
import Newborn from "./Newborn";
import Infant from "./Infant";
import Preschoolers from "./Preschoolers";
import KidsAccessories from "./KidsAccessories";
import Login from "./Login";
import Register from "./Register";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("selectedCategory") || null
  );
  const [loading, setLoading] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);
  const [username, setUsername] = useState("User");
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [currentView, setCurrentView] = useState("home");

  useEffect(() => {
    if (selectedCategory) {
      localStorage.setItem("selectedCategory", selectedCategory);
    }
  }, [selectedCategory]);

  const categories = [
    {
      name: "Newborn 🐣",
      description: "Soft and cozy essentials for your little one.",
      component: <Newborn />,
    },
    {
      name: "Infant 👶🏻",
      description: "Essential clothing and accessories for your infant.",
      component: <Infant />,
    },
    {
      name: "Preschoolers 🚸",
      description: "Stylish and fun outfits for preschoolers.",
      component: <Preschoolers />,
    },
    {
      name: "Kids Accessories 🎒",
      description: "Trendy and useful accessories for kids.",
      component: <KidsAccessories />,
    },
  ];

  const handleCategoryClick = (category) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedCategory(category);
      setLoading(false);
    }, 500);
  };

  const handleReset = () => {
    setSelectedCategory(null);
    localStorage.removeItem("selectedCategory");
  };

  const handleExplore = () => {
    setShowHomePage(true);
    setCurrentView("home");
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleGetAiHelpClick = () => {
    window.open(
      "https://copilot.microsoft.com/chats/yfYgEVNuA6BLf6oF6KDgZ",
      "_blank"
    );
  };

  const handleLoginClick = () => {
    setCurrentView("login");
  };

  const handleRegisterClick = () => {
    setCurrentView("register");
  };

  const handleLogin = (username) => {
    setUsername(username);
    setCurrentView("home");
  };

  const handleRegister = (username) => {
    setUsername(username);
    setCurrentView("home");
  };

  if (currentView === "login") {
    return <Login onLogin={handleLogin} onRegister={handleRegisterClick} />;
  }

  if (currentView === "register") {
    return <Register onRegister={handleRegister} />;
  }

  return (
    <div>
      {!showHomePage ? (
        <div
          className="landing-page"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            backgroundImage: `url("")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            gap: "10px",
            paddingTop: "30px",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/256/6979/6979417.png"
            alt="profile logo"
            style={{ width: "60px", marginTop: "2px" }}
          />
          <h1 style={{ color: "#fe63a1", marginTop: "5px" }}>
            Welcome to Tiny Trends
          </h1>
          <p style={{ color: "#9b6b6b", marginTop: "0" }}>
            Your go-to destination for adorable baby and kids' clothing 💕!
          </p>
          <p>
            <img
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTQxdTE5YmkyMDY0cnZhd2xmd3JycThudTNlYmVzazh5M3lzZ2wzMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/5QQ6FpAQ0syYLkONPB/giphy.gif"
              style={{ width: "15%", marginTop: "-30px" }}
            />
          </p>
          <button
            className="explore-button"
            onClick={handleExplore}
            style={{
              background: "linear-gradient(135deg, #ffe6f2, #fe63a1)",
              color: "#fff",
              border: "none",
              padding: "15px 40px",
              borderRadius: "25px",
              cursor: "pointer",
              fontSize: "1.20rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s, box-shadow 0.3s, color 0.3s",
              textAlign: "center",
              display: "inline-block",
              marginTop: "-25px" /* Moves the button upward */,
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
              e.target.style.color = "#fe63a1";
              e.target.style.background = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
              e.target.style.color = "#fff";
              e.target.style.background =
                "linear-gradient(135deg, #ffe6f2, #fe63a1)";
            }}
          >
            Explore
          </button>

          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHBpbTVhZXpkMzdwc2lxYjVrMXI2aGhrYXV2MzJwMmpobW84c2QwYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/4RLif9rtDPwI9sK9cR/giphy.gif" // Replace with the URL of your actual GIF
            alt="Offers and Discounts"
            style={{ width: "20%" }}
          />
        </div>
      ) : (
        <>
          <div className="navbar">
            <div
              className="project-title"
              style={{
                fontSize: "2.5em",
                textAlign: "left",
                paddingLeft: "20px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/6979/6979417.png"
                alt="logo"
                style={{ width: "60px", marginRight: "10px" }}
              />
              Tiny Trends
            </div>
            <div className="addtocart">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6152/6152489.png"
                alt="Profile"
              />
            </div>
            <div className="profile-button" onClick={toggleProfileDropdown}>
              <img
                src="https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_960_720.png"
                alt="Profile"
              />
              {showProfileDropdown && (
                <div className="profile-dropdown">
                  <p className="profile-greeting">Hello, {username}!</p>
                  <div className="profile-content" onClick={handleLoginClick}>
                    Login/Register
                  </div>
                  <div
                    className="profile-content"
                    onClick={handleGetAiHelpClick}
                  >
                    Get AI Help
                  </div>
                  <button className="reset-button" onClick={handleReset}>
                    Back
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="category-buttons">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.name)}
                className={
                  selectedCategory === category.name ? "active-button" : ""
                }
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="Shopping-Container">
            {loading ? (
              <div className="loader">Loading...</div>
            ) : selectedCategory ? (
              categories.map(
                (category, index) =>
                  selectedCategory === category.name && (
                    <div key={index} className="category-display">
                      <h2>{category.name}</h2>
                      <p className="category-description">
                        {category.description}
                      </p>
                      <div className="category-content">
                        {category.component}
                      </div>
                    </div>
                  )
              )
            ) : (
              <p className="default-message">
                Pick a category to find adorable items for your baby!
              </p>
            )}
          </div>
          {selectedCategory && (
            <>
              {/* Back Button */}
              <div className="button-container">
                <button className="reset-button" onClick={handleReset}>
                  Back
                </button>
              </div>

              {/* Footer */}
              <footer
                style={{
                  backgroundColor: "#ffe6f2", // Soft pink background
                  color: "#555",
                  padding: "0px 20px",
                  position: "relative",
                  width: "100%",
                  borderTop: "3px solid #ff99cc",
                  fontFamily: "'Poppins', sans-serif",
                  marginTop: "40px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    flexWrap: "wrap",
                  }}
                >
                  {/* About Us Section */}
                  <div>
                    <h3 style={{ fontWeight: "bold", color: "#ff66a3" }}>
                      ABOUT TINY TRENDS
                    </h3>
                    <p>Our Story</p>
                    <p>Quality Promise</p>
                    <p>Sustainability</p>
                    <p>Press Inquiries</p>
                    <p>Careers</p>
                  </div>

                  {/* Customer Support Section */}
                  <div>
                    <h3 style={{ fontWeight: "bold", color: "#ff66a3" }}>
                      CUSTOMER SUPPORT
                    </h3>
                    <p>Returns & Exchanges</p>
                    <p>Shipping Information</p>
                    <p>Track Your Order</p>
                    <p>Size Guide</p>
                    <p>FAQ</p>
                  </div>

                  {/* Connect With Us Section */}
                  <div style={{ textAlign: "center" }}>
                    <h3 style={{ fontWeight: "bold", color: "#ff66a3" }}>
                      CONNECT WITH US
                    </h3>
                    <div>
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                          alt="Facebook"
                          style={{ width: "28px", margin: "5px" }}
                        />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="https://www.freepnglogos.com/uploads/twitter-x-logo-png/twitter-x-logo-png-9.png"
                          alt="Twitter"
                          style={{ width: "25px", margin: "7px" }}
                        />
                      </a>
                      <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="https://www.freeiconspng.com/uploads/youtube-logo-png-hd-14.png"
                          alt="YouTube"
                          style={{ width: "34px", margin: "6px" }}
                        />
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                          alt="Instagram"
                          style={{ width: "28px", margin: "5px" }}
                        />
                      </a>
                      <a
                        href="https://pinterest.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
                          alt="Pinterest"
                          style={{ width: "28px", margin: "5px" }}
                        />
                      </a>
                    </div>
                    <p>
                      Subscribe to our Newsletter for the latest baby trends!
                    </p>
                    <button
                      style={{
                        backgroundColor: "#ff99cc",
                        color: "#fff",
                        border: "none",
                        padding: "12px 20px",
                        marginTop: "10px",
                        cursor: "pointer",
                        fontSize: "16px",
                        borderRadius: "8px",
                        fontWeight: "bold",
                        transition: "background 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.background = "#ff99cc")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.background = "#ff66a3")
                      }
                      onClick={() =>
                        (window.location.href =
                          "https://www.youtube.com/@TINYTRENDS123/featured")
                      }
                    >
                      🥰 Join the Tiny Trends Family!
                    </button>
                  </div>
                </div>

                {/* Bottom Links */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between", // This will spread the items across the row
                    marginTop: "20px",
                    borderTop: "2px dotted #ff66a3",
                    paddingTop: "10px",
                  }}
                >
                  <a
                    href="#"
                    style={{
                      color: "#ff66a3",
                      textDecoration: "none",
                      flex: "1", // Ensures the links occupy the full row with equal space between them
                      textAlign: "center", // Center the text within each link
                    }}
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    style={{
                      color: "#ff66a3",
                      textDecoration: "none",
                      flex: "1",
                      textAlign: "center",
                    }}
                  >
                    Terms & Conditions
                  </a>
                  <a
                    href="#"
                    style={{
                      color: "#ff66a3",
                      textDecoration: "none",
                      flex: "1",
                      textAlign: "center",
                    }}
                  >
                    Accessibility Statement
                  </a>
                </div>
              </footer>
            </>
          )}
        </>
      )}
    </div>
  );
}
