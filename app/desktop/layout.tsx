import DesktopTaskbar from "../components/DesktopTaskbar"

const layout = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <section>
      {children}
      <DesktopTaskbar/>
    </section>
  )
}

export default layout