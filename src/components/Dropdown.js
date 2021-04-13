import React, { useState } from 'react';

// the drop dwon bar does not have access to the portfolio's which it will need to have later down the project to display them untill then experiment inside of the seperate component.

import '../style/Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  // I am able to add more items to this list has time goes by.

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {/* {Portfoliodata.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className= 'dropdown-link'
                to= {"/portfolio/" + index}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })} */}
      </ul>
    </>
  );
}

export default Dropdown