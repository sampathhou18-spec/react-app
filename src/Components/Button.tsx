interface ButtonProps {
  onClick: (isVisible: boolean) => void;
}

export default function Button({ onClick }: ButtonProps) {
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => onClick(true)}
    >
      Create alert
    </button>
  );
}
4;
