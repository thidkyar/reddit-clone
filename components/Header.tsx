import Image from 'next/image'
import React from 'react'
import { HomeIcon, ChevronDownIcon } from '@heroicons/react/solid'
import {
  SearchIcon,
  SparklesIcon,
  GlobeIcon,
  VideoCameraIcon,
  ChatIcon,
  SpeakerphoneIcon,
  BellIcon,
  PlusIcon,
  MenuIcon,
  UserIcon,
} from '@heroicons/react/outline'

function Header() {
  return (
    <div className="sticky top-0 z-50 flex py-2 px-4 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0">
        <Image src="/images/logo.png" layout="fill" objectFit="contain" />
      </div>

      <div className="mx-5 flex items-center cursor-pointer xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* SearchBox*/}
      <form className="flex flex-1 items-center space-x-2 rounded-md border border-gray-200 bg-gray-100 px-3 py-1 hover:border-blue-500">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          placeholder="Search Reddit"
          className="flex-1 bg-transparent outline-none"
        />
        <button type="submit" hidden />
      </form>

      <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>
      <div className="flex- ml-5 items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>
      <div className="hidden items-center text-gray-500 lg:flex">
        <UserIcon className="icon" />
      </div>
    </div>
  )
}

export default Header
