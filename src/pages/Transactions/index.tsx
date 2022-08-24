import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../context/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./styles";
import {dateFormatter, priceFormatter} from "../../utils/formatter"


export function Transactions() {
   const { transactions } = useContext(TransactionsContext)
  return (
    <div>
      <Summary />
      <TransactionContainer>
         <SearchForm/>
        <TransactionTable>
          <tbody>
            {transactions.map(transaction =>{
               return(
               <tr key={transaction.id}>
              <td width="50%">{transaction.description}</td>
              <td>
               {transaction.type === "outcome" && '- '}
                <PriceHighlight variant={transaction.type}>{priceFormatter.format( transaction.price)}</PriceHighlight>
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormatter.format(new Date (transaction.createdAt))}</td>
            </tr>
            )})}
            
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
