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
import { Link as RouterLink } from 'react-router-dom';
import useLives from '../hooks/useLives';

const CharacterList: FC = () => {
  const { lives } = useLives();

  return (
    <div>
      <List>
        {lives.map((live) => (
          <ListItem key={live.uuid}>
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
                  <Box display="flex" gap={1}>
                    {live.acts.map((act, index) => (
                      <Typography
                        key={index}
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                      >
                        {act}
                      </Typography>
                    ))}
                  </Box>
                  <Typography variant="body2">{live.venue}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={RouterLink}
                    to={`/lives/${live.uuid}`}
                    size="small"
                  >
                    Learn More
                  </Button>
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
