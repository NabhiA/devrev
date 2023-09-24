import React from 'react';
import {
  HeadTitle,
  PageContainer,
  ContentContainer,
} from '../components/Styles';
import NavbarHead  from '../components/NavbarHead';
import FooterBottom  from '../components/FooterBottom';
import BookCards from '../components/bookcards';

const Home = () => {
  return (
    <div>
      <NavbarHead />
      <PageContainer>
        <ContentContainer>
          <HeadTitle style={{marginTop: '130px'}}>Book Shelf</HeadTitle>
          <BookCards/>
        </ContentContainer>
      <FooterBottom />
      </PageContainer>
    </div>
  );
};

export default Home;
