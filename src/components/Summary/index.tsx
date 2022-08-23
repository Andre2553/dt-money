import { SummaryCard, SummaryContainer } from "./styles";
import {ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from 'phosphor-react';
export function Summary(){
return (
   <SummaryContainer>
      <SummaryCard>
         <header>
            <span>Income</span>
            <ArrowCircleUp size={32} color="#00b37e"/>
         </header>
         <strong>$423,434.434</strong>
      </SummaryCard>
      <SummaryCard>
         <header>
            <span>Spends</span>
            <ArrowCircleDown size={32} color="#f75e68"/>
         </header>
         <strong>$423,434.434</strong>
      </SummaryCard>
      <SummaryCard variant="green">
         <header>
            <span>Total</span>
            <CurrencyDollar size={32} color="#fff"/>
         </header>
         <strong>$423,434.434</strong>
      </SummaryCard>
   </SummaryContainer>
)
}