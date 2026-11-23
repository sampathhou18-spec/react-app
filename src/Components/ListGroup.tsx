import { Fragment, useState, type MouseEvent } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectedItem: (name: string) => void;
}

export default function ListGroup({
  items,
  heading,
  onSelectedItem,
}: ListGroupProps) {
  const handleClick = (event: MouseEvent) => {
    console.log(event.currentTarget.textContent);
  };

  const [selectedItem, setSelectedItem] = useState(-1);

  // items = [];
  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedItem(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}

        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </Fragment>
  );
}
