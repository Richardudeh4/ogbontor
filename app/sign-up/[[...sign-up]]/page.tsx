import { SignupForm } from '@/components/SignUpForm/page'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex flex-col justify-between items-center">
      <div>
      <SignUp/>
      </div>
  <div>
    {/* <SignupForm/> */}
  </div>
    </div>

  )
}