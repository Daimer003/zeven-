"use client"
import styled from "@emotion/styled"
import { Box } from "@chakra-ui/react"


export const BoxCard = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 250px;
  height: auto;
  position: relative;
  margin: auto;
  z-index: 0;
  border-radius: 20px;
  border: 1px solid rgb(64, 79, 87) ;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
  ::before{
     display: flex;
     width: 100%;
     height: 50%;
     content: "";
     position: absolute;
     background: rgb(64, 79, 87);
     background: linear-gradient(0deg, rgba(64, 79, 87,0) 30%, rgba(208,208,208,0.20634191176470584) 100%);
     top: 0;
  }
  ::after{
     display: flex;
     width: 100%;
     height: 50%;
     content: "";
     position: absolute;
     background: rgb(64, 79, 87);
     background: linear-gradient(180deg, rgba(64, 79, 87,0) 30%, rgba(208,208,208,0.20634191176470584) 100%);
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
  position: relative;
  :before{
    display: flex;
    content: "";
    width: 100%;
    height: 3px;
background: rgb(17,17,17);
background: linear-gradient(90deg, rgba(55,255,255,0) 6%, rgba(245,245,245,1) 49%, rgba(255,255,255,0) 86%);
    position: absolute;
    bottom: 0;
  }
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