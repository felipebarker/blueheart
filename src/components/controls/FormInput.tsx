import { useEffect, useLayoutEffect, useState } from 'react';

interface FormInputProps {
  name: string;
  type: string;
  placeholder: string;
  onChange?: (event: any) => void;
  value?: string;
  children?: any;
  className?: string;
  disabled?: boolean;
  erro?: boolean;
}

export default function FormInput(props: FormInputProps) {
  const corTexto = props.disabled ? 'text-gray-600' : 'text-gray-800';
  const [fundoErro, setFundoErro] = useState(false);

  useEffect(() => {
    if (props.erro) {
      setFundoErro(true);
      setTimeout(setFundoErro, 500, false);
    }
  }, [props.erro]);

  return (
    // <>
    // <h1>testaaae</h1>
    // {props.children}
    // </>
    <div className={`relative ${props.className}`}>
      {props.type != 'textarea' ? (
        <input
          type={props.type}
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
          className={`mt-7 rounded-md border-b-4 outline-none p-3 ${
            fundoErro ? 'bg-red-300' : 'bg-gray-300'
          } 
                  ${props.erro ? 'border-red-500' : 'border-transparent'}
                    peer mb-1 focus:border-blue-600 focus:placeholder-transparent focus:bg-white/100  ${corTexto} ${
            props.className
          }`}
          onChange={props.onChange}
          value={props.value}
          disabled={props.disabled}
          // onChange={e => updateFormInput({...formInput, name: e.target.value})}
        />
      ) : (
        <textarea
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
          className={`mt-7 rounded-sm border-b-4 border-gray-400 outline-none p-1 bg-gray-200 
                    peer mb-1 focus:border-cyan-600 focus:placeholder-transparen ${corTexto} ${props.className}`}
          onChange={props.onChange}
          value={props.value}
          disabled={props.disabled}
          // onChange={e => updateFormInput({...formInput, name: e.target.value})}
        />
      )}

      <label
        htmlFor={props.name}
        className={`
            absolute left-0 top-2 py-0 text-sm font-semibold bg-transparent
            peer-placeholder-shown:text-transparent peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent 
            transition-all duration-200 peer-focus:text-gray-100 text-gray-100 peer-focus:text-sm 
            `}
      >
        {props.placeholder}:
      </label>
    </div>
  );
}
