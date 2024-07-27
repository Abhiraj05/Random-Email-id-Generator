import { useState, useCallback, useRef } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState();
  //function to generate a random email
  const generate = useCallback(() => {
    let str = "abcdefghilnmopqrstuvwxyz123456789";
    let mailid = "";

    const emaillength = Math.floor(Math.random() * 15 + 3);
    for (let i = 1; i <= emaillength; i++) {
      const character = Math.floor(Math.random() * str.length + 1);
      mailid += str.charAt(character);
    }
    mailid += "@gmail.com";
    setEmail(mailid);
  }, [setEmail]);
  const emailref = useRef(null);
  const copy = useCallback(() => {
    emailref.current?.select();
    window.navigator.clipboard.writeText(email);
  }, [email]);


  return (
    <>

      <div id="container">
        <h1 id='heading'>random email id generator</h1>
        <div id="searchbox">
          <input
            placeholder="example@gmail.com"
            id="inputbox"
            type="text"
            readOnly
            value={email}
            ref={emailref}
          />
          <button id="btn" onClick={copy}>
            copy
          </button>
        </div>
        <button id="gen" onClick={generate}>
          generate
        </button>
      </div>
      <footer>
        <p id='footer-text'>made  with 	&hearts;  by abhiraj</p>
      </footer>
    </>
  );
}

export default App;
