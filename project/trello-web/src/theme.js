/* eslint-disable indent */
// import { createTheme } from '@mui/material/styles'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { teal, deepOrange, cyan, orange } from '@mui/material/colors'


// Create a theme instance.
// const theme = createTheme({
//     palette: {
//         mode: 'light',
//         primary: {
//             main: '#556cd6'
//         },
//         secondary: {
//             main: '#19857b'
//         },
//         error: {
//             main: red.A400
//         },
//         // Add config to text.secondary
//         text: {
//             secondary: '#000'
//         }
//     }
// })

const theme = extendTheme({
    trelloCustom: {
        appBarHeight: '48px',
        boardBarHeight: '58px'
    },
    colorSchemes: {
        light: {
            palette: {
                // primary: {
                //     main: '#ff5252'
                // }
                primary: teal,
                secondary: deepOrange
            }
        },
        dark: {
            palette: {
                // primary: {
                //     main: '#000'
                // }
                primary: cyan,
                secondary: orange
            }
        }
    }
})

export default theme