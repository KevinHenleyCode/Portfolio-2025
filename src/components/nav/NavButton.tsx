import React from 'react'

interface NavButtonProps {
  navOpen: boolean
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavButton = ({ navOpen, setNavOpen }: NavButtonProps) => {
  return (
    <button
      onClick={() => setNavOpen(!navOpen)}
      className='text-rose-600 lg:hidden'
    >
      <div className='flex flex-col justify-between text-xl font-bold'>
        <p
          className={`h-[6px] transition-all duration-300 ease-in-out ${!navOpen ? 'rotate-90' : 'translate-x-.5 -translate-y-1 rotate-45'}`}
        >
          |
        </p>
        <p
          className={`h-[6px] transition-all duration-300 ease-in-out ${!navOpen ? 'rotate-90' : 'hidden opacity-0'}`}
        >
          |
        </p>
        <p
          className={`h-[6px] transition-all duration-300 ease-in-out ${!navOpen ? 'rotate-90' : '-translate-x-4 -translate-y-2.5 -rotate-45'}`}
        >
          |
        </p>
      </div>
    </button>
  )
}

export default NavButton
