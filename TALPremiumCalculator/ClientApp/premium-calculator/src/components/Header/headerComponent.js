import React from "react";
export const Header = props => {
  return (
    <div>
      {!props.isSubHeader ? (
        <h1>{props.heading}</h1>
      ) : (
        <h2>{props.subHeading}</h2>
      )}
    </div>
  );
};
