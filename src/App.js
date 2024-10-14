import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" alignItems="center" direction="row" spacing={3} >
        <Grid size={12}>
         <Grid container justifyContent="center" direction="row" spacing={3}  >
             <p><a href="">SHEY ACCESSOIRES</a></p>
             <p><a href="">HOME</a></p>
             <p><a href="">CATALOGUE</a></p>
          </Grid>
        </Grid>
        <Grid size={12}>
            <div class="grid-item">
                    <img src="https://s3.ca-central-1.amazonaws.com/gospelgeneration.com/she_bottomv3.png" alt="zone2 " style={{ width: '100%' }} ></img>  
            </div>
        </Grid>
      
        <Grid size={12}>
          <Grid container justifyContent="center" alignItems="center" direction="row" spacing={3} >
            <Grid size={{ xs: 12, md: 6 }} maxWidth={600}  item>
              <Item><img src="https://s3.ca-central-1.amazonaws.com/gospelgeneration.com/shey20190603_192502.jpg" alt="zone2 " style={{ width: '100%' }} ></img></Item>
           </Grid> 
            <Grid size={{ xs: 12, md: 6 }} maxWidth={600}  item>
              <div>
                 <p><h3>Une reflection de qui vous êtes</h3>Trouvez le parfait accessoire qui sera le prolongement de votre essence et de votre personnalité. Explorez notre catalogue pour trouver votre agencement parfait.Osez, Soyez unique, soyez vous-mêmes, Laissez votre look témoigner de qui vous êtes vraiment.<br></br> <br></br> Notre mission est très simple, nous voulons aider les femmes a rehausser leur beauté. Peut importe votre nationalité, peu importe votre couleur, peu importe vos gouts, nous croyons que vous trouverez cet accessoire qui fera toute la différence! <br></br> <br></br>  Nous offrons aussi la possibilité de modifier les boucles d'oreilles afin que celles qui n'ont pas les oreilles percées puissent aussi se gâter !</p>
              </div> 
            </Grid>
          </Grid>
        </Grid>
        <Grid size={12}>
           <Grid container justifyContent="center"  alignItems="center" direction="row" spacing={3}>
              <Grid item xs={12} sm={4} maxWidth={400}  >
                <img src="https://s3.ca-central-1.amazonaws.com/gospelgeneration.com/she_dorothy_IMG_6BE1E287AD8E-1.jpeg" alt="Image description" style={{ width: '100%' }} />
                <p><h3>Shey Accessoires présent au Salon International de la Femme Noires ( SIFM )</h3>
                Soyez à l'affut de nos kiosque d'exposition dans les expositions et les évènements locaux. Des opportunités unique de voir de près nos produits.</p>
              </Grid>
              <Grid item xs={12} sm={4} maxWidth={400}  >
                <img src="https://s3.ca-central-1.amazonaws.com/gospelgeneration.com/she_shop_IMG_2B4306BC6261-1.jpeg" alt="Image description" style={{ width: '100%' }} />
                <p><h3>N'hésitez pas à nous contacter !</h3>
                Vous avez une requête spéciale ? Une question sur un de nos produits ou modèle ? N'hésitez pas a nous contacter sheyaccessoires@gmail.com </p>
              </Grid>
              <Grid item xs={12} sm={4} maxWidth={400}  >
                <img src="https://s3.ca-central-1.amazonaws.com/gospelgeneration.com/she_girl_IMG_17F2D61FFD12-1.jpeg" alt="Image description" style={{ width: '100%' }} />
                <p><h3>Partagez sur les médias socieux</h3>
                Facebook, Instagram. N'hésitez pas à partager votre expérience avec nos produits sur vos fils d'actualité.</p>
              </Grid>
           </Grid>
         </Grid>



        <Grid size={12}>
          <Item> <h2> Quelques uns de nos produits </h2> </Item>
        </Grid><Grid size={12}>
          <img src="https://s3.ca-central-1.amazonaws.com/gospelgeneration.com/bottom_pic.png" alt="Image description" style={{ width: '100%' }} />
        </Grid><
          Grid size={12}>
          <img src="https://s3.ca-central-1.amazonaws.com/gospelgeneration.com/she_testamony.png" alt="Image description" style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Box>
  );
}
