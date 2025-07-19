import '../styles/globals.css';
import Nav from "@components/Nav"
import Provider from '@components/provider';
export const metadata={
    title: "Instructflow",
    description:"A Place Where User Can Find And Share AI Prompts",
    icons: {
        icon: '/assets/images/logo.svg',
    }
}
const RootLayout = ({ children }) => {
  return (
   <html lang='en'>
    <body>
       <Provider>
         <div className='main'>
            <div className='cotton_candy_dream'/>
        </div>
        <main className='app'>
        <Nav/>
            {children}
        </main>
       </Provider>
    </body>
   </html>
  )
}

export default RootLayout;