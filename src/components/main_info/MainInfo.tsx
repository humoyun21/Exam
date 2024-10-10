import { Box, Typography } from "@mui/material"
import { colors } from "../../constants/colors"

const MainInfo = () => {
  return (

    <Box
      sx={{
        backgroundImage: 'url(./freestocks-fplnXE5loWo-unsplash.jpg)',
        width: '100%',
        height: '400px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        p: 3,
        color: colors.purple  
      }}
    >
      <Box>
        <Typography variant="h3">ANTI-AGING SKINCARE</Typography>
        <Typography variant="body1" fontSize={20}>Our science-centered formulations support your journey to achieving <br /> skin that appears healthier and more youthful.</Typography>

      </Box>
    </Box>
  )
}

export default MainInfo
