import Layout from '@/components/layout/Layout'
import { RootStateModel } from '@/models'
import store, { persistor, wrapper } from '@/store'
import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

function App({ Component, pageProps }: AppProps) {
  const { isLogin } = useSelector((state:RootStateModel) => state.auth)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>  
  )
}

export default wrapper.withRedux(App);

