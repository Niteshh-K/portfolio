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

const navItemStyle = { fontSize: "1.5em", color: "text-neutral-200" };

export const navItems = [
  {
    label: "Home",
    href: "#home",
    icon: <RiHome8Line style={navItemStyle} />,
  },
  {
    label: "About",
    href: "#about",
    icon: <PiInfoBold style={navItemStyle} />,
  },
  {
    label: "Experience",
    href: "#experience",
    icon: <PiPresentationBold style={navItemStyle} />,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: <RiContactsBookLine style={navItemStyle} />,
  },
];

export const experienceData = [
  {
    from: "July, 2022",
    to: "Present",
    role: "Full Stack Developer",
    company: "Tata Consultancy Services",
    projects: [
      <ul key="tcs-projects-list" className="list-disc pl-6 text-justify">
        <li key="reporting-system">
          Built an efficient{" "}
          <span className="font-bold text-[#2c7ce6]">reporting system</span> for
          advisory adoption, time-series trends, and efficiency, providing{" "}
          <span className="font-bold text-[#2c7ce6]">real-time insights</span>{" "}
          that helped increase{" "}
          <span className="font-bold text-[#2c7ce6]">
            production efficiency by 1%
          </span>{" "}
          and boost revenue.
        </li>
        <li key="equipment-health-monitoring">
          Designed a full-stack{" "}
          <span className="font-bold text-[#2c7ce6]">
            Equipment Health Monitoring System
          </span>{" "}
          that analyzes sensor data and predicts asset failures using a{" "}
          <span className="font-bold text-[#2c7ce6]">pre-trained model</span>.
          Developed an intuitive interface and strong back-end to provide
          real-time insights for maintenance.
        </li>
        <li key="product-simulation-ui">
          Built a{" "}
          <span className="font-bold text-[#2c7ce6]">
            UI for product simulation
          </span>
          , allowing users to modify material grades, assess feasibility, and
          analyze environmental impact like{" "}
          <span className="font-bold text-[#2c7ce6]">carbon footprint</span> of
          the final product.
        </li>
        <li key="open-source-models-ui">
          Developed a{" "}
          <span className="font-bold text-[#2c7ce6]">
            UI for open-source approved models
          </span>
          , allowing users to register, access, and interact with them easily.
          The platform provides key details like the model&apos;s{" "}
          <span className="font-bold text-[#2c7ce6]">
            purpose, size, and specs
          </span>
          , and the URL can be used for integration anywhere.
        </li>
        <li key="code-generator-ui">
          Developed a{" "}
          <span className="font-bold text-[#2c7ce6]">code generator UI</span>{" "}
          that takes user prompts and writes code in various programming
          languages. The platform can also{" "}
          <span className="font-bold text-[#2c7ce6]">
            find bugs, explain code
          </span>
          , and allows users to interact using voice through its{" "}
          <span className="font-bold text-[#2c7ce6]">
            voice-to-text feature
          </span>
          .
        </li>
        <li key="data-generation-training-ui">
          Created a{" "}
          <span className="font-bold text-[#2c7ce6]">
            UI for data generation and model training
          </span>{" "}
          based on existing datasets, trains models by adjusting various{" "}
          <span className="font-bold text-[#2c7ce6]">hyperparameters</span>, and
          tests the results to evaluate the effectiveness of the trained models.
        </li>
        <li key="ai-media-summarization">
          Developing an{" "}
          <span className="font-bold text-[#2c7ce6]">
            AI-powered document and media summarization platform
          </span>{" "}
          with an interactive chat UI. It allows users to{" "}
          <span className="font-bold text-[#2c7ce6]">
            summarize and query text documents, caption audio/video files
          </span>
          , and engage in{" "}
          <span className="font-bold text-[#2c7ce6]">
            context-aware conversations
          </span>{" "}
          based on the media. The system leverages{" "}
          <span className="font-bold text-[#2c7ce6]">
            LLMs for intelligent insights
          </span>
          , making information retrieval seamless and efficient.
        </li>
      </ul>,
    ],
  },
];
