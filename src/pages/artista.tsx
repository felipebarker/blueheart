import Layout from '../components/template/Layout';
import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaTwitter,
  FaRegStar,
  FaLink,
} from 'react-icons/fa';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { FiInfo, FiGrid } from 'react-icons/fi';
import FormButton from 'components/controls/FormButton';
import { useState } from 'react';
import styles from '../../styles/TokenInfo.module.css';
import CardNft from 'components/template/CardNft';
import { Disclosure } from '@headlessui/react';
import { GoTriangleDown } from 'react-icons/go';
import DisclosureNft from 'components/template/DisclosureNft';

export default function Artista() {
  const [star, setStar] = useState(false);

  function renderTabs() {
    return (
      <Tab.Group>
        <Tab.List
          as='div'
          className={`mt-[50px] grid grid-cols-2 gap-6 w-full p-6 bg-neutral-800 rounded-2xl items-center justify-center`}
          style={{
            boxShadow:
              '0px 4px 4px rgba(0, 0, 0, 0.25), 40px 40px 44px -20px rgba(0, 0, 0, 0.25)',
          }}
        >
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-[20px] rounded-xl w-[100%] min-w-fit
                    ${
                      selected
                        ? 'bg-gray-100 text-[#161616] '
                        : 'bg-black text-white '
                    }
                  `}
              >
                <h3>NFT Membership</h3>
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-[20px] rounded-xl w-[100%] min-w-fit 
                  ${
                    selected
                      ? 'bg-gray-100 text-[#161616] '
                      : 'bg-black text-white '
                  }
                `}
              >
                <h3>NFT Tickets</h3>
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels as='div' className='flex flex-col w-full mt-10'>
          <Tab.Panel
            as='ul'
            className='flex w-full flex-col space-x-0 space-y-10 items-start justify-start h-full'
          >
            <li
              className='flex flex-row w-full h-[250px] p-2 bg-neutral-800 rounded-2xl 
                '
            >
              <img
                src='/images/token-info/tour-comuna-13.jpg'
                className='h-full rounded-2xl aspect-square'
              />
              <div className='block ml-5 w-full h-full border-white justify-start rounded-2xl p-5 bg-transparent space-y-2'>
                {/* <h6 className='px-2 py-1 bg-blue-400 w-fit rounded-full text-neutral-800 border-blue-600 border-2'>Música</h6> */}
                <h6 className='text-blue-400'>Música</h6>
                <h2 className='w-full'>Comuna 13</h2>
              </div>
            </li>

            <li className='flex flex-row w-full h-[250px]'>
              <img
                src='/images/token-info/psico2.jfif'
                className='h-full rounded-2xl aspect-square'
              />
              <div className='block ml-5 w-full h-full border-white justify-start rounded-2xl p-5 bg-neutral-800 space-y-2'>
                <h6 className='text-blue-400'>Arte</h6>
                <h2 className='w-full'>Comuna 13</h2>
              </div>
            </li>
          </Tab.Panel>
          <Tab.Panel as='div'>NFT Tickets</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    );
  }

  return (
    // bg-[url('/images/artista/cover-example.png')] bg-fixed
    <Layout>
      <section className='relative flex flex-col w-full rounded-tl-xl justify-center items-start bg-black h-full'>
        {/* COVER PHOTO */}
        <div className="mt-0 flex bg-amber w-full bg-[url('/images/artista/cover-example.png')] bg-cover bg-center h-[500px]">
          <div
            className='flex w-full h-full items-start justify-center
          bg-gradient-to-b from-[#1D1D1D]/70 via-[#1D1D1D]/70 to-black'
          ></div>
        </div>
      </section>
      <section
        className='relative flex flex-col flex-grow w-full rounded-tl-xl justify-start items-center bg-black 
      h-full'
      >
        <img
          src='/images/artista/profile.png'
          className={`
            w-[240px] h-240px rounded-full relative mt-[-120px] border-0`}
        ></img>
        <span className='flex flex-row mt-[45px] w-full items-center justify-center'>
          <h1 className='font-semibold flex items-center h-full justify-center'>
            Eduardo Moraes Schuch{' '}
          </h1>
          <FaRegStar
            className={`flex text-3xl ml-5 ${
              star ? 'text-amber-300 fill-amber-300' : 'text-white'
            }`}
            onClick={() => setStar(!star)}
          />
        </span>
        <span className='grid grid-cols-5 gap-[75px] mt-[45px] text-[30px]'>
          <FaInstagram />
          <FaSpotify />
          <FaYoutube />
          <FaTwitter />
          <FaLink />
        </span>
      </section>

      {/* SECAO DA DESCRICAO */}
      <section
        className='relative flex flex-col flex-grow w-full rounded-tl-xl justify-start items-center bg-black
      h-full px-[80px]'
      >
        <div
          style={{
            boxShadow:
              '0px 4px 4px rgba(0, 0, 0, 0.25), 40px 40px 44px -20px rgba(0, 0, 0, 0.25)',
          }}
          className='flex flex-row drop bg-neutral-800 w-full h-[250px] mt-[65px] p-[50px] rounded-2xl'
        >
          <h3 className='w-[50%] font-[18px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam
            in hendrerit urna.
          </h3>
          <div
            className='grid  w-[50%]
            lg:grid-cols-3 place-items-stretch'
          >
            <span className='flex flex-col w-full items-center justify-center'>
              <h1 className='text-[65px]'>23</h1>
              <h3 className='mt-[5px]'>Items</h3>
            </span>
            <span className='flex flex-col w-full items-center justify-center'>
              <h1 className='text-[65px]'>8</h1>
              <h3 className='mt-[5px]'>Events</h3>
            </span>
            <span className='flex flex-col w-full items-center justify-center'>
              <h1 className='text-[65px]'>43k</h1>
              <h3 className='mt-[5px]'>Fans</h3>
            </span>
          </div>
        </div>
      </section>

      <section
        className='flex flex-col rounded-tl-xl justify-start items-center 
      px-[80px] h-full w-full'
      >
        {renderTabs()}
      </section>
    </Layout>
  );
}
