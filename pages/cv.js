import React, {Component} from 'react';

class Cv extends Component {
    render() {
        return (
            <div className="main-div">
                <iframe
                    src="https://docs.google.com/viewer?srcid=16sFUb7J8oeN7psvnxEXKDVTxT1PTQUX4ZP3oMPFs1J0&pid=explorer&efh=false&a=v&chrome=false&embedded=true"
                    width="100%" height="100%" frameBorder="0"><p>Your browser does not support iframes.</p></iframe>

                <style global jsx>{`
                  html,
                  body,
                  body > div:first-child,
                  div#__next,
                  div#__next > div,
                  div#__next > div > div {
                    height: 100vh;
                  },
                  body {
                    margin: 0;
                  }
                `}</style>
            </div>
        );
    }
}

export default Cv;