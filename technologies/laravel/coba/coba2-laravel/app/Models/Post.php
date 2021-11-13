<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model {
    use HasFactory;
    // allow these fields to be filled by user
    protected $fillable = ["title", "excerpt", "body", "slug"];
    // forbid these fields to not be filled manually
    protected $guarded = ["id"];
}
