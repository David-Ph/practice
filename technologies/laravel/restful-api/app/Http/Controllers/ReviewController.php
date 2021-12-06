<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use App\Http\Requests\StoreReviewRequest;
use App\Http\Requests\UpdateReviewRequest;

class ReviewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $reviews = Review::orderBy('created_at', 'asc')
            ->filterByMovie(request('movie_id'))
            ->paginate(10);

        return response()->json([
            "data" => $reviews,
            "status" => 200
        ]);
    }

    /**
     * Display a listing of the resource.
     * @param Illuminate\Http\Request;
     * @return \Illuminate\Http\Response
     */
    public function userReviews(Request $request)
    {
        $reviews = Review::with([
            "movie:id,title,posterImage"])
            ->orderBy('created_at', 'asc')
            ->filterByUser($request->user()->id)
            ->paginate(10);

        return response()->json([
            "data" => $reviews,
            "status" => 200
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreReviewRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreReviewRequest $request)
    {
        $data = $request->all();
        
        $newReview = Review::create([
            "movie_id" => $data["movie_id"],
            "user_id" => $data["user_id"],
            "rating" => $data["rating"],
            "content" => $data["content"],
        ]);

        return response()->json([
            "data" => $newReview,
            "movie_id" => $data["movie_id"],
            "status" => 201
        ]);
    }

    /**
     * Display the specified resource.
     * @param  \App\Http\Requests\Request  $request
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function show(Review $review)
    {
        $reviews = Review::with([
            'user',
            ])->where('id', $review->id)->get();

        return response()->json([
            "data" => $reviews,
            "status" => 200
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function edit(Review $review)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateReviewRequest  $request
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateReviewRequest $request, Review $review)
    {
        $newData = $request->all();

        if(!isset($newData["rating"]) || empty($newData["rating"])){
            $newData["rating"] = $review->rating;   
        }

        if(!isset($newData["content"]) || empty($newData["content"])){
            $newData["content"] = $review->content;   
        }

        Review::where('id', $review->id)->update($newData);

        return response()->json([
            "data" => $newData,
            "movie_id" => $review->movie_id,
            "status" => 201
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Review  $review
     * @return \Illuminate\Http\Response
     */
    public function destroy(Review $review)
    {
        $reviewToDelete = $review;
        Review::destroy($review->id);

        return response()->json([
            "status" => 201,
            "message" => "Review is successfully deleted",
            "review" => $reviewToDelete,
            "movie_id" => $reviewToDelete->movie_id
        ]);
    }
}
