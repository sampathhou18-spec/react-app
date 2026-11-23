import ListData from "./components/ListGroup.tsx";
import Button from "./components/Button.tsx";
import { useState } from "react";
import Alert from "./components/Alert.tsx";

export default function App() {
  const [isListVisible, setIsListVisible] = useState(true);
  const [selectedItem, setSelectedItem] = useState("");

  const handleListVisibility = () => {
    isListVisible ? setIsListVisible(false) : setIsListVisible(true);
  };

  return (
    <>
      {isListVisible && <Alert item={selectedItem} />}
      <Button
        onClick={handleListVisibility}
        heading={isListVisible ? "Hide List" : "Display List"}
      />
      {isListVisible && <ListData selectedItem={setSelectedItem} />}
    </>
  );
}
