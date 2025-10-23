import Login from "./page";
import Header from "../components/header";
import style from "../page.module.css";

export default function LoginLayout() {
  return (
    <div className={`${style.netflixbg} font-sans min-h-screen`}>
      <Header />
      <Login />
    </div>)
}