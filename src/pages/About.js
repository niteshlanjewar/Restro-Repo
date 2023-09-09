import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box 
      sx={{my:15,
        textAlign: "center",
        p:2,
        "& h4":{
          fontWeight:"bold",
          my: 3,
          fontSize: "3rem",
        },
        "& p": {
          textAlign: "justify",
        },
        "@media (max-width:600px)":{
          mt: 0,
          "& h4 ": {
            fontSize: "1.5rem",
          },
        }
        
      }}
      >
        <Typography variant='h4'>
          Welcome to My Dhaba
        </Typography>
        <p>
        Nestled in the heart of the bustling city, "La Maison de Saveurs" is a culinary oasis that beckons food enthusiasts from far and wide. With a rich history dating back to the early 20th century, this restaurant has established itself as a beacon of gastronomic excellence.

As you step through the ornate, wrought-iron gates, you are transported into a world of sensory delight. The elegant façade of the restaurant exudes timeless charm, its ivy-covered walls hinting at the culinary secrets that lie within.

Upon entering, you are greeted by warm, dimly lit interiors that evoke a sense of intimacy and sophistication. Soft jazz melodies waft through the air, creating a soothing backdrop to your dining experience. Tables adorned with crisp white linens and flickering candlelight set the stage for a memorable evening.

The menu at "La Maison de Saveurs" is a symphony of flavors, carefully curated by Chef Julien LeBlanc, a master of his craft. Drawing inspiration from both classic French cuisine and global culinary trends, the dishes here are a fusion of tradition and innovation. Savory aromas tantalize your senses as you peruse a menu that boasts a tantalizing array of appetizers, entrees, and desserts.

For starters, indulge in the delicate foie gras au torchon, a signature dish that melts in your mouth, or opt for the vibrant flavors of the Mediterranean with the grilled octopus salad. For the main course, the coq au vin is a masterpiece of tender chicken braised in red wine, while the vegetarian ratatouille offers a burst of Provencal sunshine on your plate.

To complement your meal, "La Maison de Saveurs" boasts an extensive wine cellar, showcasing a curated selection of fine wines from across the globe. Knowledgeable sommeliers are on hand to guide you through the perfect pairing for your chosen dishes.
As the evening unfolds, savor a delectable dessert like the crème brûlée with its perfectly caramelized sugar crust or the decadent chocolate fondant that oozes with pure indulgence.

"La Maison de Saveurs" is more than just a restaurant; it's an experience that engages all your senses and leaves a lasting impression. Whether you're celebrating a special occasion or seeking a romantic dinner for two, this culinary gem promises an unforgettable journey through the art of fine dining.

Come, take a seat, and let "La Maison de Saveurs" transport you to a world of gastronomic delight where every bite tells a story, and every visit is a celebration of culinary mastery.
        </p>
      </Box>
    </Layout>
  )
}

export default About
