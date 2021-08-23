import React from "react"
import {Footer,SocialButton,SocialImage} from "./style"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"

const FooterComponent = () =>{

  const handleGoToGit = () =>{
    window.open("https://github.com/RafaelOliveira215", "_blank");
  }
  const handleGoToLinkedin = () =>{
    window.open("https://www.linkedin.com/in/rafael-oliveira-794484175/", "_blank");
  }

return(
  <Footer>
      <p>Created by Rafael Oliveira</p>
      <div>
      <SocialButton onClick={()=>handleGoToGit()}><SocialImage src={github} alt="GitHub icon"/></SocialButton>
      <SocialButton onClick={()=>handleGoToLinkedin()}><SocialImage src={linkedin} alt="Linkedin icon"/></SocialButton>
      </div>
  </Footer>
  )
}
export default FooterComponent