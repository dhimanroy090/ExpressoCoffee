import ScoialPages from "../../SocialPages/ScoialPages";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Popular from "../Popular/Popular";


const Home = () => {
    return (
        <div>   
            <Banner></Banner>
            <Popular></Popular>
            <ScoialPages></ScoialPages>
            <Footer></Footer>
        </div>
    );
};

export default Home;