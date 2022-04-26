import React from "react";
import { NavLink } from "react-router-dom";
import "./Links.css"

const links = [
  { url: "/search", text: "🔎 All" },
  { url: "/news", text: "📰 News" },
  { url: "/image", text: "📸 Images" },
  { url: "/video", text: "📺 Videos" },
];

const Links = () => {
  return (
    <div className="flex sm:justify-around justify-between items-center mt-4">
      {links.map(({ url, text }, index) => (
        <NavLink
        key={index}
          to={url}
          className="m-2 mb-0"
          // activeClassName="active"
        >
          {text}
        </NavLink>
      ))}
    </div>
  );
};

export default Links;
