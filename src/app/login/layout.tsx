import Login from "./page";
import LandingHeader from "../components/header-secondary";
import style from "../page.module.css";

export default function LoginLayout() {
  return (
  <div className={`${style.netflixbg} font-sans min-h-screen`}>
    <LandingHeader />
    <Login />
  </div>)
}