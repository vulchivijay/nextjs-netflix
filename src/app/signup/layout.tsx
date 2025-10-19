import Signup from "./page";
import LandingHeader from "../components/header-secondary";
import style from "../page.module.css";

export default function SignupLayout() {
  return (
  <div className={`${style.netflixbg} font-sans min-h-screen`}>
    <LandingHeader />
    <Signup />
  </div>);
}