import './RightProfile.css';
export const RightProfile = () => {
    return (
        <div className="right-profile-container">
            <span className="my-name">Hello, This is Ankita</span>
            <p>Creative <span className='speciality'>web / mobile</span> <br/> designer & developer</p>

            <div className='btn'>
                <a href='mailto:ankitaurkude4742@gmail.com' className='hire-btn butn'>Hire Me</a>
                <a target='_blank' href='https://drive.google.com/file/d/1OxcXg8KDnviWONA2PNHfNyJd2xu6hdeA/view?usp=drive_link' className='download-btn butn'>Download CV</a>
            </div>
            
        </div>
    )
}