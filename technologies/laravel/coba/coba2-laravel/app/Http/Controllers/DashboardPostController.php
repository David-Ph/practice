<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Category;

use Cviebrock\EloquentSluggable\Services\SlugService;
use Illuminate\Http\Request;

class DashboardPostController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        // query for post where the user_id is the same one
        // as the currently logged in user
        $posts = Post::where('user_id', auth()->user()->id)->get();

        return view('dashboard.posts.index', [
            "posts" => $posts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    // user will be automatically redirected to this method
    // if the url is dashboard/posts/create
    // this is the view for create
    public function create() {
        return view('dashboard.posts.create', [
            'categories' => Category::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // user will be automaticallt redirected to this method
    // if the http method is POST to the url /dashboard/posts
    public function store(Request $request) {
        return $request;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    // user will be automatically redirected to this method
    // if the url is dashboard/post/{{ slug }}
    public function show(Post $post) {
        // return $post;
        return view('dashboard.posts.show', [
            "post" => $post
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post) {
        //
    }

    // this is method to check if title input has changed
    // when creating new post, so new slug is automatically
    // generated
    public function checkSlug(Request $request) {
        // createSlug function
        // first argument is which class to use
        // second argument is what field to change to
        // third argument is what we want to change it from
        // $request->title comes from url paramters
        $slug = SlugService::createSlug(Post::class, 'slug', $request->title);
        // dd("MAK LO");
        // return as reponse
        return response()->json([
            "slug" => $slug
        ]);
    }
}
