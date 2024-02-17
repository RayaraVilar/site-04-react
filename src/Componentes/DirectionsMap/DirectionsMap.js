import { MdArrowForward } from 'react-icons/md';

function DirectionsMap(){
    return(
        <div className='Dmaps'>
            <div className='texto-dmaps'>
                <h1>NEED DIRECTIONS?</h1>
                <div className='Arrow'><MdArrowForward/></div>
            </div>
            <div className='mapa'>
                    <iframe title="Country Map" src="https://www.google.com/maps/embed?..." ></iframe>
                </div>
        </div>
    )
}

export default DirectionsMap;