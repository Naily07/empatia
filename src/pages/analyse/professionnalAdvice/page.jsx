import { Box, Typography, Stack, useTheme } from '@mui/material';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import IconButtonCustom from '../../../components/ui/iconButton';
import circle from '../../../assets/circle.svg';
import Header from '../../../components/header';
import TestimonialCarousel from '../../../components/TestimonialCarousel';
import { circles } from '../../../constants/circles';

export default function ProfessionnalAdvice() {
  const theme = useTheme();

  return (
    <>
      <Header />
      <Stack
        position={'relative'}
        width="100svw"
        pt={15}
        height="100svh"
        maxHeight={'100vh'}
        maxWidth={'100vw'}
        overflow={{
            xs: 'auto',
            lg: 'hidden'
        }}
        rowGap={0}
        zIndex={0}
        bgcolor={'background.paper'}
      >
        {circles.map((props, i) => (
          <Box key={i} component={'img'} src={circle} sx={props} />
        ))}
        <Stack justifyContent={'center'} alignItems={'center'}>
          <IconButtonCustom
            startIcon={<HowToRegOutlinedIcon />}
            text={'Conseil'}
          />
          <Stack
            mt={{
                xs: 1,
                lg: 3,
                xl: 5
            }}
            justifyContent={'center'}
            alignItems={'center'}
            rowGap={2}
          >
            <Typography variant="h3" fontWeight={'400'}>
              Faites appel à{' '}
              <span style={{ color: theme.palette.primary.main }}>
                un expert
              </span>
            </Typography>
            <Typography
              variant="body1"
              maxWidth={'400px'}
              textAlign={'center'}
              fontWeight={'300'}
            >
              Mieux comprendre ses émotions avec <br /> un professionel
            </Typography>
          </Stack>
        </Stack>
        <TestimonialCarousel />
      </Stack>
    </>
  );
}
