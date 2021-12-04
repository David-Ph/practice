<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Review;
use App\Models\User;

class DeleteReviewValidator
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
        $getReviewid = explode('/', $request->path())[3];
        $findReviewToUpdate = Review::where('id', '=', $getReviewid)->get();
        $user_id = $findReviewToUpdate[0]->user_id;

        if($user_id !== $request->user()->id){
            return response()->json([
                "error" => 'validation_error',
                "message" => "You're not allowed to delete this review",
            ], 401);
        }

        return $next($request);
    }
}
