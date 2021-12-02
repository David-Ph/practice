<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\CategoryController;

class MovieValidator {
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next) {
        $validator =  Validator::make($request->all(), [
            "title" => "required|min:3|max:100",
            "description" => "required|unique:users",
            "categories" => "present|array",
            "actors" => "present|array",
            "trailer" => "url",
            "posterImage" => "",
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

        foreach ($validator["categories"] as $categories) {
            if (!in_array($categories, $availableCategories)) {
                return response()->json([
                    "error" => 'validation_error',
                    "message" => "Invalid category",
                ], 422);
            }
        }

        return $next($request);
    }
}
