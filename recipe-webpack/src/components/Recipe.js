import IngredientsList from './IngredientsList'
import Instructions from './Instructions'


const Recipe = ({name, ingredients, steps}) =>
    <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <IngredientsList 
            lists={ingredients} 
        />
        <Instructions 
            title="Cooking Instructions HaHa"
            steps={steps}
        />
    </section>

export default Recipe