'use client'

import { FormEvent, useState } from 'react'
import AuthLayout from '@/components/auth-layout' // Adjust path if needed
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [emailId, setEmailId] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const router = useRouter();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push("/principal/dashboard")
  }

  return (
    <AuthLayout
      leftPanelTitle="Title"
      leftPanelDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Login</h2>
      <p className="text-sm text-black mb-10 leading-relaxed">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <form onSubmit={handleLogin} className="space-y-4 flex flex-col">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
            Email ID
          </label>
          <input
            type="email"
            id="email"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-1.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full focus:outline-none focus:ring-2 focus:ring-[#3366FF]"
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black">
              Password
            </label>
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-1.5 bg-[#F9FAFB] border border-[#D5D5D5] rounded-full focus:outline-none focus:ring-2 focus:ring-[#3366FF]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-black">
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>
          <div className="flex justify-end items-center my-2">
            <Link href="/principal/registration/forgot-password" className="text-xs font-medium text-[#6B7280] hover:underline">
              Forgot Password?
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="self-center px-12 bg-[#3366FF] text-white font-medium py-2.5 rounded-full hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3366FF]">
          Login
        </button>

        <div className="self-center text-center text-xs w-fit text-[#6B7280] border-b-2 border-black">
          <Link href="/principal/registration/register" className="font-medium text-[#6B7280]   hover:underline">
            Create a new account
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}