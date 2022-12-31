import classNames from "classnames";
import React from "react";
type Props = {
  text: string;
  active: boolean;
  id: string;
  onClick(id: string): void;
};
const TocItem = (props: Props) => {
  return (
    <a
      href={`#${props.id}`}
      className={classNames({
        "link-hover text-sm capitalize transition-colors hover:brightness-125":
          true,
        "text-purple-500": props.active,
      })}
      onClick={() => props.onClick(props.id)}
      dangerouslySetInnerHTML={{ __html: props.text }}
    />
  );
};

export default TocItem;
