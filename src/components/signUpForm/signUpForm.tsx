import { RiThumbUpFill } from "react-icons/ri";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SignUpForm() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const subscribe = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/newsletter", {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      console.log(error);
      setMessage("email is already used");

      return;
    }

    setMessage("Success! You are signed up");
  };
  return (
    <>
      <form className="signUpForm-container" onSubmit={subscribe}>
        <label htmlFor="email-input">
          <input
            id="email-input"
            name="email"
            placeholder="you@awesome.com"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <div className="message">{message ? message : null}</div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <RiThumbUpFill />
        </motion.button>
      </form>
    </>
  );
}
