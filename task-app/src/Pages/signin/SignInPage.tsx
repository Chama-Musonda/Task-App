import Footer from "./Footer"
import FormInput from "./FormInput"
import Header from "./Header"
import { useParams } from "react-router-dom"

const SignInPage = () => {
  const { action } = useParams()

  return (
    <>
      <Header />
      <FormInput />
      <Footer />
      <div>
        <p>Current Action: {action}</p>
      </div>
    </>
  )
}

export default SignInPage