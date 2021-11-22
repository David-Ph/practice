<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Category;

use Cviebrock\EloquentSluggable\Services\SlugService;
use Illuminate\Http\Request;
use Illuminate\Support\Str;


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
        // return $request;
        $validatedData = $request->validate([
            "title" => "required|max:255",
            "slug" => "required|unique:posts", // unique to all posts
            'category_id' => "required",
            "body" => "required"
        ]);

        $validatedData['user_id'] = auth()->user()->id;
        // remove html tags from $request->body and limit it to 200
        $validatedData['excerpt'] = Str::limit(strip_tags($request->body), 200);

        Post::create($validatedData);

        return redirect('/dashboard/posts')->with('success', 'New Post has been added!');
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
        return view('dashboard.posts.edit', [
            'post' => $post,
            // this is so that the view can have access to all available category
            'categories' => Category::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    // $request is the incoming new updated post, $post is the old post from our database
    public function update(Request $request, Post $post) {
        // we cannot validate slug unique here because there's already the same slug in the database
        $rules = [
            "title" => "required|max:255",
            'category_id' => "required",
            "body" => "required"
        ];

        if ($request->slug != $post->slug) {
            $rules['slug'] = 'required|unique:posts';
        };

        $validatedData = $request->validate($rules);

        $validatedData['user_id'] = auth()->user()->id;
        // remove html tags from $request->body and limit it to 200
        $validatedData['excerpt'] = Str::limit(strip_tags($request->body), 200);

        // Post::update($validatedData);
        Post::where('id', $post->id)->update($validatedData);

        return redirect('/dashboard/posts')->with('success', 'New Post has been updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post) {
        Post::destroy($post->id);

        return redirect('/dashboard/posts')->with('success', 'Post has been deleted');
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
