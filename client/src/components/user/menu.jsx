
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../user/menu.css";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/fetchmenu") // Make sure proxy is set or full URL is used
      .then((res) => {
        setMenuItems(res.data.data);
      })
      .catch((err) => {
        console.error("Failed to fetch menu items", err);
      });
  }, []);

  // Group items by category
  const grouped = menuItems.reduce((acc, item) => {
    const cat = item.category || "Others";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  return (
    <div>
      <section className="menu-box">
        <img src="src/assets/food1.png" alt="Skewers" className="decor left" />
        <img
          src="src/assets/salad 1.png"
          alt="Salad"
          className="decor left bottom"
        />
        <img src="src/assets/food 2.png" alt="Board" className="decor right" />

        {/* Render each category */}
        {Object.keys(grouped).map((category) => (
          <div key={category}>
            <h2>{category.toUpperCase()}</h2>
            <div className="items-grid">
              {/* Split into two columns */}
              <div className="col">
                {grouped[category]
                  .filter((_, index) => index % 2 === 0)
                  .map((item, index) => (
                    <div key={index}>
                      <div className="item">
                        <span>{item.name}</span>
                        <span>${item.rate}</span>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  ))}
              </div>
              <div className="col">
                {grouped[category]
                  .filter((_, index) => index % 2 !== 0)
                  .map((item, index) => (
                    <div key={index}>
                      <div className="item">
                        <span>{item.name}</span>
                        <span>${item.rate}</span>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}

        <p className="option">Option to add protein</p>
        <div className="salads">
          <img
            src="src/assets/salad price.png"
            alt="Salad"
            className="salad-img"
          />
        </div>
      </section>
    </div>
  );
};

export default Menu;
