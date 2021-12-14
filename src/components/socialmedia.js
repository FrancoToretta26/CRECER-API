import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import React from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';


export default function SocialMedia() {
  return (
    <footer>
      <Box
        px={{ xs: 2, sm: 5 }}
        py={{ xs: 2, sm: 5 }}
        bgcolor="#f1f3f7"
        color="white"
      >
        <Container maxWidth="false">
          <Grid container spacing={10}>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 5 }}>
          <div className="social-container">
            <h3 className="social-texto">
                Seguinos
            </h3>
            <br></br>
            <br></br>
            <a
                href='https://www.youtube.com/CRECER'
                className='youtube social'
                >
                <FontAwesomeIcon icon={faYoutube} size='5x'/>
            </a>

            <a
                href='https://www.facebook.com/CRECER'
                className='facebook social'
                >
                <FontAwesomeIcon icon={faFacebook} size='5x'/>
            </a>

            <a
                href='https://www.instagram.com/CRECER'
                className='instagram social'
                >
                <FontAwesomeIcon icon={faInstagram} size='5x'/>
            </a>

            <a
                href='https://www.twitter.com/CRECER'
                className='twitter social'
                >
                <FontAwesomeIcon icon={faTwitter} size='5x'/>
            </a>


        </div>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}