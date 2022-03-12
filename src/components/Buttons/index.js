import "./style.scss";
function ButtonsComp({ ...props }) {
  return (
    <button {...props} className="buttonSearch">
      <a href="/detailedResult">Detailed Result</a>
    </button>
  );
}

export default ButtonsComp;
