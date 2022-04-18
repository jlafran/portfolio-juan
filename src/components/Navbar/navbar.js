import styles from "./navbar.css"
import { Icon } from '@iconify/react';
import { HashLink } from "react-router-hash-link";
import icon from "../../assets/favicon.ico"

const Header = () => {
    const height= "2vmax"
    const width= "1.8vmax"
    
    return (
        <>
            <header className="navigation ">
                <div className="navigation-inner">
                    <nav className="brand-section">
                        <a className="brand semibold" href="/">
                            <img src={icon} height="50px" width="50px"/>
                            <span>Juan Cruz Lafranconi</span>
                        </a>
                    </nav>
                    <div>
                        <nav className="medium">

                            <a href="/">
                                <div class="tooltip">Home</div>
                            </a>
                            
                            <a href="/me">
                                <div className="tooltip">About me</div>
                            </a>

                            <a >
                                <HashLink smooth to="/#projects">
                                    <div className="tooltip">Projects</div>
                                </HashLink>
                            </a>

                            

                        </nav>
                    </div>
                    <div className="toolbar-section">
                        <nav className="social-nav">

                            <a href="https://www.linkedin.com/in/juan-cruz-lafranconi-669387114/" target="_blank" rel="noreferrer">
                                <Icon icon="logos:linkedin-icon" width={width} height={height} />
                            </a>

                            <a href="https://github.com/jlafran" target="_blank" rel="noreferrer">
                                <Icon icon="bi:github" color="white" width={width} height={height} />
                            </a>

                            <a href="mailto:juanolafranconi@gmail.com" target="_blank" rel="noreferrer">
                                <Icon icon="logos:google-gmail" width={width} height={height} />
                            </a>

                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;