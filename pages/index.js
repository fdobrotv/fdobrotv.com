import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import dynamic from "next/dynamic";
import SidebarComponent from "../components/SideBarComponent";
import {sideBarItems} from "../src/sideBarSettings";
import MyPhotoComponent from "../components/MyPhotoComponent";
import {Grid} from '@material-ui/core';

const AppBarComponent = dynamic(
    () => import('../components/AppBarComponent')
)

const WordCloudComponent = dynamic(
    () => import('../components/WordCloudComponent'),
    {ssr: false}
)

export default function Index() {
    return (
        <React.Fragment>
            <AppBarComponent/>
            <Box display="flex" flexDirection="row">
                <Box width={1 / 5}>
                    <SidebarComponent items={sideBarItems}/>
                </Box>
                <Box width={3 / 5}>
                    <Container maxWidth="sm">
                        <Box my={4}>
                            <Typography variant="h5" component="h1" gutterBottom>
                                Biography
                            </Typography>
                            <Typography>
                                My name is Dobrotvorskii Fedor, I am a JVM languages Senior Backend Developer/team
                                lead/tech
                                lead,
                                who is also continuously learning how to write frontend and mobile applications.
                                <br/>
                                My work experience is related to writing Сloud Geo Informational Systems, CRMs and
                                Marketplace platforms.
                            </Typography>
                            <Box>
                                <Link href="/portfolio" color="secondary">
                                    Look at my works...
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/team" color="secondary">
                                    And at my team!
                                </Link>
                            </Box>
                            {/*<ProTip/>*/}

                        </Box>
                    </Container>
                    <Grid container
                          direction="row"
                          justify="center"
                          alignItems="center">
                        <WordCloudComponent/>
                    </Grid>
                    <Copyright/>
                </Box>
                <Box m={0} alignItems="right" display="flex" flexDirection="row-reverse" width={1 / 5}>
                    <MyPhotoComponent/>
                </Box>

            </Box>
        </React.Fragment>
    );
}