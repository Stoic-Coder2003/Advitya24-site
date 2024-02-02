import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav class="bg-[rgba(0, 0, 0, 0.07)] backdrop-blur fixed w-full z-20 top-0 start-0">
  <div class="flex flex-wrap items-center justify-between mx-auto py-4 px-10">
  <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse w-36">
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-500">AdVITya'24</span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="w-36 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
      <li>
        <a href="#" class="text-gray-500 bg-blue-700 rounded md:bg-transparent md:text-gray-500 md:p-0 md:hover:text-slate-400 md:hover:border-b-2" aria-current="page">
            Home</a>
      </li>
      <li>
        <a href="#" class="md:bg-transparent md:text-gray-500 md:p-0 md:hover:text-slate-400 md:hover:border-b-2">
            Events</a>
      </li>
      <li>
        <a href="#" class="md:bg-transparent md:text-gray-500 md:p-0 md:hover:text-slate-400 md:hover:border-b-2">
            About us</a>
      </li>
      <li>
        <a href="#" class="md:bg-transparent md:text-gray-500 md:p-0 md:hover:text-slate-400 md:hover:border-b-2">
            Gallery</a>
      </li>
      <li>
        <a href="#" class="md:bg-transparent md:text-gray-500 md:p-0 md:hover:text-slate-400 md:hover:border-b-2">
            Helpdesk</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
    )
}

export default Navbar


