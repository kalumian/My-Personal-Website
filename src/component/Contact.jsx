import { useState } from "react";
import { useFirestore } from "../Database/useFirebase";
const init = { email: "", ad: "", message: "" };
function Contact() {
  const { setMessage } = useFirestore();

  const [input, setInput] = useState(init);

  const handleInput = ({ target }) => {
    setInput({ ...input, [target.name]: target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    setMessage(input.email, input.ad, input.message);
    setInput(init);
  };

  return (
    <section className="contact mts" id="Contact">
      <h2 className="title">Contact</h2>
      <form action="" onSubmit={submit}>
        <div className="row">
          <div className="input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="ad"
              value={input.ad}
              onChange={handleInput}
            />
          </div>
          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleInput}
              value={input.email}
            />
          </div>
        </div>
        <div className="row">
          <div className="input">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              maxlength="500"
              name="message"
              onChange={handleInput}
              value={input.message}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="input">
            <input type="submit" value="Submit" onClick={submit} />
            <div className="links">
              <a href="https://twitter.com/kalumian1" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/k_alu1/" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-kalumian-b026b6199/"
                target="_blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Contact;
