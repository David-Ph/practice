<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model {
    use HasFactory;
    // allow these fields to be filled by user
    // protected $fillable = ["title", "excerpt", "body", "slug"];
    // forbid these fields to not be filled manually
    protected $guarded = ["id"];
    // this is for eager loading
    protected $with = ['author', 'category'];

    // query scope / local scope
    public function scopeFilter($query, array $filters) {
        // this is from episode 13 in WPU
        // if (isset($filters['search']) ? $filters['search'] : false) {
        //     return $query->where('title', 'like', '%' . $filters['search'] . '%')
        //         ->orWhere('body', 'like', '%' . $filters['search'] . '%');
        // }

        // this is laravel when
        // if the first argument is true, execute the next argument
        // search gets its value from $filters['search'] if it contains something
        // $query gets its value from $query
        $query->when($filters['search'] ?? false, function ($query, $search) {
            return $query->where('title', 'like', '%' . $search . '%')
                ->orWhere('body', 'like', '%' . $search . '%');
        });

        $query->when($filters['category'] ?? false, function ($query, $category) {
            return $query->whereHas('category', function($query) use ($category){
                $query->where('slug', $category);
            });
        });

        // cool thing about arrow function in php is
        // it gets the scope above it
        $query->when($filters['author'] ?? false, fn($query, $author) =>
            $query->whereHas('author', fn($query) =>
                $query->where('username', $author)
            )
        );

        // $query->when($filters['author'] ?? false, function ($query, $author) {
        //     return $query->whereHas('author', function($query) use ($author){
        //         $query->where('username', $author);
        //     });
        // });
    }

    // set up relationship between post and category
    // the relationship from post is one to one, from category is one to many
    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function author() {
        // if the function name is user
        // it will look for a field called user_id
        // but we can change the function name and manually set the field we want to look for
        return $this->belongsTo(User::class, "user_id");
    }

    // this is some magic function
    // so when you want to GET ONE 
    // it will automatically use 'slug' instead of id
    public function getRouteKeyName(){
        return 'slug';
    }
}
