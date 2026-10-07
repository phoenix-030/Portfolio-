import styles from "../styles/Contact.module.css";
import { useState } from 'react'
import Arrow from './Arrow'
import SocialIcon from './SocialIcon'
const email = 'codex.codecraft28@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  const sendMessage = (event) => { event.preventDefault(); setIsOpen(false); setSent(true); window.setTimeout(() => setSent(false), 2800) }

  return (
    <>
      <section className={styles["contact"]} id="contact">
        <div className={styles["shell"]}>
          <button
            className={styles["floating-email-icon"]}
            type="button"
            onClick={() => {
              setIsOpen(true);
              setSent(false);
            }}
            aria-label="Open message form"
          >
            <img src="/mail.png" alt="" />
          </button>
          <p className={styles["section-number"]}>05 / CONTACT</p>
          <h2>
            Have an idea?
            <br />
            <em>Let’s make it real.</em>
          </h2>
          {sent && (
            <p className={styles["send-confirmation"]}>
              Thank you for visiting — your message has been sent.
            </p>
          )}
          {isOpen && (
            <div
              className={styles["contact-form-backdrop"]}
              role="presentation"
              onMouseDown={() => setIsOpen(false)}
            >
              <form
                className={styles["contact-form"]}
                aria-label="Contact form"
                onSubmit={sendMessage}
                onMouseDown={(event) => event.stopPropagation()}
              >
                <button
                  className={styles["modal-close"]}
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close contact form"
                >
                  ×
                </button>
                <p className={styles["section-number"]}>MESSAGE / HK</p>
                <h3>Start a conversation.</h3>
                <p>Leave your details and a short message. I’ll be happy to connect.</p>
                <label>
                  Name
                  <input name="name" required placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required placeholder="you@example.com" />
                </label>
                <label>
                  Message
                  <textarea
                    name="message"
                    required
                    placeholder="What would you like to say?"
                    rows="4"
                  />
                </label>
                <div className={styles["form-actions"]}>
                  <button className={styles["send-button"]} type="submit">
                    Send message <Arrow />
                  </button>
                </div>
                <button
                  className={[styles["copy-email"], styles["form-copy"]].join(" ")}
                  type="button"
                  onClick={copyEmail}
                >
                  {copied ? "Email copied!" : "Copy email"}
                </button>
              </form>
            </div>
          )}
          <div className={styles["socials"]}>
            <a href="https://github.com/phoenix-030" target="_blank" rel="noreferrer">
              <SocialIcon name="github" />
              GitHub <Arrow className={styles["social-arrow"]} />
            </a>
            <a
              href="https://www.linkedin.com/in/harishkumar-v-3a34942a8/"
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon name="linkedin" />
              LinkedIn <Arrow className={styles["social-arrow"]} />
            </a>
            <a href="https://www.instagram.com/memoriez_03/" target="_blank" rel="noreferrer">
              <SocialIcon name="instagram" />
              Instagram <Arrow className={styles["social-arrow"]} />
            </a>
            <a href="https://x.com/animix_03x" target="_blank" rel="noreferrer">
              <SocialIcon name="x" />
              X <Arrow className={styles["social-arrow"]} />
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
