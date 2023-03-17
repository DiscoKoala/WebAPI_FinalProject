import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@mui/icons-material/DonutLarge'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import { SearchOutlined } from '@mui/icons-material'
import SidebarChat from './SidebarChat'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div classname="sidebar_header">
                <Avatar 
                src="https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg"/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div classname="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div classname="sidebar_chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}
export default Sidebar