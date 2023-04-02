import React from "react";
import "./App.css";

export default function Tlanding() {
  return (
    <div className="container">
      <header>
        <h1 style={{ color: "#A9907E" }}>Welcome to My Landing Page</h1>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Section 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            hendrerit ultrices ex, euismod gravida mauris bibendum sed. Sed
            feugiat lorem ipsum, ac laoreet velit aliquet at. Duis eu dui
            tincidunt, viverra metus vel, imperdiet sapien.
          </p>
        </section>
        <section>
          <h2>Section 2</h2>
          <p>
            Morbi euismod tristique enim, eget bibendum ipsum elementum at.
            Proin venenatis, dolor ac malesuada finibus, lectus enim tristique
            mi, ut consectetur tortor dolor eget dui. Sed semper sapien id
            sollicitudin dictum.
          </p>
        </section>
      </main>
      <footer style={{ backgroundColor: "#F3DEBA", color: "#675050" }}>
        <p>&copy; 2023 My Company</p>
      </footer>
    </div>
  );
}
