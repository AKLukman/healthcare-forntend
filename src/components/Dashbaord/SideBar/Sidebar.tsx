/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, List, Stack, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import logo from "../../../assets/svgs/logo.svg"
import Link from 'next/link';
import { drawerItems } from '@/utils/drawerItems';
import { UserRole } from '@/types/common';
import SidebarItem from './SidebarItem';
import { getUserInfo } from '@/services/auth.services';

const Sidebar = () => {
    const [ userRole, setUserRole ] = useState( "" )
    useEffect( () => {
        const { role } = getUserInfo() as any;
        setUserRole( role )
    }, [] )




    return (
        <Box>
            <Stack direction="row" alignItems="center" justifyContent="center" gap={1} sx={{ py: 1, mt: 1 }} component={Link} href="/">
                <Image src={logo} alt='logo' height={40} width={40}></Image>
                <Typography variant='h6' component="h1">UK Health Care</Typography>
            </Stack>
            <List>
                {drawerItems( userRole as UserRole ).map( ( item, index ) => (
                    <SidebarItem key={index} item={item} ></SidebarItem>
                ) )}
            </List>
        </Box>
    )
}

export default Sidebar
