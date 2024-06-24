import Menu from '../../components/menu/index.tsx'
import Footer from '../../components/footer/index.tsx'
import './home.css'
export default function App() {
    return (<>
        <Menu />
        <div>
            <h2>Hello, I am </h2>
            <h1>Marco Aurélio Sumpani Mota</h1>
            <h3>Dev BackEnd</h3>
            <button><a href="/about">Discover more about me</a></button>
        </div>
        <Footer />
    </>)
}