import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(
   props: CircularProgressProps & { value: number },
) {
   return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
         <CircularProgress
            sx={{
               color: "#4CB648"
            }}
            size={80}
            variant="determinate"
            {...props}
         />
         <Box
            sx={{
               top: 4,
               left: 0,
               bottom: 0,
               right: 0,
               position: 'absolute',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
            }}
         >
            <Typography
               variant="subtitle1"
               component="div"
               className='text-white !font-Estedad-Black'
            >{`${Math.round(props.value)}%`}</Typography>
         </Box>
      </Box>
   );
}

export default CircularProgressWithLabel