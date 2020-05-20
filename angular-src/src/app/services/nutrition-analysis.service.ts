import { Injectable } from '@angular/core';
//import { HttpClientModule }    from '@angular/common/http';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';

@Injectable()
export class NutritionAnalysisService {

  private nutritionAnalysisURL = 'https://api.edamam.com/api/nutrition-details?app_id=46b02561&app_key=0a863a22bc381671f596568630268aa4'
  appID = '46b02561';
  appKey = '0a863a22bc381671f596568630268aa4'

  constructor(
    private http: Http,
    
  ) { }



////////// POST and GET methods //////////

/** POST: send food recipe for nutritional analysis */
   postFoodRecipeNutriAnalysis(recipe){
     let headers = new Headers();
     headers.append('Content-Type','application/json');
     return this.http.post('https://api.edamam.com/api/nutrition-details?app_id=46b02561&app_key=0a863a22bc381671f596568630268aa4', recipe,{headers: headers})
    .map(res => res.json());
   }
}