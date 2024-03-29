"use client"
import styled from "@emotion/styled"
import { Box } from "@chakra-ui/react"


export const BoxCardLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
  border: 1px solid rgb(64, 79, 87) ;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;
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