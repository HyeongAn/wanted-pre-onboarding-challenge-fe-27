import { Suspense } from 'react'
import ReactQueryProvider from './ReactQueryProvider'
import { RecoilRoot } from 'recoil'
import { RouterProvider } from 'react-router-dom'
import router from '@/routers/router'

const Providers = () => {
  return (
    <ReactQueryProvider>
      <RecoilRoot>
        <Suspense fallback={<></>}>
          <RouterProvider router={router} />
        </Suspense>
      </RecoilRoot>
    </ReactQueryProvider>
  )
}

export default Providers
