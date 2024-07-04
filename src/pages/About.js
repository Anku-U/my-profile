import './About.css'

export const About = () => {
    return (
      <div className="about-page">
        <div className="description">
          Lorem ipsum
        </div>

        <div className="personal-info">
          <span>Personal:-</span>
          <table>
            <tr>
              <td>Full Name</td>
              <td>Ankita Urkude</td>
            </tr>
            <tr>
              <td>Father's Name</td>
              <td>Mr. Rajeshwar Urkude</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>ankitaurkude4742@gmail.com</td>
            </tr>
            <tr>
              <td>Passport No</td>
              <td>ABCDEFGHIJK</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>India</td>
            </tr>
          </table>
        </div>

        <div class="skills-container">
          <div class="skill">
            <span class="skill-name">HTML</span>
            <div class="progress-bar">
              <div class="progress" style={{width: "90%"}}>90%</div>
            </div>
          </div>
          <div class="skill">
            <span class="skill-name">CSS</span>
            <div class="progress-bar">
              <div class="progress" style={{width: "80%"}}>80%</div>
            </div>
          </div>
          <div class="skill">
            <span class="skill-name">JavaScript</span>
            <div class="progress-bar">
              <div class="progress" style={{width: "75%"}}>75%</div>
            </div>
          </div>
          <div class="skill">
            <span class="skill-name">React</span>
            <div class="progress-bar">
              <div class="progress" style={{width: "70%"}}>70%</div>
            </div>
          </div>
          <div class="skill">
            <span class="skill-name">Node.js</span>
            <div class="progress-bar">
              <div class="progress" style={{width: "60%"}}>60%</div>
            </div>
          </div>
          <div class="skill">
            <span class="skill-name">GIT</span>
            <div class="progress-bar">
              <div class="progress" style={{width: "85%"}}>85%</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  