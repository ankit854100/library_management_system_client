import React, { useState } from 'react'
import NavBar from './NavBar';
import RightTable from './RightTable';
import TreeUI from './TreeUI'

function Home(props) {

    const [rightSelected, setRightSelected] = useState([]);

    return (
        <React.Fragment>
            <NavBar />
            <div className="home">
                <div className="home-left">
                    <TreeUI data={props.data} setRightSelected={setRightSelected}/>
                </div>
                <div className="home-right">
                    <RightTable rightSelected={rightSelected}/>
                </div>
            </div>
            <style jsx='true'>{`
                .home{
                    // background-color: #fff;
                    min-height: 100%;
                    display: flex;
                }

                .home-left{
                    width: 20%;
                    padding-top: 2rem;
                }

                .home-right{
                }
            `}</style>
        </React.Fragment>
    )
}

export default Home
