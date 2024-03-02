import { BoxCardLayout } from "@/styles/Cards/card.styles";
import { Box } from "@chakra-ui/react";

interface Props {
    children: any
}



const Card = ({ children }: Props) => {
    return (
        <BoxCardLayout borderRadius={{ base: "12", md: "20px" }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                padding="10px"
            >
                {children}
            </Box>
        </BoxCardLayout>
    );
}

export default Card;