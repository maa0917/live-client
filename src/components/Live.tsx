import type { FC } from 'react';
import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import useLives from '../hooks/useLives';

const CharacterList: FC = () => {
  const { liveID = '' } = useParams();
  const { lives } = useLives();

  const live = lives.find((live) => live.uuid === liveID);

  if (live != null) {
    return (
      <div>
        <List>
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
              </Card>
            </Box>
          </ListItem>
        </List>
      </div>
    );
  }

  return <div>Not Found</div>;
};

export default CharacterList;
