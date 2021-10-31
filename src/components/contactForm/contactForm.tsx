export default function ContactForm(): JSX.Element {
  return (
    <form className="contact-form">
      <h1>Contact us</h1>

      <section>
        <label>Name</label>
        <input
          type="text"
          className="name-input"
          name="name"
          placeholder="Your name..."
          required
        ></input>
      </section>

      <section>
        <label>Email</label>
        <input
          type="email"
          className="email-input"
          name="email"
          placeholder="Your email..."
          required
        ></input>
      </section>
      <section>
        <label>Subject</label>
        <input
          type="text"
          className="subject-input"
          name="subject"
          placeholder="What is the subject?"
          required
        ></input>
      </section>
      <section>
        <label className="message-label">Message</label>
        <textarea
          className="message-input"
          name="message"
          placeholder="Your message..."
          required
        ></textarea>
      </section>
      <section>
        <input type="submit" value="Submit" className="submit-form"></input>
      </section>
    </form>
  );
}
