"use client"
import styled from "@emotion/styled"
import { Box } from "@chakra-ui/react"


export const BoxCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 355px;
  min-width: 350px;
  height: auto;
  position: relative;
  margin: auto;
  z-index: 0;
  border-radius: 20px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.9);
  overflow: hidden;
  ::before{
     display: flex;
     width: 100%;
     height: 50%;
     content: "";
     position: absolute;
     background: rgb(245,245,245);
     background: linear-gradient(0deg, rgba(245,245,245,0) 30%, rgba(108,108,108,0.20634191176470584) 100%);
     top: 0;
  }
  ::after{
     display: flex;
     width: 100%;
     height: 50%;
     content: "";
     position: absolute;
     background: rgb(245,245,245);
     background: linear-gradient(180deg, rgba(245,245,245,0) 30%, rgba(108,108,108,0.20634191176470584) 100%);
     bottom: 0;
  }
`;

export const BoxHeader = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 10px;
  box-sizing: border-box;
`;

export const BoxBody = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 20px;
  box-sizing: border-box;
  gap: 20px;
`;