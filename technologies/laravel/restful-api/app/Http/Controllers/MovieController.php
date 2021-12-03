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
        $movies = Movie::orderBy('created_at', 'asc')
            ->filterByCategory(request('category'))
            ->searchByTitle(request('search'))
            ->paginate(10);

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
    public function store(StoreMovieRequest $request) {
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
            "status" => 200
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
        $newData = $request->all();

        if(!isset($newData["title"]) || empty($newData["title"])){
            $newData["title"] = $movie->title;   
        }

        if(!isset($newData["description"]) || empty($newData["description"])){
            $newData["description"] = $movie->description;   
        }
        
        if(!isset($newData["categories"]) || empty($newData["categories"])){
            $newData["categories"] = $movie->categories;   
        }

        if(!isset($newData["actors"]) || empty($newData["actors"])){
            $newData["actors"] = $movie->actors;   
        }

        if(!isset($newData["trailer"]) || empty($newData["trailer"])){
            $newData["trailer"] = $movie->trailer;   
        }

        if(!isset($newData["posterImage"]) || empty($newData["posterImage"])){
            $newData["posterImage"] = $movie->posterImage;   
        }

        if(!isset($newData["releaseDate"]) || empty($newData["releaseDate"])){
            $newData["releaseDate"] = $movie->releaseDate;   
        }

        if(!isset($newData["director"]) || empty($newData["director"])){
            $newData["director"] = $movie->director;   
        }

        if(!isset($newData["budget"]) || empty($newData["budget"])){
            $newData["budget"] = $movie->budget;   
        }

        if(!isset($newData["featuredSong"]) || empty($newData["featuredSong"])){
            $newData["featuredSong"] = $movie->featuredSong;   
        }

        Movie::where('id', $movie->id)->update($newData);

        return response()->json([
            "movie" => $newData,
            "status" => 201
        ]);
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
