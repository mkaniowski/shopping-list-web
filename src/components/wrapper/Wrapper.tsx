import clsx from 'clsx'
import { ReactNode } from 'react'

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className={clsx('w-full h-dvh overflow-hidden')}>{children}</div>
}
