import React from 'react';
    import { CssBaseline, Container, Typography } from '@mui/material';
    import { globalStyles } from './styles/globalStyles';

    function App() {
      return (
        <>
          <CssBaseline />
          <Container maxWidth="md" css={globalStyles}>
            <Typography variant="h3" align="center" gutterBottom>
              VoiceTranscribe
            </Typography>
            {/* Transcription UI will go here */}
          </Container>
        </>
      );
    }

    export default App;
