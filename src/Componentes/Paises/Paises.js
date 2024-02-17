import { FaUser, FaGlobe } from 'react-icons/fa';


function Paises(){
    return(
        <div className='content-paises'>
            <div className='imagem-e-texto'>
                <div><img className='pais' src='./imagens/country-01.jpg'/></div>
                <div className='texto-paises'>
                    <div className='texto-principal-horizontal'>
                        <div className='titulo-paises'>
                            <h1>Switzerland</h1>
                            <h2>Europe</h2>
                        </div>
                        <div><button className='botao-paises'><a href='#'>Explore More</a></button></div>
                    </div>
                    <div><p className='paragrafo-texto-paises'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu feugiat eros. In efficitur interdum urna, at pellentesque ipsum efficitur vitae. Quisque sollicitudin id nunc et pulvinar. Phasellus congue quam nec sapien fringilla, nec blandit est sagittis. Integer volutpat enim et tellus congue laoreet. Praesent finibus arcu sed porta viverra. Fusce sit amet quam non arcu efficitur efficitur eu ac mauris. Proin id lobortis velit. Fusce tempus nisi est, dapibus gravida felis iaculis in. Mauris viverra massa at tortor dignissim lobortis. Aliquam semper hendrerit pulvinar. Nullam eget massa felis. Nullam id suscipit eros. In ut leo ut erat sodales molestie.</p></div>
                    <div className='icones-populacao'>
                        <div className='icones'><FaUser/></div>
                        <div><p className='infomacoes'> 8.66 Mil People</p></div>
                        <div className='icones'><FaGlobe/></div>
                        <div><p className='informacoes'>41.290 km2</p></div>
                    </div>
                </div>
            </div>
            <div className='imagem-e-texto'>
                <div><img className='pais' src='./imagens/country-02.jpg'/></div>
                <div className='texto-paises'>
                    <div className='texto-principal-horizontal'>
                        <div className='titulo-paises'>
                            <h1>Caribbean</h1>
                            <h2>North America</h2>
                        </div>
                        <div><button className='botao-paises'><a href='#'>Explore More</a></button></div>
                    </div>
                    <div><p className='paragrafo-texto-paises'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu feugiat eros. In efficitur interdum urna, at pellentesque ipsum efficitur vitae. Quisque sollicitudin id nunc et pulvinar. Phasellus congue quam nec sapien fringilla, nec blandit est sagittis. Integer volutpat enim et tellus congue laoreet. Praesent finibus arcu sed porta viverra. Fusce sit amet quam non arcu efficitur efficitur eu ac mauris. Proin id lobortis velit. Fusce tempus nisi est, dapibus gravida felis iaculis in. Mauris viverra massa at tortor dignissim lobortis. Aliquam semper hendrerit pulvinar. Nullam eget massa felis. Nullam id suscipit eros. In ut leo ut erat sodales molestie.</p></div>
                    <div className='icones-populacao'>
                        <div className='icones'><FaUser/></div>
                        <div><p className='infomacoes'> 44.48 Mil People</p></div>
                        <div className='icones'><FaGlobe/></div>
                        <div><p className='informacoes'>275.400 km2</p></div>
                    </div>
                </div>
            </div>
            <div className='imagem-e-texto'>
                <div><img className='pais' src='./imagens/country-03.jpg'/></div>
                <div className='texto-paises'>
                    <div className='texto-principal-horizontal'>
                        <div className='titulo-paises'>
                            <h1>France</h1>
                            <h2>Europe</h2>
                        </div>
                        <div><button className='botao-paises'><a href='#'>Explore More</a></button></div>
                    </div>
                    <div><p className='paragrafo-texto-paises'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu feugiat eros. In efficitur interdum urna, at pellentesque ipsum efficitur vitae. Quisque sollicitudin id nunc et pulvinar. Phasellus congue quam nec sapien fringilla, nec blandit est sagittis. Integer volutpat enim et tellus congue laoreet. Praesent finibus arcu sed porta viverra. Fusce sit amet quam non arcu efficitur efficitur eu ac mauris. Proin id lobortis velit. Fusce tempus nisi est, dapibus gravida felis iaculis in. Mauris viverra massa at tortor dignissim lobortis. Aliquam semper hendrerit pulvinar. Nullam eget massa felis. Nullam id suscipit eros. In ut leo ut erat sodales molestie.</p></div>
                    <div className='icones-populacao'>
                        <div className='icones'><FaUser/></div>
                        <div><p className='infomacoes'> 67.41 Mil People</p></div>
                        <div className='icones'><FaGlobe/></div>
                        <div><p className='informacoes'>551.500 km2</p></div>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Paises;