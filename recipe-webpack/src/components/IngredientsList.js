import Ingredient from './Ingredient'

const IngredientsList = ({lists}) =>
    <ul className="ingredients">
        {lists.map((ingredient, i) => 
            <Ingredient key={i} {...ingredient} />
        )}
    </ul>

export default IngredientsList