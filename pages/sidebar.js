import React from 'react';
import SidebarComponent from "../components/SideBarComponent";

const items = [
    { name: 'home', label: 'Home' },
    { name: 'billing', label: 'Billing' },
    { name: 'settings', label: 'Settings' },
]

export default function SideBar({ items }) {
    return (
        <SidebarComponent items={items} />
    );
}