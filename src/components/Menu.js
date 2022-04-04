import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faInfoCircle,
  faShareAltSquare,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          <Link to={"/information"}>
            <div className="icon_and_name_wrapper">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="individual-icon"
              />

              <p>More information</p>
            </div>
          </Link>
          <Link to={"/support"}>
            <div className="icon_and_name_wrapper">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="individual-icon"
              />
              <p>Support</p>
            </div>
          </Link>
          <div className="icon_and_name_wrapper">
            <FontAwesomeIcon
              icon={faShareAltSquare}
              className="individual-icon"
            />
            <p
              onClick={() => {
                navigator.clipboard.writeText("https://movesit.herokuapp.com/");
                clickHandler();
              }}
            >
              Click here to copy the link for the Moves it and share it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
