import styles from "./footer.css"
import { Icon } from '@iconify/react';

const Footer = () => {
    const height= "2.5vmax"
    const width= "2vmax"
    return (
        <>
        <footer className="footer">
            <section>
                <nav>
                    <a href="https://www.linkedin.com/in/juan-cruz-lafranconi-669387114/" title="Linkedin" target="_blank" rel="noopener noreferrer">
                        <Icon icon="logos:linkedin-icon" width={width} height={height} />
                        <span>Linkedin</span>
                        
                    </a>

                    <a href="https://github.com/jlafran" title="GitHub" target="_blank" rel="noopener noreferrer">
                        <Icon icon="bi:github" color="white" width={width} height={height} />
                        <span>GitHub</span>
                        
                    </a>

                    <a href="mailto:juanolafranconi@gmail.com" title="Mail" target="_blank" rel="noopener noreferrer">
                        <Icon icon="logos:google-gmail" width={width} height={height} />
                        <span>Mail</span>
                        
                    </a>
                </nav>
                
                <nav>
                    <span className="desktop-only">Made by Juan Cruz Lafranconi</span>
                </nav>
            </section>
        </footer>
        </>
    )
}
export default Footer;