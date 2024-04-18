import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


interface Props {
    rate: number
}



export default function HalfRating(props: Props) {
    return (
        <Stack spacing={1}>
            <Rating name="half-rating-read" value={props?.rate} precision={0.1} readOnly/>
        </Stack>
    );
}