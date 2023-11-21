
import {useState} from 'react'
import { Link } from "react-router-dom";

function Header() {
  const [toggleHeader, setToggleHeader] = useState(false)

    const HeaderLinks = [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "Shoes",
        link: "/shoes",
      },
      {
        title: "Add",
        link: "/shoes/add",
      },
    ];

  return (
    <body>
      <header class="site-header">
        <div class="site-identity">
          <h1>
            <a href="#">Good Cause T-shirts</a>
          </h1>
        </div>
        <nav class="site-navigation">
          <ul class="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shoes">T-shirts</Link>
            </li>
            <li>
              <Link to="/shoes/add">Add</Link>
            </li>
            
          </ul>
        </nav>
      </header>
    </body>
  );
}

export default Header