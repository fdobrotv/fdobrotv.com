import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import CardMedia from "@material-ui/core/CardMedia";
import AppBarComponent from "../components/AppBarComponent";
import SidebarComponent from "../components/SideBarComponent";
import {items} from "../src/sideBarSettings";
import MyPhotoComponent from "../components/MyPhotoComponent";

export default function Portfolio() {
    return (
        <div>
            <AppBarComponent/>
            <Box display="flex" flexDirection="row">
                <Box width={1 / 5}>
                    <SidebarComponent items={items}/>
                </Box>
                <Box width={3 / 5}>
                    <Container maxWidth="sm">
                        <Box my={4}>
                            <Typography variant="h4" component="h1" gutterBottom>
                                Onaybazar.kz
                            </Typography>
                            <Typography>
                                Local market platform for a fresh food with delivery to hands.
                            </Typography>
                            <Box display="flex" alignItems="center" justifyContent="center" width="90%">
                                <CardMedia style={{maxWidth: '250px'}} component="img"
                                           image="/images/onaybazar.kz.jpg"/>
                            </Box>
                            {/*<ProTip/>*/}
                            <Copyright/>
                        </Box>
                    </Container>
                </Box>
                <Box m={0} alignItems="right" display="flex" flexDirection="row-reverse" width={1 / 5}>
                    <MyPhotoComponent/>
                </Box>
            </Box>
        </div>
    );
}