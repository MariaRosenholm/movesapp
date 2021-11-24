import React from "react";

const Main = () => {
  return (
    <div className="main-area">
      <div className="main-text">
        <h1 className="h1-dance">Dan<span className="ce">ce</span></h1>
        <h1 className="h1-move">Mo<span className="ves">ves</span></h1>
      </div>
      <form className="login">
        <div>
          <label htmlFor="username">USERNAME</label>
          <input type="text" name="username" id="username" required></input>
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <input type="password" name="password" id="password" required></input>
        </div>
        <div className="main-submit">
          <input id="main-submit" type="submit" value="sign in" />
        </div>
      </form>
    </div>
  );
};

export default Main;
