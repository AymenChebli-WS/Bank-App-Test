import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import DownloadIcon from '@mui/icons-material/Download';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FaExchangeAlt } from 'react-icons/fa';
import { FaCoins } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';
import SdCardAlertIcon from '@mui/icons-material/SdCardAlert';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';


export const SidebarData = [
    {
        title: 'Compte',
        path: '/Home',
        icon: <PersonIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Téléchargement',
        path: '/comptes',
        icon: <DownloadIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Virement',
        path: '/transfer',
        icon: <FaExchangeAlt style={{marginLeft: '0.25rem', fontSize: 18}} />,
        cName: 'nav-text'
    },
    {
        title: 'Monétique',
        path: '/products',
        icon: <FaCoins style={{marginLeft: '0.25rem', fontSize: 18}} />,
        cName: 'nav-text'
    },
    {
        title: 'Bancaire Etranger',
        path: '/products',
        icon: <FaCreditCard style={{marginLeft: '0.25rem', fontSize: 18}} />,
        cName: 'nav-text'
    },
    {
        title: 'Services',
        path: '/products',
        icon: <SdCardAlertIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Financement',
        path: '/products',
        icon: <PriceCheckIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Change/Bourse',
        path: '/products',
        icon: <QueryStatsIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Gestion de budget',
        path: '/products',
        icon: <AccountBalanceWalletIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Messagerie',
        path: '/products',
        icon: <MoveToInboxIcon />,
        cName: 'nav-text'
    },
]