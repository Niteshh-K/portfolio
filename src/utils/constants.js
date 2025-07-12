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
} = require("./Icons");

export const techStack = [
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
