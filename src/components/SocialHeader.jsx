export const SocialHeader = () => {
    const styles = {
        main: {
          backgroundColor: "#f1f1f1",
          width: "100%",
        }
    };
    return (
        <header>
            <div className="social" style={styles.main}>
                <img height="20" width="20" alt="linkedin" src={require("../assets/images/linkedin.png")}/>
                <img height="20" width="20" alt="instagram" src={require("../assets/images/instagram.png")}/>
                <img height="20" width="20" alt="twitter" src={require("../assets/images/twitter.png")}/>
                <img height="20" width="20" alt="github" src={require("../assets/images/github.png")}/>
            </div>
        </header>
    )
}