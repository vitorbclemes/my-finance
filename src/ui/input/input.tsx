interface TextInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  label:string,
  handleIcon?:()=>void
}

const TextInput = ({label,...inputAtt}:TextInputProps) => {
  return (
    <div className="flex flex-col">
        <label className="mb-1">
          {label}
          <div className="relative flex">
            <input {...inputAtt} className="p-10 border border-light-gray box-border grow focus:border-2"/>
          </div>
        </label>
    </div>
  )
}

export default TextInput;