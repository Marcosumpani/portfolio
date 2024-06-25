import Menu from '../../components/menu/index.tsx'
import Footer from '../../components/footer/index.tsx'
import './home.css'
export default function App() {
    return (<>
        <Menu />
        <div className='main-container'>
            <div className='text-me'>
                <h2>Hello, I am </h2>
                <h1>Marco Aurélio Sumpani Mota</h1>
                <h3>Dev BackEnd</h3>
                <a href="/about"><button className='home-button'>Discover more about me</button></a>
            </div>
        <img src="/myPicture.png" alt="me" width="40%"/>
        </div>
        <Footer />
    </>)
}