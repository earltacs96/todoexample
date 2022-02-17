import React from 'react'

import { FiLogIn, FiLogOut, FiPlusCircle } from 'react-icons/fi'

import IconButton from '@components/IconButton'

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div>
        <IconButton>
          <FiPlusCircle /> Create Note
        </IconButton>
      </div>
      <div>
        <ul>
          <li>Notes</li>
          <li>Favorites</li>
          <li>Trash</li>
        </ul>
      </div>
      <div>
          <IconButton>
              <FiLogOut /> Logout
          </IconButton>
          <IconButton>
              <FiLogIn /> Login
          </IconButton>
      </div>
    </aside>
  )
}

export default Sidebar;
