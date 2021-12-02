<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreMovieRequest;
use App\Http\Requests\UpdateMovieRequest;
use App\Models\Movie;
use App\Models\Review;
use App\Models\User;

use Illuminate\Http\Request;

class MovieController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) {
        $movies = Movie::orderBy('created_at', 'asc')->filterByCategory(request('category'))->paginate(10);

        return response()->json([
            "data" => $movies
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $data = $request->all();
        
        $newMovie = Movie::create([
            "title" => $data["title"],
            "description" => $data["description"],
            "categories" => $data["categories"],
            "actors" => $data["actors"],
            "trailer" => $data["trailer"],
            "posterImage" => $data["posterImage"],
            "releaseDate" => $data["releaseDate"],
            "director" => $data["director"],
            "budget" => $data["budget"],
            "featuredSong" => $data["featuredSong"],
            "rating" => 0
        ]);

        return response()->json([
            "movie" => $newMovie,
            "status" => 201
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function show(Movie $movie) {
    // public function show($id) {
        $movies = Movie::with([
            'review',
            'review.user:id,username'
            ])->where('id', $movie->id)->get();

        return response()->json([
            "data" => $movies,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function edit(Movie $movie) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMovieRequest  $request
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMovieRequest $request, Movie $movie) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movie $movie) {
        Movie::destroy($movie->id);

        return response()->json([
            "status" => 200,
            "message" => "Movie is successfully deleted"
        ]);
    }
}
