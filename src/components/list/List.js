import React from 'react';
import './List.css';

const makeItem = (e) => {
  return (
    <li className="list__item" key={e.id}>
      {e.name}
    </li>
  );
};

function List({ list, maker = makeItem, title }) {
  return (
    <div>
      <h3 className="list__heading">{title}</h3>
      <ul className="list">
        {list.map((e) => {
          const item = maker(e);
          return item;
        })}
      </ul>
    </div>
  );
}

export default List;
