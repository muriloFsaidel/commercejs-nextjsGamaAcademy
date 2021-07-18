import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import SocialMedia from '../components/common/SocialMedia';
import ExploreBanner from '../components/productAssets/ExploreBanner';
import HeroSection from '../components/homepage/HeroSection';
import HomeBanner from '../components/homepage/HomeBanner';
import CategoryBanner from '../components/homepage/CategoryBanner';
import ProductsBanner from '../components/homepage/ProductsBanner';

const Home = () => (
  <Root transparentHeader={true}>
    <Head>
      <title>Home | commerce</title>
<script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/507f3b1f6e243d616cb330356/e76cd57adeaf5c366ec82004f.js");</script>
    </Head>

    <HeroSection />
    <HomeBanner />
    <CategoryBanner />
    <ProductsBanner />
    <ExploreBanner />
    <SocialMedia />
    <Footer />
  </Root>
);

export default Home;
