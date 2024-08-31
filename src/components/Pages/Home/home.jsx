import React from "react";

import ButtonHomePage from "./ButtonHomePage/ButtonHomePage";
import {
  ContainerHome,
  HomePageDescription,
  HomePageParagraph,
  HomePageText,
  HomePageTitle,
  HomePageVideo,
  HomeSection,
  Video,
  VideoContainer,
  VideoContent,
} from "./Home.style";

import Hero from "./Hero.mp4";

function HomeCopy() {
  return (
    <ContainerHome>
      <HomeSection>
        <HomePageVideo>
          <VideoContainer>
            <VideoContent>
              <Video
                src={Hero}
                muted
                autoPlay
                loop
                type="video/mp4"
                id="homeVideo"
              ></Video>
            </VideoContent>
          </VideoContainer>
          <HomePageText>
            <HomePageDescription>
              <HomePageTitle>Adventure awaits. Book your escape</HomePageTitle>
              <HomePageParagraph>
                Discover the world's wonders with our exclusive travel packages.
                From pristine beaches to historic cities, your adventure begins
                here!
              </HomePageParagraph>
              <ButtonHomePage style={{ weight: "900" }}></ButtonHomePage>
            </HomePageDescription>
          </HomePageText>
        </HomePageVideo>
      </HomeSection>
    </ContainerHome>
  );
}
export default HomeCopy;
