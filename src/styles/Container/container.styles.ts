"use client"
import styled from "@emotion/styled"
import { Box } from "@chakra-ui/react"


export const BoxZeven = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  max-height: 750px;
  position: relative;
  z-index: 0;
  border-radius: 28px;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.2);
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