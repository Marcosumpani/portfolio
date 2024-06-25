import '../cards.css'
import './process.css'

function process() {
    return (
        <div id="process_card" className='card'>
            <p>design <strong>process</strong></p>
            <p id='process_text'>In my design process, I begin with ideation to generate concepts, conduct research on user needs and market trends, and develop wireframes to visualize and iterate on the layout.</p>
            <div id="process_concepts">
                <div>
                    <img src="/homePictures/ideation.png" alt="ideation" />
                    <p>ideation</p>
                </div>
                <div>
                    <img src="/homePictures/research.png" alt="research" />               
                    <p>research</p>
                </div>
                <div>   
                    <img src="/homePictures/wireframes.png" alt="wireframes" />                                    
                    <p>wireframes</p>
                </div>
            </div>
        </div>
    )
}

export default process