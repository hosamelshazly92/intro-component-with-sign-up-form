import { container } from "./Banner.module.css";

const Banner = ({ children }) => {
  return <div className={container}>{children}</div>;
};

export default Banner;
