function Header({usuario}){
    return(
        <header className="cabecalho">
            <div className="contaner cabecalho_linha">
                <a className="logo" href="#topo">
                    ~/{usuario}
                    <span>_</span>
                </a>
            </div>
        </header>
    )
}
export default Header