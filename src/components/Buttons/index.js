import "./style.scss";
function ButtonsComp({ textButton, ...props }) {
  return <button className="buttonSearch">{textButton}</button>;
}

export default ButtonsComp;
