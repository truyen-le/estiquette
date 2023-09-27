import { ReactNode } from "react";

type ItalicTextProps = { children: ReactNode };

const ItalicText = ({ children }: ItalicTextProps) => {
  return <i>{children}</i>;
};

export default ItalicText;
