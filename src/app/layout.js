import Styles from './globals.css'
import { Header } from "/components/Header/Header.jsx"
import { Footer } from "/components/Footer/Footer.jsx"

export const metadata = {
  title: 'Pindie',
  description: 'Портал инди-игр от студентов Яндекс Практикума',
}

export default function RootLayout({ children }) {
  return (
    <html>
            <body>
    <Header/>
              {children}
    <Footer/>
            </body>
    </html>
  )
};

