import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from "react";
import { TransactionsContext } from "../../../../context/TransactionsContext";
import { useContextSelector } from "use-context-selector";
const searchFormScheme = z.object({
   query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormScheme>

export function SearchForm(){
   const fetchTransactions = useContextSelector(TransactionsContext, (context)=>{
      return context.fetchTransactions;
   });
   const {register, handleSubmit, formState:{isSubmitting}} = useForm<SearchFormInputs>({
      resolver: zodResolver(searchFormScheme),
   });
   async function handleSearchTransition(data:SearchFormInputs){
      await fetchTransactions(data.query);
   }
return (
   <SearchFormContainer onSubmit={handleSubmit(handleSearchTransition)}>
      <input type="text" placeholder="Search for the transaction" {...register('query')}/>

      <button type="submit" disabled={isSubmitting}>
         <MagnifyingGlass size={20}/>
         Search
      </button>

   </SearchFormContainer>
)
}