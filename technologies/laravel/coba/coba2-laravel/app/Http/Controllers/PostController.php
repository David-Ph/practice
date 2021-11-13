<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller {
    public function index() {
        return view('posts', [
            "title" => "Blog",
            "posts" => Post::getAll()
        ]);
    }

    public function show($slug) {
        $getPost = Post::getOne($slug);

        return view('post', [
            "title" => $getPost["title"],
            "post" => $getPost
        ]);
    }
}
