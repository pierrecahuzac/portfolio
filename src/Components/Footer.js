import "../Assets/CSS/Footer.scss";
import logosJson from "../Assets/projects.json";
console.log(logosJson);
export default function Footer({
  name,
  contactInformations,
  setContactInformations,
  setName,
  firstname,
  setFirstname,
  email,
  setEmail,
  message,
  setMessage,
}) {
  return (
    <div className="footer" id="contacts">
      <div className="footer_icon_container">
        {logosJson.logos.map((logo) => (
          <div className="footer_icon" key={logo.title}>
            <a href={logo.link} className="footer_img">
              <img src={"/Img" + logo.img} alt="" className="footer_img_img" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
