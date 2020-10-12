import React from 'react';

// Assets / Classes
import services_bck from '../../assets/services_bck.jpg';
import home_analytics from '../../assets/home_analytics.png';
import services_seo from '../../assets/services_seo.jpg';
import services_analytics from '../../assets/services_analytics.png';
import quote_info from '../../assets/quote_info.jpg';

import classes from './ServicesScreen.module.css';

// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import Card from '../../components/utils/Card';
import MyButton from '../../components/utils/Button';

const services = () => {
  return (
    <div className={classes.servicesScreen_container}>
      <ImageBanner
        imageLOC={services_bck}
        label='What We Do'
        altText='Services Screen Banner'
        bgColor='#f2f2f2'
        bgOpacity
        opacity={0.4}
      />
      <CenterContainer bgColor='#f2f2f2' bgPadding='40px 0'>
        <div className={classes.infoSection_container}>
          <Card height='100%'>
            <img src={home_analytics} alt='Website Analytics' />
          </Card>
          <div className={classes.infoSection_right}>
            <h2>Website Development</h2>
            <h3>Intuitive Design</h3>
            <p>
              Desire something special? We create intuitive and stunning
              websites that feature aesthetic designs and clean modern branding.
              For us, every project starts with a goal and gets completed with
              outstanding outcomes.
            </p>
            <h3>Worry Free</h3>
            <p>
              We are your full-service website development partner, and we take
              care of everything when it comes to web design. The Web Developers
              specialize in creating exceptional and outstanding website
              applications for all clients. We understand your demands and
              intend to help you achieve them.
            </p>
          </div>
        </div>
      </CenterContainer>
      <CenterContainer bgPadding='40px 0'>
        <div className={classes.seoSection_container}>
          <Card height='100%'>
            <img src={services_seo} alt='Search Engine Optimization' />
          </Card>
          <div className={classes.seoSection_right}>
            <h2>Search Engine Optimization</h2>
            <h3>Stay Up To Date</h3>
            <p>
              These days, businesses are learning that in addition to a stunning
              website, you must also keep this website up to date and optimized.
              With relevant SEO terms, you have much better chances of showing
              up at the top of search results.
            </p>
            <h3>Increase Conversions</h3>
            <p>
              Our team understands every brand has a target audience. We keep
              this in mind when developing our websites so that we can make each
              page attractive to the customers of a particular industry.
            </p>
          </div>
        </div>
      </CenterContainer>
      <CenterContainer bgColor='#f2f2f2' bgPadding='40px 0'>
        <div className={classes.infoSection_container}>
          <div className={classes.infoSection_right}>
            <h2>Logo Creation</h2>
            <h3>Experienced Designers</h3>
            <p>
              Your brand is unique, your logo ought to be too. Our team includes
              experienced designers with exceptional skills in logo design. With
              a good logo, you can make your business stand out among the rest
              and leave a lasting impression on your customer.
            </p>
            <h3>Competitive Pricing</h3>
            <p>
              Logos are valuable for any business, small or big. Our designs
              come with a competitive price range to suit every budget. Working
              with our talented team of designers means you will get the best
              bang for your buck!
            </p>
          </div>
          <Card height='100%'>
            <img src={services_analytics} alt='Logo Creation' />
          </Card>
        </div>
      </CenterContainer>
      <CenterContainer
        bgVariant='image'
        bgImageURL={quote_info}
        bgHeight='400px'
        bgPadding='40px 0'
        bgImageAlt='Get A Web Design Quote'
      >
        <div className={classes.quoteSection_container}>
          <div className={classes.quoteSection_right}>
            <h3>Free Estimation</h3>
            <h2>Request A Quote</h2>

            <p>
              If you seek website services that stand out, we are your go to
              experts.
            </p>
            <p>Get A Free Estimate Today!</p>
          </div>

          <MyButton content='GET A QUOTE' to='/quote' />
        </div>
      </CenterContainer>
    </div>
  );
};

export default services;
