import * as React from 'react';
import PredictForm from './PredictForm'
import {Grid } from '@material-ui/core';
import StyledPaper from '../../components/StyledPaper';
import Container from '@mui/material/Container';


export default function Home() {
    return (
    <Container>
        <PredictForm/>
    </Container>

    );
}

