import { Menu } from '@headlessui/react'
import {FaUserAlt} from "react-icons/fa"

function UserDropDown() {
  return (
    <Menu>
      <Menu.Button>
            <span className="border border-gray-300 text-app-400 rounded-full p-3">
                    <FaUserAlt />
            </span>
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
            <button>
              Sign In
            </button>
        </Menu.Item>
        <Menu.Item>
            <button>
              Sign Up
            </button>
        </Menu.Item>
        
      </Menu.Items>
    </Menu>
  )
}

export default UserDropDown;