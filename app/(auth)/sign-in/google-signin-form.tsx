'use client'

import { useFormStatus } from 'react-dom'

import { SignInWithGoogle } from '@/lib/actions/user.actions'
import { Button } from '@/components/ui/Button'

export function GoogleSignInForm() {
  const SignInButton = () => {
    const { pending } = useFormStatus()
    return (
      <Button disabled={pending} className="w-full" variant="outline">
        {pending ? 'Redirecting to Google...' : 'Sign In with Google'}
      </Button>
    )
  }
  return (
    <form action={SignInWithGoogle}>
      <SignInButton />
    </form>
  )
}
