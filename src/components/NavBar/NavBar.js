import React, { useState } from 'react'
import './NavBar.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #191919',
    '& .MuiTabs-indicator': {
      backgroundColor: '#E09F3E',
    },
  });
  
  const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: '#FDFFFC',
    fontSize: 18,
    fontFamily: ['Rubik', 'sans-serif'].join(','),
    '&:hover': {
      color: '#E09F3E',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#E09F3E',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#E09F3E',
    },
  }));

export const NavBar = () => {

    const navigate = useNavigate();
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        switch (newValue) {
            case 0:
                navigate('/')
                break;
            case 1:
                navigate('/education')
                break;
            case 2:
                navigate('/experience')
                break;
            case 3:
                navigate('/portfolio')
                break;
            case 4:
                navigate('/contact')
                break;
            default:
                break;
        }
        setValue(newValue);
    };

    return (
        <Box sx={{  bgcolor: '#191919' }}>
            <AntTabs
                value={value} 
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                textColor="primary"
                indicatorColor="primary"
            >
                <AntTab label="Sobre mi" />
                <AntTab label="Educación" />
                <AntTab label="Experiencia" />
                <AntTab label="Portfolio" />
                <AntTab label="Contacto" />
            </AntTabs>
        </Box>
    )
}
