import React from "react";

const SeperatedList = ({ items }: { items: string[] }) => {
  return (
    <ul className="counter-reset list-none p-0">
      {items.map((item, index) => (
        <>
          <li
            key={`item-${index}-1`}
            className="counter-increment flex items-center py-3 box-border border-t border-white/20 first:border-t-0"
          >
            {item}
          </li>
        </>
      ))}
    </ul>
  );
};

export default SeperatedList;
