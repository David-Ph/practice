<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Movie;
use App\Models\User;
use App\Models\Review;


class UpdateReviewValidator
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
            "movie_id" => "prohibited",
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
     
        $getReviewid = explode('/', $request->path())[3];
        $findReviewToUpdate = Review::where('id', '=', $getReviewid)->get();
        $user_id = $findReviewToUpdate[0]->user_id;
        
        if($user_id !== $request->user()->id){
            return response()->json([
                "error" => 'validation_error',
                "message" => "You're not allowed to update this review",
            ], 401);
        }

        return $next($request);
    }
}
