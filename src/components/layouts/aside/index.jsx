import { Profile } from '../profile'
import { Container } from '../../containers'
import './style.scss'

export const Aside = ({children}) => {
  return (
    <aside>
      <Container className='pr-[26px] pl-[74px] '>
        <Profile/>
      </Container>
    </aside>
  )
}
