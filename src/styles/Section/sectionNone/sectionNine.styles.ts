"use client"
import styled from "@emotion/styled"
import { Box, keyframes } from "@chakra-ui/react"

const animation = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-30%);
    }
`



export const GridItemKeyFrame = styled(Box)`
 display: flex;
 width: calc(100% * 62);  
 animation: ${animation} 20s linear infinite;
 gap: 40px;

`;