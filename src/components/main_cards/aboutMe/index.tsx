import '../cards.css'
import './aboutMe.css'

function AboutMe() {
    return (
        <div id="about_me_card" className='card'>
            <ul>
                <li>me</li>
                <li>designs</li>
                <li>development</li>
               <a href="https://github.com/Marcosumpani/"><li><img src="/public/github.svg" alt="gitHub" /></li></a>
            </ul>
            <div id='text_about_me'>
                <h1>Hi</h1>
                <p>my name is <strong>Marco</strong> <br />
                    a  <strong>back-end</strong> <span>{"{ developer }"}</span></p>
            </div>
        </div>
    )
}

export default AboutMe