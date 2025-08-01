import styled from "styled-components";
import { FC } from "react";
import { Background } from "@/components/main-section/background/background";
import { MainTitle } from "@/components/main-section/main-title/main-title";

export const SectionWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  position: relative; /* поверх фона */
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmailBar = styled.div`
  position: relative; /* чтобы не было абсолютного позиционирования */
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: flex-start;
  font-size: 0.9rem;
  color: white;
`;
