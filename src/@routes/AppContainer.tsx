import React from 'react';
import Container from '@mui/material/Container';
import MainView from '../@views/MainView';

export default function AppContainer() {
  return (
    <Container maxWidth="lg">
      <MainView />
    </Container>
  );
}
