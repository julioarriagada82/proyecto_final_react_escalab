import React, { Fragment } from "react";
import LabelTitle from "../label-title/LabelTitle.component";
import "./Lists.styles.scss";

const TextList = ({ title, items, production_countries, spoken_languages, collection }) => (
  <Fragment>
    <LabelTitle text={title} />
    <ul className="list">
      {items && collection
        ? items.slice(0, 3).map((item) => (
            <li className="list__item" key={item.id}>
              {item.name}
            </li>
          ))
        : items && production_countries
        ? items.map((item) => (
            <li className="list__item" key={item.iso_639_1}>
              {item.name}
            </li>
          ))
        : items && production_countries
        ? items.map((item) => (
            <li className="list__item" key={item.iso_3166_1}>
              {item.name}
            </li>
          ))
        : items && spoken_languages
        ? items.map((item) => (
            <li className="list__item" key={item.name}>
              {item.name}
            </li>
          ))
        : items.map((item) => (
            <li className="list__item" key={item.id}>
              {item.name}
            </li>
          ))}
    </ul>
  </Fragment>
);

export default TextList;
