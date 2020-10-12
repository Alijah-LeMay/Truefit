import React, { useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getSites } from '../../store/actions/siteActions';
// My Components
import ImageBanner from '../../components/utils/ImageBanner';
import CenterContainer from '../../components/utils/CenterContainer';
import FeaturedSite from './FeaturedSite';

// Assets
import landing_bck from '../../assets/landing_bck.jpg';
import the_venue_1 from '../../assets/the_venue_1.png';
import the_venue_2 from '../../assets/the_venue_2.png';
import the_venue_3 from '../../assets/the_venue_3.png';
import the_venue_4 from '../../assets/the_venue_4.png';

const categories = {
  architecture: {
    sites: [
      {
        parentCategory: 'Architecture',
        siteTitle: 'JamesRenoArchitecture',
        siteLink: 'www.google.com',
        siteImages: [the_venue_1, the_venue_2, the_venue_3, the_venue_4],
      },
      {
        parentCategory: 'Architecture',
        siteTitle: 'Blag blah blag',
        siteLink: 'www.google.com',
        siteImages: [the_venue_1, the_venue_2, the_venue_3, the_venue_4],
      },
    ],
  },
  mern: {
    sites: [
      {
        parentCategory: 'MERN Stack',
        siteTitle: 'The Venue',
        siteLink: 'www.google.com',
        siteImages: [the_venue_1, the_venue_2, the_venue_3, the_venue_4],
      },
      {
        parentCategory: 'MERN Stack',
        siteTitle: 'The pebad',
        siteLink: 'www.google.com',
        siteImages: [the_venue_1, the_venue_2, the_venue_3, the_venue_4],
      },
    ],
  },
};

const entries = Object.entries(categories);

let cats = [];

entries.forEach((x) => cats.push(x[1].sites));

let sits = [];

cats.forEach((x) => {
  x.forEach((item) => sits.push(item));
});
console.log(sits);
const OurWorkScreen = () => {
  const dispatch = useDispatch();

  const site = useSelector((state) => state.site);
  const { loading, error, sites } = site;

  useEffect(() => {
    dispatch(getSites());
  }, [dispatch]);
  const showTheContent = (
    <div>
      {sites.map((siteElement, index) => (
        <div key={index}>{console.log(siteElement.category)}</div>
      ))}
    </div>
  );
  return (
    <div>
      <ImageBanner
        imageLOC={landing_bck}
        bgOpacity
        opacity={0.3}
        label='Our Work'
      />
      <CenterContainer>
        {loading ? (
          <h2>...Loading...</h2>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          showTheContent
        )}
        {sits.map((item, index) => {
          const { parentCategory, siteTitle, siteLink, siteImages } = item;
          let showLabel = true;
          if (
            sits[index - 1] &&
            sits[index].parentCategory === sits[index - 1].parentCategory
          ) {
            showLabel = false;
          }

          return (
            <FeaturedSite
              parentCategory={parentCategory}
              siteTitle={siteTitle}
              siteLink={siteLink}
              siteImages={siteImages}
              key={index}
              showLabel={showLabel}
            />
          );
        })}
      </CenterContainer>
    </div>
  );
};

export default OurWorkScreen;
