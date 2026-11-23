interface ButtonProps {
  onClick: () => void;
  heading: string;
}

export default function Button({ onClick, heading }: ButtonProps) {
  return (
    <button type="button" className="btn btn-primary" onClick={() => onClick()}>
      {heading}
    </button>
  );
}
4;
