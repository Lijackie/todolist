import Pokeball from "@/components/Pokeball";
import PokemonGrid from "@/components/PokemonGrid";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
      <PokemonGrid />
      <Pokeball />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  )
}
