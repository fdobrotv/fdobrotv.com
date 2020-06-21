import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Copyright from '../src/Copyright';
import CardMedia from "@material-ui/core/CardMedia";
import AppBarComponent from "../components/AppBarComponent";
import SidebarComponent from "../components/SideBarComponent";
import MyPhotoComponent from "../components/MyPhotoComponent";
import Carousel from 'react-material-ui-carousel'
import {Grid, Paper} from '@material-ui/core'
import Button from "@material-ui/core/Button";
import {sideBarItems} from "../src/sideBarSettings";
import {portfolioCarouselItems} from "../src/portfolioCarouselItems";

export default function Portfolio() {
    return (
        <div>
            <AppBarComponent/>
            <Box display="flex" flexDirection="row">
                <Box width={1 / 5}>
                    <SidebarComponent items={sideBarItems}/>
                </Box>
                <Box width={3 / 5}>
                    <Container maxWidth="sm">
                        <Box my={4}>
                            <Typography variant="h4" component="h1" gutterBottom>
                                Onaybazar/Happyfood
                            </Typography>
                            <Typography>
                                Market place platform for goods and food.
                                <br/>
                            </Typography>
                            {/*<ProTip/>*/}
                            <Grid container
                                  direction="row"
                                  justify="center"
                                  alignItems="center">
                                <Carousel>
                                    {
                                        portfolioCarouselItems.map(item => <Item item={item}/>)
                                    }
                                </Carousel>
                            </Grid>
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

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <CardMedia style={{maxWidth: '550px', maxHeight: '500px'}} component="img"
                       image={props.item.imageLink}/>

            <Button className="CheckButton" href={props.item.resourceLink}>
                Look at it!
            </Button>
        </Paper>
    )
}