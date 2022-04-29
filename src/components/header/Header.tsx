import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { MenuListItem } from './components';
import Logo from '../utils/icons/logo-daymode.png';
import { MobileMenu } from './components/MobileMenu';

export const Header = () => {
  const [activeLink, setActiveLink] = useState<string>('');
  const style = {
    container: {
      top: 0,
      backgroundColor: 'rgba(243, 243, 243,0.9)',
      zIndex: 100,
    },
    header: {
      padding: '0.5rem 2rem',
      maxWidth: 1300,
      width: '100%',
      margin: 'auto',
    },
    logo: {
      height: 56,
      // width: '100%',
    },
    list: {
      display: 'flex',
      justifyContent: 'space-between',
      width: 300,
    },
  };

  const activePage = (page: string) => setActiveLink(page);

  return (
    <Grid container style={style.container} position="fixed">
      <Grid
        item
        flexDirection="row"
        justifyContent="space-between"
        sx={{
          width: '100%',
          display: {
            xs: 'flex',
            md: 'none',
          },
          padding: '0.5rem 0',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            width: '33%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <MobileMenu />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ width: '33%', display: 'flex', justifyContent: 'center' }}
        >
          <Link to="/">
            <img src={Logo} alt="logo" style={style.logo} />
          </Link>
        </motion.div>
        <Grid item style={{ width: '33%' }}></Grid>
      </Grid>
      <Grid
        item
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        style={style.header}
        sx={{
          display: {
            xs: 'none',
            md: 'flex',
          },
        }}
      >
        <motion.div
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Link to="/">
            <img src={Logo} alt="logo" style={style.logo} />
          </Link>
        </motion.div>

        <ul style={style.list}>
          <motion.div
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <MenuListItem
              active={activeLink}
              activePage={activePage}
              path="landscape"
              title="Landskap"
            />
          </motion.div>
          <motion.div
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <MenuListItem
              active={activeLink}
              activePage={activePage}
              path="oldBuildings"
              title="Gamla byggnader"
            />
          </motion.div>
        </ul>
      </Grid>
    </Grid>
  );
};
