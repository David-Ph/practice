<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Cviebrock\EloquentSluggable\Services\SlugService;

class AdminCategoryController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    // GET request to /dashboard/categories will redirect to this
    public function index() {
        // check if user has logged in
        // use auth()->guest() to check if user has logged in, will return true if not logged in
        // use auth()->check() to check if user has logged in, will return false if not logged in
        // it's better to use middleware for this though
        // if(auth()->guest() || auth()->user()->username !== 'maomao'){
        //     abort(403);
        // }

        // using gate
        // $this->authorize('admin');

        return view('dashboard.categories.index', [
            'categories' => Category::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        return view('dashboard.categories.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $validatedData = $request->validate([
            "name" => "required",
            "slug" => "required|unique:categories"
        ]);

        Category::create($validatedData);

        return redirect('/dashboard/categories')->with('success', 'New Category has been created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category) {
        Category::destroy($category->id);

        return redirect('/dashboard/categories')->with('success', 'Category has been deleted');
    }

    // this is method to check if title input has changed
    // when creating new post, so new slug is automatically
    // generated
    public function checkSlug(Request $request) {
        // createSlug function
        // first argument is which class to use
        // second argument is what field to change to
        // third argument is what we want to change it from
        // $request->name comes from url paramters
        $slug = SlugService::createSlug(Category::class, 'slug', $request->name);
        // dd("MAK LO");
        // return as reponse
        return response()->json([
            "slug" => $slug
        ]);
    }
}
