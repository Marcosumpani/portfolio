import './home.css'
import AboutMe from '../../components/main_cards/aboutMe';
import Process from '../../components/main_cards/process';
import Tools from '../../components/main_cards/tools';

function Home() {
    return (<>
        <div className="card_container">
            <AboutMe/>
            <Process/>   
            <Tools/>
        </div>
    </>)
}

export default Home;
