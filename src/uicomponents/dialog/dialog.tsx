import React from "react";
import MUDialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import classes from "./dialog.module.scss";

interface IProps {
  className?: string;
  isOpen: boolean;
  children: JSX.Element;
  header?: string;
  onClose: () => void;
}

const Dialog = (props: IProps) => {
  const { className, isOpen, children, header, onClose } = props;
  return (
    <MUDialog open={isOpen} className={className} onClose={onClose}>
      <DialogTitle>{header}</DialogTitle>
      <div className={classes.content}>{children}</div>
    </MUDialog>
  );
};
export default Dialog;
