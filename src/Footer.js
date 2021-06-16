import React from 'react';

const Footer = () => {
    return (
            <div className="container-footer">
                <div className="footer nav navbar navbar-full bg-faded"> 
                    <div className="text-center">
                      <div className="row">
                      <div className="col-md-4 col-md-offset-4">
                      <p className="whitetext">Created by <strong>Elena Pushkar</strong></p>
                         <hr/>
                         <a href="#">
                         <i className="fa fa-github whitelogo"></i>
                         </a>
                         <span className="whitetext">&nbsp;|&nbsp;</span>
                         <a href="#" target="_blank"><i className="fa fa-fire whitelogo"></i></a>
                         <span className="whitetext">&nbsp;|&nbsp;</span>
                         <a href="https://linkedin.com/in/leesw16" target="_blank"><i className="fa fa-linkedin whitelogo"></i></a>
                         <span className="whitetext">&nbsp;|&nbsp;</span>
            <a href="https://codepen.io/win981026/" target="_blank"><i className="fa fa-codepen whitelogo"></i></a>
                    </div>
                    </div>

                    </div>
                </div>
            </div>
        )
}     

export default Footer;
