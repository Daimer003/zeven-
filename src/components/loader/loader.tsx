// Loader.js
import { Box, Spinner } from "@chakra-ui/react";

const Loader = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100vh"
            position="absolute"
            top="0"
            background="black"
            zIndex={9999}
        >
            <Spinner size="xl" />
        </Box>
    );
};

export default Loader;