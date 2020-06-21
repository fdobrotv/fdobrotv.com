import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import AppBarComponent from "../components/AppBarComponent";
import SidebarComponent from "../components/SideBarComponent";
import {sideBarItems} from "../src/sideBarSettings";
import CardMedia from "@material-ui/core/CardMedia";
import MyPhotoComponent from "../components/MyPhotoComponent";

export default function About() {
    return (
        <div className="team">
            <AppBarComponent/>
            <Box display="flex" flexDirection="row">
                <Box width={1 / 5}>
                    <SidebarComponent items={sideBarItems}/>
                </Box>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Coming soon!
                    </Typography>
                    <Copyright/>
                </Box>
            </Box>
        </div>
    );
}