import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

export const PortfolioItem = ({title,tools,image,description,linkGithub,linkWebsite}) => {



    return (
        <Card sx={{ width: 345, minWidth: '250px', margin: '10px', backgroundColor: '#FDFFFC', borderRadius: '20px'}}>
            <CardMedia
                component="img"
                image={require(`../../assets/${image}.jpg`)}
                alt="Imagen de proyecto"
                height="194"
            />
            <CardHeader
                title={title}
                subheader={tools}
                sx={{color: '#191919', padding: '5px 10px', margin: '0px'}}
            />
            <CardContent
                sx={{padding: '5px 10px', margin: '0px'}}
            >
                <Typography variant="body1" color="text.secondary">
                {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    <a href={linkGithub} target="_blank"><GitHubIcon htmlColor='#191919' /></a>
                </IconButton>
                <IconButton>
                    <a href={linkWebsite} target="_blank"><LanguageIcon htmlColor='#191919' /></a>
                </IconButton>
            </CardActions>
        </Card>
    )
}
