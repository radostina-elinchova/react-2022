import { useParams, useNavigate } from "react-router-dom";
import CreateEditRecipe from "./CreateEditRecipe";

const EditRecipe = () => {
    const { recipeId } = useParams();

    return (
        <CreateEditRecipe method='edit' recipeId={recipeId}/>
    );
};

export default EditRecipe;