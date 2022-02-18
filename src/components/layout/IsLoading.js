import React from "react";
import IsLoadingIcon from "../customIcons/IsLoadingIcon";

function IsLoading() {
  return (
    <div className=" isloading isLoading">
      <h1 className="isLoading__text">loading...</h1>
      <IsLoadingIcon className="isLoading__icon" />
    </div>
  );
}

export default IsLoading;
