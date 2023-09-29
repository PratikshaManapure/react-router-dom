import Navbar from "../../components/navbar/navbar";
import "./about.css";
import Footer from "../../components/footer/footer";

export default function About(){
    return(
        <div className="about-container">
            <Navbar/>
            <h1>
                about
            </h1>
            <Footer />
        </div>
    )
}