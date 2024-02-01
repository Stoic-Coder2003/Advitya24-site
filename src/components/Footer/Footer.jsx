import { ChevronRight } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="w-full pt-6 bg-black rounded-t-2xl pb-2">
      <div className="mx-auto flex max-w-6xl flex-col items-start space-x-8 md:flex-row">
        <div className="w-full px-4 md:w-1/2 lg:px-0">
          <h1 className="max-w-sm text-3xl font-bold text-white">Subscribe to our Newsletter</h1>
          <form action="" className="mt-4 inline-flex w-full items-center md:w-3/4">
            <input
              className="flex h-10 w-full rounded-md border border-white/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-white/30 caret-white text-slate-200 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            ></input>
            <button
              type="button"
              className="ml-4 rounded-full bg-slate-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </form>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-6 md:mt-0 lg:w-3/4 lg:grid-cols-3">
         
            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-400 ">AdVITya</p>
              <ul className="flex flex-col space-y-2 text-[14px] font-medium text-gray-200">
                <li>Highlights</li>
                <li>Logins</li>
                <li>Magazines</li>
                <li>Press Release</li>
              </ul>
            </div>

            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-400 ">Features</p>
              <ul className="flex flex-col space-y-2 text-[14px] font-medium text-gray-200">
                <li>Payment Integeration</li>
                <li>Email marketing</li>
                <li>QR Ticketing</li>
                <li>Newsletter</li>
                <li>Promote</li>
                <li>Event Hosting</li>
                <li>Advertising</li>
              </ul>
            </div>

            <div className="mb-8 lg:mb-0">
              <p className="mb-6 text-lg font-semibold text-gray-400 ">Company</p>
              <ul className="flex flex-col space-y-2 text-[14px] font-medium text-gray-200">
                <li>About us</li>
                <li>Sponsors</li>
                <li>Blogs</li>
                <li>Career</li>
                <li>Events</li>
              </ul>
            </div>

        </div>
      </div>
      <hr className="my-4" />
      <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
        <NavLink to="https://shubh-mehrotra.vercel.app/"><img className='h-8 w-8' src="images/Shubh_Avatar.png" alt="Shubh" /></NavLink>
        <div className="mt-4 md:mt-0">
          <p className="text-sm font-medium text-gray-500">© 2024 Shubh M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
