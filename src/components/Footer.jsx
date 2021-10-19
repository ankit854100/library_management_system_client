import React from 'react'

function Footer() {
    return (
        <React.Fragment>
            <div className="footer" >
                <p>Made with 💜 by Persistent System</p>
            </div>
            <style jsx="true">{`
                .footer{
                    padding: 1.5rem;
                    text-align: center;
                    background-color: #fff;
                    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
                }

                .footer p{
                    font-size: 1.2rem;
                    color: #610094;
                }
            `}</style>
        </React.Fragment>
    )
}

export default Footer
