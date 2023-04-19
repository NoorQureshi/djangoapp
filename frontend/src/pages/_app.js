import '@/styles/globals.css'
import Header from '@/components/header/Header'

export default function App({ Component, pageProps }) {
  return (
    <>  
    <Header style={{ backgroundColor: "bg-blueGrey"}} />
    
    <div style={{ overflow: "hidden" }}>
      <div className='bg-white min-h-screen'>
        <Component {...pageProps} />
      </div>
    </div>

    </>
  )
}
