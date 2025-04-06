import { Link } from 'react-router-dom';

import './RecipeList.css';
import { useTheme } from '../../hooks/useTheme';
import DeleteIcon from '../../assets/delete-icon.png';
import { appFirestore } from '../../firebase/config';

const RecipeList = ({ recipes }) => {
  const { mode } = useTheme()


  if (recipes.length === 0) {
    return (
      <div className="error">No recipes to load...</div>
    )
  }

  const handleClick = (id) => {
    appFirestore.collection('recipes').doc(id).delete()
  }

  return (
    <div className="recipe-list">
        {recipes.map(recipe => (
            <div key={recipe.id} className={`card ${mode}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make.</p>
                <div>{recipe.method.substring(0, 100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                <img 
                  className="delete"
                  src={DeleteIcon}
                  onClick={() => handleClick(recipe.id)}
                  alt="Delete Icon"
                />
            </div>
        ))}
    </div>
  )
}

export default RecipeList