import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#104E8B"
        color="white"
      >
        <br/>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Sobre Nosotros</Box>
              <Box>
                <Link href="/aboutus" color="inherit">
                  Quienes Somos
                </Link>
              </Box>
              <Box>
                <Link href="/contacto" color="inherit">
                  Contacto
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Cuenta</Box>
              <Box>
                <Link href="/registro" color="inherit">
                  Registrate
                </Link>
              </Box>
              <Box>
                <Link href="/login" color="inherit">
                  Ingresa
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Atención al cliente</Box>
              <Box>
                  Lima 775, CABA
              </Box>
              <Box>
                0800-22-Crecer
              </Box>
              <Box>
                hello@crecer.com

              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            CRECER &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}