import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
const searchFormScheme = z.object({
   query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormScheme>

export function SearchForm(){
   const {register, handleSubmit, formState:{isSubmitting}} = useForm<SearchFormInputs>({
      resolver: zodResolver(searchFormScheme),
   });
   function handleSearchTransition(data:SearchFormInputs){

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