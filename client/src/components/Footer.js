import { Footer as ArwesFooter, Paragraph } from "arwes";
import Centered from "./Centered";

const Footer = () => {
  return <ArwesFooter animate>
    <Centered>
      <Paragraph style={{ fontSize: 14, margin: "10px 0", textAlign: "center" }}>
        This is not an official site and is not affiliated with NASA or SpaceX in any way.<br/>It's a hobby project by <a href="https://github.com/mrchukwu/NASA" target="_blank" style={{color: "white", fontWeight: "bold"}}>Kennedy</a>. Please give a star and follow me.
      </Paragraph>
    </Centered>
  </ArwesFooter>
};

export default Footer;
