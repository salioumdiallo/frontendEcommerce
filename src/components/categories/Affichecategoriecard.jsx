import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Affichecategoriecard = ({ categories }) => {
    return (
        <div className='container'>
            <div

style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
            {categories.map((cat,index)=>
            
            <Card key={index} sx={{ maxWidth: 'auto',margin:1 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={cat.imagecategorie}
                    title={cat.nom}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                         {cat.nomcategorie}
                    </Typography>
                
                </CardContent>
                
            </Card>
        )}
        </div>
        </div>
    )
}

export default Affichecategoriecard
