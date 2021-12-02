<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\CategoryController;

class UpdateMovieValidator
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $validator =  Validator::make($request->all(), [
            "title" => "required|min:3|max:100",
            "description" => "nullable",
            "categories" => "present|array",
            "actors" => "present|array",
            "trailer" => "url",
            "posterImage" => "url",
            "releaseDate" => "date",
            "director" => "string",
            "budget" => "integer|min:0",
            "featuredSong" => "string"
        ]);

        if ($validator->fails()) {
            return response()->json([
                "error" => 'validation_error',
                "message" => $validator->errors(),
            ], 422);
        }

        $availableCategories = CategoryController::getCategories();
        $inputtedCategories = $request->all()["categories"];
        foreach ($inputtedCategories as $categories) {
            if (!in_array($categories, $availableCategories)) {
                return response()->json([
                    "error" => 'validation_error',
                    "message" => "Invalid category",
                ], 422);
            }
        }

        if(isset($request->all()['rating'])){
            return response()->json([
                "error" => 'validation_error',
                "message" => "Please do not update rating",
            ], 422);
        }
        
        return $next($request);
    }
}
