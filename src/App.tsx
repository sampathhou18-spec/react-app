import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";
import Button from "./components/Button.tsx";
import { useState } from "react";

export default function App() {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const handleSelectedItem = (name: string) => {
    console.log(name);
  };

  const handleClick = (isVisible: boolean) => {
    console.log("Button clicked");
    setIsAlertVisible(isVisible);
  };

  return (
    <div>
      {isAlertVisible && (
        <Alert onClose={setIsAlertVisible}>
          This is a <strong>primary</strong> alert—check it out!
        </Alert>
      )}
      <Button onClick={setIsAlertVisible} />

      {/* <ListGroup
        items={items}
        heading="cities"
        onSelectedItem={handleSelectedItem}
      /> */}
    </div>
  );
}
