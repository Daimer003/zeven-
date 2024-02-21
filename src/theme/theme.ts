import { extendTheme, filter } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: (props: any) => ({
        body: {
            bg: mode('#F0F0F2', '#0B0C0D')(props)
        }
    })
}

const components = {

    Button: {
        variants: {
            buttonPrimary: (props: any) => ({
                bg: '#01b2ab',
                color: '#ffffff',
                borderColor: 'none',
                borderWidth: 'none',
                borderRadius: '4px',
                _hover: {
                    bg: 'rgba(0, 0, 0, 0.1)',
                },
            }),

            buttonSecondary: (props: any) => ({
                bg: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                borderColor: 'none',
                borderWidth: 'none',
                borderRadius: '10px',
                blur: '1px',
                _hover: {
                    bg: 'rgba(0, 0, 0, 0.1)',
                },
            }),
        },
    },

    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: 'red',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: (props: any) => ({
            color: mode('#F0F0F2', '#0B0C0D')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'M PLUS Rounded 1c'"
}

const colors = {
    grassTeal: '#D0D9D6',
    greenDawn: {
        50: "#D0D9D6"
    },
    softPeach: "#F2CDAC",
    slateGray: "#4F5559",
    yellow900: {
        900: "#5F370E"
    }
}

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true
}

const theme = extendTheme({
    config,
    styles,
    components,
    fonts,
    colors,
})

export default theme;