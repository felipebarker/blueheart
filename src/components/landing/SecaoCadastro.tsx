import FormInput from '../controls/FormInput';
import FormButton from '../controls/FormButton';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FiAlertTriangle } from 'react-icons/fi';
import { insertData } from '../../data/utils/firestoreFunctions';
import {
  signInEmailSenha,
  signInGoogle,
  signUpEmailSenha,
} from '../../data/utils/firebaseAuthFunctions';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import Timer2 from '../countdown/Timer2';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SecaoCadastro() {
  // type formCadastro = {
  //   nome: string,
  //   sobrenome: string,
  //   email: string,
  //   senha: string
  // }
  const router = useRouter();
  const [erro, setErro] = useState(null);

  const validate = (values) => {
    const errors = {} as any;
    if (!values.nome) {
      errors.nome = 'Obrigatório';
    }

    if (!values.sobrenome) {
      errors.sobrenome = 'Obrigatório';
    }

    if (!values.email) {
      errors.email = 'Obrigatório';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'E-mail inválido';
    }

    if (!values.senha) {
      errors.senha = 'Obrigatório';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      nome: '',
      sobrenome: '',
      email: '',
      senha: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: false,
    validate,
    onSubmit: async (values) => {
      setErro(null);
      try {
        const response = await signUpEmailSenha(values.email, values.senha);
        // console.log(response)
        if (!!response.user) {
          const result = await cadastrarUsuario(
            response.user?.uid,
            `users/${response.user?.uid}`
          );
          if (result) {
            // router.push('/')
            window.alert('Cadastrado com sucesso!');
          } else {
            window.alert('Problema no cadastro!');
          }
        } else {
          setErro(response.erro);
          setTimeout(setErro, 3000, null);
        }
      } catch (err) {
        console.log(err);
      }
      // alert(JSON.stringify(values, null, 2));
    },
  });

  async function cadastrarUsuario(uid: string, docPath: string) {
    // const docPath = 'users/'
    const data = {
      uid: uid,
      nome: formik.values.nome,
      sobrenome: formik.values.sobrenome,
      email: formik.values.email,
    };
    const result = await insertData(docPath, data);
    return result;
    // window.alert(result ? 'Cadastrado com sucesso!' : 'Erro no cadastro!')
  }

  return (
    <section
      id='cadastro'
      className="relative bg-[url('/images/landing/fundo1.jpg')] bg-center bg-fixed"
    >
      <div className='relative mx-0 px-0 filter-none w-full bg-gradient-to-b from-black/20 via-black/90 to-black'>
        {/* Hero content */}
        <div className='pt-20 pb-10 md:pt-40 md:pb-5'>
          {/* Div inteiro */}
          <div className='flex flex-col md:flex-row items-center pb-12 mx-5 md:mx-auto md:py-12'>
            {/* Texto incial */}
            <div className='max-w-3xl mx-auto md:w-1/2'>
              <h1
                className='md:text-8xl font-extrabold leading-tighter tracking-tighter mb-12 text-gray-100'
                data-aos='zoom-y-out'
              >
                Your ticket to the future of{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-100'>
                  music!
                </span>
              </h1>
              <h3 className=' mb-8' data-aos='zoom-y-out' data-aos-delay='150'>
                NFTicket é uma plataforma de NFT baseada em Blockchain para quem
                quer se conectar e experienciar a música de uma forma diferente.
                Ao possuir um NFT, você não está simplesmente portando um ticket
                ou uma obra de arte rara, você está ganhando acesso a uma
                comunidade cujos benefícios e ofertas revoluciona como fãs e
                artistas se conectam.
              </h3>
            </div>

            {/* Formulario de cadastro */}
            <div className='rounded-xl  shadow-blue-300 mx-auto sm:w-1/3 min-w-[350px] relative z-10 '>
              <div
                className='bg-black/75 px-4 py-4 rounded-xl justify-center items-center 
                flex flex-col w-auto z-1'
              >
                <h2 className='font-bold border-b-4 border-blue-600 w-fit'>
                  Cadastre-se
                </h2>
                <h5 className='mt-2 text-lg'>
                  e fique por dentro das novidades!
                </h5>

                {/* MSG ERRO */}
                <div
                  className={`${
                    erro ? 'flex' : 'hidden'
                  } w-full bg-red-500/40 border border-red-700 text-gray-100
                  mt-2 rounded-md justify-center items-center py-1`}
                >
                  <span className='text-xl mr-2'>
                    <FiAlertTriangle></FiAlertTriangle>
                  </span>
                  <h5>{erro}</h5>
                </div>

                <div
                  className='flex flex-col items-center w-full sm:justify-center my-0'
                  data-aos='zoom-y-out'
                  data-aos-delay='300'
                >
                  <form onSubmit={formik.handleSubmit} className='w-full'>
                    <div className='flex flex-row justify-center items-centerpx-2 w-full'>
                      <FormInput
                        name='nome'
                        type='text'
                        placeholder='Nome'
                        className='w-[100%] mr-4 mb-4 h-14 '
                        onChange={formik.handleChange}
                        value={formik.values.nome}
                        erro={!!formik.errors.nome}
                      ></FormInput>
                      <FormInput
                        name='sobrenome'
                        type='text'
                        placeholder='Sobrenome'
                        className='w-[100%] h-14 mb-4 '
                        onChange={formik.handleChange}
                        value={formik.values.sobrenome}
                        erro={!!formik.errors.sobrenome}
                      ></FormInput>
                    </div>
                    <FormInput
                      name='email'
                      type='email'
                      placeholder='Email'
                      className='w-full h-14 mb-4'
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      erro={!!formik.errors.email}
                    ></FormInput>
                    <FormInput
                      name='senha'
                      type='password'
                      placeholder='Senha'
                      className='w-full h-14 mb-4'
                      onChange={formik.handleChange}
                      value={formik.values.senha}
                      erro={!!formik.errors.senha}
                    ></FormInput>

                    <FormButton className='w-full mt-12' type='submit'>
                      Cadastrar
                    </FormButton>
                  </form>

                  <div className='mt-6 flex flex-row items-center justify-center w-full my-3'>
                    <hr className='w-[30%] border-gray-600 z-0' />
                    <h5 className='h-full w-3/4 z-30 mx-auto text-center'>
                      {' '}
                      ou cadastre-se com{' '}
                    </h5>
                    <hr className='w-[30%] border-gray-600 z-0' />
                  </div>

                  <div className=' mt-6 flex flex-row w-3/4 items-stretch place-items-stretch justify-center'>
                    <button
                      className='flex h-8 w-8 rounded-full border-2 border-gray-100 items-center justify-center mx-auto
                        hover:bg-gray-100 hover:text-gray-800'
                      onClick={(e) => signInGoogle()}
                    >
                      <FaGoogle />
                    </button>
                    <button
                      className='flex h-8 w-8 rounded-full border-2 border-gray-100 items-center justify-center mx-auto
                        hover:bg-gray-100 hover:text-gray-800'
                    >
                      <FaFacebookF />
                    </button>
                    <button
                      className='flex h-8 w-8 rounded-full border-2 border-gray-100 items-center justify-center mx-auto
                        hover:bg-gray-100 hover:text-gray-800'
                    >
                      <FaTwitter />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
