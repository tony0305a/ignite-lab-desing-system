import { Envelope, Lock } from 'phosphor-react'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { Logo } from './components/Logo'
import { Text } from './components/Text'
import { TextInput } from './components/TextInput'
import { Buttom } from './components/Buttom'
import './styles/global.css'

export function App() {

  return (
    <div className='w-screen h-screen bg-grey-900 flex items-center justify-center text-grey-100 flex-col '>
      <header className='flex flex-col items-center' >
        <Logo />
        <Heading size='lg' className='mt-4' >Ignite Lab</Heading>
        <Text size='lg' className='text-grey-400 mt-1' >Faça login e comece a usar</Text>
      </header>

      <form className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4 '>
        <label htmlFor='email' className='flex flex-col gap-3' >
          <Text className='font-semibold' >Endereço de email</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id='email' type='email' placeholder='Digite seu email' />
          </TextInput.Root>
        </label>

        <label htmlFor='password' className='flex flex-col gap-3' >
          <Text className='font-semibold' >Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id='password' type='password' placeholder='********' />
          </TextInput.Root>
        </label>

        <label htmlFor='remember' className='flex items-center gap-2'>
          <Checkbox id='remember' />
          <Text size='sm' className='text-grey-200' >Lembrar de mim por 30 dias</Text>
        </label>

        <Buttom type="submit" className='mt-4' >Entrar na plataforma</Buttom>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a href='' className='text-grey-400 underline hover:text-grey-200' >Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a href='' className='text-grey-400 underline hover:text-grey-200'>Não possui conta? Crie uma</a>
        </Text>
      </footer>

    </div>
  )
}

