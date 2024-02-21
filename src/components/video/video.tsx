import { Box } from "@chakra-ui/react";

const Video = () => {
    return (
        <Box
            display="flex"
            position="absolute"
            width="100%"
            height="auto"
            zIndex="0"
            left="0"
            right="0"
            top="0"
        >
            <video
                controls={false}
                muted
                autoPlay
                loop
                poster=''>
                <source src='/assets/media/trading.mp4' type="video/webm" />
            </video>
        </Box>
    );
}

export default Video;