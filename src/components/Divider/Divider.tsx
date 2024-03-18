import "./Divider.css";

type DividerProps = {
  size?: ("micro" | "small" | "large") | string;
};

function getDividerSize(size: DividerProps["size"] = "large") {
  switch (size) {
    case "micro":
      return "divider divider-micro";
    case "small":
      return "divider divider-small";
    case "large":
    default:
      return "divider-large";
  }
}

function Divider({ size }: DividerProps) {
  const dividerClass = getDividerSize(size);

  return <hr className={dividerClass} />;
}

export default Divider;
