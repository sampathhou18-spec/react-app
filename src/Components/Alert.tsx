interface SelectedItem {
  item: string;
}

export default function Alert({ item }: SelectedItem) {
  return (
    <div className="alert" role="alert">
      {item ? item + " is selected" : ""}
    </div>
  );
}
