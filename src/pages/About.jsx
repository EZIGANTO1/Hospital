import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: 'center',
          p:2,
          '& h4': {
              fontWeight: 'bold',
              my:2,
              fontSize:'2rem',
          },
          '& p':{
            textAlign:'justify',
          },
          '@media (max-width:600px)': {
            mt: 0, 
            '& h4 ':{
              fontSize: '1.5rem',
            }
          }
        }}
      >
        <Typography variant='h4'>
          Welcome to this Hospital
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quos placeat nemo? Error excepturi numquam, officiis mollitia id alias beatae asperiores necessitatibus. Pariatur nostrum ducimus perferendis similique ab, veniam tempora!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex officia tempore dignissimos praesentium aperiam ullam nesciunt officiis nemo odio, amet quas enim provident expedita sapiente, sit totam. Ducimus, natus! Laboriosam quam obcaecati libero accusamus excepturi. Quisquam incidunt debitis beatae maxime consequuntur, quis suscipit laudantium ab architecto molestias vero ipsum eaque similique alias eius odio molestiae sint quod aliquid qui doloremque ratione! Eveniet cumque unde voluptatibus doloremque, odio non. Sed numquam, doloremque inventore consequatur aut qui explicabo beatae nostrum? Impedit odio voluptatum quasi veritatis cum? Dolor culpa aliquam, alias libero a quis nobis quidem quia similique voluptatibus repellendus corporis, labore consequatur.
        </p>
      </Box>
    </Layout>
  )
}

export default About
