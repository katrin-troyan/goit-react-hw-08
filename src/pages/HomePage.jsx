import { Container, Typography, Box } from '@mui/material';

export default function HomePage() {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
        textAlign="center"
        px={2}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Phonebook
        </Typography>
        <Typography variant="h6">
          A simple and convenient application for storing and managing your
          contacts. Everything you need is at your fingertips.
        </Typography>
      </Box>
    </Container>
  );
}
