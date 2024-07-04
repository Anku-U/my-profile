import { LeftProfile } from "../components/LeftProfile"
import { RightProfile } from "../components/RightProfile"
import './HomePage.css'

export const HomePage = () => {
  return (
    <div className="profile">
      <div className="left-profile">
        <LeftProfile />
      </div>
      <div className="right-profile">
      <RightProfile />
      </div>
      
      
    </div>
  )
}
