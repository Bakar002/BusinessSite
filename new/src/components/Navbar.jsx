import Logo from "../assets/images/logo.svg";
import Logo1 from "../assets/images/fr.png";
import whatsappLogo from "../assets/whatsapp.svg";

const ContactUs = {
  background:
    "linear-gradient(79deg, rgba(255, 0, 0, 1) 0%,rgba(10, 0, 99, 1) 60% ,rgba(10, 0, 99, 1) 100%)",
};
const border = {
  position: "relative",
  padding: "1px",
  background: `linear-gradient(0deg, rgba(50, 41, 98, 1), rgba(255, 255, 255, 0)), linear-gradient(90deg, rgba(213, 211, 223, 1), rgba(255, 255, 255, 0))`,
  backgroundClip: "padding-box, border-box",
  backgroundOrigin: "border-box",
};

function Navbar() {
  return (
    <nav className="bg-transparent p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo1} alt="Logo" className="h-10" />
      </div>
      <div className="flex items-center justify-between w-[auto] md:w-[170px]">
        <div style={border} className="rounded-full">
          <button
            className=" text-white px-[16px] py-[8px] rounded-full "
            style={ContactUs}
          >
            Contact Us
          </button>
        </div>
        <a href="#" className="hidden h-[40px] w-[40px] md:block">
          <img src={whatsappLogo} alt="whatsapp" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
