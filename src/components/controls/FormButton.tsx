interface FormButtonProps {
  className?: string;
  bgcolor?: 'cyan' | 'lime' | '' | 'white' | 'blue';
  onClick?: (event: any) => void;
  children?: any;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function FormButton(props: FormButtonProps) {
  const bgcolor = () => {
    if (!props.disabled) {
      if (props.bgcolor === 'cyan') {
        // return 'bg-cyan-600 hover:bg-gray-200 hover:border-white hover:text-gray-800'
        return 'bg-cyan-600 hover:bg-cyan-500 hover:shadow-md hover:shadow-cyan-600/40';
      } else if (props.bgcolor === 'lime') {
        return 'bg-lime-600 hover:bg-gray-200 hover:border-white hover:text-gray-800';
      } else if (props.bgcolor === 'blue') {
        return 'bg-blue-400 hover:bg-blue-500 hover:border-white hover:text-gray-100';
      } else if (props.bgcolor === 'white') {
        return 'bg-gray-200 hover:bg-gray-100 text-gray-800 hover:shadow-md hover:shadow-gray-300/50';
      } else {
        return 'bg-blue-400 hover:bg-gray-200 hover:border-white hover:text-gray-800';
      }
    } else {
      return 'bg-gray-700 text-gray-800 cursor-not-allowed';
    }
  };

  return (
    <button
      onClick={props.onClick}
      className={`ease-in flex flex-shrink-0 justify-center font-bold rounded-lg p-2 shadow-lg min-w-fit min-h-fit py-2 cursor
            ${bgcolor()}
            ${props.className}`}
      type={props.type ?? 'button'}
    >
      {props.children}
    </button>
  );
}
