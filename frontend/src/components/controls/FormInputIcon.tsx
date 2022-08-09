interface FormInputIconProps {
    name: string
    type: string
    icon: any
    onChange?: (event: any) => void
    value?: string
    placeholder?: string
    children?: any
}

export default function FormInputIcon(props: FormInputIconProps){
    return (
        <div className='bg-gray-800 w-64 p-2 flex items-center rounded-xl my-1'>
            <props.icon></props.icon>
            <input 
                // {...register('email')}
                type={props.type}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                // autoComplete='off'
                onChange={props.onChange}
                value={props.value}
                className='inline-block w-full text-gray-100 px-2 bg-gray-800 outline-none visited:bg-gray-800'></input>
        </div>
    )
}