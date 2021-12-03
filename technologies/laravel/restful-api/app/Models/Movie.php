<?php

namespace App\Models;

use App\Models\Review;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Movie extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $guarded = [
        'id'
    ];

    protected $casts = [
        'categories' => 'array',
        'actors' => 'array'
    ];

    public function scopeFilterByCategory($query, $filters){
        $query->when($filters ?? false, function ($query, $search) {
            return $query->where('categories', 'like', '%' . $search . '%');
        });
    }

    public function scopeSearchByTitle($query, $filters){
        $query->when($filters ?? false, function ($query, $search) {
            return $query->where('title', 'like', '%' . $search . '%');
        });
    }

    public function review() {
        return $this->hasMany(Review::class);
    }


}
