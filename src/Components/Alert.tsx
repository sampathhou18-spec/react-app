interface SelectedItem {
  item: string;
}

export default function Alert({ item }: SelectedItem) {
  return (
    <div className="alert" role="alert">
      <p>{item} is selected</p>
    </div>
  );
}
