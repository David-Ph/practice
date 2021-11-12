<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home', [
        "title" => "Home"
    ]);
});

Route::get('/about', function () {
    return view('about', [
        "title" => "About",
        "name" => "David",
        "job" => "Jr Software Engineer",
        "email" => "davidphang431@gmail.com"
    ]);
});

$blogPosts = [
    [
        "title" => "First post title",
        "slug" => "first-post-title",
        "author" => "MyAuthor",
        "body" => "
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt expedita, veniam soluta natus iusto neque excepturi repellendus repellat ea, commodi explicabo beatae harum aspernatur quo? Molestiae voluptatibus voluptatem expedita totam animi nostrum, suscipit at nesciunt quibusdam, quas assumenda quos repellat unde veniam necessitatibus, reiciendis consequuntur sapiente. Magnam doloribus amet fuga nulla hic eligendi corrupti provident debitis cumque dicta fugit labore pariatur omnis facilis molestiae ratione ex asperiores illo obcaecati, sapiente itaque! Quidem eum quae qui minima autem unde possimus!"
    ],
    [
        "title" => "Second post title",
        "slug" => "second-post-title",
        "author" => "HisAuthor",
        "body" => "
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt expedita, veniam soluta natus iusto neque excepturi repellendus repellat ea, commodi explicabo beatae harum aspernatur quo? Molestiae voluptatibus voluptatem expedita totam animi nostrum, suscipit at nesciunt quibusdam, quas assumenda quos repellat unde veniam necessitatibus, reiciendis consequuntur sapiente. Magnam doloribus amet fuga nulla hic eligendi corrupti provident debitis cumque dicta fugit labore pariatur omnis facilis molestiae ratione ex asperiores illo obcaecati, sapiente itaque! Quidem eum quae qui minima autem unde possimus!"
    ],
];

Route::get('/blog', function () use ($blogPosts) {
    return view('posts', [
        "title" => "Blog",
        "posts" => $blogPosts
    ]);
});

// halaman single post
// takes $slug as argument
Route::get('/posts/{slug}', function($slug) use ($blogPosts){
    $find_post = [];
    foreach($blogPosts as $post){
        if($post['slug'] === $slug){
            $find_post = $post;
        }
    }

    return view('post', [
        "title" => $find_post["title"],
        "post" => $find_post
    ]);
});