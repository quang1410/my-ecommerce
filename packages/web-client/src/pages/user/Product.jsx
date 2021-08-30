import React from 'react'

import Helmet from '../../components/user/Helmet'
import Partial from '../../components/user/Partial'
import Section, {SectionBody, SectionTitle} from '../../components/user/Section'
import Grid from '../../components/user/Grid'
import ProductCard from '../../components/user/ProductCard'
import ProductView from '../../components/user/ProductView'

import productData from '../../assets/fake-data/products'

const Product = props => {
    const product = productData.getProductBySlug(props.match.params.slug)

    const relatedProducts = productData.getProducts(8)

    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [product])

    return (
        <Partial>
            <Helmet title={product.title}>
                <Section>
                    <SectionBody>
                        <ProductView product={product}/>
                    </SectionBody>
                </Section>
                <Section>
                    <SectionTitle>
                        Khám phá thêm
                    </SectionTitle>
                    <SectionBody>
                        <Grid
                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={20}
                        >
                            {
                                relatedProducts.map((item, index) => (
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
            </Helmet>
        </Partial>
    )
}

export default Product
