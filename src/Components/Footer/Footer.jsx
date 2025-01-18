import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiFacebookCircleFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="mt-20 bg-secondary/20">
            <footer className="footer w-11/12 mx-auto py-10">
                <aside>
                    <NavLink to={"/"}><h1 className="text-xl uppercase font-bold">AS <span className="text-primary">Travel</span></h1></NavLink>
                    <p>
                        AS travel agency  Ltd.
                        <br />
                        Providing reliable tech since 2024
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://github.com/Abu-Sayed-Sarker" target="blank" className="text-2xl">
                            <FaGithub />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100035598160323" target="blank" className="text-2xl">
                            <RiFacebookCircleFill />
                        </a>
                        <a href="https://www.linkedin.com/in/abu-sayed-32a591342" target="blank" className="text-2xl">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;