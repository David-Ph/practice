<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller {
    public function index() {
        return view('posts', [
            "title" => "Blog",
            "posts" => Post::all()
        ]);
    }

    // this is implicit binding
    public function show(Post $post) {
        // $getPost = Post::find($post);
        $getPost = $post;

        return view('post', [
            "title" => $getPost["title"],
            "post" => $getPost
        ]);
    }
}
