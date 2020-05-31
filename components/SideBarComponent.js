import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Link from '../src/Link';

//FROM: https://dev.to/jsmanifest/create-a-modern-dynamic-sidebar-menu-in-react-using-recursion-36eo
function SidebarItem({ label, link, items, depthStep = 10, depth = 0, ...rest }) {
    return (
        <>
            <ListItem button dense {...rest} component="a" href={link}>
                <ListItemText primary={label} style={{ paddingLeft: depth * depthStep }}/>
            </ListItem>
            {Array.isArray(items) ? (
                <List disablePadding dense>
                    {items.map((subItem) => (
                        <SidebarItem
                            key={subItem.name}
                            depth={depth + 1}
                            depthStep={depthStep}
                            {...subItem}
                        />
                    ))}
                </List>
            ) : null}
        </>
    )
}

function SidebarComponent({ items, depthStep, depth }) {
    return (
        <div className="sidebar">
            <List disablePadding dense>
                {items.map((sidebarItem, index) => (
                    <SidebarItem
                        key={`${sidebarItem.name}${index}`}
                        depthStep={depthStep}
                        depth={depth}
                        {...sidebarItem}
                    />
                ))}
            </List>

            <style jsx>
                {`
                    .sidebar {
                        max-width: 240px;
                        border: 1px solid rgba(0, 0, 0, 0.1);
                    },
                    .sidebar-subitem-text {
                        font-size: 0.8rem;
                    }
                `}
            </style>
        </div>
    )
}

export default SidebarComponent