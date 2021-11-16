<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\Category;
use App\Models\User;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        User::create([
            "name" => "MaoMao",
            "email" => "maomao@gmail.com",
            "password" => bcrypt('12345')
        ]);

        Category::create([
            "name" => "Web Programming",
            "slug" => "web-programming"
        ]);

        Category::create([
            "name" => "Personal",
            "slug" => "personal"
        ]);

        Category::create([
            "name" => "Machine Learning",
            "slug" => "machine-learning"
        ]);

        Post::create([
            "title" => "Judul Ketiga",
            "category_id" => 1,
            "user_id" => 1,
            "slug" => "judul-ketiga",
            "excerpt" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aspernatur porro adipisci, velit maxime autem rerum possimus ab vel voluptates cumque saepe, iusto voluptate pariatur quis consequuntur ullam, suscipit placeat.",
            "body" => "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, placeat. Modi iure cumque aliquid sunt laborum sapiente, officiis deserunt asperiores minus sint excepturi? Eligendi sint eum porro possimus repellendus esse numquam temporibus quasi itaque ratione. Mollitia obcaecati illum iusto quod sed! Quam exercitationem excepturi odio.</p><p> Neque corporis enim totam. Voluptas veniam blanditiis recusandae quasi esse. Expedita labore totam neque soluta. Quo eveniet eius placeat! Harum nulla unde itaque ab illum veniam repellat corporis maiores dolor ex, corrupti, nesciunt, alias possimus nemo voluptate et exercitationem doloremque repudiandae impedit iste ipsum in. Animi, molestias autem commodi adipisci odio corrupti, ducimus dolores qui doloremque ad nemo ratione consectetur hic modi assumenda quam delectus quibusdam blanditiis provident, eum dignissimos at. Dignissimos cupiditate id illum.</p>"
        ]);

        Post::create([
            "title" => "Judul pertama",
            "category_id" => 1,
            "user_id" => 1,
            "slug" => "judul-pertama",
            "excerpt" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aspernatur porro adipisci, velit maxime autem rerum possimus ab vel voluptates cumque saepe, iusto voluptate pariatur quis consequuntur ullam, suscipit placeat.",
            "body" => "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, placeat. Modi iure cumque aliquid sunt laborum sapiente, officiis deserunt asperiores minus sint excepturi? Eligendi sint eum porro possimus repellendus esse numquam temporibus quasi itaque ratione. Mollitia obcaecati illum iusto quod sed! Quam exercitationem excepturi odio.</p><p> Neque corporis enim totam. Voluptas veniam blanditiis recusandae quasi esse. Expedita labore totam neque soluta. Quo eveniet eius placeat! Harum nulla unde itaque ab illum veniam repellat corporis maiores dolor ex, corrupti, nesciunt, alias possimus nemo voluptate et exercitationem doloremque repudiandae impedit iste ipsum in. Animi, molestias autem commodi adipisci odio corrupti, ducimus dolores qui doloremque ad nemo ratione consectetur hic modi assumenda quam delectus quibusdam blanditiis provident, eum dignissimos at. Dignissimos cupiditate id illum.</p>"
        ]);

        Post::create([
            "title" => "Judul kedua",
            "category_id" => 2,
            "user_id" => 1,
            "slug" => "judul-kedua",
            "excerpt" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aspernatur porro adipisci, velit maxime autem rerum possimus ab vel voluptates cumque saepe, iusto voluptate pariatur quis consequuntur ullam, suscipit placeat.",
            "body" => "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, placeat. Modi iure cumque aliquid sunt laborum sapiente, officiis deserunt asperiores minus sint excepturi? Eligendi sint eum porro possimus repellendus esse numquam temporibus quasi itaque ratione. Mollitia obcaecati illum iusto quod sed! Quam exercitationem excepturi odio.</p><p> Neque corporis enim totam. Voluptas veniam blanditiis recusandae quasi esse. Expedita labore totam neque soluta. Quo eveniet eius placeat! Harum nulla unde itaque ab illum veniam repellat corporis maiores dolor ex, corrupti, nesciunt, alias possimus nemo voluptate et exercitationem doloremque repudiandae impedit iste ipsum in. Animi, molestias autem commodi adipisci odio corrupti, ducimus dolores qui doloremque ad nemo ratione consectetur hic modi assumenda quam delectus quibusdam blanditiis provident, eum dignissimos at. Dignissimos cupiditate id illum.</p>"
        ]);

        Post::create([
            "title" => "Judul keempat",
            "category_id" => 2,
            "user_id" => 1,
            "slug" => "judul-keempat",
            "excerpt" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aspernatur porro adipisci, velit maxime autem rerum possimus ab vel voluptates cumque saepe, iusto voluptate pariatur quis consequuntur ullam, suscipit placeat.",
            "body" => "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, placeat. Modi iure cumque aliquid sunt laborum sapiente, officiis deserunt asperiores minus sint excepturi? Eligendi sint eum porro possimus repellendus esse numquam temporibus quasi itaque ratione. Mollitia obcaecati illum iusto quod sed! Quam exercitationem excepturi odio.</p><p> Neque corporis enim totam. Voluptas veniam blanditiis recusandae quasi esse. Expedita labore totam neque soluta. Quo eveniet eius placeat! Harum nulla unde itaque ab illum veniam repellat corporis maiores dolor ex, corrupti, nesciunt, alias possimus nemo voluptate et exercitationem doloremque repudiandae impedit iste ipsum in. Animi, molestias autem commodi adipisci odio corrupti, ducimus dolores qui doloremque ad nemo ratione consectetur hic modi assumenda quam delectus quibusdam blanditiis provident, eum dignissimos at. Dignissimos cupiditate id illum.</p>"
        ]);
    }
}
