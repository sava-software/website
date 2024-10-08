import SavaPage from './SavaPage'
import leaves from '../assets/leaves.png'

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-[100vw]">
      <img src={leaves} alt="leaves" className="absolute top-0 left-0 w-full h-full object-cover opacity-25 blur-sm" />
      <SavaPage />
    </div>
  )
}