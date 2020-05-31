import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import dynamic from "next/dynamic";
import SidebarComponent from "../components/SideBarComponent";
import {CardMedia} from '@material-ui/core';
import {items} from "../src/sideBarSettings";
import MyPhotoComponent from "../components/MyPhotoComponent";

const AppBarComponent = dynamic(
    () => import('../components/AppBarComponent')
)

const WordCloudComponent = dynamic(
    () => import('../components/WordCloudComponent'),
    { ssr: false }
)

export default function Index() {
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
                            <Typography variant="h5" component="h1" gutterBottom>
                                Biography
                            </Typography>
                            <Typography>
                                My name is Dobrotvorskii Fedor, at the age of 6, my parents put me on a PC and I still
                                can’t
                                get up.
                                After several years of research on operation system capabilities,
                                I decided that I should learn how to write applications and how the internet works.
                                And now I'm fully consumed and mad by IT ecosystem.
                            </Typography>
                            <Link href="/portfolio" color="secondary">
                                Look at my works
                            </Link>
                            <Link href="/team" color="secondary">
                                And my team!
                            </Link>
                            {/*<ProTip/>*/}
                            <Copyright/>
                        </Box>
                    </Container>
                    <Box display="flex" alignItems="center" justifyContent="center" width="90%" style={{ maxHeight: "100%", overflow: "auto" }}>
                        <WordCloudComponent/>
                    </Box>
                </Box>
                <Box m={0} alignItems="right" display="flex" flexDirection="row-reverse" width={1 / 5}>
                    <MyPhotoComponent/>
                </Box>
            </Box>
        </div>
    );
}