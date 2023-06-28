import { FunctionComponent, ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

const Wrapper: FunctionComponent<WrapperProps> = ({ children }) => {
  return <div className="mx-auto w-4/5 max-w-6xl sm:w-11/12">{children}</div>;
};

export { Wrapper };
