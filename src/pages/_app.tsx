import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from '@src/appRedux/store'
import { ThemeProvider } from 'next-themes'
import { theme } from '@styles/stitches.config'
import { globalStyles } from '@src/styles'
import Head from 'next/head'
import { MeshProvider } from '@meshsdk/react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const META_DATA_TITLE = 'Next-Stitches-Mesh Boilerplate'
  const META_DATA_DESCRIPTION = 'Boilerplate to build Dapp on Cardano'
  globalStyles()
  return (
    <>
      <Head>
        <title>{META_DATA_TITLE}</title>
        <meta name="description" content={META_DATA_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MeshProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              value={{
                light: theme.light.className,
                dark: theme.dark.className
              }}>
              <Component {...pageProps} />
            </ThemeProvider>
          </MeshProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default appWithTranslation(MyApp)
