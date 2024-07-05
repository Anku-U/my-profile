import './RightProfile.css';
export const RightProfile = () => {
    return (
        <div className="right-profile-container">
            <span className="my-name">Hello, This is Ankita</span>
            <p>Creative <span className='speciality'>web / mobile</span> <br/> designer & developer</p>

            <div className='btn'>
                <a href='mailto:ankitaurkude4742@gmail.com' className='hire-btn butn'>Hire Me</a><a target='_blank' href='../assets/pdf/Ankita_Urkude_-_Web_Developer.pdf' className='download-btn butn'>Download CV</a>
            </div>
            
        </div>
    )
}