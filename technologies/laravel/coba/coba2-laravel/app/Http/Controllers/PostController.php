<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use App\Models\Category;

class PostController extends Controller {
    public function index() {
        $title = "";
        if(request('category')){
            $category = Category::firstWhere('slug', request('category'));
            $title = ' in '. $category->name;
        }

        if(request('author')){
            $author = User::firstWhere('username', request('author'));
            $title = ' by '. $author->name;
        }

        return view('posts', [
            "title" => "All posts" . $title,
            // "posts" => Post::all()
            "active" => "posts",
            // "posts" => Post::latest()->get()
            // "posts" => Post::latest()->filter(request(['search', 'category', 'author']))->get(),
            // this is for pagination, withquerystring() is so that any query will be carried over with pagination
            "posts" => Post::latest()->filter(request(['search', 'category', 'author']))->paginate(7)->withQueryString()

        ]);
    }

    // this is implicit binding
    public function show(Post $post) {
        // $getPost = Post::find($post);
        $getPost = $post;

        return view('post', [
            "title" => $getPost["title"],
            "active" => "posts",
            "post" => $getPost
        ]);
    }
}
