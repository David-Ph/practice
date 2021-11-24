<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable; // THIS IS 3RD PARTY COMPOSER PACKAGE

class Category extends Model
{
    use HasFactory;
    use Sluggable;
    
    protected $guarded = ['id'];

    // connect this category model to post model
    public function posts(){
        return $this->hasMany(Post::class);
    }

    // method for sluggable
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
}
