import { FaGithub, FaLinkedin  } from "react-icons/fa";

export default function Footer() {
    return(
        <section className="footer">
            <a href="https://github.com/FilipSzkarlat"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/filip-szkarlat-szczepaniak/"><FaLinkedin /></a>
        </section>
    )
}