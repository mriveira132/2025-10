import { Component, OnInit } from '@angular/core';
import { Recipe } from '../Recipe';
import { recipeData } from '../recipeData';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  standalone: false,
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: any[] = [];
  constructor(private recipeService: RecipeService, private router: Router) {}
  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(data => this.recipes = data);
  }
  verDetalle(id: number) {
    this.router.navigate(['/recipe', id]);
  }
  totalIngredientes(r: any): number {
    return r.ingredients?.length || 0;
  }
  contarIngredientes(recipe: any): number {
  return recipe.ingredientes?.length || 0;
  }

}
