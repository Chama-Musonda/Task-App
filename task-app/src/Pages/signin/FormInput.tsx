import { useMutation} from "@tanstack/react-query"
import { ArrowRight } from "lucide-react"
import { useEffect, useReducer, useState, type FormEvent } from "react"
import axios from "axios"
interface State {
  full_name: string,
  email: string,
  password: string,
  confirm_password: string
}

interface Props {
  action: 'login' | 'signup' | undefined
}
interface Action {
  type: string,
  payload: string
}

interface Credentials {
  email: string,
  password: string,
  fullName?: string,
  isNewUser?: boolean
}

const ACTIONS = {
  SET_FULL_NAME: 'SET_FULL_NAME',
  SET_EMAIL: 'SET_EMAIL',
  SET_PASSWORD: 'SET_PASSWORD',
  SET_CONFIRM_PASSWORD: 'SET_CONFIRM_PASSWORD'
}

/* 
  async function authenticateUser(credentials: Credentials) {
  try {
    const apiUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000'
    const response = await axios.post(`${apiUrl}/api/v1/auth/register`, credentials, {
      withCredentials: true,
    })
    console.log(response)
    if (response.status === 201) return response.data
    throw new Error(response.data?.message || 'Registration failed')
  } catch (error) {
    const message = error instanceof Error ? error.message : "An unexpected error occurred"
    throw new Error(message)
  }
}
 */

async function authenticateUser(credentials: Credentials) {
  try {
    const apiUrl = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5000'
    const response = await axios.post(`${apiUrl}/api/v1/auth/${credentials.isNewUser ? 'register' : 'login'}`, credentials, {
      withCredentials: true,
    })
    return response.data
  } catch (error) {
    const message = error instanceof Error ? error.message : "An unexpected error occurred"
    throw new Error(message)
  }
}

function reducer(state: State, action: Action) {

    switch (action.type) {
      case ACTIONS.SET_FULL_NAME:
        return { ...state, full_name: action.payload }
      case ACTIONS.SET_EMAIL:
        return { ...state, email: action.payload }
      case ACTIONS.SET_PASSWORD:
        return { ...state, password: action.payload }
      case ACTIONS.SET_CONFIRM_PASSWORD:
        return { ...state, confirm_password: action.payload }
      default:
        return state
  }
}

const FormInput = ({ action }: Props) => {
  const [state, dispatch] = useReducer(reducer, { full_name: '', email: '', password: '', confirm_password: '' })
  const [isLoggingIn, setIsLoggingIn] = useState(true)
  const [status, setStatus] = useState<string | null>(null)

  useEffect(() => {
    if (action) setIsLoggingIn(action === 'login')
  }, [action])

  const { 
    mutate, 
    isPending
  } = useMutation({ 
      mutationFn: authenticateUser,
      onSuccess: (data) => {
        setStatus(isLoggingIn ? 'Login successful' : 'Account created successfully')
        console.log(data)
      },

      onError: (error: any) => {
        setStatus(error.message || 'An error occured')
      }
      })

  const passwordsMatch = state.password === state.confirm_password
  const showPasswordError = state.confirm_password !== "" && state.password !== state.confirm_password;

  const handleChange = (type: string, payload: string) => {
    dispatch({ type: type, payload: payload })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!passwordsMatch && !isLoggingIn) {
      setStatus("Passwords do not match.")
      return;
    }

    mutate({ 
      email: state.email, 
      password: state.password, 
      fullName: state.full_name, 
      isNewUser: !isLoggingIn 
      })
     
  }

  function changeMode(setTo: boolean) {
    setIsLoggingIn(setTo)
    setStatus(null)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6">
      <div className="w-full max-w-[480px]">
        <div className="mb-10 text-center">
          <h1 className="font-headline text-[2.75rem] font-bold text-on-surface leading-tight tracking-tight mb-2">Begin your flow.</h1>
          <p className="text-on-surface-variant font-body">Focus on what matters, leave the clutter behind.</p>
        </div>

        <div className="bg-surface-container-lowest rounded-xl ghost-shadow p-8 md:p-10">
          <div className="flex p-1 bg-surface-container rounded-lg mb-8">
            <button className={isLoggingIn ? "flex-1 py-2 text-sm font-semibold text-on-primary-container bg-surface-container-lowest rounded-md shadow-sm" : "flex-1 py-2 text-sm font-medium text-on-surface-variant rounded-md hover:text-on-surface transition-colors duration-200"} onClick={() => changeMode(true)}>
              Login
            </button>

            <button className={isLoggingIn ? "flex-1 py-2 text-sm font-medium text-on-surface-variant rounded-md hover:text-on-surface transition-colors duration-200" : "flex-1 py-2 text-sm font-semibold text-on-primary-container bg-surface-container-lowest rounded-md shadow-sm"} onClick={() => changeMode(false)}>
              Signup
            </button>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLoggingIn && (
              <div className="space-y-2">
                <label className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="full_name">Full Name (Optional)</label>
                <input className="w-full px-4 py-3 bg-surface-container-highest/30 border-none rounded-lg focus:ring-2 focus:ring-primary-container/50 focus:bg-primary-container/20 transition-all duration-200 placeholder:text-outline-variant text-on-surface" id="full_name" placeholder="Alex Rivers" type="text" onChange={e => handleChange(ACTIONS.SET_FULL_NAME, e.target.value)} value={state.full_name || ('')} />
              </div>
            )}

            <div className="space-y-2">
              <label className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="email">Email Address</label>

              <input className="w-full px-4 py-3 bg-surface-container-highest/30 border-none rounded-lg focus:ring-2 focus:ring-primary-container/50 focus:bg-primary-container/20 transition-all duration-200 placeholder:text-outline-variant text-on-surface" id="email" placeholder="alex@taskflow.io" type="email" onChange={e => handleChange(ACTIONS.SET_EMAIL, e.target.value)} value={state.email || ('')} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="password">Password</label>
                
                <input className="w-full px-4 py-3 bg-surface-container-highest/30 border-none rounded-lg focus:ring-2 focus:ring-primary-container/50 focus:bg-primary-container/20 transition-all duration-200 placeholder:text-outline-variant text-on-surface" id="password" placeholder="••••••••" type="password" onChange={e => handleChange(ACTIONS.SET_PASSWORD, e.target.value)} value={state.password || ('')} />
              </div>

              {isLoggingIn || (
                <div className="space-y-2">
                  <label className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="confirm_password">Confirm Password</label>
                  <input 
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
                      showPasswordError ? 'border-red-500 focus:ring-2 focus:ring-red-500' : 'border-transparent'
                    } bg-surface-container-highest/30`} id="confirm_password" placeholder="••••••••" type="password" onChange={e => handleChange(ACTIONS.SET_CONFIRM_PASSWORD, e.target.value)} value={state.confirm_password} />
                    {showPasswordError && (
                  <p className="text-red-500 text-xs mt-1">Passwords do not match</p>
                )}
                </div>
              )}
            </div>
            <div className="pt-4">
              <button className="w-full primary-gradient text-on-primary font-semibold py-4 rounded-full ghost-shadow active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105" type="submit">
                <span>{isLoggingIn ? 'Log In' : 'Create Account'}</span>
                <ArrowRight className="icons-outlined text-[20px]" />
              </button>
            </div>
          </form>
          {status && (
            <p className={`mt-4 text-sm ${status.toLowerCase().includes('success') ? 'text-emerald-500' : 'text-red-500'}`}>
              {status}
            </p>
          )}
          <div className="mt-8 pt-8 border-t border-surface-container text-center">
            <p className="text-sm text-on-surface-variant">
              {isLoggingIn ? "Don't have an account?" : "Already have an account?"}
              <span className="text-primary font-semibold hover:underline underline-offset-4 transition-all cursor-pointer" onClick={() => setIsLoggingIn(!isLoggingIn)}>{isLoggingIn ? "Create one here" : "Log in here"}</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default FormInput