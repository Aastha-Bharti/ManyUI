

const App = () => {
  return (
    <div className='h-screen relative bg-blue-100 w-full  [background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFF_100%)] '>
      <div className='max-w-5xl mx-auto absolute inset-0 h-full w-full z-0'>
        <div className='absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0'></div>
        <div className='absolute inset-y-0 right-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0'></div>

      </div>
    </div>
  ) 
}

export default App