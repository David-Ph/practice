<?php

namespace App\Models;

use App\Models\User;
use App\Models\Movie;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Review extends Model
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

    public function scopeFilterByMovie($query, $filters){
        $query->when($filters ?? false, function ($query, $search) {
            return $query->where('movie_id', '=', $search);
        });
    }

    public function movie() {
        return $this->belongsTo(Movie::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
