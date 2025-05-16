import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  recipe: any;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}
  mayorIngrediente:any
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipeDetail(id).subscribe(data => {
      this.recipe = data;
      this.mayorIngrediente = this.obtenerMayorIngrediente();
    });
  }
  volver() {
    this.router.navigate(['/recipe']);
  }
  obtenerMayorIngrediente(): any {
  return this.recipe.ingredientes.reduce((a: any, b: any) =>
    parseFloat(a.cantidad) > parseFloat(b.cantidad) ? a : b
  );
}}
