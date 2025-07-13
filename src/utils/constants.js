import { PiInfoBold, PiPresentationBold } from "react-icons/pi";
import { RiContactsBookLine, RiHome8Line } from "react-icons/ri";

const {
  JSIcons,
  TypeScriptIcon,
  PythonIcon,
  FlaskIcon,
  ReactIcon,
  NodeIcon,
  MongoIcon,
  ExpressIcon,
  TailwindIcon,
  PostgreSQLIcon,
  DockerIcon,
  NextJSIcon,
  HTMLIcon,
  CSSIcon,
} = require("./Icons");

export const techStack = [
  { title: "HTML", icon: HTMLIcon },
  { title: "CSS", icon: CSSIcon },
  { title: "JavaScript", icon: JSIcons },
  { title: "TypeScript", icon: TypeScriptIcon },
  { title: "Python", icon: PythonIcon },
  { title: "Flask", icon: FlaskIcon },
  { title: "ReactJS", icon: ReactIcon },
  { title: "NextJS", icon: NextJSIcon },
  { title: "NodeJS", icon: NodeIcon },
  { title: "MongoDB", icon: MongoIcon },
  { title: "ExpressJS", icon: ExpressIcon },
  { title: "Tailwind CSS", icon: TailwindIcon },
  { title: "PostgreSQL", icon: PostgreSQLIcon },
  { title: "Docker", icon: DockerIcon },
];

export const navItems = [
  {
    label: "Home",
    href: "/",
    icon: <RiHome8Line style={{ fontSize: "1.5em" }} />,
  },
  {
    label: "About",
    href: "#about",
    icon: <PiInfoBold style={{ fontSize: "1.5em" }} />,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <PiPresentationBold style={{ fontSize: "1.5em" }} />,
  },
  {
    label: "Contact",
    href: "/contact",
    icon: <RiContactsBookLine style={{ fontSize: "1.5em", fontWeight: 1 }} />,
  },
];

export const experienceData = [
  {
    from: "2024",
    to: "Present",
    role: "Full Stack Developer",
    company: "Tata Consultancy Services",
    projects: [
      <ul className="list-disc pl-6 space-y-2 text-base text-neutral-200">
        <li>
          Built an efficient{" "}
          <span className="font-bold text-cyan-300">reporting system</span> for
          advisory adoption, time-series trends, and efficiency, providing{" "}
          <span className="font-bold text-cyan-300">real-time insights</span>{" "}
          that helped increase{" "}
          <span className="font-bold text-cyan-300">
            production efficiency by 1%
          </span>{" "}
          and boost revenue.
        </li>
        <li>
          Designed a full-stack{" "}
          <span className="font-bold text-cyan-300">
            Equipment Health Monitoring System
          </span>{" "}
          that analyzes sensor data and predicts asset failures using a{" "}
          <span className="font-bold text-cyan-300">pre-trained model</span>.
          Developed an intuitive interface and strong back-end to provide
          real-time insights for maintenance.
        </li>
        <li>
          Built a{" "}
          <span className="font-bold text-cyan-300">
            UI for product simulation
          </span>
          , allowing users to modify material grades, assess feasibility, and
          analyze environmental impact like{" "}
          <span className="font-bold text-cyan-300">carbon footprint</span> of
          the final product.
        </li>
        <li>
          Developed a{" "}
          <span className="font-bold text-cyan-300">
            UI for open-source approved models
          </span>
          , allowing users to register, access, and interact with them easily.
          The platform provides key details like the model's{" "}
          <span className="font-bold text-cyan-300">
            purpose, size, and specs
          </span>
          , and the URL can be used for integration anywhere.
        </li>
        <li>
          Developed a{" "}
          <span className="font-bold text-cyan-300">code generator UI</span>{" "}
          that takes user prompts and writes code in various programming
          languages. The platform can also{" "}
          <span className="font-bold text-cyan-300">
            find bugs, explain code
          </span>
          , and allows users to interact using voice through its{" "}
          <span className="font-bold text-cyan-300">voice-to-text feature</span>
          .
        </li>
        <li>
          Created a{" "}
          <span className="font-bold text-cyan-300">
            UI for data generation and model training
          </span>{" "}
          based on existing datasets, trains models by adjusting various{" "}
          <span className="font-bold text-cyan-300">hyperparameters</span>, and
          tests the results to evaluate the effectiveness of the trained models.
        </li>
        <li>
          Developing an{" "}
          <span className="font-bold text-cyan-300">
            AI-powered document and media summarization platform
          </span>{" "}
          with an interactive chat UI. It allows users to{" "}
          <span className="font-bold text-cyan-300">
            summarize and query text documents, caption audio/video files
          </span>
          , and engage in{" "}
          <span className="font-bold text-cyan-300">
            context-aware conversations
          </span>{" "}
          based on the media. The system leverages{" "}
          <span className="font-bold text-cyan-300">
            LLMs for intelligent insights
          </span>
          , making information retrieval seamless and efficient.
        </li>
      </ul>,
    ],
  },
];
