function Sidenav() {
    return (
        <div className="container">
            <div id="mySidenav" className="sidenav">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>

            <div id="main">
            </div>
            <style jsx>{`
                /* The sidenav */
                    .sidenav {
                      height: 100%;
                      width: 200px;
                      position: fixed;
                      z-index: 1;
                      top: 0;
                      left: 0;
                      background-color: #111;
                      overflow-x: hidden;
                      padding-top: 20px;
                    }
                    
                    /* Page content */
                    .main {
                      margin-left: 200px; /* Same as the width of the sidenav */
                    }
                                        
                    /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
                    @media screen and (max-height: 450px) {
                      .sidenav {padding-top: 15px;}
                      .sidenav a {font-size: 18px;}
                    }
            `}
            </style>
        </div>

    )
}

export default Sidenav