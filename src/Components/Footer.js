import "../Assets/CSS/Footer.scss";
import logosJson from "../Assets/projects.json";

export default function Footer({}) {
  return (
    <div className="footer" id="contacts">
      <div className="footer_icon_container">
        <div className="footer_icon">
          {logosJson.logos.map((logo) => (
            <a href={logo.link} className="footer_img" key={logo.title}>
              <img src={"/Img" + logo.img} alt="" className="footer_img_img" />
            </a>
          ))}{" "}
        </div>
      </div>
    </div>
  );
}
