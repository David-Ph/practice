<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;

class Post {
    private static $blogPosts = [
        [
            "title" => "First post title",
            "slug" => "first-post-title",
            "author" => "MyAuthor",
            "body" => "
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt expedita, veniam soluta natus iusto neque excepturi repellendus repellat ea, commodi explicabo beatae harum aspernatur quo? Molestiae voluptatibus voluptatem expedita totam animi nostrum, suscipit at nesciunt quibusdam, quas assumenda quos repellat unde veniam necessitatibus, reiciendis consequuntur sapiente. Magnam doloribus amet fuga nulla hic eligendi corrupti provident debitis cumque dicta fugit labore pariatur omnis facilis molestiae ratione ex asperiores illo obcaecati, sapiente itaque! Quidem eum quae qui minima autem unde possimus!"
        ],
        [
            "title" => "Second post title",
            "slug" => "second-post-title",
            "author" => "HisAuthor",
            "body" => "
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt expedita, veniam soluta natus iusto neque excepturi repellendus repellat ea, commodi explicabo beatae harum aspernatur quo? Molestiae voluptatibus voluptatem expedita totam animi nostrum, suscipit at nesciunt quibusdam, quas assumenda quos repellat unde veniam necessitatibus, reiciendis consequuntur sapiente. Magnam doloribus amet fuga nulla hic eligendi corrupti provident debitis cumque dicta fugit labore pariatur omnis facilis molestiae ratione ex asperiores illo obcaecati, sapiente itaque! Quidem eum quae qui minima autem unde possimus!"
        ],
    ];

    public static function getAll() {
        // turn array into collection
        return collect(self::$blogPosts);
    }

    public static function getOne($slug) {
        $blogPosts = static::getAll();
        return $blogPosts->firstWhere('slug', $slug);
    }
}
