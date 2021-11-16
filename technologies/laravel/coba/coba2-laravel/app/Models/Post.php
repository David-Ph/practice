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

    // set up relationship between post and category
    // the relationship from post is one to one, from category is one to many
    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function author(){
        // if the function name is user
        // it will look for a field called user_id
        // but we can change the function name and manually set the field we want to look for
        return $this->belongsTo(User::class, "user_id");
    }
}
