import { useState } from "react";

interface ListGroupProps {
  selectedItem: (item: string) => void;
}

export default function ListGroup({ selectedItem }: ListGroupProps) {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  // items = [];

  const [selectedItemPosition, setSelectedItem] = useState(-1);

  return (
    <>
      <p>List items</p>
      {items.length === 0 ? (
        <p>No items found</p>
      ) : (
        <ul className="list-group">
          {items.map((item, id) => (
            <li
              className={
                selectedItemPosition === id
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={id}
              onClick={() => {
                setSelectedItem(id);
                selectedItem(item);
              }}
            >
              {id + ". " + item}
            </li>
          ))}
        </ul>
      )}
      ;
    </>
  );
}
