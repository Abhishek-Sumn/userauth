'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
const inter = Inter({ subsets: ['latin'] })
import store from '../store'
import { PersistGate } from "redux-persist/integration/react";
import persistStore from 'redux-persist/es/persistStore';
const persistor = persistStore(store);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <html lang="en">
              <body className={inter.className}>{children}</body>
            </html>
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}

