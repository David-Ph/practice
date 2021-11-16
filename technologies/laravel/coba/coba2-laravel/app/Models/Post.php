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

    // set up relationship between post and category
    // the relationship from post is one to one, from category is one to many
    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
