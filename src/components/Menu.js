import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function Menu() {
  let location = useLocation();
  let path = location.pathname;

  const [classes, setClasses] = useState("menu hide");

  useEffect(() => {
    setClasses("menu hide");
  }, [location]);

  const clickHandler = () => {
    classes.includes("hide") ? setClasses("menu") : setClasses("menu hide");
  };

  if (path === "/new" || path.includes("/edit")) return <></>;

  return (
    <div className="menu-icon">
      <FontAwesomeIcon
        icon={faEllipsisH}
        className="footericon"
        onClick={clickHandler}
      />
      <div className={classes}>
        <p>about</p>
        <p>sign out</p>
      </div>
    </div>
  );
}

export default Menu;
