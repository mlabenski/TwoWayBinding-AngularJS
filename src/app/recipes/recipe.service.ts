import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'http://worldfood.guide/media/dishes/taco_al_pastor_1566.jpg',
    [
        new Ingredient('Cauliflower', 9),
        new Ingredient('Avocado', 2)
    ]),
        new Recipe('Another Test Recipe', 'This is simply a test',
        'https://simply-delicious-food.com/wp-content/uploads/2016/08/Hash-brown-cheeseburgers-4.jpg',
         [
             new Ingredient('Buns', 1),
             new Ingredient('Meat', 1)
         ])
      ];

      // returns a new array the exact copy
      constructor(private slService: ShoppingListService) {}
      getRecipes() {
          return this.recipes.slice();
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
          this.slService.addIngredients(ingredients);

      }
}
