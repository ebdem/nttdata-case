import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const LoadigSkeleton = () => {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton animation="wave" variant="rounded" width="100%"height={40} />
      <Skeleton animation="wave" variant="rounded" width="100%" height={60} />
      <Skeleton animation="wave" variant="rounded" width="100%" height={60} />
    </Stack>
  );
}

export default LoadigSkeleton;