import {FaUser} from 'react-icons/fa'

function Catalogo(){
    return(
        <div>
            <div className="main-catalogo">
                <div className='menu-cat'>
                    <div className='chamada-catalogo'>
                            <h1>Visit One Of Our Countries Now</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                    <div className="cards-menu">
                            <div className="card">
                                <img className="img-card" src="./imagens/country-01.jpg"/>
                                <div className="tt-b-card">
                                    <div className='cabecalho'>
                                        <div className="titulo-cat">
                                            <h1>SWITZERLAND</h1>
                                            <h2>Europe</h2>
                                        </div>
                                        <div className="botao-cat">
                                            <a href="#">
                                                <button>Explore More</button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="p-cat">
                                        <p>Woox Travel is a professional Bootstrap 5 theme HTML CSS layout for your website. You can use this layout for your commercial work.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="pop-cat">
                                    <FaUser/>
                                    <p className="pop-cat-num">
                                        8.66 Mil People
                                    </p>
                                </div>
                            </div>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398747.4447002679!2d5.7264844126346865!3d46.78601120945578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c64ef6f596d61%3A0x5c56b5110fcb7b15!2zU3XDrcOnYQ!5e0!3m2!1spt-PT!2spt!4v1708116140672!5m2!1spt-PT!2spt"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalogo;