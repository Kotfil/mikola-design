import styled from "styled-components";
import { FC } from "react";
import { Background } from "@/components/main-section/background/background";
import { MainTitle } from "@/components/main-section/main-title/main-title";
import {
  ContentWrapper,
  EmailBar,
  SectionWrapper,
} from "@/components/main-section/main-section.styles";

export const MainSection: FC = () => {
  return (
    <>
      <SectionWrapper>
        <Background />
        <ContentWrapper>
          <EmailBar>mikolaonofrijcuk6@gmail.com</EmailBar>
          <MainTitle />
        </ContentWrapper>
      </SectionWrapper>
    </>
  );
};
