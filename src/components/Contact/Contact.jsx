import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "@/utils/Icons";
import Image from "next/image";
import { animate } from "motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const containerRef = React.useRef(null);
  const formRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacityTransform = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 1, 0]
  );
  const rotateTransform = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const transformY = useTransform(scrollYProgress, [0, 1], ["50%", "-50%"]);

  const failAnimating = async () => {
    await animate(".buttonText", { opacity: 0 }, { duration: 0.1 });
    animate(".failedText", { opacity: 1 }, { duration: 0.1 });
    await animate(
      ".sendButton",
      {
        width: "7rem",
        height: "2.5rem",
        background: "#dc2626",
      },
      { duration: 0.3, ease: "easeInOut" }
    );
    animate(
      ".sendButton",
      {
        width: "15rem",
        borderRadius: "4px",
        background: "var(--color-fuchsia-500)",
      },
      { duration: 0.3, ease: "easeInOut", delay: 2 }
    );
    await animate(".failedText", { opacity: 0 }, { duration: 0.1, delay: 2 });
    animate(".buttonText", { opacity: 1 }, { duration: 0.1 });
  };

  const startAnimating = async () => {
    animate(".buttonText", { display: "none" }, { duration: 0.1 });
    await animate(
      ".sendButton",
      { width: "2.75rem", height: "2.75rem", borderRadius: "50%" },
      { duration: 0.3, ease: "easeInOut" }
    );
    await animate(
      ".sendButton",
      { scale: [0.8, 1.2, 0.8, 1], background: "var(--color-green-500)" },
      { duration: 0.5, ease: "easeInOut" }
    );
    animate(".check-icon", { opacity: 1 }, { duration: 0.1 });
    await animate(
      ".check-icon path",
      { pathLength: 1 },
      { duration: 0.5, ease: "easeInOut" }
    );
    animate(
      ".sendButton",
      {
        width: "15rem",
        borderRadius: "4px",
        background: "var(--color-fuchsia-500)",
      },
      { duration: 0.3, ease: "easeInOut", delay: 2 }
    );
    animate(".buttonText", { display: "block" }, { duration: 0.1, delay: 2 });
    animate(".check-icon", { opacity: 0 });
    await animate(".check-icon path", { pathLength: 0, delay: 2 });
  };

  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  });
  const [status, setStatus] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setLoading(false);
          setStatus("Message sent successfully");
          setForm({ name: "", email: "", phone: "", inquiry: "", message: "" });
          startAnimating();
        },
        (error) => {
          setLoading(false);
          setStatus("Failed to send message. Please try again.");
          failAnimating();
        }
      );
  };

  return (
    <div
      ref={containerRef}
      id="contact"
      className="sectionContainer bg-black h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="sectionHeader text-left w-full">Contact me</div>
      <motion.div
        style={{
          rotateZ: rotateTransform,
          opacity: opacityTransform,
          y: transformY,
        }}
        className="flex items-center justify-center w-full h-full"
      >
        <form
          ref={formRef}
          className=" w-full md:w-[30%] rounded-xl bg-neutral-900 p-6 flex flex-col gap-4 border border-neutral-800 shadow-[0px_0px_12px_0px_#f7fafc]"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            placeholder="Name"
            className="inputStyle "
            name="name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="inputStyle "
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional)"
            className="inputStyle "
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
          <select
            className="inputStyle "
            value={form.inquiry}
            name="inquiry_type"
            onChange={(e) =>
              setForm((f) => ({ ...f, inquiry: e.target.value }))
            }
            required
          >
            <option value="">Inquiry Type</option>
            <option value="general">General</option>
            <option value="collaboration">Collaboration</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
          <textarea
            placeholder="Message"
            rows={5}
            name="message"
            className="inputStyle  resize-none"
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
            required
          />
          <div className="relative mx-auto w-[15rem] flex justify-center items-center py-3">
            <motion.button
              type="submit"
              className="sendButton buttonStyle text-lg flex items-center justify-center relative"
              style={{ width: "15rem" }}
              disabled={loading}
            >
              <span className="buttonText">
                {loading ? status || "Sending..." : "Send Message"}
              </span>
              <span
                className="failedText absolute inset-0 top-[18%] "
                style={{ opacity: 0 }}
              >
                Failed
              </span>
            </motion.button>
            <motion.svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="#FFFFFF"
              strokeWidth="{3}"
              className="check-icon h-8 w-8 absolute inset-0 m-auto z-50 pointer-events-none"
              style={{ opacity: 0 }}
            >
              <motion.path
                initial={{ pathLength: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </motion.svg>
          </div>
          <div className="flex justify-center gap-6 pt-4">
            <a
              href="https://www.linkedin.com/in/nitesh-kumar-rai-397241193/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image
                src={LinkedInIcon.src}
                alt="LinkedIn"
                width={28}
                height={28}
              />
            </a>
            <a href="mailto:niten701rai@gmail.com" aria-label="Email">
              <Image src={EmailIcon.src} alt="Email" width={28} height={28} />
            </a>

            <a
              className="bg-neutral-100 rounded-sm"
              href="https://github.com/Niteshh-K"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Image src={GitHubIcon.src} alt="Github" width={28} height={28} />
            </a>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
