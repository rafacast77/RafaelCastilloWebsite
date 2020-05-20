import { Component, OnInit } from '@angular/core';
import { NutritionAnalysisService } from '../../services/nutrition-analysis.service'

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent implements OnInit {
  tittle: String = '';
  yield: String = '';
  ingrS: String = '';
  nutriets;
  error;
  
  constructor(private NutritionAnalysisService: NutritionAnalysisService) { }

  ngOnInit() {
  }
  onRecipeSubmit(){
    const recipe = {
      tittle: this.tittle,
      yield: this.yield,
      ingr : this.ingrS.split("\n")
    }
    this.NutritionAnalysisService.postFoodRecipeNutriAnalysis(recipe)
    .subscribe(
      res => this.nutriets = res,
      err => this.error = err
    )
  }
  trimIt0(esto: String){
    esto.slice(0,2);
    return esto;
  }
}
