import React from 'react'

import Partial from '../../components/user/Partial'
import Helmet from '../../components/user/Helmet'
import HeroSlider from '../../components/user/HeroSlider';
import heroSliderData from '../../assets/fake-data/hero-slider';

const Home = (props) => {
    return (
        <Partial>
            <Helmet title="Trang chủ">
                {/* hero slider */}
                <HeroSlider
                    data={heroSliderData}
                    control={true}
                    auto={false}
                    timeOut={5000}
                />
                {/* end hero slider */}
            </Helmet>
        </Partial>
    )
}

export default Home
