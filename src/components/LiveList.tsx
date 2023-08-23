import type { FC } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import useLives from '../hooks/useLives';

const CharacterList: FC = () => {
  const { lives } = useLives();

  return (
    <div>
      <List>
        {lives.map((live) => (
          <ListItem key={live.id}>
            <Box display="flex" justifyContent="center" width="100%">
              <Card sx={{ width: 345 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {live.eventDate}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {live.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {live.act}
                  </Typography>
                  <Typography variant="body2">{live.venue}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Box>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CharacterList;
