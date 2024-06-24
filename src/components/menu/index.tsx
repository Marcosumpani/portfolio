import './menu.css'
function menu() {
    return (
        <div className='menu-container'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/projects">Projets</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default menu