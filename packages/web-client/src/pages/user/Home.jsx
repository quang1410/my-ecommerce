import React from 'react'
import Footer from '../../components/user/Footer'
import Header from '../../components/user/Header'

const Home = (props) => {
    return (
        <div>
            <Header {...props} />
                <div className="container">
                    <div className="main">
                        Home
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Home
