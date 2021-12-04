<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Review;
use App\Models\Movie;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            "username" => "MaoMao",
            "email" => "maomao@gmail.com",
            "password" => bcrypt('123456')
        ]);

        User::factory(5)->create();

        Movie::factory(25)->create();

        // Review::factory(35)->create();
    }
}
