<?php

namespace Database\Factories;

use App\Http\Controllers\ActorController;
use App\Http\Controllers\CategoryController;
use Illuminate\Database\Eloquent\Factories\Factory;

class MovieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $actors = ActorController::getActors();
        $categories = CategoryController::getCategories();
        $posters = CategoryController::getPosterImages();

        return [
            'title' => $this->faker->name(),
            'description' => $this->faker->unique()->safeEmail(),
            'actors' => [
                $actors[mt_rand(0, count($actors) - 1)],
                $actors[mt_rand(0, count($actors) - 1)],
                $actors[mt_rand(0, count($actors) - 1)],
            ],
            'categories' => [
                $categories[mt_rand(0, count($categories) - 1)],
                $categories[mt_rand(0, count($categories) - 1)],
                $categories[mt_rand(0, count($categories) - 1)],
            ],
            'trailer' => 'https://www.youtube.com/watch?v=kq2uO3floog',
            'posterImage' => $posters[mt_rand(0, count($posters) - 1)],
            'releaseDate' => '2021-05-05',
            'director' => 'John WIck',
            'budget' => '1000000',
            'featuredSong' => 'Twice - What Is Love'
        ];
    }
}
