import "./style.scss";

function SigIn() {
  if (localStorage.getItem("token")) {
    window.open("http://localhost:3000/searchusers", "_parent");
  } else {
    async function handleSignIn() {
      const CLIENTE_ID = "b0af5e7950abe1036b7f";
      const REDIRECT_URI = "http://localhost:3000/searchusers";
      const authUtl = `https://github.com/login/oauth/authorize?client_id=${CLIENTE_ID}&redirect_uri=${REDIRECT_URI}`;

      window.open(authUtl, "_parent");
    }

    return (
      <div>
        <button onClick={() => handleSignIn()}>Login With Git </button>
      </div>
    );
  }
}

export default SigIn;
