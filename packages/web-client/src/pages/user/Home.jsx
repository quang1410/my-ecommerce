import React from 'react'
import { Link } from 'react-router-dom';

import Partial from '../../components/user/Partial'
import Helmet from '../../components/user/Helmet'
import HeroSlider from '../../components/user/HeroSlider';
import Grid from '../../components/user/Grid'
import Section, { SectionTitle,SectionBody } from '../../components/user/Section'
import PolicyCard from '../../components/user/PolicyCard'
import ProductCard from '../../components/user/ProductCard'

import heroSliderData from '../../assets/fake-data/hero-slider';
import policy from '../../assets/fake-data/policy'
import productData from '../../assets/fake-data/products'
import banner from '../../assets/images/banner.png'

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

                {/* policy section */}
                <Section>
                    <SectionBody>
                        <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={20}
                        >
                            {
                                policy.map((item, index) => <Link key={index} to="/policy">
                                    <PolicyCard
                                        name={item.name}
                                        description={item.description}
                                        icon={item.icon}
                                    />
                                </Link>)
                            }
                        </Grid>
                    </SectionBody>
                </Section>
                {/* end policy section */}

                {/* best selling section */}
                <Section>
                    <SectionTitle>
                        top sản phẩm bán chạy trong tuần
                    </SectionTitle>
                    <SectionBody>
                        <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={20}
                        >
                            {
                                productData.getProducts(4).map((item, index) => (
                                    <ProductCard
                                        key={index}
                                        img01={item.image01}
                                        img02={item.image02}
                                        name={item.title}
                                        price={Number(item.price)}
                                        slug={item.slug}
                                    />
                                ))
                            }
                        </Grid>
                    </SectionBody>
                </Section>
                {/* end best selling section */}

                {/* new arrival section */}
                <Section>
                    <SectionTitle>
                        sản phẩm mới
                    </SectionTitle>
                    <SectionBody>
                        <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={20}
                        >
                            {
                                productData.getProducts(8).map((item, index) => (
                                    <ProductCard
                                        key={index}
                                        img01={item.image01}
                                        img02={item.image02}
                                        name={item.title}
                                        price={Number(item.price)}
                                        slug={item.slug}
                                    />
                                ))
                            }
                        </Grid>
                    </SectionBody>
                </Section>
                {/* end new arrival section */}

                {/* banner */}
                <Section>
                    <SectionBody>
                        <Link to="/catalog">
                            <img src={banner} alt="" />
                        </Link>
                    </SectionBody>
                </Section>
                {/* end banner */}

                {/* popular product section */}
                <Section>
                    <SectionTitle>
                        phổ biến
                    </SectionTitle>
                    <SectionBody>
                        <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={20}
                        >
                            {
                                productData.getProducts(12).map((item, index) => (
                                    <ProductCard
                                        key={index}
                                        img01={item.image01}
                                        img02={item.image02}
                                        name={item.title}
                                        price={Number(item.price)}
                                        slug={item.slug}
                                    />
                                ))
                            }
                        </Grid>
                    </SectionBody>
                </Section>
                {/* end popular product section */}
            </Helmet>
        </Partial>
    )
}

export default Home
