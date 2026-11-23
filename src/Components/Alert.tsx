import { type ReactNode } from "react";

interface AlertProps {
  children: ReactNode;
  onClose: (isVisible: boolean) => void;
}

export default function Alert({ children, onClose }: AlertProps) {
  return (
    // <div className="alert alert-primary" role="alert">
    //   {children}
    // </div>
    <div className="alert alert-primary" role="alert">
      {children}
      <button
        type="button"
        className="btn-close ms-auto"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => onClose(false)}
      ></button>
    </div>
  );
}
