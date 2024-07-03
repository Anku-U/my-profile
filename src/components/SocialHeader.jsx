import './SocialHeader.css';

export const SocialHeader = () => {
    return (
        <header>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/ankita-urkude-a0742b214/" className="social-icon">
                    <img height="20" width="20" alt="linkedin" src={require("../assets/images/linkedin.png")}/>
                </a>
                <a href="https://www.instagram.com/ank8434/" className="social-icon">
                    <img height="20" width="20" alt="instagram" src={require("../assets/images/instagram.png")}/>
                </a>
                <a href="https://x.com/AUrkude49194" className="social-icon">
                    <img height="20" width="20" alt="twitter" src={require("../assets/images/twitter.png")}/>
                </a>
                <a href="https://github.com/Anku-U" className="social-icon">
                    <img height="20" width="20" alt="github" src={require("../assets/images/github.png")}/>
                </a>
            </div>
        </header>
    )
}