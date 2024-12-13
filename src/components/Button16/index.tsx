import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface IButton16Props extends ButtonProps {
  children: React.ReactNode;
  props?: any;
}

const Button16: React.FC<IButton16Props> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default Button16;
