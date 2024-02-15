
function Navegacao(){
    return(
        <div className="box-navegacao">
            <div className="logo-navegacao">
               <a href="#"><img src="./imagens/logo (1).png" alt="logo da empresa"/></a>
            </div>
            <div className="navegacao">
                <li>
                    <ul><a className="a-navegacao" href="#">Home</a></ul>
                    <ul><a className="a-navegacao" href="#">About</a></ul>
                    <ul><a className="a-navegacao" href="#">Deals</a></ul>
                    <ul><a className="a-navegacao" href="#">Reservation</a></ul>
                    <ul><a className="a-navegacao" href="#">Book Yours</a></ul>                    
                </li>
            </div>
        </div>
    )
}

export default Navegacao