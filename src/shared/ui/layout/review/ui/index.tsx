import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import Button from "@shared/ui/Button/ui";
import cn from "classnames";
import styles from "./styles.module.scss";

interface ReviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  text: string;
  buttonText: string;
  onClick: () => void;
}

const Review: React.FC<ReviewProps> = props => {
  const { text, buttonText, onClick } = props;
  return (
    <div className={cn(styles.root)}>
      <span>{text}</span>
      <div className={cn(styles.buttonSection)}>
        <Button mode="red" onClick={onClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default Review;
