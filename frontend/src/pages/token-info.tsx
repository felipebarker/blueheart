import Layout from '../components/template/Layout';
import {
  FaRegHeart,
  FaHeart,
  FaRegEye,
  FaEthereum,
  FaWallet,
  FaListUl,
  FaBars,
  FaBuffer,
  FaTag,
} from 'react-icons/fa';
import { FiInfo, FiGrid } from 'react-icons/fi';
import FormButton from 'components/controls/FormButton';
import { useState } from 'react';
import styles from '../../styles/TokenInfo.module.css';
import CardNft from 'components/template/CardNft';
import { Disclosure } from '@headlessui/react';
import { GoTriangleDown } from 'react-icons/go';
import DisclosureNft from 'components/template/DisclosureNft';

export default function TokenInfo() {
  const [nftCurtida, setNftCurtida] = useState(false);

  return (
    <Layout>
      <section className='mt-36 relative flex flex-col space-y-2 w-full rounded-tl-xl justify-center items-start 
      px-5 lg:px-10'>
        <div
          className='flex flex-col md:flex-row items-start justify-center space-y-2 
                md:space-x-2 md:space-y-0'
        >
          {/* DIV DA DIVISAO DA ESQUERDA */}
          <div
            className='flex flex-col w-full items-center justify-center rounded-tl-xl
                    md:w-[75%]'
          >
            {/* DIV da imagem da NFT */}
            <div
              className='flex flex-col w-full items-center border border-gray-600 rounded-t-2xl text-gray-900 
                        shadow-md shadow-gray-600/20'
            >
              <h4 className='flex flex-row items-center px-5 py-2 w-full font-semibold border-b border-b-gray-600 bg-gray-100 rounded-t-2xl'>
                <a href='#'>Comprar</a>
                <span className='flex flex-row items-center ml-auto'>
                  <h5 className='mr-3'>100</h5>
                  {nftCurtida ? (
                    <FaRegHeart
                      className='cursor-pointer hover:text-blue-500 '
                      onClick={() => setNftCurtida(!nftCurtida)}
                    ></FaRegHeart>
                  ) : (
                    <FaHeart
                      className='cursor-pointer text-blue-600 hover:text-blue-500'
                      onClick={() => setNftCurtida(!nftCurtida)}
                    ></FaHeart>
                  )}
                </span>
              </h4>
              <div
                className='flex w-full items-center justify-center
                            '
              >
                <img
                  src='/images/token-info/tour-comuna-13.jpg'
                  className='flex items-center w-full '
                ></img>
              </div>
            </div>

            {/* DIV SOBRE A COLECAO */}
            <DisclosureNft
              titulo={
                <>
                  Sobre <a className='destacado'>[Nome da Colecao]</a>
                </>
              }
              icone={FaBars}
              className='mt-2 hidden md:flex'
            >
              <h5 className='inline-block items-start justify-start w-full'>
                <img
                  src='/images/token-info/psico3d.gif'
                  className='float-left w-[100px] mr-3 mt-1 rounded-md'
                ></img>
                Nunc tristique cursus magna vitae consequat. Pellentesque
                interdum purus enim, id ultrices augue aliquet quis. Nullam
                ultricies, nisi quis tincidunt gravida, ex dolor iaculis sem,
                quis finibus nulla metus ut mauris. Praesent lobortis magna
                vitae velit mattis scelerisque. Integer sit amet scelerisque
                nunc. Quisque fermentum quis sem ac feugiat. Duis dictum lorem
                nec lorem consequat, et aliquam neque molestie. Donec rhoncus,
                arcu vitae tempor pretium, ante quam euismod nunc, quis porta
                odio mi sed erat. Ut nec urna lobortis, congue eros nec, lacinia
                lorem. In eget blandit erat, sit amet maximus lectus. Aliquam
                erat volutpat.
              </h5>
            </DisclosureNft>

            {/* DIV DETALHES DA NFT NA BLOCKCHAIN */}
            <DisclosureNft
              titulo='Detalhes'
              icone={FaBars}
              className='mt-2 hidden md:flex'
            >
              <ul className='grid grid-cols-2 justify-start w-full space-y-1 items-center text-sm'>
                <li className='flex w-full justify-start'>
                  Endereço do contrato
                </li>
                <li className='flex w-full justify-end destacado'>
                  0x1e1...5f6
                </li>
                <li className='flex w-full justify-start'>ID do Token</li>
                <li className='flex w-full justify-end destacado'>123</li>
                <li className='flex w-full justify-start'>Padrão do token</li>
                <li className='flex w-full justify-end'>ERC-721</li>
                <li className='flex w-full justify-start'>Blockchain</li>
                <li className='flex w-full justify-end'>Ethereum</li>
              </ul>
            </DisclosureNft>
          </div>

          {/* DIV DA DIVISAO DA DIREITA */}
          <div
            className='flex flex-col w-full items-center justify-start 
                    md:w-full md:space-y-2 md:px-5'
          >
            {/* DIV DETALHES DA DIREITA */}
            <div className='flex flex-col w-full items-center rounded-t-2xl text-gray-100 px-2'>
              <h3 className='flex flex-row items-center py-2 w-full font-bold rounded-t-2xl'>
                Nome da NFT
              </h3>
              <h6 className='flex flex-row items-center py-2 w-full font-semibold rounded-t-2xl'>
                Proprietário:&nbsp;<a className='destacado'>Bestre</a>
                <FaRegEye className='ml-5 mr-2'></FaRegEye>
                100 visualizações
              </h6>
            </div>

            {/* DIV PREÇO E BOTOES COMPRAR */}
            <div
              className='flex flex-col w-full items-center text-gray-100 border border-gray-600 
                        mt-2 px-2 py-2 rounded-lg space-y-2 shadow-md shadow-gray-600/20'
            >
              <h6 className='flex flex-row items-center w-full font-semibold'>
                Preço atual:
              </h6>
              <h3 className='flex flex-row w-full justify-start items-center space-x-2'>
                <FaEthereum className='text-base'></FaEthereum>
                <span className='flex flex-row font-semibold'>0.218</span>
                <span className='flex text-xs font-semibold text-gray-400 pt-2'>
                  (R$ 200,00)
                </span>
              </h3>
              <div className='flex flex-row w-full space-x-2'>
                <FormButton
                  bgcolor='blue'
                  className='items-center space-x-2 px-4 text-sm'
                >
                  <FaWallet></FaWallet>
                  <span>Comprar</span>
                </FormButton>
                <FormButton
                  bgcolor='white'
                  className='items-center space-x-2 px-4 text-sm'
                >
                  <FaWallet></FaWallet>
                  <span>Fazer oferta</span>
                </FormButton>
              </div>
            </div>

            {/* DIV DESCRICAO DA NFT */}
            <div
              className='flex flex-col w-full items-center text-gray-100 border border-gray-600 
                        mt-2 px-2 py-2 rounded-lg space-y-2 shadow-md shadow-gray-600/20'
            >
              <h4 className='flex flex-row items-center w-full font-semibold'>
                Por&nbsp;
                <a className='destacado' href='#'>
                  COMUNA 13
                </a>
              </h4>
              <h5 className=''>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ut ullamcorper sem, sed maximus felis. In ut nisl id metus
                pellentesque fringilla vitae at odio. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Etiam sodales ante purus, sit amet dapibus ante
                imperdiet non. Etiam at tellus purus. Pellentesque convallis
                fringilla semper. Sed auctor felis sit amet varius vulputate.
                Maecenas ut leo ac dolor dapibus vehicula. Aliquam erat
                volutpat. Proin porttitor orci orci. Maecenas ut arcu faucibus,
                consectetur dui ac, euismod nulla.
              </h5>
            </div>

            {/* DIV BENEFICIOS DA NFT */}
            <DisclosureNft
              titulo='Benefícios exclusivos do [Nome do NFT]'
              icone={FaListUl}
              className='mt-2'
            >
              <ul className='list-outside list-disc ml-5'>
                <li className=''>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>Proin ut ullamcorper sem, sed maximus felis.</li>
                <li>
                  In ut nisl id metus pellentesque fringilla vitae at odio.
                </li>
                <li>
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </li>
                <li>
                  Etiam sodales ante purus, sit amet dapibus ante imperdiet non.
                </li>
                <li>
                  Etiam at tellus purus. Pellentesque convallis fringilla
                  semper.
                </li>
              </ul>
            </DisclosureNft>

            {/* REPETICAO DAS DIVS PARA APARECER EM TELAS PAQUENAS */}
            <DisclosureNft
              titulo={
                <>
                  Sobre <a className='destacado'>[Nome da Colecao]</a>
                </>
              }
              icone={FaBars}
              className='mt-2 md:hidden'
            >
              <h5 className='inline-block items-start justify-start w-full'>
                <img
                  src='/images/token-info/psico3d.gif'
                  className='float-left w-[100px] mr-3 mt-1 rounded-md'
                ></img>
                Nunc tristique cursus magna vitae consequat. Pellentesque
                interdum purus enim, id ultrices augue aliquet quis. Nullam
                ultricies, nisi quis tincidunt gravida, ex dolor iaculis sem,
                quis finibus nulla metus ut mauris. Praesent lobortis magna
                vitae velit mattis scelerisque. Integer sit amet scelerisque
                nunc. Quisque fermentum quis sem ac feugiat. Duis dictum lorem
                nec lorem consequat, et aliquam neque molestie. Donec rhoncus,
                arcu vitae tempor pretium, ante quam euismod nunc, quis porta
                odio mi sed erat. Ut nec urna lobortis, congue eros nec, lacinia
                lorem. In eget blandit erat, sit amet maximus lectus. Aliquam
                erat volutpat.
              </h5>
            </DisclosureNft>

            {/* DIV DETALHES DA NFT NA BLOCKCHAIN */}
            <DisclosureNft
              titulo='Detalhes'
              icone={FaBars}
              className='mt-2 md:hidden'
            >
              <ul className='grid grid-cols-2 justify-start w-full space-y-1 items-center text-sm'>
                <li className='flex w-full justify-start'>
                  Endereço do contrato
                </li>
                <li className='flex w-full justify-end destacado'>
                  0x1e1...5f6
                </li>
                <li className='flex w-full justify-start'>ID do Token</li>
                <li className='flex w-full justify-end destacado'>123</li>
                <li className='flex w-full justify-start'>Padrão do token</li>
                <li className='flex w-full justify-end'>ERC-721</li>
                <li className='flex w-full justify-start'>Blockchain</li>
                <li className='flex w-full justify-end'>Ethereum</li>
              </ul>
            </DisclosureNft>
          </div>
        </div>

        <DisclosureNft titulo='Mais dessa coleção' icone={FiGrid}>
          <div className='flex flex-row w-full h-full space-x-5 items-center justify-start overflow-x-auto py-2'>
            <CardNft
              imageUrl='/images/token-info/psico1.webp'
              price='0.109'
              title='Comuna 13 - #1'
              edition='1'
            ></CardNft>
            <CardNft
              imageUrl='/images/token-info/psico2.jfif'
              price='0.218'
              title='Comuna 13 - #2'
              edition='1'
            ></CardNft>
            <CardNft
              imageUrl='/images/token-info/psico3.jfif'
              price='0.312'
              title='Comuna 13 - #3'
              edition='1'
            ></CardNft>
            <CardNft
              imageUrl='/images/token-info/psico1.webp'
              price='0.109'
              title='Comuna 13 - #1'
              edition='1'
            ></CardNft>
            <CardNft
              imageUrl='/images/token-info/psico2.jfif'
              price='0.218'
              title='Comuna 13 - #2'
              edition='1'
            ></CardNft>
            <CardNft
              imageUrl='/images/token-info/psico3.jfif'
              price='0.312'
              title='Comuna 13 - #3'
              edition='1'
            ></CardNft>
            <CardNft
              imageUrl='/images/token-info/psico1.webp'
              price='0.109'
              title='Comuna 13 - #1'
              edition='1'
            ></CardNft>
            <CardNft
              imageUrl='/images/token-info/psico2.jfif'
              price='0.218'
              title='Comuna 13 - #2'
              edition='1'
            ></CardNft>
            <CardNft
              imageUrl='/images/token-info/psico3.jfif'
              price='0.312'
              title='Comuna 13 - #3'
              edition='1'
            ></CardNft>
          </div>
        </DisclosureNft>
      </section>
    </Layout>
  );
}
