import Footer from "./Footer"
import FormInput from "./FormInput"
import Header from "./Header"
import { useParams } from "react-router-dom"

type Params = {
  action: 'login' | 'signup'
}

const SignInPage = () => {
  const { action } = useParams<Params>()

  return (
    <>
      <Header />
      <FormInput action={action}/>
      <Footer />
      <div>
        <p>Current Action: {action}</p>
      </div>
    </>
  )
}

export default SignInPage