import { LeftProfile } from "../components/LeftProfile"
import { RightProfile } from "../components/RightProfile"
import './HomePage.css'

export const HomePage = () => {
  return (
    <div className="profile">
      <LeftProfile />
      <RightProfile />
    </div>
  )
}
