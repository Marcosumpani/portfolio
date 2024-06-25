import '../cards.css'
import './tools.css'

function Tools() {
    return (<>
        <div id="tools_card" className='card'>
            <p><del>development</del> <strong>tools</strong></p>

            <div className='tools_container'>
                <div>
                    <img width="100px"  src="/tools/react.svg" alt="react" />
                    <span>React</span>
                </div>
                <div>
                    <img width="100px"  src="/tools/laravel.png" alt="laravel" />
                    <span>Laravel</span>
                </div>
                <div>
                    <img width="100px"  src="/tools/mysql.svg" alt="mysql" />
                    <span>MySql</span>
                </div>
                <div>
                    <img width="100px"  src="/tools/nodejs.png" alt="nodejs" />
                    <span>NodeJs</span>
                </div>
                <div>
                    <img width="100px"  src="/tools/vite.svg" alt="vite" />
                    <span>Vite</span>
                </div>
                <div>
                    <img width="150px"  src="/tools/mongodb.svg" alt="mongodb" />
                    <span>Mongodb</span>
                </div>
            </div>
        </div>
    </>)
}

export default Tools