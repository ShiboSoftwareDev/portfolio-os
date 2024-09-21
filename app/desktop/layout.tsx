const layout = ({children}:Readonly<{children:React.ReactNode}>) => {
  return (
    <section>
      <nav>nav</nav>
      {children}
    </section>
  )
}

export default layout