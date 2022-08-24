export const dateFormatter = new Intl.DateTimeFormat('au');
export const priceFormatter = new Intl.NumberFormat('au', { 
   style: 'currency',
   currency: 'USD',
})
