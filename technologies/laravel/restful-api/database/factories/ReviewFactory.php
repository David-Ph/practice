<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "user_id" => mt_rand(1, 5),
            "movie_id" => mt_rand(1, 25),
            "rating" => mt_rand(1, 5),
            "content" => $this->faker->paragraphs(3, 5),
        ];
    }
}
