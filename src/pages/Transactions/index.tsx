import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";

interface Transaction{
   id: number;
   description: string;
   type: 'income' | 'outcome';
   price: number;
   category: string;
   createAt: string;
}

export function Transactions() {
   const [transactions, setTransactions] = useState<Transaction[]>([])

   async function loadTransactions(){
      const response = await fetch('http://localhost:3333/transactions')
      const data = await response.json();
      setTransactions(data);
   }

   useEffect(()=>{
      loadTransactions();
   },[])
  return (
    <div>
      <Summary />
      <TransactionContainer>
         <SearchForm/>
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">AAAA</td>
              <td>
                <PriceHighlight variant="income">$213,312.33</PriceHighlight>
              </td>
              <td>Income</td>
              <td>24/08/2022</td>
            </tr>
            <tr>
              <td width="50%">AAAA</td>
              <td><PriceHighlight variant="outcome">$213,312.33</PriceHighlight></td>
              <td>Spends</td>
              <td>24/08/2022</td>
            </tr>
            <tr>
              <td width="50%">AAAA</td>
              <td>
                <PriceHighlight variant="income">$213,312.33</PriceHighlight>
              </td>
              <td>Income</td>
              <td>24/08/2022</td>
            </tr>
            <tr>
              <td width="50%">AAAA</td>
              <td>
                <PriceHighlight variant="income">$213,312.33</PriceHighlight>
              </td>
              <td>Income</td>
              <td>24/08/2022</td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
