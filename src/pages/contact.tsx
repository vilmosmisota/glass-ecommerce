export default function Contact(): JSX.Element {
  return (
    <article className="contact-page-container">
      <h1>Contact Us</h1>
      <section className="contact-main">
        <p>
          If you have any questions or just want to say <q>Hi</q> send us an
          email to the address stated below. <br />
          Also, we would love to hear your feedback.
        </p>
        <div className="email-container">
          <div>
            <a
              href="mailto:info@glassphotobook.shop"
              className="send-booking-btn"
            >
              info@glassphotobook.shop
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
