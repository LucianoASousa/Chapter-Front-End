import './style.css';
import { CardHome } from '../../components/CardHome';

export function Home() {
  return (
    <main className='home'>
      <h1>Exemplo de Componetização</h1>
      <CardHome name="Home" description="Página inicial do site" href='' />
      <CardHome name="Todo" description="Página de tarefas" href='todo' />
    </main>
  )
}