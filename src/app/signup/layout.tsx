import Signup from "./page";
import Header from "../components/header";
import style from "../page.module.css";

export default function SignupLayout() {
  return (
    <div className={`${style.netflixbg} font-sans min-h-screen`}>
      <Header />
      <Signup />
    </div>);
}