<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Movie;
use App\Models\User;
use App\Models\Review;

class UpdateMovieRating
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
        $result = $next($request)->getData();
        if(isset($result->status) && $result->status === 201){
            $reviews = Review::where('movie_id', '=', $result->movie_id)->get();

            $totalMovieRating = $reviews->reduce(function ($total, $value) {
                return $total + $value->rating;
            }, 0);            
            $reviewsCount = $reviews->count() === 0 ? 1 : $reviews->count();

            $averageMovieRating = round($totalMovieRating / $reviewsCount, 2);

            $findMovie = Movie::find($result->movie_id);
            $findMovie->rating = $averageMovieRating;;
            $findMovie->save();

            return response()->json([
                "review" => $result,
                "status" => 201
            ], 201);
        }else{
            return response()->json([
                "message" => "Update movie rating failed or Failed to create review. You may have created a review on a movie you've reviewed before",
                "status" => 400
            ], 400);
        }
    }
}
