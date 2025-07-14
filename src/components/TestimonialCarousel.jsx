import { Box, Card, Typography, Avatar, useTheme, Stack } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useThemeStore } from '../stores/themeStore';
import { testimonials } from '../constants/testimonials';

const TestimonialCarousel = () => {
  const theme = useTheme();
  const { mode } = useThemeStore();
  const settings = {
    className: 'center',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    autoplay: false,
    centerMode: true,
    centerPadding: '500px',
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          centerPadding: '400px',
        },
      },
      {
        breakpoint: 1500,
        settings: {
          centerPadding: '350px',
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '100px',
        },
      },
    ],
  };

  return (
    <Box>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="center"
            sx={{ mx: 3, py: 6 }}
          >
            <Card
              className={`carousel-card`}
              sx={{
                p: 4,
                maxWidth: 600,
                minWidth: 350,
                textAlign: 'center',
                borderRadius: 4,
                bgcolor: mode === 'light' ? '#f7ffff' : theme.palette.grey[800],
                transition:
                  'transform 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              <Stack
                direction="row"
                gap="1rem"
                alignItems="center"
                justifyContent={'center'}
                mb={2}
              >
                <Avatar
                  src={item.avatar}
                  alt={item.author}
                  sx={{ width: 64, height: 64 }}
                />
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems={'start'}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {item.author}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {item.role}
                  </Typography>
                </Stack>
              </Stack>
              <Typography variant="body1" mt={2}>
                <strong style={{ color: theme.palette.primary.main }}>
                  {item.highlight}
                </strong>
                {item.message.replace(item.highlight, '')}
              </Typography>
            </Card>
          </Box>
        ))}
      </Slider>
      <style>{`
        .carousel-card {
          transform: scale(0.85);
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .slick-center .carousel-card {
          transform: scale(1.08);
          box-shadow: 0 8px 32px rgba(0,0,0,0.18);
        }
      `}</style>
    </Box>
  );
};

export default TestimonialCarousel;
