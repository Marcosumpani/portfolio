import './menu.css'
function menu() {
    return (
        <div className='menu-container'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/sobre">About</a></li>
                <li><a href="/projetos">Projets</a></li>
                <li><a href="/contatos">Contact</a></li>
            </ul>
        </div>
    );
}

export default menu