import React from "react";

export default function ColorFlipper(props) {
  return (
    <section className="ColorFlipper">
      <div className="bg-wrap">
        <span className="bgcor">
          BackgroundColor: <span className="cor">{props.bgcor}</span>
        </span>
      </div>
    </section>
  );
}
