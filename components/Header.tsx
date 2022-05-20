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
  LoginIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'

function Header() {
  const { data: session } = useSession()
  return (
    <div className="sticky top-0 z-50 flex items-center py-2 px-4 shadow-sm bg-white">
      <div className="relative h-10 w-20 flex-shrink-0">
        <Image src="/images/logo.png" layout="fill" objectFit="contain" priority/>
      </div>

      <div className="mx-5 flex cursor-pointer items-center xl:min-w-[300px]">
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

      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>

      {session ? (
        <div
          className="flex cursor-pointer items-center space-x-2 p-2 text-gray-500"
          onClick={() => signOut()}
        >
          <UserIcon className="icon" />
          <div className="flex-1 text-xs">
            <p className="truncate">{session?.user?.name}</p>
            <p className="text-gray-400">1.2k Karma</p>
          </div>
          <ChevronDownIcon className="h-5 w-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          className="flex cursor-pointer items-center space-x-2 p-2 text-gray-500"
          onClick={() => signIn()}
        >
          <LoginIcon className="h-5 w-5" />
          <p>Login</p>
        </div>
      )}
    </div>
  )
}

export default Header
