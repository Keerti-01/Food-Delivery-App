import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {FcGoogle} from "react-icons/fc"

export default function SignIn({isOpen, setIsOpen}) {
  

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-center font-medium leading-6 text-gray-900"
                  >
                    Sign In
                  </Dialog.Title>
                  <div className="my-4">
                    <button className='flex items-center gap-2 w-full border border-gray-400 bg-white
                    text-gray-500 hover:bg-gray-200 py-2 px-2 rounded-lg mt-4'>
                        Signin with Google <FcGoogle />
                    </button>
                    <div className='mt-6 flex items-center gap-2 mx-8 '>
                        <hr className='w-2/5 '></hr>
                        <div className='text-gray-400 text-center'>or</div>
                        <hr className='w-2/5'></hr>
                    </div>
                    
                    <form className='flex flex-col gap-1'>
                        <div className='flex flex-col gap-2 w-full mt-4'>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" placeholder='email@email.com' 
                            className="w-full border border-gray-400 px-3 py-2 rounded-lg
                                focus:outline-none focus:border-app-400" />
                        </div>
                        <div className='flex flex-col gap-2 w-full mt-4'>
                            <label htmlFor="password">Password</label>
                            <input type="text" id="password" placeholder='*****' 
                            className="w-full border border-gray-400 px-3 py-2 rounded-lg
                                focus:outline-none focus:border-app-400" />
                        </div>
                        <div className="w-full bg-app-500 text-white text-center
                         py-2 rounded-lg mt-4 ">
                            Sign In
                        </div>
                    </form>
                  </div>

                 
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
