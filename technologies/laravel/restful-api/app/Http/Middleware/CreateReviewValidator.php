<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Movie;

class CreateReviewValidator
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
            "movie_id" => "required",
            "user_id" => "prohibited",
            "content" => "required|string",
            "rating" => "required|integer|min:0|max:5",
        ]);

        if ($validator->fails()) {
            return response()->json([
                "error" => 'validation_error',
                "message" => $validator->errors(),
            ], 422);
        }

        if (!Movie::where('id', '=', $request["movie_id"])->exists()) {
            return response()->json([
                "status" => 404,
                "message" => "Movie not found"
            ]);
         }

        $request['user_id'] = $request->user()->id;

        return $next($request);
    }
}
