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

    public function review() {
        return $this->hasMany(Review::class);
    }
}
