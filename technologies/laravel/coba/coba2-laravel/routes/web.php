<?php

// import the namespace from Post models

use App\Http\Controllers\AdminCategoryController;
use App\Models\Category;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\DashboardPostController;

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
        "title" => "Home",
        'active' => "home",
    ]);
});

Route::get('/about', function () {
    return view('about', [
        "title" => "About",
        "name" => "David",
        'active' => "about",
        "job" => "Jr Software Engineer",
        "email" => "davidphang431@gmail.com"
    ]);
});
// reroute this route to PostController
// the second argument is the method name
Route::get('/blog', [PostController::class, "index"]);

// halaman single post
// takes $slug as argument
// Route::get('/posts/{slug}', [PostController::class, "show"]);

// this is implicit binding
Route::get('/posts/{post:slug}', [PostController::class, "show"]);

Route::get('/categories', function () {
    return view('categories', [
        'title' => "Post Categories",
        'active' => "categories",
        'categories' => Category::all()
    ]);
});

// this kind of syntax basically means
// if the route is host/login and the method is GET, 
// go to LoginController and look for "index" method

// insert middleware of guest in this controller
route::get('/login', [LoginController::class, "index"])->name('login')->middleware('guest');

route::post('/login', [LoginController::class, "authenticate"]);

route::post('/logout', [LoginController::class, "logout"]);


route::get('/register', [RegisterController::class, "index"])->middleware('guest');

route::post('/register', [RegisterController::class, "store"]);

// insert middleware of auth in this controller
// route::get('/dashboard', [DashboardController::class, "index"])->middleware('auth');
route::get('/dashboard', function () {
    return view('dashboard.index');
})->middleware('auth');


// Route::get('/dashboard/posts/checkSlug', [DashboardPostController::class], 'checkSlug');

Route::get('/dashboard/posts/checkSlug', [DashboardPostController::class, 'checkSlug']);

// This is route for resource controller
// this will automatically RETURN YOU THE ROUTE YOU WANT
// HOW? FUCKING MAGIC
// if the method is get, you will be redirected to index
// if the method is post, you will be redirected to store
// if the method is put, you will be redirected to update
// if the method is delete, you will be redirected to destroy

Route::resource('/dashboard/posts', DashboardPostController::class)->middleware('auth');


// Route::get('/categories/{category:slug}', function (Category $category) {
//     return view('posts', [
//         'title' => "Post by category: $category->name",
//         'active' => "categories",
//         'posts' => $category->posts->load("category", "author"),
//     ]);
// });

// Route::get('/authors/{author:username}', function (User $author) {
//     return view('posts', [
//         'title' => "Post by author: $author->name",
//         // this is eager lazy loading
//         'posts' => $author->posts->load("category", "author"),
//     ]);
// });

// add custom middleware
// don't forget to enter the new middleware to the kernel first
Route::resource('/dashboard/categories', AdminCategoryController::class)
    ->except('show')
    ->middleware('isAdmin');

// Route::resource('/dashboard/categories', AdminCategoryController::class)
//     ->except('show')
//     ->middleware('auth');
