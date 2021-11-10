import { RiThumbUpFill } from "react-icons/ri";

export default function SignUpForm() {
  return (
    <>
      <form className="signUpForm-container">
        <label htmlFor="email-input">
          {"Email"}
          <input
            id="email-input"
            name="email"
            placeholder="you@awesome.com"
            required
            type="email"
          />
        </label>
        <button type="submit">
          <RiThumbUpFill />
        </button>
      </form>
    </>
  );
}
