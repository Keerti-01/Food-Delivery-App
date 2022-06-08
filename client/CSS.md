mx-auto = margin in x-axis is auto
px-4 = padding in x-axis is 4 (left and ryt)

lg:px-20 = forlarge screen we want padding of 20 in x-axis

<div className="w-32 flex items-center">
             <img src="logo.png" alt="logo" className="w-full h-full" />
        </div>
        <div className="flex items-center gap-3 ">
            <button className="bg-app-500 text-white px-3 py-2 rounded-full ">Login</button>
            <button className="bg-app-500 text-white px-3 py-2 rounded-full">Sign Up</button>

            <span className="border border-gray-300 text-app-500 rounded-full p-2">
                <FaUserAlt />
            </span>
        </div>