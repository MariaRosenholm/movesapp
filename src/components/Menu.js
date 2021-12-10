import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faInfoCircle,
  faShareAltSquare,
  faQuestionCircle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function Menu() {
  let location = useLocation();
  let path = location.pathname;
  let dotsVertical = "";

  const [classes, setClasses] = useState("menu hide");

  useEffect(() => {
    setClasses("menu hide");
  }, [location]);

  const clickHandler = () => {
    classes.includes("hide") ? setClasses("menu") : setClasses("menu hide");
  };

  if (path === "/new" || path.includes("/edit")) return <></>;
  if (path === "/search") dotsVertical = "dots-vertical";

  return (
    <div className="menu-icon">
      <FontAwesomeIcon
        icon={faEllipsisH}
        className={"footericon " + dotsVertical}
        onClick={clickHandler}
      />
      <div className={classes}>
        <div className="icons-wrapper">
          <div className="icon_and_name_wrapper">
            <FontAwesomeIcon icon={faInfoCircle} className="individual-icon" />

            <p>information</p>
          </div>

          <div className="icon_and_name_wrapper">
            <FontAwesomeIcon
              icon={faShareAltSquare}
              className="individual-icon"
            />
            <p>share link</p>
          </div>

          <div className="icon_and_name_wrapper">
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className="individual-icon"
            />
            <p>support</p>
          </div>

          <div className="icon_and_name_wrapper">
            <FontAwesomeIcon icon={faSignOutAlt} className="individual-icon" />
            <p>sign out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
