import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  const navItems = [
    {
      name: 'Dashboard',
      path: '/owner',
      icon: assets.dashboardIcon
    },
    {
      name: 'Add Room',
      path: '/owner/add-room',
      icon: assets.addIcon
    },
    {
      name: 'List Room',
      path: '/owner/manage-rooms',
      icon: assets.listIcon
    }
  ]

  return (
    <div className='md:w-64 w-16 border-r border-gray-200 min-h-[calc(100vh-61px)] bg-white'>

      <div className='flex flex-col pt-6'>

        {navItems.map((item) => (
          <NavLink
            to={item.path}
            key={item.name}
            end={item.path === '/owner'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 md:px-6 py-3 transition-all ${
                isActive
                  ? 'bg-indigo-50 border-r-4 border-indigo-500 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <img
              src={item.icon}
              alt={item.name}
              className='w-5 h-5'
            />

            <span className='hidden md:block text-sm font-medium'>
              {item.name}
            </span>
          </NavLink>
        ))}

      </div>

    </div>
  )
}

export default Sidebar
