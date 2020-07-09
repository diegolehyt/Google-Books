import React from "react";

const styles = {
  headerC: {
    backgroundColor: "cyan"
  }
}

function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header aqua-gradient">
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;
