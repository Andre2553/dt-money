import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from '../../assets/logo.svg'
export function Header(){
return (
   <HeaderContainer>
      <HeaderContent>
         <img src={logoImg} alt="logo" />
         <NewTransactionButton>New Transaction</NewTransactionButton>
      </HeaderContent>
   </HeaderContainer>
   )
}