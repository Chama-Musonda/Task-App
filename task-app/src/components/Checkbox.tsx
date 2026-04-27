import { CircleCheck } from "lucide-react"


const Checkbox = ({ checked, whenClicked }: {checked: boolean, whenClicked: () => void}) => {
   
  
  return (
    <button className={`w-6 h-6 rounded-full flex items-center ${checked ? 'bg-primary justify-center text-white' : 'border-2 border-outline-variant justify-center hover:border-primary transition-colors'}`} onClick={whenClicked}>
      {checked && <CircleCheck className="text-[14px]" />}
    </button>
  )
}

export default Checkbox