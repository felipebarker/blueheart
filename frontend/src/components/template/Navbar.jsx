/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, UserIcon, UsersIcon, XIcon } from '@heroicons/react/outline'
import Banner from '../landing/Banner'
import FormButton from '../controls/FormButton'
import { useRouter } from 'next/router'
// import { useState, useEffect } from 'react'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar() {
  // const [top, setTop] = useState(true);
  const router = useRouter()

  const location = router.pathname
  console.log('Location: ', location)

  const [top, setTop] = useState(true)
  const navigation = [
    { name: 'Inicial', href: '/', current: true },
    { name: 'Detalhes Token', href: '/token-info', current: false },
    { name: 'Artista', href: '/artista', current: false },
    { name: 'Fale conosco', href: '#fale-conosco', current: false },
    // { name: 'Calendar', href: '#', current: false },
  ]



  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
      // console.log('rolou')
      // console.log(window.pageYOffset)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  
  
  return (
    <>
    <Disclosure as="nav" className={`fixed w-full z-30 transition duration-300 
      ease-in-out ${top && 'bg-black'} ${!top && 'bg-black/40 backdrop-blur-sm shadow-lg'}`}>
      {({ open }) => (
        <>
          <div className={`max-w-8xl mx-auto px-2 sm:px-6 lg:px-16 `}>
            <div className="relative flex items-center justify-between h-36">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 
                hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
                `}>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center w-auto ml-12 sm:ml-0">
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  /> */}
                  {/* <img
                    className="h-6 sm:h-12 w-auto mx-auto sm:block sm:mr-0"
                    src="/images/logo.png"
                    alt="Workflow"
                  /> */}
                  <h1 className='font-extrabold'>Festival<span className='text-blue-400'>NFT</span></h1>
                </div>
                <div className="hidden sm:flex justify-center items-center w-[100%] ">
                  <div className="flex space-x-4">
                    {navigation.map((item, i) => (
                      // ELEMENTOS DA NAVBAR (LINKS)
                      <div key={i}>
                      <Link href={item.href}>
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          location == item.href ? 'bg-transparent text-gray-100 border-b-2 border-blue-600' 
                          : 'text-gray-300 ',
                          'px-1 py-2 text-lg font-medium overflow-hidden shrink-0'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a></Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                  type="button"
                  className="bg-black p-1 border-2 border-transparent rounded-full text-gray-300 hover:text-white hover:border-white
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
                  hidden md:block"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-8 w-8 " aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 mr-8 relative">
                  <div>
                    <Menu.Button className="bg-black flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <UserIcon className="h-8 w-8 " aria-hidden="true"/>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/* <button
                  type="button"
                  className="bg-gray-800 p-2 mx-2 rounded-md text-gray-400 
                  hover:text-white focus:outline-none hover:bg-cyan-600
                  focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  onClick={() => {window.location.href='#cadastro'}}
                > Cadastrar
                  <span className="sr-only">View notifications</span>
                </button> */}
                <FormButton  onClick={() => {window.location.href='#cadastro'}}
                className='scale-110 px-4 rounded-md mr-4'>Cadastrar</FormButton>
                
               
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium bg-gray-900'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
          {/* <Banner></Banner> */}
        </>
      )}
    </Disclosure>
    </>
  )
}
