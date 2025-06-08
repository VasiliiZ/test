export const getDrinks = async (cocktail_code: string) => {
  return await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail_code}`).then((items) => {
    return items.json();
  }).catch(()=> {
    return []
  })
}