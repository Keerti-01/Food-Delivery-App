import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Rating from "react-rating-stars-component"

export default function ReviewModal({
     isOpen,
     setIsOpen, 
     handleRating,
      ...props}) {
  
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
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                   Add Review
                  </Dialog.Title>
                <div className="mt-2 flex flex-col gap-4">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 text-base text-gray-500">
                        <input type="radio" name="review" id="dining" />
                        <label htmlFor="dining">Dining</label> 
                    </div>
                    <div className="flex items-center gap-2 text-base text-gray-500">
                        <input type="radio" name="review" id="delivery" />
                        <label htmlFor="delivery">Delivery</label> 
                    </div>
                </div>
                <Rating count={5} onChange={handleRating} size={24} />

                <form className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-2 w-full mt-4'>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" placeholder='amazing food' 
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg
                        focus:outline-none focus:border-app-400" />
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label htmlFor="review-text">Review Text</label>
                        <textarea type="text" id="review-text" 
                        placeholder="Write a review" rows="5"
                        className="w-full border border-gray-400 px-3 py-2 rounded-lg
                        focus:outline-none focus:border-app-400">

                        </textarea>
                    </div>
                </form>

                </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Submit
                    </button>
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
